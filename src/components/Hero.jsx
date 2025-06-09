/*import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Academia from "./Academia";
import brochure from "../assets/Marichi-Brochure.pdf";
import { Link } from "react-router-dom";
import { heroimg2, homeimg, homeimg3, homeimg4, redLine } from "../assets";
import { heroimg } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import Carousel from "./Carousel";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(https://images.pexels.com/photos/1048013/pexels-photo-1048013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <div>
        <Carousel />
      </div>
      <div className="md:flex justify-around items-center md:mb-0 mt-[4rem] md:mt-[6%] sm:mt-[12%] md:w-full w-screen text-xl leading-1">
        <div
          id="parent"
          className="flex flex-col justify-around items-center text-[50px] font-homefont text-[#65b741]  md:w-1/2"
          data-aos="fade-right"
          data-aos-anchor="#parent"
        >
          <div id='brochure' className="text-center place-content-center md:mb-0 mb-8 px-5 md:mx-0 mx-auto ">
            <h1 className="font-logoFont3 font-bold text-center leading-[24px] md:mt-9 text-[#4b8831] ">
              MARICHI
            </h1>
            <h1 className="font-logoFont3 text-center font-semibold leading-[54px] text-[#4b8831]  ">
              VENTURES
            </h1>
            <p className="font-homepara text-[20px] text-center md:ml-[1rem] ml-[1rem] w-[90%] text-gray-600">
              Welcome to Marichi Ventures, where minds converge, ideas flourish,
              and connections spark innovation. We are thrilled to have you join
              us on this journey of linking minds and shaping a collective
              vision for the future. Step into a world of collaboration and
              creativity. <br />
              At Marichi Ventures, we believe in the power of linking minds to
              unleash boundless possibilities. Your presence adds an exciting
              dimension to our community, and we cannot wait to explore, create,
              and grow together.
            </p>
            <button className="relative overflow-hidden pl-6 h-14 md:mx-[8rem] sm:mx-[11rem] mx-auto mb-9 sm:mb-0 mt-9 flex justify-evenly space-x-6 items-center bg-[#65b741] ">
              <span className="uppercase text-base font-downloadfont text-white">
                Download Brochure
              </span>
              <a className="button" href={brochure} download="Marichi-Brochure.pdf">
                <div
                  aria-hidden="true"
                  className="w-14 bg-[#4b8831] transition duration-300 -translate-y-7 group-hover:translate-y-7"
                >
                  <div className="h-14 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 m-auto fill-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="h-14 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 m-auto fill-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </button>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="h-[30rem] object-cover sm:ml-0 md:w-1/2"
          data-aos="zoom-in"
        />
      </div>

      
      <div
        id='ex'
        className="md:flex justify-center md:h-[510px] py-6 text-white"
        style={sectionStyle}
      >
        <div
          className="md:w-full md:max-w-screen-md m-auto text-center bg-opacity-10"
          data-aos="zoom-in"
        >
          <h1 className="font-semibold text-2xl md:text-6xl mb-4">
            Discover Our Offerings: <br /> Explore Limitless Horizons
          </h1>
          <p className="text-sm md:text-base mb-4">
            Embark on a journey of discovery with our diverse range of
            offerings. <br />
            From college graduate to industry leader, there's something for
            everyone. <br /> Dive into our offerings and find the solutions that
            align with your goals and aspirations.
          </p>
          <Link to="/offerings">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-md">
              Explore Our Offerings
            </button>
          </Link>
        </div>
      </div>

      <div className="md:flex justify-around md:w-full w-screen items-center border-b-2 bg-gray-100">
        <img
          src="https://images.pexels.com/photos/225502/pexels-photo-225502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="h-[33rem] md:w-1/2 md:mr-5  object-cover"
        />
        <div className="text-center md:px-[4rem] sm:px-[2rem] mb-9 px-auto md:w-1/2">
          <h1 className=" font-bold text-[40px] md:mt-0 mt-7 mb-7 text-[#4b8831] leading-9">
            CONNECT WITH US <br />
            <span className="text-[18px] text-[#407629] md:px-0 px-4 ">
              {" "}
              LET'S BUILD SOMETHING AMAZING TOGETHER
            </span>
          </h1>
          <p className="text-[18px] font-normal text-gray-600 px-5">
            Have questions, ideas, or just want to connect? <br /> We're here
            for you! <br />
            Contact us today, and let's start a conversation. <br /> Our team is
            ready to collaborate, answer your queries, and explore the endless
            possibilities that arise when minds come together.
          </p>
          <Link to="/contact">
            <button
              type="button"
              className="focus:outline-none text-white bg-[#65b741] hover:bg-[#4e993d] focus:ring-4 focus:ring-[#4e993d] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#4e993d] dark:hover:bg-[#3f7c34] dark:focus:ring-[#3f7c34] my-6"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
*/

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Academia from "./Academia";
import brochure from "../assets/Marichi-Brochure.pdf";
import { Link } from "react-router-dom";
import { heroimg2, homeimg, homeimg3, homeimg4, redLine } from "../assets";
import { heroimg } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import Carousel from "./Carousel";
import ActivitiesHeroSection from "./ActivitiesHeroSection";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(https://images.pexels.com/photos/1048013/pexels-photo-1048013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div>
        <Carousel />
      </div>
      <div className="md:flex justify-around items-center md:mb-0 mt-[4rem] md:mt-[6%] sm:mt-[12%] md:w-full w-screen text-xl leading-1">
        <div
          id="parent"
          className="flex flex-col justify-around items-center text-[50px]  text-[#65b741]  md:w-1/2"
          data-aos="fade-right"
          data-aos-anchor="#parent"
        >
          <div
            id="brochure"
            className="text-center place-content-center md:mb-0 mb-8 px-5 md:mx-0 mx-auto"
          >
            <h1 className="font-logoFont3 font-bold text-center leading-[24px] md:mt-9 text-[#4b8831]">
              MARICHI
            </h1>
            <h1 className="font-logoFont3 text-center font-semibold leading-[54px] text-[#4b8831]">
              VENTURES
            </h1>
            <p className="text-[20px] text-center md:ml-[1rem] ml-[1rem] w-[90%] text-gray-600">
              Welcome to Marichi Ventures, where minds converge, ideas flourish,
              and connections spark innovation. We are thrilled to have you join
              us on this journey of linking minds and shaping a collective
              vision for the future. Step into a world of collaboration and
              creativity. <br />
              At Marichi Ventures, we believe in the power of linking minds to
              unleash boundless possibilities. Your presence adds an exciting
              dimension to our community, and we cannot wait to explore, create,
              and grow together.
            </p>
            <div className="flex justify-center mt-9">
              <button className="relative overflow-hidden h-14 md:w-[300px] w-[90%] flex justify-between items-center bg-[#65b741]">
                <span className="uppercase text-base font-roboto text-white pl-6">
                  Download Brochure
                </span>

                <a
                  className="button"
                  href={brochure}
                  download="Marichi-Brochure.pdf"
                >
                  <div
                    aria-hidden="true"
                    className="w-14 bg-[#4b8831] transition duration-300 -translate-y-7 group-hover:translate-y-7"
                  >
                    <div className="h-14 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 m-auto fill-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="h-14 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 m-auto fill-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="h-[30rem] object-cover sm:ml-0 md:w-1/2"
          data-aos="zoom-in"
        />
      </div>

      {/* explore offerings section */}
      <div
        id="ex"
        className="md:flex justify-center md:h-[510px] py-6 text-white"
        style={{ marginTop: "100px", ...sectionStyle }}
      >
        <div
          className="md:w-full md:max-w-screen-md m-auto text-center bg-opacity-10"
          data-aos="zoom-in"
        >
          <h1 className="font-semibold text-2xl md:text-6xl mb-4">
            Discover Our Offerings: <br /> Explore Limitless Horizons
          </h1>
          <p className="text-sm md:text-base mb-4">
            Embark on a journey of discovery with our diverse range of
            offerings. <br />
            From college graduate to industry leader, there's something for
            everyone. <br />
            Dive into our offerings and find the solutions that align with your
            goals and aspirations.
          </p>
          <Link to="/offerings">
            <button className="bg-[#65B741] hover: text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-md">
              Explore Our Offerings
            </button>
          </Link>
        </div>
      </div>

      {/* Sections for show casing Activities of Company - Events,Webinars,Blogs and Newsletters */}
      <ActivitiesHeroSection />
      <div
        className="md:flex justify-around md:w-full w-screen items-center border-b-2 bg-white "
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <img
          src="https://images.pexels.com/photos/225502/pexels-photo-225502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="h-[33rem] md:w-1/2 md:mr-5 object-cover"
        />
        <div className="text-center md:px-[4rem] sm:px-[2rem] mb-9 px-auto md:w-1/2">
          <h1 className=" font-bold text-[40px] md:mt-0 mt-7 mb-7 text-[#4b8831] leading-9">
            CONNECT WITH US <br />
            <span className="text-[18px] text-[#407629] md:px-0 px-4">
              LET'S BUILD SOMETHING AMAZING TOGETHER
            </span>
          </h1>
          <p className="text-[18px] font-normal text-grey-600 px-5">
            Have questions, ideas, or just want to connect? <br /> We're here
            for you! <br />
            Contact us today, and let's start a conversation. <br /> Our team is
            ready to collaborate, answer your queries, and explore the endless
            possibilities that arise when minds come together.
          </p>
          <Link to="/contact">
            <button
              type="button"
              className="focus:outline-none text-white bg-[#65b741] hover:bg-[#4e993d] focus:ring-4 focus:ring-[#4e993d] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#4e993d] dark:hover:bg-[#3f7c34] dark:focus:ring-[#3f7c34] my-6"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
