// // added webhook for razopay payment notifications
// import React, { useEffect, useState } from "react";
// import { Check, ArrowRight, DollarSign, IndianRupee, X } from "lucide-react";

// const PurchaseModal = ({
//   isOpen,
//   onClose,
//   plan,
//   currency,
//   handlePayment,
//   conversionRate,
// }) => {
//   // Add state for customer details
//   const [customerName, setCustomerName] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [formErrors, setFormErrors] = useState({});

//   if (!isOpen) return null;

//   // Constants for fees
//   const GST_RATE = 0.18; // 18%
//   const PLATFORM_FEE_RATE = 0.02; // 2%

//   const getBasePrice = () => {
//     if (currency === "USD") {
//       return plan.price;
//     } else {
//       // Convert USD to INR and round to nearest integer
//       return Math.round(plan.price * conversionRate);
//     }
//   };

//   const getPlatformFee = () => {
//     const basePrice = getBasePrice();
//     return Number((basePrice * PLATFORM_FEE_RATE).toFixed(2));
//   };

//   const getGSTOnPlatformFee = () => {
//     const platformFee = getPlatformFee();
//     return Number((platformFee * GST_RATE).toFixed(2));
//   };

//   const getTotalPrice = () => {
//     const basePrice = getBasePrice();
//     const platformFee = getPlatformFee();
//     const gstOnPlatformFee = getGSTOnPlatformFee();
//     return Number((basePrice + platformFee + gstOnPlatformFee).toFixed(2));
//   };

//   const getCurrencySymbol = () => {
//     return currency === "USD" ? "$" : "₹";
//   };

