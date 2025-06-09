// import { Check, ArrowRight } from 'lucide-react';

// const WorkshopCard = ({ workshop }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
//       <h3 className="text-xl font-bold text-green-700 mb-3">{workshop.title}</h3>
//       <p className="text-gray-700 mb-4">{workshop.description}</p>

//       <ul className="space-y-3 mb-6">
//         {workshop.features.map((feature, index) => (
//           <li key={index} className="flex items-start gap-3">
//             <Check className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
//             <span className="text-gray-700">{feature}</span>
//           </li>
//         ))}
//       </ul>

//       <div className="text-3xl font-bold text-green-700 text-center mb-4">
//         ${workshop.price}
//       </div>

//       <a
//         href="https://forms.gle/v82m2gKxX3p9dXx98"
//         target='_blank'
//         className="w-full bg-green-600 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
//       >
//         Get Started
//         <ArrowRight size={20} />
//       </a>
//     </div>
//   );
// };

// const WorkshopSection = ({ workshops }) => {
//   return (
//     <div className="w-full max-w-7xl mx-auto p-6 my-8">
//       <h2 className="text-2xl font-bold text-green-800 text-center mb-8">Specialized Workshops</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {workshops.map((workshop, index) => (
//           <WorkshopCard key={index} workshop={workshop} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkshopSection;

// import { Check, ArrowRight } from 'lucide-react';
// import { useEffect, useState } from 'react';

// const WorkshopCard = ({ workshop, handlePayment }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
//       <h3 className="text-xl font-bold text-green-700 mb-3">{workshop.title}</h3>
//       <p className="text-gray-700 mb-4">{workshop.description}</p>

//       <ul className="space-y-3 mb-6">
//         {workshop.features.map((feature, index) => (
//           <li key={index} className="flex items-start gap-3">
//             <Check className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
//             <span className="text-gray-700">{feature}</span>
//           </li>
//         ))}
//       </ul>

//       <div className="text-3xl font-bold text-green-700 text-center mb-4">
//         ${workshop.price}
//       </div>

//       <button
//         onClick={() => handlePayment(workshop)}
//         className="w-full bg-green-600 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
//       >
//         Get Started
//         <ArrowRight size={20} />
//       </button>
//     </div>
//   );
// };

// const WorkshopSection = ({ workshops }) => {
//   const [razorpayLoaded, setRazorpayLoaded] = useState(false);

