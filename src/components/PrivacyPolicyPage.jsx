import React, { useEffect } from "react";
import { 
  FaLock, 
  FaUserShield, 
  FaExchangeAlt, 
  FaShieldAlt, 
  FaClipboardList, 
  FaUserEdit, 
  FaCookieBite, 
  FaCheckCircle, 
  FaPencilAlt, 
  FaPhoneAlt 
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
    
    // Set up intersection observer to update active section during scrolling
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    
    const sections = document.querySelectorAll('section');
    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const [activeSection, setActiveSection] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const sections = [
    { id: "introduction", title: "1. Introduction", icon: <FaUserShield /> },
    { id: "information-we-collect", title: "2. Information We Collect", icon: <FaClipboardList /> },
    { id: "how-we-use", title: "3. How We Use Your Information", icon: <FaExchangeAlt /> },
    { id: "how-we-protect", title: "4. How We Protect Your Information", icon: <FaShieldAlt /> },
    { id: "sharing-information", title: "5. Sharing of Information", icon: <FaExchangeAlt /> },
    { id: "cookies", title: "6. Cookies and Tracking", icon: <FaCookieBite /> },
    { id: "your-rights", title: "7. Your Rights and Choices", icon: <FaCheckCircle /> },
    { id: "changes", title: "8. Changes to Policy", icon: <FaPencilAlt /> },
    { id: "contact", title: "9. Contact Us", icon: <FaPhoneAlt /> }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMenuOpen(false); // Close mobile menu after selection
    }
  };

  const printPolicy = () => {
    window.print();
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Top action bar */}
      {/* <div className="max-w-4xl mx-auto flex justify-between mb-4 print:hidden">
        <div className="flex overflow-x-auto py-2 gap-2 hide-scrollbar">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`whitespace-nowrap text-sm py-1 px-3 rounded-full transition-colors ${
                activeSection === section.id 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
        <button 
          onClick={printPolicy}
          className="flex items-center bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-lg transition-colors text-sm ml-2"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print
        </button>
      </div> */}
      
      <div 
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-up"
      >
        <div className="bg-gradient-to-r from-green-600 to-green-800 py-6 px-6 flex items-center">
          <div className="bg-white p-2 rounded-full mr-4">
            <FaLock className="text-green-600 text-4xl" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white">Privacy Policy</h1>
            <p className="text-green-100 text-sm">Effective Date: 1st Mar'2025</p>
          </div>
        </div>

        
        <div className="p-6 md:p-8">
          <div className="mb-8 border-l-4 border-green-500 pl-4 py-2" data-aos="fade-up">
            <p className="text-gray-700">
              At <span className="font-bold text-green-700">Marichi Ventures</span>, we value your 
              privacy and are committed to protecting your personal information. This Privacy Policy 
              explains how we collect, use, and safeguard your data when you visit our website or 
              use our services.
            </p>
          </div>
          
          <div className="space-y-12">
            <section id="introduction" className="scroll-mt-20" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaUserShield className="text-green-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
              </div>
              <p className="text-gray-700 ml-12">
                Welcome to Marichi Ventures. We are committed to protecting your personal 
                information and your right to privacy. This privacy policy explains how we collect, 
                use, and share information about you when you use our services.
              </p>
            </section>
            
            <section id="information-we-collect" className="scroll-mt-20" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaClipboardList className="text-green-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">2. Information We Collect</h2>
              </div>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  We may collect and process the following types of information:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex">
                    <span className="text-green-500 mr-2">•</span>
                    <div>
                      <span className="font-semibold text-green-700">Personal Information</span>: Name, email address, phone number, and other details provided during registration or inquiry.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="text-green-500 mr-2">•</span>
                    <div>
                      <span className="font-semibold text-green-700">Payment Information</span>: When you purchase a service, payment details are processed securely by our payment partners (e.g., Razorpay).
                    </div>
                  </li>
                  <li className="flex">
                    <span className="text-green-500 mr-2">•</span>
                    <div>
                      <span className="font-semibold text-green-700">Usage Data</span>: Information about how you interact with our website, including IP address, browser type, and pages visited.
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            
            <section id="how-we-use" className="scroll-mt-20" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaExchangeAlt className="text-green-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">3. How We Use Your Information</h2>
              </div>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  We use your data for the following purposes:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex">
                    <span className="text-green-500 mr-2">•</span>
                    <div>To process registrations, payments, and service requests.</div>
                  </li>
                  <li className="flex">
                    <span className="text-green-500 mr-2">•</span>
                    <div>To communicate with you regarding updates, offers, and customer support.</div>
                  </li>
                  <li className="flex">
                    <span className="text-green-500 mr-2">•</span>
                    <div>To improve our website, services, and user experience.</div>
                  </li>
                  <li className="flex">
                    <span className="text-green-500 mr-2">•</span>
                    <div>To comply with legal and regulatory requirements.</div>
                  </li>
                </ul>
              </div>
            </section>
            
            <section id="how-we-protect" className="scroll-mt-20" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaShieldAlt className="text-green-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">4. How We Protect Your Information</h2>
              </div>
              <div className="ml-12">
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                  <p className="text-gray-700">
                    We implement security measures to safeguard your personal data against unauthorized access, 
                    alteration, or disclosure. However, no online transmission is 100% secure, and we cannot 
                    guarantee absolute security.
                  </p>
                </div>
              </div>
            </section>
            
            <section id="sharing-information" className="scroll-mt-20" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaExchangeAlt className="text-green-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">5. Sharing of Information</h2>
              </div>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  We do not sell or rent your personal information. However, we may share your data with:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex">
                    <span className="text-green-500 mr-2">•</span>
                    <div>
                      <span className="font-semibold text-green-700">Third-party service providers</span> (e.g., payment processors, email providers) to facilitate our services.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="text-green-500 mr-2">•</span>
                    <div>
                      <span className="font-semibold text-green-700">Legal authorities</span> if required by law or to protect our rights and users.
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            
            <section id="cookies" className="scroll-mt-20" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaCookieBite className="text-green-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">6. Cookies and Tracking Technologies</h2>
              </div>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  Our website may use cookies and similar technologies to enhance user experience. 
                  You can modify your browser settings to disable cookies, but this may affect website functionality.
                </p>
                {/* <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-green-700 mb-2">Cookie Types We Use:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="p-2 bg-white rounded border border-gray-200">
                      <span className="font-medium">Essential Cookies</span>: Required for basic website functionality
                    </div>
                    <div className="p-2 bg-white rounded border border-gray-200">
                      <span className="font-medium">Analytics Cookies</span>: Help us understand how visitors use our site
                    </div>
                    <div className="p-2 bg-white rounded border border-gray-200">
                      <span className="font-medium">Functionality Cookies</span>: Remember your preferences
                    </div>
                    <div className="p-2 bg-white rounded border border-gray-200">
                      <span className="font-medium">Targeting Cookies</span>: Help deliver relevant advertisements
                    </div>
                  </div>
                </div> */}
              </div>
            </section>
            
            <section id="your-rights" className="scroll-mt-20" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaUserEdit className="text-green-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">7. Your Rights and Choices</h2>
              </div>
              <div className="ml-12">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex">
                    <span className="text-green-500 mr-2">•</span>
                    <div>You can request access, correction, or deletion of your personal data.</div>
                  </li>
                  <li className="flex">
                    <span className="text-green-500 mr-2">•</span>
                    <div>You can opt out of marketing emails by using the <span className="font-semibold text-green-700">unsubscribe</span> link.</div>
                  </li>
                </ul>
                
                {/* <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-700 mb-2">To Exercise Your Rights:</h4>
                  <p className="text-sm text-gray-700">
                    Email us at <a href="mailto:info@marichiventures.com" className="text-green-600 hover:underline">info@marichiventures.com</a> with 
                    your request. We will respond to all legitimate requests within 30 days.
                  </p>
                </div> */}
              </div>
            </section>
            
            <section id="changes" className="scroll-mt-20" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaShieldAlt className="text-green-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">8. Changes to This Privacy Policy</h2>
              </div>
              <p className="text-gray-700 ml-12">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.
              </p>
            </section>
            
            <section id="contact" className="scroll-mt-20" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaPhoneAlt className="text-green-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">9. Contact Us</h2>
              </div>
              <div className="ml-12">
                <p className="mb-4 text-gray-700">For any questions regarding this Privacy Policy, please contact us at:</p>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200 shadow-sm w-full max-w-full">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
                  {/* Email Section */}
                  <div className="flex items-start gap-2 w-full md:w-auto">
                    <span className="text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg">
                      <span className="font-semibold text-green-700">Email:</span>
                      <a href="mailto:info@marichiventures.com" className="block text-green-600 hover:underline break-words">
                        info@marichiventures.com
                      </a>
                    </div>
                  </div>

                  {/* Phone Section */}
                  <div className="flex items-start gap-2 w-full md:w-auto">
                    <span className="text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </span>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg">
                      <span className="font-semibold text-green-700">Phone:</span>
                      <a href="tel:+917200212158" className="block text-green-600 hover:underline break-words">
                        +91-7200212158
                      </a>
                    </div>
                  </div>
                </div>
              </div>


              </div>
            </section>
          </div>
          
          <div className="mt-12 border-t border-green-100 pt-6 text-sm text-gray-500">
            <p>Last updated: March 1, 2025</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-600 to-green-800 p-4 text-center text-white text-sm">
          <p>© 2025 Marichi Ventures. All rights reserved.</p>
        </div>
      </div>
      
      {/* Mobile jump menu - only shows when scrolled down */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed bottom-4 right-4 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors print:hidden md:hidden"
        aria-label="Jump to section"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
        </svg>
      </button>
      
      {menuOpen && (
        <div className="fixed bottom-20 right-4 bg-white rounded-lg shadow-xl p-4 z-50 w-64 print:hidden md:hidden">
          <h3 className="font-bold text-green-800 mb-3 border-b border-green-100 pb-2">Jump to Section</h3>
          <div className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex items-center w-full p-2 text-left text-sm hover:bg-green-50 rounded"
              >
                <span className="mr-2 text-green-600">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicyPage;