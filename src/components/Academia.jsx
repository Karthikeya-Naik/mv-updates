import React, { useEffect } from 'react';
import { academia, mids, midslogo, midsshortlogo } from '../assets';
import { FaPlay } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Academia = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className='md:flex flex-1 justify-between items-center border-solid mt-5'>
        <div className='p-9 mx-4 text-left pl-8 ml-8'>
          <img src={midslogo} alt="" className='h-[90px] my-[9%] mb-[8%]' data-aos="fade-down-right" />
          <h1 className='text-[50px] font-bold leading-[62px]' data-aos="fade-right">Crafting Careers <br />
            <span className='font-acadfont italic font-normal text-[#65B741]'>in the Life Sciences industry</span>
          </h1>

          <h3 className='text-[30px] font-semibold mt-[60px] mb-3' >
            ABOUT MIDS
          </h3>
          <p className='font-normal text-[20px] text-gray-600 mb-7'>MIDS is a center of learning for niche life sciences <br />
            courses aimed at training, nurturing, and mentoring <br />
            Data Scientists, who can make impactful contributions <br />
            to drug discovery and make a life-changing difference.
          </p>
          <p className='font-normal text-gray-600 text-[20px]' >
            The faculty is led by industry veterans and subject matter <br />
            experts with proven experience and renown in the <br />
            field of drug discovery.
          </p>
        </div>
        <div className='mt-5 flex justify-end'>
          <img src={academia} alt="academia" data-aos="zoom-in-left" className='sm:h-[40rem] h-[20rem] sm:w-[35rem]' />
        </div>
      </div>

      {/* FLOW CHART */}
      <div className='text-center mt-10'>
        <img src={mids} data-aos="flip-down" alt="flowchart" className='mx-auto w-full' />
      </div>

      {/* FOOTER */}
      <div>
        <div className='sm:flex justify-between items-center px-[15%] bg-gray-100 p-8'>
          <div className='w-full sm:w-1/2'>
            <h1 className='text-[25px] font-bold'>More Details of The Programme</h1>
            <div className='flex justify-around text-[18px]'>
              <ul className='list-none text-center my-8 leading-7'>
                <li className='flex items-center'><FaPlay className='mr-3 text-red-500' /> Eligibility - PG - M.Sc. in Stats, Maths, Computers, Life <br />
                  Sciences. M.Pharma, B. Tech, B. Pharma</li>
                <li className='flex items-center'><FaPlay className='mr-3 text-red-500' /> Clinical Programmer</li>
                <li className='flex items-center'><FaPlay className='mr-3 text-red-500' /> SAS Programmer</li>
                <li className='flex items-center'><FaPlay className='mr-3 text-red-500' /> R Programmer</li>
                <li className='flex items-center'><FaPlay className='mr-3 text-red-500' /> Data Scientist</li>
              </ul>
            </div>
          </div>
          <div className='w-full sm:w-1/2 mt-5 sm:mt-0'>
            <h1 className='text-[25px] font-bold'>Potential Placement roles</h1>
            <div className='flex flex-1 justify-around text-[18px]'>
              <ul className='list-none text-center my-8 leading-7'>
                <li className='flex flex-1 items-center'><FaPlay className='mr-3 text-red-500' /> Statistical Programmer</li>
                <li className='flex flex-1 items-center'><FaPlay className='mr-3 text-red-500' /> Clinical Programmer</li>
                <li className='flex flex-1 items-center'><FaPlay className='mr-3 text-red-500' /> SAS Programmer</li>
                <li className='flex flex-1 items-center'><FaPlay className='mr-3 text-red-500' /> R Programmer</li>
                <li className='flex flex-1 items-center'><FaPlay className='mr-3 text-red-500' /> Data Scientist</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='sm:flex flex-1 sm:justify-center items-center p-3' data-aos="fade-left">
          <img src={midsshortlogo} alt="midslogo" className='h-[80px] object-center sm:mx-0 mx-auto' />
          <h1 className='text-[20px] text-center mx-8'>Marichi Institute of Data Science (MIDS) is owned and managed <br />
            by Marichi Ventures
          </h1>
        </div>
        <div className='sm:flex justify-evenly items-center py-6 bg-[#65B741]' data-aos="fade-right">
          <h1 className='text-[25px] text-center'>Get in Touch with Us</h1>
          <h1 className='flex items-center text-[25px] text-center'><BiSolidPhoneCall className='text-[40px] mx-4 mt-2 text-center ' /> +123-456-789</h1>
          <h1 className='flex items-center text-[25px] text-center' ><IoIosMail className='text-[40px] mx-4 mt-2' /> youremail@gmail.com</h1>
        </div>
      </div>
    </>
  );
}

export default Academia;
