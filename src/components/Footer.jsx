// import React, { useState } from "react";
// import { logo1, marichilogo, textlogo } from "../assets";
// import {
//   FaInstagram, 
//   FaLinkedinIn, 
//   FaTwitter, 
//   FaYoutube,
// } from "react-icons/fa";
// import styled from "styled-components";
// import { FaFacebook } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formData = new FormData();
//     formData.append('email', email);

//     try {
//         const response = await fetch('https://backend.marichiventures.com/subscribe.php', {
//             method: 'POST',
//             body: formData
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const result = await response.json(); // Parse JSON response
//         alert(result.message); // Show the message from the server
//         setEmail(""); // Clear the email input field after submission
//     } catch (error) {
//         alert("There was an error: " + error.message);
//         console.error("Error submitting form:", error);
//     }
// };


//   return (
//     <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left h-full">
//       <div className="newsletter" style={{ color: "#0F0F0F" }}>
//         <h3 className="font-semibold">
//           Subscribe to our Newsletter to get important updates
//         </h3>
//         <div className="subscribe-form">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           required
//           autoComplete="off"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input type="submit" value="Subscribe" className="font-semibold" />
//       </form>
//     </div>
//       </div>

//       <div className="flex items-center mt-[-25px] justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
//         <div className="mr-12 hidden lg:block text-[12px]">
//           <span>Get connected with us on social networks:</span>
//         </div>
//         <div className="flex justify-center text-[20px]">
//           <a
//             className="mr-6 text-neutral-600 dark:text-neutral-200"
//             href="https://www.youtube.com/@Marichi_Ventures"
//           >
//             <FaYoutube />
//           </a>
//           <a
//             className="mr-6 text-neutral-600 dark:text-neutral-200"
//             href="https://x.com/MarichiVentures"
//           >
//             <FaTwitter />
//           </a>
//           <a
//             className="mr-6 text-neutral-600 dark:text-neutral-200"
//             href="https://www.instagram.com/marichi_ventures/"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             className="mr-6 text-neutral-600 dark:text-neutral-200"
//             href="https://www.linkedin.com/company/marichi-ventures/"
//           >
//             <FaLinkedinIn />
//           </a>
//           <a
//             className="mr-6 text-neutral-600 dark:text-neutral-200"
//             href="https://www.facebook.com/profile.php?id=61565142186557"
//           >
//             <FaFacebook/>
//           </a>
          
//         </div>
//       </div>

