// import React, { useRef } from "react";
// import styled from "styled-components";
// import emailjs from '@emailjs/browser';
// import { User, MapPin, School, Building, Mail, Phone, MessageSquare, Send } from 'lucide-react';

// const Wrapper = styled.section`
//   padding: 1rem 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   h2 {
//     font-weight: bold;
//     font-size: 33px;
//     text-align: center;
//     margin-bottom: 3px;
//   }

//   iframe {
//     width: 100%;
//     height: 250px;
//     border: 0;
//   }

//   .container {
//     margin-top: 1rem;
//     text-align: center;
//     width: 100%;
//     max-width: 100%;
//   }

//   .background-container {
//     width: 100vw;
//     margin-left: 100%;
//     transform: translateX(-50%);
//     position: relative;
//     left: 0;
//     right: 0;
//     padding: 2rem 0;
//     background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     color: white;
//     text-align: center;
//   }

//   .background-container h2,
//   .background-container p {
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }

//   .contact-form {
//     width: 100%;
//     max-width: 600px;
//     margin: 0 auto;

//     .contact-inputs {
//       display: flex;
//       flex-direction: column;
//       gap: 1.5rem;

//       input,
//       textarea {
//         width: 100%;
//         padding: 1rem 1rem 1rem 2.5rem;
//         border: 2px solid #65b741;
//         border-radius: 8px;
//         outline: none;
//         transition: all 0.3s ease;
//         font-size: 1rem;
//         background-color: #f0f8ff;
//         color: #333;

//         &:focus {
//           border-color: #4f9433;
//           box-shadow: 0 0 0 2px rgba(79, 148, 51, 0.2);
//           background-color: #fff;
//         }

//         &::placeholder {
//           color: #666;
//         }
//       }

//       .input-wrapper {
//         position: relative;
//         width: 100%;

//         svg {
//           position: absolute;
//           left: 0.75rem;
//           top: 50%;
//           transform: translateY(-50%);
//           color: #65b741;
//         }

//         textarea + svg {
//           top: 1rem;
//           transform: none;
//         }
//       }
//     }
//   }

//   button.submit-btn {
//     cursor: pointer;
//     transition: all 0.3s ease;
//     background-color: #65b741;
//     border: 2px solid #65b741;
//     color: white;
//     padding: 1rem 2rem;
//     font-size: 1.1rem;
//     font-weight: bold;
//     margin: 2rem 0;
//     width: 100%;
//     max-width: 200px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 0.5rem;
//     border-radius: 8px;

//     &:hover {
//       background-color: #4f9433;
//       border-color: #4f9433;
//       transform: translateY(-3px);
//       box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//     }

//     &:active {
//       transform: translateY(-1px);
//       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     }

//     svg {
//       transition: transform 0.3s ease;
//     }

//     &:hover svg {
//       transform: translateX(3px);
//     }
//   }

//   @media only screen and (max-width: 768px) {
//     .container {
//       padding: 0 1rem;
//     }
//   }
// `;

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_rwgyu89', 'template_8w9ceq5', form.current, 'NrLCZQh-kj3e7WC63')
//       .then((result) => {
//           console.log(result.text);
//           alert('Message sent successfully!');
//       }, (error) => {
//           console.log(error.text);
//           alert('Failed to send the message, please try again.');
//       });
//     e.target.reset();
//   };