//   // Form validation
//   const validateForm = () => {
//     const errors = {};
//     if (!customerName.trim()) errors.name = "Name is required";
//     if (!customerEmail.trim()) errors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(customerEmail)) errors.email = "Email is invalid";
//     if (!customerPhone.trim()) errors.phone = "Phone number is required";
    
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = () => {
//     if (validateForm()) {
//       // Pass customer details to the payment handler
//       handlePayment(plan, currency, getTotalPrice(), {
//         name: customerName,
//         email: customerEmail,
//         phone: customerPhone
//       });
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-xl font-bold text-green-700">{plan.title}</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <div className="p-4">
//           <p className="text-gray-600 mb-4">
//             {plan.period} | Complete Access to R-Guru Resources
//           </p>

//           {/* Customer details form */}
//           <div className="mb-4 space-y-3">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 value={customerName}
//                 onChange={(e) => setCustomerName(e.target.value)}
//                 className="w-full p-2 border rounded-md capitalize"
//                 placeholder="Full Name"
//               />
//               {formErrors.name && (
//                 <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
//               )}
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 value={customerEmail}
//                 onChange={(e) => setCustomerEmail(e.target.value)}
//                 className="w-full p-2 border rounded-md lowercase"
//                 placeholder="you@example.com"
//               />
//               {formErrors.email && (
//                 <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
//               )}
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 value={customerPhone}
//                 onChange={(e) => setCustomerPhone(e.target.value)}
//                 className="w-full p-2 border rounded-md capitalize"
//                 placeholder="Your phone number"
//               />
//               {formErrors.phone && (
//                 <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
//               )}
//             </div>
//           </div>

//           <div className="space-y-2 mb-4">
//             <div className="flex justify-between">
//               <span>Base Price:</span>
//               <span>
//                 {getCurrencySymbol()}
//                 {getBasePrice()}
//               </span>
//             </div>
//             <div className="flex justify-between">
//               <span>Platform Fee (2%):</span>
//               <span>
//                 {getCurrencySymbol()}
//                 {getPlatformFee()}
//               </span>
//             </div>
//             <div className="flex justify-between">
//               <span>GST on Platform Fee (18%):</span>
//               <span>
//                 {getCurrencySymbol()}
//                 {getGSTOnPlatformFee()}
//               </span>
//             </div>
//             <div className="flex justify-between font-bold border-t pt-2 mt-2">
//               <span>Total Amount:</span>
//               <span>
//                 {getCurrencySymbol()}
//                 {getTotalPrice()}
//               </span>
//             </div>
//           </div>

//           <button
//             onClick={handleSubmit}
//             className="w-full bg-green-600 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
//           >
//             {currency === "USD" ? (
//               <DollarSign className="mr-2" />
//             ) : (
//               <IndianRupee className="mr-2" />
//             )}
//             Pay Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const PricingCard = ({ plan, handlePayment, conversionRate }) => {
//   const [selectedCurrency, setSelectedCurrency] = useState("USD");
//   const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

//   const getConvertedPrice = () => {
//     return selectedCurrency === "USD"
//       ? plan.price
//       : Math.round(plan.price * conversionRate);
//   };

//   const openPurchaseModal = () => {
//     setIsPurchaseModalOpen(true);
//   };

//   const closePurchaseModal = () => {
//     setIsPurchaseModalOpen(false);
//   };

//   return (
//     <>
//       <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
//         <h3 className="text-xl font-bold text-green-700 mb-3">{plan.title}</h3>
//         <div className="text-gray-700 mb-4">{plan.period}</div>

//         <ul className="space-y-3 mb-6">
//           {plan.features.map((feature, index) => (
//             <li key={index} className="flex items-start gap-3">
//               <Check className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
//               <span className="text-gray-700">{feature}</span>
//             </li>
//           ))}
//         </ul>

//         <div className="flex items-center justify-center gap-4 mb-4">
//           <div className="text-3xl font-bold text-green-700">
//             {selectedCurrency === "USD" ? "$" : "₹"}
//             {getConvertedPrice()}
//           </div>
//           <select
//             value={selectedCurrency}
//             onChange={(e) => setSelectedCurrency(e.target.value)}
//             className="px-2 py-1 focus:border-none cursor-pointer bg-gray-100 rounded-full"
//           >
//             <option value="USD">USD</option>
//             <option value="INR">INR</option>
//           </select>
//         </div>

//         <button
//           onClick={openPurchaseModal}
//           className="w-full bg-green-600 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
//         >
//           {selectedCurrency === "USD" ? (
//             <DollarSign size={18} />
//           ) : (
//             <IndianRupee size={18} />
//           )}
//           Get Started
//           <ArrowRight size={18} />
//         </button>
//       </div>

//       <PurchaseModal
//         isOpen={isPurchaseModalOpen}
//         onClose={closePurchaseModal}
//         plan={plan}
//         currency={selectedCurrency}
//         handlePayment={handlePayment}
//         conversionRate={conversionRate}
//       />
//     </>
//   );
// };

// const PricingSection = ({ plans }) => {
//   const [razorpayLoaded, setRazorpayLoaded] = useState(false);
//   const [conversionRate, setConversionRate] = useState(86.09); // Default from provided data
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Load Razorpay script
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     script.onload = () => setRazorpayLoaded(true);
//     document.body.appendChild(script);

//     // Fetch the latest exchange rate
//     fetchExchangeRate();

//     return () => {
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   const fetchExchangeRate = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(
//         "https://api.frankfurter.app/latest?from=USD&to=INR"
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch exchange rate");
//       }

//       const data = await response.json();
//       setConversionRate(data.rates.INR);
//       setIsLoading(false);
//     } catch (err) {
//       console.error("Error fetching exchange rate:", err);
//       setError("Failed to fetch the latest exchange rate. Using default rate.");
//       setIsLoading(false);
//       // Keep using the default rate in case of error
//     }
//   };

// const handlePayment = (plan, currency, amount, customerDetails) => {
//   if (!razorpayLoaded) {
//     alert("Payment gateway is loading. Please try again in a moment.");
//     return;
//   }

//   // Convert price to smallest currency unit (paise for INR, cents for USD)
//   const amountInSmallestUnit = Math.round(amount * 100);

//   const options = {
//     // key: 'rzp_test_bAa3BYukEWSoxF', // Your Razorpay Key ID - TEST
//     key: "rzp_live_LmqhBMB4dIMIaO", // Your Razorpay Key ID - LIVE
//     amount: amountInSmallestUnit,
//     currency: currency,
//     name: "R Guru-Marichi Ventures",
//     description: `Plan: ${plan.title}`,
//     handler: function (response) {
//       alert(
//         `Payment Successful! Payment ID: ${response.razorpay_payment_id}`
//       );

//       const paymentData = {
//         paymentId: response.razorpay_payment_id,
//         planTitle: plan.title,
//         amount: amount,
//         currency: currency,
//         customerName: customerDetails.name,
//         customerEmail: customerDetails.email,
//         customerPhone: customerDetails.phone
//       };

//       console.log("Payment data:", paymentData);
      
//       // Send confirmation to your server
//       fetch('/api/subscription-confirmation.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(paymentData),
//       })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Payment recorded:', data);
//       })
//       .catch(error => {
//         console.error('Error recording payment:', error);
//       });
//     },
//     prefill: {
//       name: customerDetails.name,
//       email: customerDetails.email,
//       contact: customerDetails.phone,
//     },
//     theme: {
//       color: "#16a34a", // Green color matching your theme
//     },
//     notes: {
//       planTitle: plan.title,
//       accessPeriod: plan.period,
//       basePrice:
//         currency === "USD"
//           ? `$ ${plan.price}`
//           : `₹ ${Math.round(plan.price * conversionRate)}`,
//       platformFee: "2%",
//       gstOnPlatformFee: "18%",
//       exchangeRate: `1 USD = ${conversionRate} INR`,
//       customer_name: customerDetails.name, // Added for webhook emails
//     },
//   };

//   try {
//     const paymentObject = new window.Razorpay(options);
//     paymentObject.on("payment.failed", function (response) {
//       console.error("Payment failed:", response.error);
//       alert(`Payment failed: ${response.error.description}`);
//     });
//     paymentObject.open();
//   } catch (err) {
//     console.error("Razorpay initialization error:", err);
//     alert("Unable to initialize payment. Please try again later.");
//   }
// };

//   return (
//     <div className="w-full max-w-7xl mx-auto p-6 my-8">
//       <h2 className="text-2xl font-bold text-green-800 text-center mb-2">
//         Choose Your R-Guru Plan
//       </h2>
//       {/* <p className="text-center text-gray-600 mb-8">
//         All prices include 2% platform fee and 18% GST on platform fee
//          {isLoading ? (
//           <span className="block text-sm mt-1">
//             Loading latest exchange rates...
//           </span>
//         ) : error ? (
//           <span className="block text-sm text-orange-600 mt-1">{error}</span>
//         ) : (
//           <span className="block text-sm mt-1">
//             Current exchange rate: 1 USD = {conversionRate} INR
//           </span>
//         )} 
//       </p> */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {plans.map((plan, index) => (
//           <PricingCard
//             key={index}
//             plan={plan}
//             handlePayment={handlePayment}
//             conversionRate={conversionRate}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PricingSection;

// added webhook for razopay payment notifications
import React, { useEffect, useState } from "react";
import { Check, ArrowRight, DollarSign, IndianRupee, X } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
const PurchaseModal = ({
  isOpen,
  onClose,
  plan,
  currency,
  handlePayment,
  conversionRate,
}) => {
  // Add state for customer details
  const { user, isAuthenticated } = useAuth0();
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [formErrors, setFormErrors] = useState({});
   useEffect(() => {
    if (isAuthenticated && user) {
      setCustomerEmail(user.email || "");
      setCustomerName(user.name || user.nickname || "");
    }
  }, [isAuthenticated, user, isOpen]);
  if (!isOpen) return null;

  // Constants for fees
  const GST_RATE = 0.18; // 18%
  const PLATFORM_FEE_RATE = 0.02; // 2%

  const getBasePrice = () => {
    if (currency === "USD") {
      return plan.price;
    } else {
      // Convert USD to INR and round to nearest integer
      return Math.round(plan.price * conversionRate);
    }
  };

  const getPlatformFee = () => {
    const basePrice = getBasePrice();
    return Number((basePrice * PLATFORM_FEE_RATE).toFixed(2));
  };

  const getGSTOnPlatformFee = () => {
    const platformFee = getPlatformFee();
    return Number((platformFee * GST_RATE).toFixed(2));
  };

  const getTotalPrice = () => {
    const basePrice = getBasePrice();
    const platformFee = getPlatformFee();
    const gstOnPlatformFee = getGSTOnPlatformFee();
    return Number((basePrice + platformFee + gstOnPlatformFee).toFixed(2));
  };

  const getCurrencySymbol = () => {
    return currency === "USD" ? "$" : "₹";
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!customerName.trim()) errors.name = "Name is required";
    if (!customerEmail.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(customerEmail)) errors.email = "Email is invalid";
    if (!customerPhone.trim()) errors.phone = "Phone number is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      // Pass customer details to the payment handler
      handlePayment(plan, currency, getTotalPrice(), {
        name: customerName,
        email: customerEmail,
        phone: customerPhone
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-green-700">{plan.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4">
          <p className="text-gray-600 mb-4">
            {plan.period} | Complete Access to R-Guru Resources
          </p>

          {/* Customer details form */}
          <div className="mb-4 space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full p-2 border rounded-md capitalize"
                placeholder="Full Name"
              />
              {formErrors.name && (
                <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => {if (!isAuthenticated) setCustomerEmail(e.target.value.toLowerCase());}}
                className="w-full p-2 border rounded-md lowercase"
                placeholder="you@example.com"
                readOnly={isAuthenticated} // Make read-only if authenticated
                style={isAuthenticated ? { backgroundColor: '#f9fafb', cursor: 'not-allowed' } : {}}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full p-2 border rounded-md capitalize"
                placeholder="Your phone number"
              />
              {formErrors.phone && (
                <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
              )}
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Base Price:</span>
              <span>
                {getCurrencySymbol()}
                {getBasePrice()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee (2%):</span>
              <span>
                {getCurrencySymbol()}
                {getPlatformFee()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>GST on Platform Fee (18%):</span>
              <span>
                {getCurrencySymbol()}
                {getGSTOnPlatformFee()}
              </span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2 mt-2">
              <span>Total Amount:</span>
              <span>
                {getCurrencySymbol()}
                {getTotalPrice()}
              </span>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
          >
            {currency === "USD" ? (
              <DollarSign className="mr-2" />
            ) : (
              <IndianRupee className="mr-2" />
            )}
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

const PricingCard = ({ plan, handlePayment, conversionRate }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const getConvertedPrice = () => {
    return selectedCurrency === "USD"
      ? plan.price
      : Math.round(plan.price * conversionRate);
  };

  const openPurchaseModal = () => {
    setIsPurchaseModalOpen(true);
  };

  const closePurchaseModal = () => {
    setIsPurchaseModalOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-bold text-green-700 mb-3">{plan.title}</h3>
        <div className="text-gray-700 mb-4">{plan.period}</div>

        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="text-3xl font-bold text-green-700">
            {selectedCurrency === "USD" ? "$" : "₹"}
            {getConvertedPrice()}
          </div>
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="px-2 py-1 focus:border-none cursor-pointer bg-gray-100 rounded-full"
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </div>

        <button
          onClick={openPurchaseModal}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
        >
          {selectedCurrency === "USD" ? (
            <DollarSign size={18} />
          ) : (
            <IndianRupee size={18} />
          )}
          Get Started
          <ArrowRight size={18} />
        </button>
      </div>

      <PurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={closePurchaseModal}
        plan={plan}
        currency={selectedCurrency}
        handlePayment={handlePayment}
        conversionRate={conversionRate}
      />
    </>
  );
};

const PricingSection = ({ plans }) => {
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [conversionRate, setConversionRate] = useState(86.09); // Default from provided data
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);

    // Fetch the latest exchange rate
    fetchExchangeRate();

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const fetchExchangeRate = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api.frankfurter.app/latest?from=USD&to=INR"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exchange rate");
      }

      const data = await response.json();
      setConversionRate(data.rates.INR);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching exchange rate:", err);
      setError("Failed to fetch the latest exchange rate. Using default rate.");
      setIsLoading(false);
      // Keep using the default rate in case of error
    }
  };

  const handlePayment = (plan, currency, amount, customerDetails) => {
    if (!razorpayLoaded) {
      alert("Payment gateway is loading. Please try again in a moment.");
      return;
    }

    // Convert price to smallest currency unit (paise for INR, cents for USD)
    const amountInSmallestUnit = Math.round(amount * 100);

    const options = {
      // key: 'rzp_test_bAa3BYukEWSoxF', // Your Razorpay Key ID - TEST
      key: "rzp_live_LmqhBMB4dIMIaO", // Your Razorpay Key ID - LIVE
      amount: amountInSmallestUnit,
      currency: currency,
      name: "R Guru-Marichi Ventures",
      description: `Plan: ${plan.title}`,
      handler: function (response) {
        alert(
          `Payment Successful! Payment ID: ${response.razorpay_payment_id}`
        );

        // Prepare data for rguru-registration-confirmation.php
        const subscriptionData = {
          customerName: customerDetails.name,
          customerEmail: customerDetails.email,
          customerPhone: customerDetails.phone,
          subscriptionType: plan.title, // e.g., "R-Guru Member"
          subscriptionDuration: plan.period, // e.g., "3 months access"
          amount: amount,
          currency: currency,
          paymentId: response.razorpay_payment_id,
          paymentStatus: 'authorized'
        };

        console.log("Subscription data:", subscriptionData);
        
        // Send confirmation to rguru-registration-confirmation.php
        fetch('https://backend.marichiventures.com/rguru-registration-confirmation.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(subscriptionData),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Subscription recorded:', data);
          if (data.success) {
            alert(`Subscription confirmed! Valid until: ${new Date(data.subscription_end_date).toLocaleDateString()}`);
          } else {
            console.error('Error recording subscription:', data.message);
            alert('Payment successful but there was an issue recording your subscription. Please contact support.');
          }
        })
        .catch(error => {
          console.error('Error recording subscription:', error);
          alert('Payment successful but there was an issue recording your subscription. Please contact support.');
        });
      },
      prefill: {
        name: customerDetails.name,
        email: customerDetails.email,
        contact: customerDetails.phone,
      },
      theme: {
        color: "#16a34a", // Green color matching your theme
      },
      notes: {
        planTitle: plan.title,
        accessPeriod: plan.period,
        basePrice:
          currency === "USD"
            ? `$ ${plan.price}`
            : `₹ ${Math.round(plan.price * conversionRate)}`,
        platformFee: "2%",
        gstOnPlatformFee: "18%",
        exchangeRate: `1 USD = ${conversionRate} INR`,
        customer_name: customerDetails.name, // Added for webhook emails
      },
    };

    try {
      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error);
        alert(`Payment failed: ${response.error.description}`);
      });
      paymentObject.open();
    } catch (err) {
      console.error("Razorpay initialization error:", err);
      alert("Unable to initialize payment. Please try again later.");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 my-8">
      <h2 className="text-2xl font-bold text-green-800 text-center mb-2">
        Choose Your R-Guru Plan
      </h2>
      {/* <p className="text-center text-gray-600 mb-8">
        All prices include 2% platform fee and 18% GST on platform fee
         {isLoading ? (
          <span className="block text-sm mt-1">
            Loading latest exchange rates...
          </span>
        ) : error ? (
          <span className="block text-sm text-orange-600 mt-1">{error}</span>
        ) : (
          <span className="block text-sm mt-1">
            Current exchange rate: 1 USD = {conversionRate} INR
          </span>
        )} 
      </p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan}
            handlePayment={handlePayment}
            conversionRate={conversionRate}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
