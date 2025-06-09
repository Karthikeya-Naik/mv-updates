<?php
// Database connection
$dbHost = "localhost";
$dbUser = "Sarvesh";
$dbPass = "Sarvesh@123";
$dbName = "marichiventures";

// Create connection
$conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed']);
    exit;
}

// Get JSON data from the request
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

// Validate required fields
if (!isset($data['paymentId']) || empty($data['paymentId'])) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Payment ID is required']);
    exit;
}

// Check if this payment has already been processed (for idempotency)
$paymentId = $data['paymentId'];
$checkSql = "SELECT id FROM workshops_paid WHERE payment_id = ?";
$stmt = $conn->prepare($checkSql);
$stmt->bind_param("s", $paymentId);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Payment already processed
    http_response_code(200);
    echo json_encode(['status' => 'already processed']);
    $stmt->close();
    $conn->close();
    exit;
}

// Extract data from the request
$customerName = $data['customerName'] ?? '';
$customerEmail = $data['customerEmail'] ?? '';
$customerPhone = $data['customerPhone'] ?? '';
$workshopTitle = $data['workshopTitle'] ?? '';
$amount = $data['amount'] ?? 0;
$currency = $data['currency'] ?? '';

// Store payment details in database
$insertSql = "INSERT INTO workshops_paid
              (payment_id, user_name, user_email, user_phone, workshop_title, 
               plan_amount, currency, payment_status, email_sent)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

$paymentStatus = 'frontend-confirmed';
$emailSent = false;

$stmtInsert = $conn->prepare($insertSql);
$stmtInsert->bind_param("sssssdssi",
    $paymentId,
    $customerName,
    $customerEmail,
    $customerPhone,
    $workshopTitle,
    $amount,
    $currency,
    $paymentStatus,
    $emailSent
);

if (!$stmtInsert->execute()) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error', 
        'message' => 'Error storing payment data',
        'db_error' => $conn->error
    ]);
    $stmtInsert->close();
    $conn->close();
    exit;
}

$stmtInsert->close();

// Return success response
http_response_code(200);
echo json_encode(['status' => 'success', 'message' => 'Workshop payment recorded successfully']);

$conn->close();
?>