//   useEffect(() => {
//     // Load Razorpay script
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     script.onload = () => setRazorpayLoaded(true);
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handlePayment = (workshop) => {
//     if (!razorpayLoaded) {
//       alert('Payment gateway is loading. Please try again in a moment.');
//       return;
//     }

//     // Convert price to smallest currency unit (cents/paisa)
//     const amount = Math.round(workshop.price * 100);

//     const options = {
//       key: 'rzp_test_bAa3BYukEWSoxF', // Your Razorpay Key ID
//       amount: amount,
//       currency: 'USD',
//       name: 'R-Guru',
//       description: `Workshop: ${workshop.title}`,
//       handler: function(response) {
//         // Handle successful payment
//         alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
//         // You should send this payment ID to your server to verify the payment
//         // and process the workshop registration
//       },
//       prefill: {
//         name: '',
//         email: '',
//         contact: ''
//       },
//       theme: {
//         color: '#16a34a' // Green color matching your theme
//       }
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto p-6 my-8">
//       <h2 className="text-2xl font-bold text-green-800 text-center mb-8">Specialized Workshops</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {workshops.map((workshop, index) => (
//           <WorkshopCard key={index} workshop={workshop} handlePayment={handlePayment} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkshopSection;

// import { Check, ArrowRight } from 'lucide-react';
// import { useEffect, useState } from 'react';

// const WorkshopCard = ({ workshop, handlePayment }) => {
//   const [selectedCurrency, setSelectedCurrency] = useState('USD');

//   // Currency conversion rates (you may want to use a real API for this)
//   const conversionRates = {
//     USD: 1,
//     INR: 83.15 // Example rate, should be updated with current rates
//   };

//   const getPrice = () => {
//     if (selectedCurrency === 'USD') {
//       return workshop.price;
//     } else {
//       return Math.round(workshop.price * conversionRates.INR);
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
//       <h3 className="text-xl font-bold text-green-700 mb-3">{workshop.title}</h3>
//       <p className="text-gray-700 mb-4">{workshop.description}</p>

//       <ul className="space-y-3 mb-6">
//         {workshop.features.map((feature, index) => (
//           <li key={index} className="flex items-start gap-3">
//             <Check className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
//             <span className="text-gray-700">{feature}</span>
//           </li>
//         ))}
//       </ul>

//       <div className="flex items-center justify-center gap-4 mb-4">
//         <div className="text-3xl font-bold text-green-700">
//           {selectedCurrency === 'USD' ? '$' : '₹'}{getPrice()}
//         </div>
//         <select
//           value={selectedCurrency}
//           onChange={(e) => setSelectedCurrency(e.target.value)}
//           className="p-2 border border-gray-300 rounded"
//         >
//           <option value="USD">USD</option>
//           <option value="INR">INR</option>
//         </select>
//       </div>

//       <button
//         onClick={() => handlePayment(workshop, selectedCurrency)}
//         className="w-full bg-green-600 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
//       >
//         Get Started
//         <ArrowRight size={20} />
//       </button>
//     </div>
//   );
// };

// const WorkshopSection = ({ workshops }) => {
//   const [razorpayLoaded, setRazorpayLoaded] = useState(false);

//   // Currency conversion rates (you may want to use a real API for this)
//   const conversionRates = {
//     USD: 1,
//     INR: 83.15 // Example rate, should be updated with current rates
//   };

//   useEffect(() => {
//     // Load Razorpay script
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     script.onload = () => setRazorpayLoaded(true);
//     document.body.appendChild(script);

//     return () => {
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   const handlePayment = (workshop, currency) => {
//     if (!razorpayLoaded) {
//       alert('Payment gateway is loading. Please try again in a moment.');
//       return;
//     }

//     // Calculate price based on selected currency
//     let price = workshop.price;
//     if (currency === 'INR') {
//       price = Math.round(workshop.price * conversionRates.INR);
//     }

//     // Convert price to smallest currency unit (cents/paisa)
//     const amount = Math.round(price * 100);

//     const options = {
//       key: 'rzp_test_bAa3BYukEWSoxF', // Your Razorpay Key ID
//       amount: amount,
//       currency: currency,
//       name: 'R-Guru',
//       description: `Workshop: ${workshop.title}`,
//       handler: function(response) {
//         // Handle successful payment
//         alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
//         // You should send this payment ID to your server to verify the payment
//         // and process the workshop registration
//       },
//       prefill: {
//         name: '',
//         email: '',
//         contact: ''
//       },
//       theme: {
//         color: '#16a34a' // Green color matching your theme
//       },
//       notes: {
//         currency: currency
//       }
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto p-6 my-8">
//       <h2 className="text-2xl font-bold text-green-800 text-center mb-8">Specialized Workshops</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {workshops.map((workshop, index) => (
//           <WorkshopCard key={index} workshop={workshop} handlePayment={handlePayment} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkshopSection;

// import { Check, ArrowRight } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import logo from "../assets/rguru-marichi.png";
// const WorkshopCard = ({ workshop, handlePayment }) => {
//   const [selectedCurrency, setSelectedCurrency] = useState('INR'); // Default to INR since Razorpay primarily works with INR

//   // Currency conversion rates (you may want to use a real API for this)
//   const conversionRates = {
//     USD: 1,
//     INR: 83.15 // Example rate, should be updated with current rates
//   };

//   const getPrice = () => {
//     if (selectedCurrency === 'USD') {
//       return workshop.price;
//     } else {
//       return Math.round(workshop.price * conversionRates.INR);
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
//       <h3 className="text-xl font-bold text-green-700 mb-3">{workshop.title}</h3>
//       <p className="text-gray-700 mb-4">{workshop.description}</p>

//       <ul className="space-y-3 mb-6">
//         {workshop.features.map((feature, index) => (
//           <li key={index} className="flex items-start gap-3">
//             <Check className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
//             <span className="text-gray-700">{feature}</span>
//           </li>
//         ))}
//       </ul>

//       <div className="flex items-center justify-center gap-4 mb-4">
//         <div className="text-3xl font-bold text-green-700">
//           {selectedCurrency === 'USD' ? '$' : '₹'}{getPrice()}
//         </div>
//         <select
//           value={selectedCurrency}
//           onChange={(e) => setSelectedCurrency(e.target.value)}
//           className="p-2 border border-gray-300 rounded"
//         >
//           <option value="INR">INR</option>
//           <option value="USD">USD</option>
//         </select>
//       </div>

//       <button
//         onClick={() => handlePayment(workshop, selectedCurrency, getPrice())}
//         className="w-full bg-green-600 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
//       >
//         Get Started
//         <ArrowRight size={20} />
//       </button>
//     </div>
//   );
// };

// const WorkshopSection = ({ workshops }) => {
//   const [razorpayLoaded, setRazorpayLoaded] = useState(false);

//   useEffect(() => {
//     // Load Razorpay script
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     script.onload = () => setRazorpayLoaded(true);
//     document.body.appendChild(script);

//     return () => {
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   const handlePayment = (workshop, currency, amount) => {
//     if (!razorpayLoaded) {
//       alert('Payment gateway is loading. Please try again in a moment.');
//       return;
//     }

//     // Convert price to smallest currency unit (paise for INR, cents for USD)
//     // Razorpay expects amount in the smallest currency unit
//     const amountInSmallestUnit = Math.round(amount * 100);

//     const options = {
//       key: 'rzp_test_bAa3BYukEWSoxF', // Your Razorpay Key ID
//       amount: amountInSmallestUnit,
//       currency: currency,
//       name: 'R Guru - Marichi Ventures',
//       description: `Workshop: ${workshop.title}`,
//       image: logo, // Add your logo URL (optional)
//       handler: function(response) {
//         // Handle successful payment
//         alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);

//         // You can send this data to your server
//         const paymentData = {
//           paymentId: response.razorpay_payment_id,
//           workshopId: workshop.id,
//           workshopTitle: workshop.title,
//           amount: amount,
//           currency: currency
//         };

//         console.log('Payment data:', paymentData);
//         // Send paymentData to your server to record the transaction
//       },
//       prefill: {
//         name: '',
//         email: '',
//         contact: ''
//       },
//       theme: {
//         color: '#16a34a' // Green color matching your theme
//       },
//       notes: {
//         workshopId: workshop.id || 'unknown',
//         workshopTitle: workshop.title,
//         discription: workshop.description
//       },
//       // Add modal closing and error handlers
//       modal: {
//         ondismiss: function() {
//           console.log('Checkout form closed');
//         }
//       }
//     };

//     try {
//       const paymentObject = new window.Razorpay(options);
//       paymentObject.on('payment.failed', function(response) {
//         console.error('Payment failed:', response.error);
//         alert(`Payment failed: ${response.error.description}`);
//       });
//       paymentObject.open();
//     } catch (err) {
//       console.error('Razorpay initialization error:', err);
//       alert('Unable to initialize payment. Please try again later.');
//     }
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto p-6 my-8">
//       <h2 className="text-2xl font-bold text-green-800 text-center mb-8">Specialized Workshops</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {workshops.map((workshop, index) => (
//           <WorkshopCard
//             key={index}
//             workshop={{
//               ...workshop,
//               id: workshop.id || `workshop-${index + 1}` // Ensure each workshop has an ID
//             }}
//             handlePayment={handlePayment}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkshopSection;

// import { Check, ArrowRight, ScrollText, DollarSign, IndianRupee } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import logo from "../assets/rguru-marichi.png";

// const WorkshopCard = ({ workshop, handlePayment }) => {
//   const [selectedCurrency, setSelectedCurrency] = useState('INR'); // Default to INR since Razorpay primarily works with INR
//   const [showBreakdown, setShowBreakdown] = useState(false);

//   // Currency conversion rates (you may want to use a real API for this)
//   const conversionRates = {
//     USD: 1,
//     INR: 83.15 // Example rate, should be updated with current rates
//   };

//   // Constants for fees
//   const GST_RATE = 0.18; // 18%
//   const PLATFORM_FEE_RATE = 0.02; // 2%

//   const getBasePrice = () => {
//     if (selectedCurrency === 'USD') {
//       return workshop.price;
//     } else {
//       return Math.round(workshop.price * conversionRates.INR);
//     }
//   };

//   const getPlatformFee = () => {
//     const basePrice = getBasePrice();
//     return Math.round(basePrice * PLATFORM_FEE_RATE * 100) / 100;
//   };

//   const getGSTAmount = () => {
//     const basePrice = getBasePrice();
//     return Math.round(basePrice * GST_RATE * 100) / 100;
//   };

//   const getTotalPrice = () => {
//     const basePrice = getBasePrice();
//     const platformFee = getPlatformFee();
//     const gst = getGSTAmount();
//     return Math.round((basePrice + platformFee + gst) * 100) / 100;
//   };

//   const getCurrencySymbol = () => {
//     return selectedCurrency === 'USD' ? '$' : '₹';
//   };

//   return (
//     <div className="bg-white my-auto rounded-lg  shadow-md p-6 hover:shadow-lg transition-all duration-300">
//       <h3 className="text-xl font-bold text-green-700 mb-3">{workshop.title}</h3>
//       <p className="text-gray-700 mb-4">{workshop.description}</p>

//       <ul className="space-y-3 mb-6">
//         {workshop.features.map((feature, index) => (
//           <li key={index} className="flex items-start gap-3">
//             <Check className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
//             <span className="text-gray-700">{feature}</span>
//           </li>
//         ))}
//       </ul>

//       <div className="flex flex-col items-center mb-4">
//         <div className="flex items-center gap-4 mb-2">
//           <div className="text-3xl font-bold text-green-700">
//             {getCurrencySymbol()}{getTotalPrice()}
//           </div>
//           <select
//             value={selectedCurrency}
//             onChange={(e) => setSelectedCurrency(e.target.value)}
//             className="px-2 py-1 focus:border-none cursor-pointer  bg-gray-100 rounded-full"
//           >
//             <option value="INR">INR</option>
//             <option value="USD">USD</option>
//           </select>
//         </div>

//         <button
//           onClick={() => setShowBreakdown(!showBreakdown)}
//           className="flex border p-1 rounded  items-center text-sm text-green-600 hover:text-green-800 transition-colors"
//         >
//           <ScrollText size={16} className="mr-1" />
//           {showBreakdown ? "Hide price breakdown" : "View price breakdown"}
//         </button>

//         {showBreakdown && (
//           <div className="w-full mt-3 p-3 bg-gray-50 rounded-md text-sm">
//             <div className="flex justify-between mb-1">
//               <span>Base price:</span>
//               <span>{getCurrencySymbol()}{getBasePrice()}</span>
//             </div>
//             <div className="flex justify-between mb-1">
//               <span>Platform fee (2%):</span>
//               <span>{getCurrencySymbol()}{getPlatformFee()}</span>
//             </div>
//             <div className="flex justify-between mb-1">
//               <span>GST (18%):</span>
//               <span>{getCurrencySymbol()}{getGSTAmount()}</span>
//             </div>
//             <div className="flex justify-between font-semibold pt-2 border-t border-gray-200 mt-2">
//               <span>Total:</span>
//               <span>{getCurrencySymbol()}{getTotalPrice()}</span>
//             </div>
//           </div>
//         )}
//       </div>

//       <button
//         onClick={() => handlePayment(workshop, selectedCurrency, getTotalPrice())}
//         className="w-full bg-green-600 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
//       >
//         {selectedCurrency === 'USD' ? (
//           <DollarSign size={18} />
//         ) : (
//           <IndianRupee size={18} />
//         )}
//         Get Started
//         <ArrowRight size={18} />
//       </button>
//     </div>
//   );
// };

// const WorkshopSection = ({ workshops }) => {
//   const [razorpayLoaded, setRazorpayLoaded] = useState(false);

//   useEffect(() => {
//     // Load Razorpay script
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     script.onload = () => setRazorpayLoaded(true);
//     document.body.appendChild(script);

//     return () => {
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   const handlePayment = (workshop, currency, amount) => {
//     if (!razorpayLoaded) {
//       alert('Payment gateway is loading. Please try again in a moment.');
//       return;
//     }

//     // Convert price to smallest currency unit (paise for INR, cents for USD)
//     // Razorpay expects amount in the smallest currency unit
//     const amountInSmallestUnit = Math.round(amount * 100);

//     const options = {
//       key: 'rzp_test_bAa3BYukEWSoxF', // Your Razorpay Key ID
//       amount: amountInSmallestUnit,
//       currency: currency,
//       name: 'R Guru - Marichi Ventures',
//       description: `Workshop: ${workshop.title}`,
//       image: logo, // Add your logo URL (optional)
//       handler: function(response) {
//         // Handle successful payment
//         alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);

//         // You can send this data to your server
//         const paymentData = {
//           paymentId: response.razorpay_payment_id,
//           workshopId: workshop.id,
//           workshopTitle: workshop.title,
//           amount: amount,
//           currency: currency
//         };

//         console.log('Payment data:', paymentData);
//         // Send paymentData to your server to record the transaction
//       },
//       prefill: {
//         name: '',
//         email: '',
//         contact: ''
//       },
//       theme: {
//         color: '#16a34a' // Green color matching your theme
//       },
//       notes: {
//         workshopId: workshop.id || 'unknown',
//         workshopTitle: workshop.title,
//         description: workshop.description,
//         basePrice: currency === 'USD' ? workshop.price : Math.round(workshop.price * 83.15),
//         gst: "18%",
//         platformFee: "2%"
//       },
//       // Add modal closing and error handlers
//       modal: {
//         ondismiss: function() {
//           console.log('Checkout form closed');
//         }
//       }
//     };

//     try {
//       const paymentObject = new window.Razorpay(options);
//       paymentObject.on('payment.failed', function(response) {
//         console.error('Payment failed:', response.error);
//         alert(`Payment failed: ${response.error.description}`);
//       });
//       paymentObject.open();
//     } catch (err) {
//       console.error('Razorpay initialization error:', err);
//       alert('Unable to initialize payment. Please try again later.');
//     }
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto p-6 my-8">
//       <h2 className="text-2xl font-bold text-green-800 text-center mb-2">Specialized Workshops</h2>
//       <p className="text-center text-gray-600 mb-8">All prices are inclusive of 18% GST and a 2% platform fee</p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {workshops.map((workshop, index) => (
//           <WorkshopCard
//             key={index}
//             workshop={{
//               ...workshop,
//               id: workshop.id || `workshop-${index + 1}` // Ensure each workshop has an ID
//             }}
//             handlePayment={handlePayment}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkshopSection;

// import React, { useEffect, useState } from 'react';
// import { Check, ArrowRight, DollarSign, IndianRupee, X } from 'lucide-react';

// const PurchaseModal = ({
//   isOpen,
//   onClose,
//   workshop,
//   currency,
//   handlePayment
// }) => {
//   if (!isOpen) return null;

//   // Updated conversion rate to be more precise
//   const CONVERSION_RATE = 85.86; // More current rate, should be dynamically fetched in real application

//   // Constants for fees
//   const GST_RATE = 0.18; // 18%
//   const PLATFORM_FEE_RATE = 0.02; // 2%

//   const getBasePrice = () => {
//     if (currency === 'USD') {
//       return workshop.price;
//     } else {
//       // Convert USD to INR and round to nearest integer
//       return Math.round(workshop.price * CONVERSION_RATE);
//     }
//   };

//   const getPlatformFee = () => {
//     const basePrice = getBasePrice();
//     return Number((basePrice * PLATFORM_FEE_RATE).toFixed(2));
//   };

//   const getGSTAmount = () => {
//     const basePrice = getBasePrice();
//     return Number((basePrice * GST_RATE).toFixed(2));
//   };

//   const getTotalPrice = () => {
//     const basePrice = getBasePrice();
//     const platformFee = getPlatformFee();
//     const gst = getGSTAmount();
//     return Number((basePrice + platformFee + gst).toFixed(2));
//   };

//   const getCurrencySymbol = () => {
//     return currency === 'USD' ? '$' : '₹';
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-xl font-bold text-green-700">{workshop.title}</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <div className="p-4">
//           <p className="text-gray-600 mb-4">{workshop.description}</p>

//           <div className="space-y-2 mb-4">
//             <div className="flex justify-between">
//               <span>Base Price:</span>
//               <span>{getCurrencySymbol()}{getBasePrice()}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Platform Fee (2%):</span>
//               <span>{getCurrencySymbol()}{getPlatformFee()}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>GST (18%):</span>
//               <span>{getCurrencySymbol()}{getGSTAmount()}</span>
//             </div>
//             <div className="flex justify-between font-bold border-t pt-2 mt-2">
//               <span>Total Amount:</span>
//               <span>{getCurrencySymbol()}{getTotalPrice()}</span>
//             </div>
//           </div>

//           <button
//             onClick={() => handlePayment(workshop, currency, getTotalPrice())}
//             className="w-full bg-green-600 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
//           >
//             {currency === 'USD' ? <DollarSign className="mr-2" /> : <IndianRupee className="mr-2" />}
//             Enroll Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const WorkshopCard = ({ workshop, handlePayment }) => {
//   const [selectedCurrency, setSelectedCurrency] = useState('USD');
//   const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

//   // Updated conversion rate to be more precise
//   const CONVERSION_RATE = 85.86; // Should be dynamically fetched in a real application

//   const getConvertedPrice = () => {
//     return selectedCurrency === 'USD'
//       ? workshop.price
//       : Math.round(workshop.price * CONVERSION_RATE);
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
//         <h3 className="text-xl font-bold text-green-700 mb-3">{workshop.title}</h3>
//         <div className="text-gray-700 mb-4">{workshop.description}</div>

//         <ul className="space-y-3 mb-6">
//           {workshop.features.map((feature, index) => (
//             <li key={index} className="flex items-start gap-3">
//               <Check className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
//               <span className="text-gray-700">{feature}</span>
//             </li>
//           ))}
//         </ul>

//         <div className="flex items-center justify-center gap-4 mb-4">
//           <div className="text-3xl font-bold text-green-700">
//             {selectedCurrency === 'USD' ? '$' : '₹'}
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
//           {selectedCurrency === 'USD' ? <DollarSign size={18} /> : <IndianRupee size={18} />}
//           Get Started
//           <ArrowRight size={18} />
//         </button>
//       </div>

//       <PurchaseModal
//         isOpen={isPurchaseModalOpen}
//         onClose={closePurchaseModal}
//         workshop={workshop}
//         currency={selectedCurrency}
//         handlePayment={handlePayment}
//       />
//     </>
//   );
// };

// const WorkshopSection = ({ workshops }) => {
//   const [razorpayLoaded, setRazorpayLoaded] = useState(false);

//   useEffect(() => {
//     // Load Razorpay script
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     script.onload = () => setRazorpayLoaded(true);
//     document.body.appendChild(script);

//     return () => {
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   const handlePayment = (workshop, currency, amount) => {
//     if (!razorpayLoaded) {
//       alert('Payment gateway is loading. Please try again in a moment.');
//       return;
//     }

//     // Convert price to smallest currency unit (paise for INR, cents for USD)
//     const amountInSmallestUnit = Math.round(amount * 100);

//     const options = {
//       key: 'rzp_test_bAa3BYukEWSoxF', // Your Razorpay Key ID
//       amount: amountInSmallestUnit,
//       currency: currency,
//       name: 'R Guru-Marichi Ventures',
//       description: `Workshop: ${workshop.title}`,
//       handler: function(response) {
//         alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);

//         const paymentData = {
//           paymentId: response.razorpay_payment_id,
//           workshopTitle: workshop.title,
//           amount: amount,
//           currency: currency
//         };

//         console.log('Payment data:', paymentData);
//         // Send paymentData to your server to record the transaction
//       },
//       prefill: {
//         name: '',
//         email: '',
//         contact: ''
//       },
//       theme: {
//         color: '#16a34a' // Green color matching your theme
//       },
//       notes: {
//         workshopTitle: workshop.title,
//         workshopDescription: workshop.description,
//         basePrice: currency === 'USD' ? `$ ${workshop.price}` : `₹ ${Math.round(workshop.price * 85.86)}`,
//         gst: "18%",
//         platformFee: "2%"
//       },
//     };

//     try {
//       const paymentObject = new window.Razorpay(options);
//       paymentObject.on('payment.failed', function(response) {
//         console.error('Payment failed:', response.error);
//         alert(`Payment failed: ${response.error.description}`);
//       });
//       paymentObject.open();
//     } catch (err) {
//       console.error('Razorpay initialization error:', err);
//       alert('Unable to initialize payment. Please try again later.');
//     }
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto p-6 my-8">
//       <h2 className="text-2xl font-bold text-green-800 text-center mb-2">Specialized Workshops</h2>
//       <p className="text-center text-gray-600 mb-8">All prices are inclusive of 18% GST and a 2% platform fee</p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {workshops.map((workshop, index) => (
//           <WorkshopCard
//             key={index}
//             workshop={workshop}
//             handlePayment={handlePayment}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkshopSection;

// added api for convertinf data

// import React, { useEffect, useState } from "react";
// import { Check, ArrowRight, DollarSign, IndianRupee, X } from "lucide-react";

// const PurchaseModal = ({
//   isOpen,
//   onClose,
//   workshop,
//   currency,
//   handlePayment,
//   conversionRate,
// }) => {
//   if (!isOpen) return null;

//   // Constants for fees
//   const GST_RATE = 0.18; // 18%
//   const PLATFORM_FEE_RATE = 0.02; // 2%

//   const getBasePrice = () => {
//     if (currency === "USD") {
//       return workshop.price;
//     } else {
//       // Convert USD to INR and round to nearest integer
//       return Math.round(workshop.price * conversionRate);
//     }
//   };

//   const getPlatformFee = () => {
//     const basePrice = getBasePrice();
//     return Number((basePrice * PLATFORM_FEE_RATE).toFixed(2));
//   };

//   const getGSTAmount = () => {
//     const basePrice = getBasePrice();
//     return Number((basePrice * GST_RATE).toFixed(2));
//   };

//   const getTotalPrice = () => {
//     const basePrice = getBasePrice();
//     const platformFee = getPlatformFee();
//     const gst = getGSTAmount();
//     return Number((basePrice + platformFee + gst).toFixed(2));
//   };

//   const getCurrencySymbol = () => {
//     return currency === "USD" ? "$" : "₹";
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-xl font-bold text-green-700">{workshop.title}</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <div className="p-4">
//           <p className="text-gray-600 mb-4">{workshop.description}</p>

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
//               <span>GST (18%):</span>
//               <span>
//                 {getCurrencySymbol()}
//                 {getGSTAmount()}
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
//             onClick={() => handlePayment(workshop, currency, getTotalPrice())}
//             className="w-full bg-green-600 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
//           >
//             {currency === "USD" ? (
//               <DollarSign className="mr-2" />
//             ) : (
//               <IndianRupee className="mr-2" />
//             )}
//             Enroll Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const WorkshopCard = ({ workshop, handlePayment, conversionRate }) => {
//   const [selectedCurrency, setSelectedCurrency] = useState("USD");
//   const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

//   const getConvertedPrice = () => {
//     return selectedCurrency === "USD"
//       ? workshop.price
//       : Math.round(workshop.price * conversionRate);
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
//         <h3 className="text-xl font-bold text-green-700 mb-3">
//           {workshop.title}
//         </h3>
//         <div className="text-gray-700 mb-4">{workshop.description}</div>

//         <ul className="space-y-3 mb-6">
//           {workshop.features.map((feature, index) => (
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
//         workshop={workshop}
//         currency={selectedCurrency}
//         handlePayment={handlePayment}
//         conversionRate={conversionRate}
//       />
//     </>
//   );
// };

// const WorkshopSection = ({ workshops }) => {
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

//   const handlePayment = (workshop, currency, amount) => {
//     if (!razorpayLoaded) {
//       alert("Payment gateway is loading. Please try again in a moment.");
//       return;
//     }

//     // Convert price to smallest currency unit (paise for INR, cents for USD)
//     const amountInSmallestUnit = Math.round(amount * 100);

//     const options = {
//       // key: 'rzp_test_bAa3BYukEWSoxF', // Your Razorpay Key ID - TEST
//       key: "rzp_live_LmqhBMB4dIMIaO", // Your Razorpay Key ID - LIVE
//       amount: amountInSmallestUnit,
//       currency: currency,
//       name: "R Guru-Marichi Ventures",
//       description: `Workshop: ${workshop.title}`,
//       handler: function (response) {
//         alert(
//           `Payment Successful! Payment ID: ${response.razorpay_payment_id}`
//         );

//         const paymentData = {
//           paymentId: response.razorpay_payment_id,
//           workshopTitle: workshop.title,
//           amount: amount,
//           currency: currency,
//         };

//         console.log("Payment data:", paymentData);
//         // Send paymentData to your server to record the transaction
//       },
//       prefill: {
//         name: "",
//         email: "",
//         contact: "",
//       },
//       theme: {
//         color: "#16a34a", // Green color matching your theme
//       },
//       notes: {
//         workshopTitle: workshop.title,
//         workshopDescription: workshop.description,
//         basePrice:
//           currency === "USD"
//             ? `$ ${workshop.price}`
//             : `₹ ${Math.round(workshop.price * conversionRate)}`,
//         gst: "18%",
//         platformFee: "2%",
//         exchangeRate: `1 USD = ${conversionRate} INR`,
//       },
//     };

//     try {
//       const paymentObject = new window.Razorpay(options);
//       paymentObject.on("payment.failed", function (response) {
//         console.error("Payment failed:", response.error);
//         alert(`Payment failed: ${response.error.description}`);
//       });
//       paymentObject.open();
//     } catch (err) {
//       console.error("Razorpay initialization error:", err);
//       alert("Unable to initialize payment. Please try again later.");
//     }
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto p-6 my-8">
//       <h2 className="text-2xl font-bold text-green-800 text-center mb-2">
//         Specialized Workshops
//       </h2>
//       <p className="text-center text-gray-600 mb-8">
//         All prices are inclusive of 18% GST and a 2% platform fee
//         {isLoading ? (
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
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {workshops.map((workshop, index) => (
//           <WorkshopCard
//             key={index}
//             workshop={workshop}
//             handlePayment={handlePayment}
//             conversionRate={conversionRate}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkshopSection;




// added webhook for razorpay  notifications
import React, { useEffect, useState } from "react";
import { Check, ArrowRight, DollarSign, IndianRupee, X } from "lucide-react";

const PurchaseModal = ({
  isOpen,
  onClose,
  workshop,
  currency,
  handlePayment,
  conversionRate,
}) => {
  // Add state for customer details
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [formErrors, setFormErrors] = useState({});

  if (!isOpen) return null;

  // Constants for fees
  const GST_RATE = 0.18; // 18%
  const PLATFORM_FEE_RATE = 0.02; // 2%

  const getBasePrice = () => {
    if (currency === "USD") {
      return workshop.price;
    } else {
      // Convert USD to INR and round to nearest integer
      return Math.round(workshop.price * conversionRate);
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
      handlePayment(workshop, currency, getTotalPrice(), {
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
          <h2 className="text-xl font-bold text-green-700">{workshop.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4">
          <p className="text-gray-600 mb-4">{workshop.description}</p>

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
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full p-2 border rounded-md lowercase"
                placeholder="you@example.com"
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
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

const WorkshopCard = ({ workshop, handlePayment, conversionRate }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const getConvertedPrice = () => {
    return selectedCurrency === "USD"
      ? workshop.price
      : Math.round(workshop.price * conversionRate);
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
        <h3 className="text-xl font-bold text-green-700 mb-3">
          {workshop.title}
        </h3>
        <div className="text-gray-700 mb-4">{workshop.description}</div>

        <ul className="space-y-3 mb-6">
          {workshop.features.map((feature, index) => (
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
        workshop={workshop}
        currency={selectedCurrency}
        handlePayment={handlePayment}
        conversionRate={conversionRate}
      />
    </>
  );
};

const WorkshopSection = ({ workshops }) => {
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [conversionRate, setConversionRate] = useState(86.09); // Default from provided data
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [processedPayments, setProcessedPayments] = useState(new Set());

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

  const handlePayment = (workshop, currency, amount, customerDetails) => {
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
      description: `Workshop: ${workshop.title}`,
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        
        // Check if this payment has already been processed
        if (processedPayments.has(paymentId)) {
          console.log(`Payment ${paymentId} already processed, skipping duplicate handling`);
          return;
        }
        
        // Add to processed payments set
        setProcessedPayments(prev => new Set([...prev, paymentId]));
        
        alert(`Payment Successful! Payment ID: ${paymentId}`);

        const paymentData = {
          paymentId: paymentId,
          workshopTitle: workshop.title,
          amount: amount,
          currency: currency,
          customerName: customerDetails.name,
          customerEmail: customerDetails.email,
          customerPhone: customerDetails.phone
        };

        console.log("Payment data:", paymentData);
        
        // Send confirmation to your server
        fetch('/api/workshop-confirmation.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentData),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Workshop payment recorded:', data);
          
          // Check if payment was already processed on server side
          if (data.status === 'already processed') {
            console.log('Payment was already processed on server');
          }
        })
        .catch(error => {
          console.error('Error recording workshop payment:', error);
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
        workshopTitle: workshop.title,
        workshopDescription: workshop.description,
        basePrice:
          currency === "USD"
            ? `$ ${workshop.price}`
            : `₹ ${Math.round(workshop.price * conversionRate)}`,
        gst: "18% on platform fee only",
        platformFee: "2%",
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
        Specialized Workshops
      </h2>
      {/* <p className="text-center text-gray-600 mb-8">
        All prices include a 2% platform fee with 18% GST on the platform fee
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
        {workshops.map((workshop, index) => (
          <WorkshopCard
            key={index}
            workshop={workshop}
            handlePayment={handlePayment}
            conversionRate={conversionRate}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkshopSection;