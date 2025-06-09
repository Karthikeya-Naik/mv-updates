import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { RiArtboardFill, RiBarChart2Fill } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { MdManageSearch } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { FaPeopleArrows } from "react-icons/fa6";
import SDGSection from "./SDGSection";
import AOS from "aos";
import "aos/dist/aos.css";

import "tailwindcss/tailwind.css";
import sarvesh from "../assets/sarveshsingh.png";
import neeki from "../assets/neekisingh.png";
import lg1 from "../assets/lg1.png";
import lg2 from "../assets/lg2.png";
import lg3 from "../assets/lg3.png";
import lg5 from "../assets/lg5.png";
import lg13 from "../assets/lg13.png";
import lg14 from "../assets/lg14.png";
import lg15 from "../assets/lg15.png";
import lg16 from "../assets/lg16.png";
import lg17 from "../assets/lg17.png";
import lg18 from "../assets/lg18.png";
import lg19 from "../assets/lg19.png";
import lg20 from "../assets/lg20.png";
import lg21 from "../assets/lg21.jpeg";
import lg22 from "../assets/lg22.jpeg";
import doc from "../assets/doc.png";
import icf from "../assets/icf.jpg";
import bhaskar from "../assets/bhaskar.jpg";
import dpiit from "../assets/dpiit.jpg";
import hma from "../assets/hma.jpg";
import msme from "../assets/msme.png";
import vb from "../assets/vb.png";
import unsdg from "../assets/unsdg.png";
import PressReleaseShowcase from "./PressReleaseShowcase.jsx";
const academiaLogos = [
  lg13,
  lg14,
  lg15,
  lg16,
  lg17,
  lg18,
  lg19,
  lg20,
  lg21,
  lg22,
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (
    <>
      {/* Management Team Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header with decorative elements */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              <span className="relative inline-block">
                MANAGEMENT TEAM
                <span className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-green-600"></span>
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the leadership driving our vision and success
            </p>
          </div>

          {/* Team Members Container */}
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Team Member 1 */}
            <div className="flex  flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
              <div className="w-full md:w-1/4 flex justify-center items-center p-6">
                <img
                  src={sarvesh}
                  alt="Sarvesh Singh"
                  className="w-full object-cover rounded-full border-4"
                />
              </div>
              <div className="w-full md:w-3/4 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Sarvesh Singh
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sarvesh has two decades of corporate experience with his last
                  role as Global Head of Strategy & Operations with Novartis. He
                  has received Economic Times Excellence Award for empowering
                  Leadership. Now he has multifaceted roles such as Startup
                  Mentor with t-Hub (world's largest incubation center), Board
                  Member with PHUSE (World's largest healthcare data sciences
                  community), Advisory Board Member with Abluva (US based Data
                  Security Company), and Managing Director with Marichi
                  Ventures.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
              <div className="w-full md:w-1/4 flex justify-center items-center p-6">
                <img
                  src={neeki}
                  alt="Neeki Singh"
                  className="w-full object-cover rounded-full border-4"
                />
              </div>
              <div className="w-full md:w-3/4 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Neeki Singh
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Neeki has a decade of corporate and a decade of
                  entrepreneurship experience with her last corporate role with
                  TATA Consultancy Services and OCS Consulting, Netherlands. She
                  has been awarded TOP100 Women Achievers Award, Entrepreneur of
                  the Year Award by Entrepreneurship Council of India. Now she
                  works with corporate leaders as Life Coach & Fitness Coach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PressReleaseShowcase />

      {/* Header Section */}
      <div
        className="flex items-center justify-center min-h-screen bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/5668434/pexels-photo-5668434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        }}
      >
        <div className="text-white text-center p-4 md:p-8 lg:p-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">
            WHO WE ARE
          </h1>
          <p className="md:text-base md:w-[600px] mx-auto">
            Marichi Ventures is a Strategic Consulting and Leadership
            Development firm committed to empowering professionals to unlock
            their potential. With a focus on strategic growth, we offer tailored
            coaching, workshops, and mentoring programs to inspire personal and
            professional excellence.
          </p>
          <br />
          <p className="md:text-base md:w-[600px] mx-auto">
            Our unique approach combines industry insights with a strong
            emphasis on self-development, helping individuals and organizations
            thrive in a dynamic world. Backed by decades of experience and a
            passion for transformation, we guide our clients towards sustainable
            success.
          </p>
        </div>
      </div>

      {/* Offerings Section */}
      <div
        className="md:flex bg-fixed md:h-[710px] py-6 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/7046164/pexels-photo-7046164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
          backgroundPosition: "top right",
        }}
      >
        <div className="md:w-full md:max-w-screen md:px-[4rem]">
          <h1 className="text-4xl md:text-left text-center md:text-5xl mb-5 p-8">
            WHAT WE DO <br />
            <div className="red-line mx-auto ml-[-6%] md:ml-[35%] mt-[1px] md:mt-[-1.5%] md:w-[500px]"></div>
          </h1>

          {/* Offerings Grid */}
          <div className="grid md:grid-cols-2 grid-cols-1 text-[18px] font-bold md:px-[10rem] sm:px-[7rem] px-[3rem]">
            <Link to="/offerings/tnp">
              <div className="flex justify-center items-center border-2 rounded-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-300 mx-2 p-7 my-1">
                <TbArrowBadgeRightFilled className="text-[32px] mx-3" />
                <h1>Training and Placement</h1>
              </div>
            </Link>

            <Link to="/offerings/staffingsolutions">
              <div className="flex justify-center items-center border-2 rounded-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-300 mx-2 p-7 my-1">
                <TbArrowBadgeRightFilled className="text-[32px] mx-3" />
                <h1> Staffing Solutions</h1>
              </div>
            </Link>

            <Link to="/offerings/Leadership">
              <div className="flex justify-center items-center border-2 rounded-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-300 mx-2 p-7 my-1">
                <RiArtboardFill className="text-[32px] mx-3" />
                <h1>Leadership Development</h1>
              </div>
            </Link>
            <Link to="/offerings/executivecoaching">
              <div className="flex justify-center items-center border-2 rounded-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-300 mx-2 p-7 my-1">
                <IoBookSharp className="text-[32px] mx-3" />
                <h1>Executive Coaching</h1>
              </div>
            </Link>
            <Link to="/offerings/carrercounselling">
              <div className="flex justify-center items-center border-2 rounded-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-300 mx-2 p-7 my-1">
                <ImBooks className="text-[32px] mx-3" />
                <h1>Career Counselling</h1>
              </div>
            </Link>
            <Link to="/offerings/strategicconsulting">
              <div className="flex justify-center items-center border-2 rounded-[5px] hover:cursor-pointer hover:scale-105 transition-transform duration-300 mx-2 p-7 my-1">
                <FaPeopleArrows className="text-[32px] mx-3" />
                <h1>Strategic Consulting</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Why You Need Us Section */}
      <div
        id="offerings"
        className="flex flex-col justify-center items-center min-h-screen bg-cover px-6 mb-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),url(https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-10 text-center">
          WHY YOU NEED US
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mb-12 ">
          {/* Box 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-[#65b741] hover:text-white hover:shadow-xl">
            <h3 className="text-xl font-bold mb-4">Human-Centered Approach</h3>
            <p className="text-gray-700 hover:text-white">
              We focus on personal and professional growth, recognizing that
              business success stems from empowering individuals. We approach
              each human and organization based on unique needs and vision
              rather than one-size-fits-all.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-[#65b741] hover:text-white hover:shadow-xl">
            <h3 className="text-xl font-bold mb-4">Agility and Innovation</h3>
            <p className="text-gray-700 hover:text-white">
              As a new-age firm, we’re adaptive and forward-thinking, providing
              cutting-edge solutions that evolve with market trends.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-[#65b741] hover:text-white hover:shadow-xl">
            <h3 className="text-xl font-bold mb-4">Deep Industry Expertise</h3>
            <p className="text-gray-700 hover:text-white">
              Our team brings decades of hands-on experience, ensuring
              practical, actionable insights.
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:bg-[#65b741] hover:text-white hover:shadow-xl">
            <h3 className="text-xl font-bold mb-4">Holistic Support</h3>
            <p className="text-gray-700 hover:text-white">
              We offer end-to-end services—from staffing to strategic
              consulting—ensuring continuity and alignment across all client
              needs. We don’t just address issues; we help you evolve in the
              process.
            </p>
          </div>

          {/* Box 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform  hover:text-white  hover:bg-[#65b741] hover:shadow-xl">
            <h3 className="text-xl font-bold mb-4">Authentic Relationships</h3>
            <p className="text-gray-700 hover:text-white">
              We prioritize long-term partnerships over transactions, ensuring
              your success is our ongoing priority. We grow when you grow.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div
        className="flex flex-col lg:flex-row justify-around items-center space-y-4 lg:space-y-0 lg:px-0 px-9"
        style={{
          minHeight: "70vh",
          padding: "30px",
        }}
      >
        {/* Vision Card */}
        <div className="w-[350px] h-[400px] rounded overflow-hidden shadow-lg bg-white">
          <img
            src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Vision"
            className="w-full h-[60%] object-cover"
          />
          <div className="px-6 py-4 h-[40%] flex flex-col justify-center">
            <div className="font-bold text-xl mb-2">VISION</div>
            <p className="text-gray-700 text-[11px]">
              To be a global leader of talent & strategy.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="w-[350px] h-[400px] rounded overflow-hidden shadow-lg bg-white">
          <img
            src="https://images.pexels.com/photos/7666429/pexels-photo-7666429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Mission"
            className="w-full h-[60%] object-cover"
          />
          <div className="px-6 py-4 h-[40%] flex flex-col justify-center">
            <div className="font-bold text-xl mb-2">MISSION</div>
            <p className="text-gray-700 text-[11px]">
              To guide and assist companies and individuals with effective
              people and strategic solutions.
            </p>
          </div>
        </div>

        {/* Core Values Card */}
        <div className="w-[350px] h-[400px] rounded overflow-hidden shadow-lg bg-white">
          <img
            src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Core Values"
            className="w-full h-[60%] object-cover"
          />
          <div className="px-6 py-4 h-[40%] flex flex-col justify-center">
            <div className="font-bold text-xl mb-2">CORE VALUES</div>
            <p className="text-gray-700 text-[11px]">
              Integrity, Innovation, Teamwork, Customer Centricity, and
              Continuous Learning.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-white text-gray-800 py-12">
        {/* Knowledge Partners Section */}
        <div className="mb-12 w-full">
          <h2 className="text-4xl font-semibold mb-8 text-center"></h2>
          <div className="flex flex-col items-center">
            <div className="flex-shrink-0">
              <img
                src={lg1}
                alt="Knowledge Partner"
                className="w-32 md:w-48 aspect-square object-contain rounded-lg shadow-lg"
              />
            </div>
            <p className="mt-4 text-lg text-center font-medium text-gray-700">
              Knowledge Partner for FTCCI
            </p>
          </div>
        </div>

        {/* Startup Mentors Section */}
        <div className="mb-12 w-full">
          <h2 className="text-4xl font-semibold mb-8 text-center"></h2>
          <div className="flex flex-col items-center">
            <div className="flex justify-center space-x-4 flex-wrap">
              <div className="flex-shrink-0">
                <img
                  src={lg2}
                  alt="Startup Mentor 1"
                  className="w-32 md:w-48 aspect-square object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0">
                <img
                  src={lg3}
                  alt="Startup Mentor 2"
                  className="w-32 md:w-48 aspect-square object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0">
                <img
                  src={bhaskar}
                  alt="Startup Mentor 1"
                  className="w-32 md:w-48 aspect-square object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0">
                <img
                  src={dpiit}
                  alt="Startup Mentor 1"
                  className="w-32 md:w-48 aspect-square object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>

            <p className="mt-4 text-lg text-center font-medium text-gray-700">
              Startup Mentor at T-Hub, RICH, BHASKAR, DPIIT Govt of India
            </p>
          </div>
        </div>

        {/* Board Members and Advisory Board Members Section */}
        <div className="mb-12 w-full">
          <h2 className="text-4xl font-semibold mb-8 text-center"></h2>
          <div className="flex flex-col items-center">
            <div className="flex justify-center space-x-4 flex-wrap">
              <div className="flex-shrink-0">
                <img
                  src={lg5}
                  alt="Board Member 2"
                  className="w-32 md:w-48 aspect-square object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
            <p className="mt-4 text-lg text-center font-medium text-gray-700">
              Advisory Board Member at Abluva
            </p>
          </div>
          <div className="flex flex-col items-center mt-6">
            <div className="flex justify-center space-x-4 flex-wrap">
              <div className="flex-shrink-0 flex gap-4">
                <img
                  src={icf}
                  alt="Board Member 2"
                  className="w-32 md:w-48 aspect-square object-contain rounded-lg shadow-lg"
                />

                <img
                  src={hma}
                  alt="Board Member 2"
                  className="w-32 md:w-48 object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
            <p className="mt-4 text-lg text-center font-medium text-gray-700">
              Members of ICF and HMA
            </p>
          </div>
        </div>

        <div className="mb-12 w-full">
          <h2 className="text-4xl font-semibold mb-8 text-center"></h2>
          <div className="flex flex-col items-center">
            <div className="flex justify-center space-x-4 flex-wrap">
              <div className="flex-shrink-0">
                <img
                  src={msme}
                  alt="Startup Mentor 1"
                  className="w-32 md:w-48 aspect-square object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>

            <p className="mt-4 text-lg text-center font-medium text-gray-700">
              Registered as MSME with Government of India
            </p>
          </div>
        </div>
        <div className="mb-12 w-full">
          <h2 className="text-4xl font-semibold mb-8 text-center"></h2>
          <div className="flex flex-col items-center">
            <div className="flex justify-center space-x-4 flex-wrap">
              <div className="flex-shrink-0">
                <img
                  src={vb}
                  alt="Startup Mentor 2"
                  className="w-32 md:w-60 aspect-square object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0">
                <img
                  src={unsdg}
                  alt="Startup Mentor 1"
                  className="w-32 md:w-60 aspect-square object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>

            <p className="mt-4 text-lg text-center font-medium text-gray-700">
              Contributing to VIKSIT BHARAT & United Nations SDG
            </p>
          </div>
        </div>
        {/* Academia Section */}
        <div className="mb-12 w-full overflow-hidden">
          <h2 className="text-4xl font-semibold mb-8 text-center">
            ACADEMIA (INVITED FOR GUEST LECTURES)
          </h2>
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-infinite-scroll">
              {[...academiaLogos, ...academiaLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-4 mb-4">
                  <img
                    src={logo}
                    alt={`Academia ${index + 1}`}
                    className="w-32 h-32 object-contain rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-nowrap">
        {/* <img
          src={doc}
          className="w-full md:w-1/2 aspect-auto object-contain rounded-lg shadow-lg"
        /> */}
        <SDGSection />
      </div>

      {/* FAQ Section */}
      <div className="faq-section py-12 px-4 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-gray-300">
            {[
              {
                id: "faq1",
                question: "What services does Marichi Ventures offer?",
                answer:
                  "Marichi Ventures offers a range of services, including leadership development workshops, executive coaching, career counselling, startup mentoring, and corporate training programs tailored to enhance professional growth and organizational performance.",
              },
              {
                id: "faq2",
                question: "Who can benefit from Marichi Ventures' services?",
                answer:
                  "Our services are designed for professionals at all stages of their careers, from emerging leaders and mid-level managers to senior executives. We also work with startup founders and entrepreneurs looking for mentorship and guidance in the early stages of their ventures.",
              },
              {
                id: "faq3",
                question: 'What is the "Marichi Magic of 1%" campaign?',
                answer:
                  'The "Marichi Magic of 1%" campaign encourages individuals to invest at least 1% of their annual income in self-development, highlighting the importance of continuous learning and personal growth for long-term success.',
              },
              {
                id: "faq4",
                question:
                  "What are the United Nations Sustainable Development Goals (SDGs)?",
                answer: (
                  <span>
                    At Marichi Ventures, we align our solutions with four of the
                    17 SDGs. Through our coaching programs and services, we
                    contribute to achieving these goals by supporting
                    individuals and businesses in their journey toward
                    sustainable growth and prosperity. To learn more about the
                    SDGs and their importance,
                    <a
                      href="https://sdgs.un.org/goals"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#4CAF50",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      visit the official United Nations SDGs page.
                    </a>
                  </span>
                ),
              },

              {
                id: "faq5",
                question: "What is the structure of your coaching programs?",
                answer:
                  "Our coaching programs are typically structured as a series of sessions over a specific period, focusing on areas like leadership, career progression, and personal development. Each program is customized to meet the unique needs of the individual or organization.",
              },
              {
                id: "faq11",
                question:
                  "How can I enroll in a Marichi Ventures workshop or program?",
                answer:
                  "You can easily enroll in any of our workshops or programs by visiting our website, browsing our offerings, and filling out the registration form. For corporate inquiries or customized training, please contact us directly.",
              },
              {
                id: "faq6",
                question: "What makes Marichi Ventures' workshops unique?",
                answer:
                  "Our workshops combine practical case studies, interactive exercises, and personalized coaching to ensure participants gain real-world insights and skills. We also integrate holistic well-being into our programs to support the overall development of participants.",
              },
              {
                id: "faq7",
                question:
                  "How can startups benefit from Marichi Ventures' mentoring services?",
                answer:
                  "Startups can benefit from our mentoring services by receiving guidance on the ideation to MVP stages, strategic planning, and leadership development. We help founders overcome challenges and accelerate growth with expert advice and resources.",
              },
              {
                id: "faq8",
                question: 'What is the "Marichi School of Unlearning"?',
                answer:
                  'The "Marichi School of Unlearning" is focused on helping individuals and organizations challenge existing beliefs and practices, encouraging innovation and adaptability in today\'s fast-changing world.',
              },
              {
                id: "faq9",
                question:
                  "Can Marichi Ventures tailor programs for corporate clients?",
                answer:
                  "Yes, we specialize in creating customized training and development programs for corporate clients, addressing specific business needs and goals. We work closely with organizations to ensure our solutions are impactful and relevant.",
              },
              {
                id: "faq10",
                question:
                  "How do I stay updated on Marichi Ventures' latest offerings and events?",
                answer:
                  "You can stay updated by following us on LinkedIn, subscribing to our newsletter, or joining our WhatsApp group, where we regularly post information about upcoming workshops, webinars, and other events.",
              },
            ].map(({ id, question, answer }) => (
              <div className="py-4 border-b border-gray-300" key={id}>
                <button
                  className="w-full text-left flex justify-between items-center focus:outline-none"
                  onClick={() => {
                    const currentFaq = document.getElementById(id);
                    const isCurrentlyOpen =
                      !currentFaq.classList.contains("hidden");
                    document
                      .querySelectorAll(".faq-answer")
                      .forEach((element) => {
                        element.classList.add("hidden");
                      });
                    document.querySelectorAll(".faq-icon").forEach((icon) => {
                      icon.classList.remove("rotate-180");
                    });
                    if (!isCurrentlyOpen) {
                      currentFaq.classList.remove("hidden");
                      document
                        .getElementById(`icon-${id}`)
                        .classList.add("rotate-180");
                    }
                  }}
                >
                  <span className="font-medium text-lg">{question}</span>
                  <svg
                    id={`icon-${id}`}
                    className="w-6 h-6 transition-transform duration-300 faq-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div id={id} className="hidden mt-2 text-gray-700 faq-answer">
                  <p>{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 10s linear infinite;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default About;