//       <div className="mx-6 py-7 justify-between text-[12px] text-center">
//         <div className="grid-1 justify-between grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-center">
//           <div>
//             <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start text-[25px]">
//               <img src={textlogo} alt="logo" className="h-[50px] mx-auto" />
//             </h6>
//             <p className="text-[12px]">
//               Minds converge, ideas flourish, and connections spark innovation
//               at Marichi Ventures. <br />
//               We believe in the power of linking minds to unleash boundless
//               possibilities.
//             </p>
//           </div>
//           <div className="items-center justify-start">
//             <h6 className="mb-4 flex justify-center font-semibold uppercase text-[18px]">
//               OFFERINGS
//             </h6>
//             <ul>
//               <Link to="/offerings/tnp"><li>Training & Placement</li></Link>
//               <Link to="/offerings/staffingsolutions">Staffing Solutions<li></li></Link>
//               <Link to="/offerings/carrercounselling"><li>Career Counselling</li></Link>
//               <Link to="/offerings/leadership"><li>Leadership Development</li></Link>
//               <Link to="/offerings/executivecoaching"><li>Executive Coaching</li></Link>
//               <Link to="/offerings/strategicconsulting"><li>Strategic Consulting</li></Link>
//             </ul>
//           </div>
//           <div className="text-center">
//             <h6 className="mb-4 mx-auto flex justify-center font-semibold uppercase text-[18px]">
//               Contact
//             </h6>
//             <p className="mb-4 flex items-center justify-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="mr-3 h-5 w-5"
//               >
//                 <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
//                 <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
//               </svg>
//               Madhapur,Hyderabad
//             </p>
//             <p className="mb-4 flex items-center justify-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="mr-3 h-5 w-5"
//               >
//                 <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
//                 <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
//               </svg>
//               info@marichiventures.com
//             </p>
//             <p className="mb-4 flex items-center justify-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="mr-3 h-5 w-5"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               + 91 7200212158
//             </p>
//             <p className="mb-4 flex items-center justify-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="mr-3 h-5 w-5"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M1.5 4.5a3 3 0 013-3h15a3 3 0 013 3v15a3 3 0 01-3 3h-15a3 3 0 01-3-3v-15zm8.25 3.75A1.5 1.5 0 009 9.75v4.5a1.5 1.5 0 003 0v-4.5a1.5 1.5 0 00-1.5-1.5zm-3 3A1.5 1.5 0 006 12.75v1.5a1.5 1.5 0 003 0v-1.5A1.5 1.5 0 006.75 11.25zm8.25 0a1.5 1.5 0 00-1.5 1.5v1.5a1.5 1.5 0 003 0v-1.5a1.5 1.5 0 00-1.5-1.5zm2.25-4.5a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 003 0v-6a1.5 1.5 0 00-1.5-1.5z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               + 91 9840411782
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom pt-4 pb-3">
//         <div className="text-center font-semibold text-[14px]">
//           &copy; {new Date().getFullYear()} Marichi Ventures. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React, { useState } from "react";
import { logo1, marichilogo, textlogo } from "../assets";
import {
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaYoutube,
} from "react-icons/fa";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('email', email);

    try {
        const response = await fetch('https://backend.marichiventures.com/subscribe.php', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json(); // Parse JSON response
        alert(result.message); // Show the message from the server
        setEmail(""); // Clear the email input field after submission
    } catch (error) {
        alert("There was an error: " + error.message);
        console.error("Error submitting form:", error);
    }
};


  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left h-full">
      <div className="newsletter" style={{ color: "#0F0F0F" }}>
        <h3 className="font-semibold">
          Subscribe to our Newsletter to get important updates
        </h3>
        <div className="subscribe-form">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          autoComplete="off"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Subscribe" className="font-semibold" />
      </form>
    </div>
      </div>

      <div className="flex items-center mt-[-25px] justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block text-[12px]">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center text-[20px]">
          <a
            className="mr-6 text-neutral-600 dark:text-neutral-200"
            href="https://www.youtube.com/@Marichi_Ventures"
          >
            <FaYoutube />
          </a>
          <a
            className="mr-6 text-neutral-600 dark:text-neutral-200"
            href="https://x.com/MarichiVentures"
          >
            <FaTwitter />
          </a>
          <a
            className="mr-6 text-neutral-600 dark:text-neutral-200"
            href="https://www.instagram.com/marichi_ventures/"
          >
            <FaInstagram />
          </a>
          <a
            className="mr-6 text-neutral-600 dark:text-neutral-200"
            href="https://www.linkedin.com/company/marichi-ventures/"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="mr-6 text-neutral-600 dark:text-neutral-200"
            href="https://www.facebook.com/profile.php?id=61565142186557"
          >
            <FaFacebook/>
          </a>
          
        </div>
      </div>

      <div className="mx-6 py-7 flex  justify-center text-[12px] text-center">
        <div className="grid-1 justify-between grid gap-8  md:grid-cols-2 lg:grid-cols-3 text-center">
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start text-[25px]">
              <img src={textlogo} alt="logo" className="h-[50px] mx-auto" />
            </h6>
            <p className="text-[12px]">
              Minds converge, ideas flourish, and connections spark innovation
              at Marichi Ventures. <br />
              We believe in the power of linking minds to unleash boundless
              possibilities.
            </p>
          </div>
          <div className="items-center justify-start">
            <h6 className="mb-4 flex justify-center font-semibold uppercase text-[18px]">
              OFFERINGS
            </h6>
            <ul>
              <Link to="/offerings/tnp"><li>Training & Placement</li></Link>
              <Link to="/offerings/staffingsolutions">Staffing Solutions<li></li></Link>
              <Link to="/offerings/carrercounselling"><li>Career Counselling</li></Link>
              <Link to="/offerings/leadership"><li>Leadership Development</li></Link>
              <Link to="/offerings/executivecoaching"><li>Executive Coaching</li></Link>
              <Link to="/offerings/strategicconsulting"><li>Strategic Consulting</li></Link>
            </ul>
          </div>
          <div className="text-center">
            <h6 className="mb-4 mx-auto flex justify-center font-semibold uppercase text-[18px]">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              Madhapur,Hyderabad
            </p>
            <p className="mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              info@marichiventures.com
            </p>
            <p className="mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              + 91 7200212158
            </p>
            <p className="mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h15a3 3 0 013 3v15a3 3 0 01-3 3h-15a3 3 0 01-3-3v-15zm8.25 3.75A1.5 1.5 0 009 9.75v4.5a1.5 1.5 0 003 0v-4.5a1.5 1.5 0 00-1.5-1.5zm-3 3A1.5 1.5 0 006 12.75v1.5a1.5 1.5 0 003 0v-1.5A1.5 1.5 0 006.75 11.25zm8.25 0a1.5 1.5 0 00-1.5 1.5v1.5a1.5 1.5 0 003 0v-1.5a1.5 1.5 0 00-1.5-1.5zm2.25-4.5a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 003 0v-6a1.5 1.5 0 00-1.5-1.5z"
                  clipRule="evenodd"
                />
              </svg>
              + 91 9840411782
            </p>
          </div>
        </div>
      </div>

      {/* Added the 3 policy links section */}
      <div className="policy-links py-3 border-t border-neutral-200 dark:border-neutral-500">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-[12px]">
            <Link to="/privacy-policy" className="text-neutral-600 hover:text-green-500 transition dark:text-neutral-200">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-neutral-600 hover:text-green-500 transition dark:text-neutral-200">
              Terms & Conditions
            </Link>
            <Link to="/cancellation-policy" className="text-neutral-600 hover:text-green-500 transition dark:text-neutral-200">
              Cancellation & Refund Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom pt-4 pb-3">
        <div className="text-center font-semibold text-[14px]">
          &copy; {new Date().getFullYear()} Marichi Ventures. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;