//   return (
//     <Wrapper className="section">
//       <div className="background-container">
//         <h2 className="py-6">WRITE TO US</h2>
//         <p className="mb-8 font-semibold">
//           You can get in touch with us at- <br />
//           <span className="font-bold">Address: </span> Marichi Ventures, T-Hub Phase-2, 20, Inorbit Mall Road, <br />
//           Vittal Rao Nagar, Madhapur, Hyderabad <br />
//           <span className="font-bold">Pin:</span> 500081 <br />
//           <span className="font-bold">Email: </span> info@marichiventures.com
//           <br />
//           <span className="font-bold">Phone: </span> +91-7200212158
//         </p>
//       </div>
//       <div className="container">
//         <div className="contact-form">
//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="contact-inputs"
//           >
//             <div className="input-wrapper">
//               <User size={20} />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name*"
//                 autoComplete="off"
//                 required
//               />
//             </div>
//             <div className="input-wrapper">
//               <MapPin size={20} />
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Location"
//                 autoComplete="off"
//               />
//             </div>
//             <div className="input-wrapper">
//               <School size={20} />
//               <input
//                 type="text"
//                 name="collegename"
//                 placeholder="College Name (for students)"
//                 autoComplete="off"
//               />
//             </div>
//             <div className="input-wrapper">
//               <Building size={20} />
//               <input
//                 type="text"
//                 name="companyname"
//                 placeholder="Company Name (for corporates)"
//                 autoComplete="off"
//               />
//             </div>
//             <div className="input-wrapper">
//               <Mail size={20} />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email*"
//                 autoComplete="off"
//                 required
//               />
//             </div>
//             <div className="input-wrapper ">
//               <Phone size={20} />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone*"
//                 autoComplete="off"
//                 required
//               />
//             </div>
//             <div className="relative">
//       <div className="absolute left-3 top-5 text-green-500">
//         <MessageSquare size={20} />
//       </div>
//       <textarea
//         name="message"
//         placeholder="Message"
//         className="w-full pl-10 pr-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
//         rows={6}
//         autoComplete="off"
//         required
//       />
//     </div>
//             <button type="submit" className="submit-btn">
//               <Send size={20} />
//               <span>Send</span>
//             </button>
//           </form>
//         </div>
//       </div>

//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.533135383003!2d78.37646572369046!3d17.43417870145839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e37831f177%3A0x32d4499d34baaa78!2sT-Hub%20Phase%202!5e0!3m2!1sen!2sin!4v1706268163009!5m2!1sen!2sin"
//         width="100%"
//         height="250"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//       ></iframe>
//     </Wrapper>
//   );
// };

// export default Contact;





















// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   User,
//   MapPin,
//   School,
//   Building,
//   Mail,
//   Phone,
//   MessageSquare,
//   Send,
//   CheckCircle,
//   ArrowRight,
// } from "lucide-react";

// const Contact = () => {
//   const form = useRef();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitSuccess(false);
//     setSubmitError(false);

//     emailjs
//       .sendForm(
//         "service_rwgyu89",
//         "template_8w9ceq5",
//         form.current,
//         "NrLCZQh-kj3e7WC63"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setSubmitSuccess(true);
//           e.target.reset();
//         },
//         (error) => {
//           console.log(error.text);
//           setSubmitError(true);
//         }
//       )
//       .finally(() => {
//         setIsSubmitting(false);
//       });
//   };

//   return (
//     <div className="w-full bg-white">
//       {/* Add global style for lowercase input */}
//       <style jsx global>{`
//         input,
//         textarea {
//           text-transform: lowercase !important;
//         }
//         ::placeholder {
//           text-transform: lowercase !important;
//         }
//       `}</style>

//       {/* Hero Contact Banner */}
//       <div
//         className="w-full relative"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="container text-xl mx-auto px-4 py-16 text-center">
//           <h2 className=" md:text-4xl font-bold text-white mb-4">
//             WRITE TO US
//           </h2>
//           <div className=" mx-auto text-white  space-y-2">
//             <p className="font-medium">
//               You can get in touch with us at- <br />
//               <span className="font-bold">Address: </span> Marichi Ventures,
//               T-Hub Phase-2, 20, Inorbit Mall Road, <br />
//               Vittal Rao Nagar, Madhapur, Hyderabad <br />
//               <span className="font-bold">Pin:</span> 500081 <br />
//               <span className="font-bold">Email: </span>{" "}
//               info@marichiventures.com
//               <br />
//               <span className="font-bold">Phone: </span> +91-7200212158
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col mt-4 justify-center items-center text-green-500">
//       <div className="flex items-center gap-2">
//         <Mail className="text-green-500" />
//         <h1 className="text-2xl font-bold">Contact Us</h1>
//       </div>
//       <p className="mt-2 text-gray-400 text-sm">Fill the details below</p>
//     </div>

//       {/* Contact Form Section with Enhanced UI */}
//       <div className="container mx-auto px-4 py-12" id="contact-form">
//         <div className="max-w-3xl mx-auto">
//           <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
//             {submitSuccess && (
//               <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-xl mb-6 flex items-center gap-2">
//                 <CheckCircle size={20} />
//                 <span>
//                   Your message has been sent successfully! We'll get back to you
//                   soon.
//                 </span>
//               </div>
//             )}

