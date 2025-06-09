import React, { useEffect, useState } from "react";
import { FaShieldAlt, FaGavel, FaInfoCircle, FaLock, FaCreditCard, FaUserShield, FaCopyright, FaBalanceScale, FaEnvelope, FaPhone } from "react-icons/fa";
import {Link} from "react-router-dom"
const TermsConditionsPage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-section');
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const id = section.id;
        
        if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
          setIsVisible(prev => ({ ...prev, [id]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to check initial visible elements
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-green-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-green-600 py-6 px-6 flex items-center">
          <FaGavel className="text-white text-4xl mr-4" />
          <div>
            <h1 className="text-2xl font-bold text-white">Terms & Conditions</h1>
            <p className="text-green-100 text-sm mt-1">Effective Date: 1st Mar'2025</p>
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="space-y-6">
            <div 
              id="introduction" 
              className={`animate-section bg-green-50 p-4 rounded-lg border-l-4 border-green-500 transition-all duration-500 ${isVisible.introduction ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            >
              <div className="flex items-start">
                <FaInfoCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Welcome to <span className="font-semibold">Marichi Ventures</span>! By accessing our website and using our services, you agree to comply with the following Terms & Conditions. Please read them carefully before proceeding.
                </p>
              </div>
            </div>

            <div 
              id="general-terms" 
              className={`animate-section space-y-4 transition-all duration-500 ${isVisible['general-terms'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 flex items-center">
                <FaShieldAlt className="text-green-600 mr-2" />
                1. General Terms
              </h2>
              <ul className="list-disc pl-8 text-gray-700 space-y-2">
                <li>These Terms & Conditions govern the use of our website, training programs, coaching services, and any other offerings by <span className="font-semibold">Marichi Ventures</span>.</li>
                <li>By registering for our services, you acknowledge that you have read, understood, and agreed to these terms.</li>
                <li>We reserve the right to modify these terms at any time. Updated terms will be posted on this page.</li>
              </ul>
            </div>

            <div 
              id="services" 
              className={`animate-section space-y-4 transition-all duration-500 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 flex items-center">
                <FaInfoCircle className="text-green-600 mr-2" />
                2. Services Offered
              </h2>
              <p className="text-gray-700">
                Marichi Ventures provides leadership consulting, coaching, mentoring, career counselling, training, and related services. All services are subject to availability, and we reserve the right to modify or discontinue them at any time.
              </p>
            </div>

            <div 
              id="payment" 
              className={`animate-section space-y-4 transition-all duration-500 ${isVisible.payment ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 flex items-center">
                <FaCreditCard className="text-green-600 mr-2" />
                3. Payment and Refund Policy
              </h2>
              <ul className="list-disc pl-8 text-gray-700 space-y-2">
                <li>All payments must be made in full before accessing our services.</li>
                <li>Fees once paid are <span className="font-semibold">non-refundable</span> unless explicitly stated in our <span className="font-semibold">Cancellation and Refund Policy</span>.</li>
                <li>In case of event cancellation by Marichi Ventures, a refund or rescheduling option will be provided.</li>
              </ul>
            </div>

            <div 
              id="user-responsibilities" 
              className={`animate-section space-y-4 transition-all duration-500 ${isVisible['user-responsibilities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 flex items-center">
                <FaUserShield className="text-green-600 mr-2" />
                4. User Responsibilities
              </h2>
              <ul className="list-disc pl-8 text-gray-700 space-y-2">
                <li>Users must provide accurate and up-to-date information when registering for our services.</li>
                <li>You agree to use our website and services for <span className="font-semibold">lawful purposes only</span> and not to engage in any fraudulent, abusive, or harmful activities.</li>
                <li>Unauthorized use, reproduction, or distribution of our content, including course materials and training programs, is strictly prohibited.</li>
              </ul>
            </div>

            <div 
              id="intellectual-property" 
              className={`animate-section space-y-4 transition-all duration-500 ${isVisible['intellectual-property'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 flex items-center">
                <FaCopyright className="text-green-600 mr-2" />
                5. Intellectual Property
              </h2>
              <p className="text-gray-700">
                All content, including text, images, videos, course materials, and branding, is the <span className="font-semibold">intellectual property of Marichi Ventures</span> and may not be copied, distributed, or modified without prior written consent.
              </p>
            </div>

            <div 
              id="limitation" 
              className={`animate-section space-y-4 transition-all duration-500 ${isVisible.limitation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 flex items-center">
                <FaShieldAlt className="text-green-600 mr-2" />
                6. Limitation of Liability
              </h2>
              <ul className="list-disc pl-8 text-gray-700 space-y-2">
                <li>Marichi Ventures is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services.</li>
                <li>We do not guarantee specific outcomes or results from our coaching or training programs.</li>
              </ul>
            </div>

            <div 
              id="privacy" 
              className={`animate-section space-y-4 transition-all duration-500 ${isVisible.privacy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 flex items-center">
                <FaLock className="text-green-600 mr-2" />
                7. Privacy Policy
              </h2>
              <p className="text-gray-700">
                By using our services, you agree to our <Link to="/privacy-policy" className="font-semibold underline">Privacy Policy</Link>, which governs how we collect, use, and protect your personal information.
              </p>
            </div>

            <div 
              id="governing-law" 
              className={`animate-section space-y-4 transition-all duration-500 ${isVisible['governing-law'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 flex items-center">
                <FaBalanceScale className="text-green-600 mr-2" />
                8. Governing Law & Dispute Resolution
              </h2>
              <ul className="list-disc pl-8 text-gray-700 space-y-2">
                <li>These terms shall be governed by the laws of <span className="font-semibold">India</span>.</li>
                <li>Any disputes arising from these terms shall be resolved through <span className="font-semibold">arbitration</span> in accordance with Indian laws.</li>
              </ul>
            </div>

            <div 
              id="contact" 
              className={`animate-section bg-green-100 rounded-lg p-6 mt-8 transition-all duration-500 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-xl font-semibold text-gray-800 pb-4 flex items-center">
                <FaInfoCircle className="text-green-600 mr-2" />
                9. Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                For any questions or concerns regarding these Terms & Conditions, please contact us at:
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <FaEnvelope className="text-green-600 mr-3" />
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span> <a href="mailto:info@marichiventures.com" className="text-green-600 hover:underline">info@marichiventures.com</a>
                  </p>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-green-600 mr-3" />
                  <p className="text-gray-700">
                    <span className="font-medium">Phone:</span> <a href="tel:+917200212158" className="text-green-600 hover:underline">+91-7200212158</a>
                  </p>
                </div>
              </div>
            </div>

            <div 
              id="footer" 
              className={`animate-section border-t border-gray-200 pt-6 mt-6 text-center transition-all duration-500 ${isVisible.footer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <p className="text-sm text-gray-600">
                These Terms & Conditions were last updated on March 1, 2025.
              </p>
              <p className="text-sm text-green-600 mt-1 font-medium">
                © 2025 Marichi Ventures. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;