
import React, { useEffect } from "react";
import { industries, grid1, grid2, grid3, midsshortlogo } from "../assets";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Industry = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="md:flex flex-col md:mt-[6%] mt-[15%] relative overflow-hidden">
        <div className="text-left relative"> {/* Added relative class */}
          <img src={midsshortlogo} alt="" className="h-[95px] m-4 md:absolute flex md:mx-0 mx-auto" />
          <div className="md:text-white text-black md:absolute block md:my-[15rem] md:mx-[3rem] md:text-left text-center z-0" data-aos="zoom-in-down">
            
            <h1 className="text-[50px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold leading-[62px] md:text-left text-center md:mx-0 mx-auto ">
              ACCESS TO THE <br />
              BEST RESOURCES <br />
              <span className="font-acadfont font-semibold italic text-yellow-400">
                {" "}
                for success
              </span>
            </h1>
            <p className="max-w-[470px] md:text-left md:mx-0 mx-auto text-center mt-5 text-[20px] md:text-[18px] ">
              We offer carefully curated and meticulously trained resources to help
              life sciences organizations make a difference faster.
            </p>
            </div>
    <img src={industries} alt="industries" className="md:w-full md:flex hidden md:mt-[20px]" />
        </div>
        <div className="flex flex-col w-full items-center">
          <h1 className="font-bold ss:text-[72px] p-6 text-[32px] text-black ss:leading-[100px] leading-[20px] mt-[1rem]">
            WHO ARE WE?
          </h1>
          <p className="font-semibold text-[20px] text-black items-center max-w-[80%] mt-5">
            MIDS is a centre of learning for niche life sciences courses aimed at
            training, nurturing, and mentoring Data Scientists, who can make
            impactful contributions to drug discovery and make a life-changing
            difference.
          </p>
          <h1 className="font-bold ss:text-[72px] text-[32px] text-black ss:leading-[100px] leading-[20px] my-10">
            WHAT WE TEACH?
          </h1>
          <div
            id="main"
            className="grid grid-cols-1 md:grid-cols-3 gap-1 justify-center mt-5 pl-5 pr-5 md:pl-20 md:pr-20 relative z-0"
          >
            <div class="bg-[#ebebfb] w-26 h-[32] items-center justify-between p-3 text-[17px]" data-aos="zoom-in">
              <span className="font-bold ">Technical</span> <br />
              SAS: Data Steps, Macros, GTL R: TFL Validation, R Shiny Python: Basics
            </div>
            <div class="bg-white w-26 h-[32] p-3 text-[17px]" data-aos="zoom-in" data-aos-delay="1500">
              <span className="font-bold ">Functional</span> <br />
              CDISC: SDTM, ADaM Submission Package: CRF Annotation, SDRG, ADRG,
              Define.xml
            </div>
            <div class="bg-[#fef7e6] w-26 h-[32] p-3 text-[17px]" data-aos="zoom-in" data-aos-delay="1000">
              <span className="font-bold ">Statistics</span> <br />
              Study Design, Sampling, Statistical Inference, Survival Analysis,
              Bayesian Methods, Meta Analysis
            </div>
            <div class="bg-white w-26 h-[32] p-3 text-[17px]" data-aos="zoom-in" data-aos-delay="1000">
              <span className="font-bold ">Domain</span> <br />
              Drug Development, Clinical Study Documents, Data Flow, TA Awareness
              (Oncology, Dermatology)
            </div>
            <div class="bg-[#fee9e9] w-26 h-[32] p-3 text-[17px]" data-aos="zoom-in" data-aos-delay="500">
              <span className="font-bold ">Soft Skills</span> <br />
              Communication Skills, Interviewing Skills, Teamwork, Networking,
              Problem Solving, Critical Thinking
            </div>
            <div class="bg-white w-26 h-[32] p-3 text-[17px]" data-aos="zoom-in" data-aos-delay="1000">
              <span className="font-bold ">Industry Awareness</span> <br />
              Regulatory Agencies, Industry Bodies, Standards Bodies, Career
              Opportunities (Pharma, CRO, SDO)
            </div>
          </div>
          <div className="flex flex-col items-center mt-10 pt-10 bg-[#f1f1f1] overflow-hidden relative z-0">
            <h1 className="mb-3 font-bold ss:text-[72px] text-[32px] text-black ss:leading-[100px] leading-[20px]" data-aos="zoom-out">
              WHY CHOOSE US?
            </h1>
            <div
              id="main"
              className="md:flex text-center pb-10 mt-5 pl-5 pr-5 md:pl-20 md:pr-20 items-center bg-[#f1f1f1] relative z-0"
            >
              <div class="w-90 text-center px-[2rem] py-[2rem]" data-aos="zoom-out" data-aos-delay="">
                {/* ... (unchanged code for grid item) ... */}
                <img src={grid1} alt="" className="mb-2 m-auto" />
                <h1 className=" font-bold text-center">JOB READY FROM DAY 0</h1>
                <p className="text-center mr-5">
                  Candidates undergo no-nonsense training in SAS, R, Statistics and
                  Data Science technologies along with real-life case studies for
                  comprehensive learning.
                </p>
              </div>
              <div class="w-90 py-[2rem] px-[2rem]" data-aos="zoom-out" data-aos-delay="">
                {/* ... (unchanged code for grid item) ... */}
                <img src={grid2} alt="" className="mb-3 m-auto" />
                <h1 className="font-bold text-center"> TRAINED BY INDUSTRY </h1>
                <p className="text-center  ">
                  MIDS faculty is comprised of industry leaders and SMEs who know
                  drug discovery process inside out to train candidates on relevant
                  processes and techniques.
                </p>
              </div>
              <div class="w-90 px-[2rem]" data-aos="zoom-out" data-aos-delay="">
                {/* ... (unchanged code for grid item) ... */}
                <img src={grid3} alt="" className="mb-2 text-center m-auto" />
                <h1 className="font-bold text-center">INTERPERSONAL SKILLS</h1>
                <p class="text-center ">
                  Soft skills training is essential to ensure the success of
                  candidate by way of exhibiting desirable attitude, teamwork and
                  communication expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white flex flex-col md:flex-row justify-around ">
          <div className="bg-blue-600 font-semibold w-full md:w-[50%] text-center p-3 md:mt-0 mt-4 ">
            <span>Your Phone No Here</span> <br />
            <span>Your Address Here</span>
          </div>
          <div className="bg-yellow-400 font-semibold w-full md:w-[50%] text-center p-3   md:mt-0 mt-4 ">
            <span>hello@marichi.com</span> <br />
            <span>www.marichi.com</span>
          </div>
        </div>
      </div>

    </>
  );
};

export default Industry;





