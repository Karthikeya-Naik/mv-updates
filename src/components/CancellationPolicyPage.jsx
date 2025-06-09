import React, { useEffect, useState } from "react";
import { FaTimesCircle, FaExchangeAlt, FaInfoCircle, FaExclamationTriangle, FaPhone, FaEnvelope } from "react-icons/fa";

const CancellationPolicyPage = () => {
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
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
      <div className="bg-green-600 py-6 px-6 flex items-center">
        <FaTimesCircle className="text-white text-4xl mr-4" />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-white">Cancellation and Refund Policy</h1>
          <p className="text-green-100 text-sm">Effective Date: 1st Mar'2025</p>
        </div>
      </div>

        
        <div className="p-6 md:p-8">
          <div className="space-y-8">
            <div 
              id="intro" 
              className={`animate-section bg-green-50 border-l-4 border-green-500 p-5 rounded-lg transition-all duration-500 transform ${isVisible.intro ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            >
              <div className="flex">
                <FaExclamationTriangle className="text-green-600 text-xl mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-800 font-medium mb-2">Important Notice:</p>
                  <p className="text-gray-700">
                    At <span className="font-semibold">Marichi Ventures</span>, we are committed to delivering high-quality training, coaching, and consulting services. Please read our <span className="font-semibold">Cancellation and Refund Policy</span> carefully before making any purchases or enrolling in our programs.
                  </p>
                </div>
              </div>
            </div>

            <div 
              id="cancellation" 
              className={`animate-section space-y-4 transition-all duration-500 transform ${isVisible.cancellation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaInfoCircle className="text-green-600 mr-2" />
                1. Cancellation Policy
              </h2>
              <ul className="text-gray-700 pl-9 space-y-2 list-disc">
                <li>
                  <span className="font-semibold">All payments</span> made for workshops, training programs, coaching sessions, and consulting services are <span className="font-semibold">non-refundable</span>.
                </li>
                <li>
                  If you are unable to attend a scheduled session or event, you may request to <span className="font-semibold">reschedule</span>, subject to availability and approval by Marichi Ventures.
                </li>
                <li>
                  No refunds or credits will be provided for <span className="font-semibold">missed sessions, partial participation, or last-minute cancellations</span>.
                </li>
              </ul>
            </div>

            <div 
              id="refund" 
              className={`animate-section space-y-4 transition-all duration-500 transform ${isVisible.refund ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaExchangeAlt className="text-green-600 mr-2" />
                2. Refund Policy
              </h2>
              <ul className="text-gray-700 pl-9 space-y-2 list-disc">
                <li>
                  <span className="font-semibold">No refunds</span> will be issued once payment is made, except in cases where Marichi Ventures cancels an event or service.
                </li>
                <li>
                  If an event or session is cancelled by Marichi Ventures, you will be offered a <span className="font-semibold">full refund or the option to reschedule</span>.
                </li>
              </ul>
            </div>

            <div 
              id="contact" 
              className={`animate-section bg-green-100 rounded-lg p-6 mt-8 border border-green-200 transition-all duration-500 transform ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FaInfoCircle className="text-green-600 mr-2" />
                3. Contact Us
              </h3>
              <p className="text-gray-700 mb-4">
                For any queries related to cancellations or rescheduling, please contact us at:
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
              className={`animate-section border-t border-gray-200 pt-6 mt-6 text-center transition-all duration-500 transform ${isVisible.footer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <p className="text-sm text-gray-600">
                This policy is effective as of March 1, 2025 and is subject to change without notice.
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



export default CancellationPolicyPage;