//             {submitError && (
//               <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6">
//                 Failed to send the message. Please try again or contact us
//                 directly.
//               </div>
//             )}

//             <form ref={form} onSubmit={sendEmail} className="space-y-5">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div className="relative group">
//                   <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-gray-800 transition-colors">
//                     <User size={18} />
//                   </div>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Name*"
//                     className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-100 group-hover:border-gray-400 transition-all lowercase"
//                     required
//                   />
//                 </div>

//                 <div className="relative group">
//                   <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-gray-800 transition-colors">
//                     <MapPin size={18} />
//                   </div>
//                   <input
//                     type="text"
//                     name="location"
//                     placeholder="Location"
//                     className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-100 group-hover:border-gray-400 transition-all lowercase"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div className="relative group">
//                   <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-gray-800 transition-colors">
//                     <School size={18} />
//                   </div>
//                   <input
//                     type="text"
//                     name="collegename"
//                     placeholder="College name (for students)"
//                     className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-100 group-hover:border-gray-400 transition-all lowercase"
//                   />
//                 </div>

//                 <div className="relative group">
//                   <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-gray-800 transition-colors">
//                     <Building size={18} />
//                   </div>
//                   <input
//                     type="text"
//                     name="companyname"
//                     placeholder="Company name (for corporates)"
//                     className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-100 group-hover:border-gray-400 transition-all lowercase"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div className="relative group">
//                   <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-gray-800 transition-colors">
//                     <Mail size={18} />
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email*"
//                     className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-100 group-hover:border-gray-400 transition-all lowercase"
//                     required
//                   />
//                 </div>

//                 <div className="relative group">
//                   <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-gray-800 transition-colors">
//                     <Phone size={18} />
//                   </div>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone*"
//                     className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-100 group-hover:border-gray-400 transition-all lowercase"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="relative group">
//                 <div className="absolute left-3 top-4 text-gray-500 group-hover:text-gray-800 transition-colors">
//                   <MessageSquare size={18} />
//                 </div>
//                 <textarea
//                   name="message"
//                   placeholder="Message*"
//                   className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-100 group-hover:border-gray-400 transition-all lowercase"
//                   rows={5}
//                   required
//                 />
//               </div>

//               <div className="flex justify-center mt-6">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition-all ${
//                     isSubmitting
//                       ? "opacity-70 cursor-not-allowed"
//                       : "hover:-translate-y-1 hover:shadow-lg"
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     "Sending..."
//                   ) : (
//                     <>
//                       <Send size={18} />
//                       <span>Send Message</span>
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* CTA Card Section - Moved above the map section */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-xl overflow-hidden">
//           <div className="bg-gray-800 p-8 text-white flex flex-col justify-center">
//             <h3 className="text-2xl font-bold mb-4">Ready to Innovate?</h3>
//             <p className="mb-6">
//               Join Marichi Ventures today and be part of our growing ecosystem
//               of startups and innovators.
//             </p>
//             <ul className="space-y-3 mb-8">
//               <li className="flex items-center gap-2">
//                 <div className="rounded-full bg-white/20 p-1 flex items-center justify-center">
//                   <CheckCircle size={16} className="text-white" />
//                 </div>
//                 <span>Access to mentorship programs</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <div className="rounded-full bg-white/20 p-1 flex items-center justify-center">
//                   <CheckCircle size={16} className="text-white" />
//                 </div>
//                 <span>Networking opportunities</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <div className="rounded-full bg-white/20 p-1 flex items-center justify-center">
//                   <CheckCircle size={16} className="text-white" />
//                 </div>
//                 <span>Funding and investment support</span>
//               </li>
//             </ul>
//             <a
//               href="#contact-form"
//               className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-xl font-medium mt-auto self-start transition-all hover:-translate-y-1 hover:shadow-lg"
//             >
//               <span>Get Started Now</span>
//               <ArrowRight size={18} />
//             </a>
//           </div>
//           <div className="p-8 bg-gray-50 flex items-center justify-center">
//             <img
//               src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
//               alt="Innovation at Marichi Ventures"
//               className="w-full h-full object-cover rounded-xl shadow-md"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Map Section */}
//       <div className="w-full h-80 mt-8">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.533135383003!2d78.37646572369046!3d17.43417870145839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e37831f177%3A0x32d4499d34baaa78!2sT-Hub%20Phase%202!5e0!3m2!1sen!2sin!4v1706268163009!5m2!1sen!2sin"
//           className="w-full h-full"
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Contact;





