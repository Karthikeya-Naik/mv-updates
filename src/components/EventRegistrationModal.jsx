import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaUserAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { IndianRupee } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
const EventRegistrationModal = ({ event, onClose, IMAGE_BASE_URL, DEFAULT_IMAGE }) => {
  const { user, isAuthenticated } = useAuth0();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Load Razorpay script when component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  // Pre-fill form with Auth0 user data when available
  useEffect(() => {
    if (isAuthenticated && user) {
      setFormData(prev => ({
        ...prev,
        email: user.email || "",
        name: user.name || user.nickname || "",
      }));
    }
  }, [isAuthenticated, user]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email" && isAuthenticated) return;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "email" ? value.toLowerCase() : value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone)) errors.phone = "Phone must be 10 digits";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    if (!razorpayLoaded) {
      alert("Payment gateway is loading. Please try again in a moment.");
      return;
    }

    setIsProcessing(true);

    try {
      const amount = calculateTotalAmount();
      const amountInPaise = Math.round(amount * 100); // Convert to paise

      const options = {
        key: "rzp_live_LmqhBMB4dIMIaO",
        amount: amountInPaise,
        currency: "INR",
        name: "Marichi Ventures Events",
        description: `Registration for ${event.title}`,
        handler: function (response) {
          handlePaymentSuccess(response);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#65B741",
        },
        notes: {
          eventId: event.id,
          eventTitle: event.title,
          eventDate: event.date,
          customer_name: formData.name,
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error);
        alert(`Payment failed: ${response.error.description}`);
        setIsProcessing(false);
      });
      paymentObject.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Payment initialization failed");
      setIsProcessing(false);
    }
  };

  const calculateTotalAmount = () => {
    if (!event.fee || event.fee.toLowerCase().includes("free")) return 0;
    const numericValue = parseFloat(event.fee.replace(/[^0-9.]/g, ""));
    return isNaN(numericValue) ? 0 : numericValue;
  };

  const handlePaymentSuccess = async (response) => {
    try {
      const paymentData = {
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_order_id: response.razorpay_order_id,
        razorpay_signature: response.razorpay_signature,
        event_id: event.id,
        event_title: event.title,
        event_date: event.date,
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        payment_amount: calculateTotalAmount(),
        payment_currency: "INR",
        payment_status: "completed",
      };
      console.log("Payment data:", paymentData);
      const res = await fetch(
        "https://backend.marichiventures.com/event-registration-confirmation.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        }
      );

      const data = await res.json();
      if (data.success) {
        alert(`Registration successful! Payment ID: ${response.razorpay_payment_id}`);
        onClose();
      } else {
        throw new Error(data.message || "Payment recording failed");
      }
    } catch (err) {
      console.error("Error:", err);
      alert(
        "Registration successful but confirmation failed. Please contact support with your payment ID."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFreeRegistration = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);

    try {
      const registrationData = {
        event_id: event.id,
        event_title: event.title,
        event_date: event.date,
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        payment_amount: 0,
        payment_currency: "INR",
        payment_status: "free",
      };
      console.log("Registered data:", registrationData);
      const res = await fetch(
        "https://backend.marichiventures.com/event-registration-confirmation.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registrationData),
        }
      );

      const data = await res.json();
      if (data.success) {
        alert(`Registration for "${event.title}" confirmed successfully!`);
        onClose();
      } else {
        throw new Error(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Registration failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const totalAmount = calculateTotalAmount();
  const isFreeEvent = totalAmount === 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row">
        {/* Left side - Event Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={
              event.image ? `${IMAGE_BASE_URL}/${event.image}` : DEFAULT_IMAGE
            }
            alt={event.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = DEFAULT_IMAGE;
            }}
          />
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h2>
          {event.date && (
            <div className="flex items-center text-gray-600 mb-4">
              <FaCalendarAlt className="mr-2 text-[#65B741]" />
              <span>{event.date}</span>
            </div>
          )}

          {/* Registration Form */}
          <div className="space-y-4 flex-grow">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUserAlt className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-[#65B741] focus:border-transparent normal-case"
                  placeholder="Your full name"
                />
              </div>
              {formErrors.name && (
                <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-[#65B741] focus:border-transparent lowercase"
                  placeholder="your@email.com"
                  readOnly={isAuthenticated} // Make read-only if authenticated
                  style={isAuthenticated ? { backgroundColor: '#f9fafb', cursor: 'not-allowed' } : {}}
                />
              </div>
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-[#65B741] focus:border-transparent"
                  placeholder="10-digit mobile number"
                  maxLength="10"
                />
              </div>
              {formErrors.phone && (
                <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
              )}
            </div>
          </div>

          {/* Payment Summary */}
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Registration Fee:</span>
              <span className="font-semibold">
                {isFreeEvent ? "Free" : `₹${totalAmount}`}
              </span>
            </div>
            {!isFreeEvent && (
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <span>Includes GST (if applicable)</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-4">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={isFreeEvent ? handleFreeRegistration : handlePayment}
              disabled={isProcessing}
              className={`flex-1 py-2 px-4 rounded-md text-white flex items-center justify-center ${
                isFreeEvent
                  ? "bg-[#65B741] hover:bg-[#54a332]"
                  : "bg-[#65B741] hover:bg-[#54a332]"
              } transition-colors`}
            >
              {isProcessing ? (
                <span>Processing...</span>
              ) : isFreeEvent ? (
                "Confirm Registration"
              ) : (
                <>
                  <IndianRupee className="mr-1" size={18} />
                  Confirm & Pay
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRegistrationModal;