import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { User, MapPin, School, Building, Mail, Phone, MessageSquare, Send, Home, Mail as MailIcon, PhoneCall } from 'lucide-react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rwgyu89', 'template_8w9ceq5', form.current, 'NrLCZQh-kj3e7WC63')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
    e.target.reset();
  };

  return (
    <section className="flex flex-col items-center text-center w-full">
      {/* Hero Banner Section */}
      <div className="w-full bg-cover bg-center bg-no-repeat text-white text-center py-8"
           style={{
             backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
           }}>
        <h2 className="font-bold text-2xl md:text-3xl mb-4">WRITE TO US</h2>
        
        
        {/* Contact Info */}
        <div className="flex flex-col justify-center items-center mx-auto max-w-md px-4 md:px-6 mb-6 text-sm text-gray-800">
          <div className="w-full space-y-4 text-white text-left">
            {/* Address */}
            <div className="flex items-start gap-3">
              <Home className="text-green-500 mt-1" size={32} />
              <div>
                <div className="font-bold">Address:</div>
                <span>Marichi Ventures, T-Hub Phase-2</span>
                <span>20, Vittal Rao Nagar, Inorbit Mall Road,</span>
                <span>Madhapur, Hyderabad, Telangana</span>
                <div>500081, India</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <MailIcon className="text-green-500 mt-1" size={18} />
              <div>
                <div className="font-bold">Email:</div>
                <div>info@marichiventures.com</div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <PhoneCall className="text-green-500 mt-1" size={18} />
              <div>
                <div className="font-bold">Phone:</div>
                <div>+91-7200212158</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="container mx-auto px-4 mt-6">
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mb-8">
          <div className="flex flex-col items-center mb-5">
            <h3 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-800 mb-1">
              <MailIcon size={18} className="text-green-600" />
              Contact Us
            </h3>
            <p className="text-sm text-gray-600">Fill the details below</p>
          </div>
          
          <form ref={form} onSubmit={sendEmail} className="w-full max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="relative">
                <User size={14} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  autoComplete="off"
                  required
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:bg-white transition-color placeholder-normal-case placeholder:capitalize"

                />
              </div>
              
              {/* Location */}
              <div className="relative">
                <MapPin size={14} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  autoComplete="off"
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:bg-white transition-colors placeholder:capitalize"
                />
              </div>
              
              {/* College */}
              <div className="relative">
                <School size={14} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  name="collegename"
                  placeholder="College name (for students)"
                  autoComplete="off"
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:bg-white transition-colors placeholder:capitalize"
                />
              </div>
              
              {/* Company */}
              <div className="relative">
                <Building size={14} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  name="companyname"
                  placeholder="Company name (for corporates)"
                  autoComplete="off"
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:bg-white transition-colors placeholder:capitalize"
                />
              </div>
              
              {/* Email */}
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  autoComplete="off"
                  required
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:bg-white transition-colors placeholder:capitalize"
                />
              </div>
              
              {/* Phone */}
              <div className="relative">
                <Phone size={14} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  autoComplete="off"
                  required
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:bg-white transition-colors placeholder:capitalize"
                />
              </div>
              
              {/* Message - Full Width */}
              <div className="relative md:col-span-2">
                <MessageSquare size={14} className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="Message*"
                  rows="4"
                  autoComplete="off"
                  required
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:bg-white transition-colors resize-y placeholder:capitalize"
                ></textarea>
              </div>
              
              {/* Submit Button - Full Width */}
              <div className="md:col-span-2 flex justify-center mt-2">
                <button 
                  type="submit" 
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.533135383003!2d78.37646572369046!3d17.43417870145839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e37831f177%3A0x32d4499d34baaa78!2sT-Hub%20Phase%202!5e0!3m2!1sen!2sin!4v1706268163009!5m2!1sen!2sin"
        className="w-full h-60 border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;