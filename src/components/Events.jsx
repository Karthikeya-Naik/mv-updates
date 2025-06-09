import React from "react";
import { Link } from "react-router-dom";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { RiArtboardFill } from "react-icons/ri";
import { RiBarChart2Fill } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { ImBooks } from 'react-icons/im'
import { MdManageSearch } from 'react-icons/md'
import { GiMaterialsScience } from "react-icons/gi"
import { FaPeopleArrows } from "react-icons/fa6";

const Events = () => {
    const data = [
        {
            item:"Training & Placement",
            url:"/offerings/tnp",
        },
        {
            item: "Staffing Solutions",
            url:"/offerings/staffingsolutions",
        },
        {
            item:"Career Counselling",
            url:"/offerings/carrercounselling",
        },
        {
            item:"Leadership Development",
            url:"/offerings/leadership",
        },
        {
            item:"Executive Coaching",
            url:"/offerings/executivecoaching",
        },
        {
            item:"Executive Search",
            url:"/offerings/executivesearch",
        },
        {
            item:"Strategic Consulting",
            url:"/offerings/strategicconsulting",
        },
        {
            item: "Event Organization",
            url:"/offerings/eventorganization",
        },  
    ];

    return (
        <>
            <div className="md:flex bg-fixed md:h-[610px] py-6  text-white "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
          backgroundPosition: "bottom left",
        }}>
        <div className="md:w-full md:max-w-screen md:px-[4rem]">
          <h1 className=" text-4xl md:text-left text-center md:text-5xl mb-5 md:my-10  p-8">
            OUR EVENTS
            <div className="red-line mx-auto ml-[-6%] md:ml-[28%] mt-[1px] md:mt-[-1.5%] md:w-[500px] " ></div>
          </h1>

          {/* Grids */}
          <div className="grid md:grid-cols-2 md:my-10 grid-cols-1 text-[18px] font-bold md:px-[10rem] sm:px-[7rem] px-[3rem] ">
            {/* First column with buttons */}
            

            <Link
                to='/contact'
               
              >
                <div className="flex justify-center items-center border-2  rounded-[5px]   hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1">
                
                  <GiMaterialsScience className="text-[32px] mx-3" />
                  <h1 className=" ">
                  Data Sciences Summit
                </h1>
                </div>
              </Link>


              {/* <Link
                to='/offerings/tnp' 
              >
                <div className="flex justify-center items-center border-2  rounded-[5px]  hover:cursor-pointer hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1  ">
                  <TbArrowBadgeRightFilled className="text-[32px] mx-3" />
                  <h1 className="">
Seminars                </h1>
                </div>
              </Link> */}
            
            
              <Link
                to='/contact'
              >
                <div className="flex justify-center  items-center border-2  rounded-[5px]  hover:cursor-pointer hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1">
               
                  <RiArtboardFill className='text-[32px] mx-3' />
                  <h1>
Hackathon                </h1>
                </div>
              </Link>
            
              <Link
                to='/contact'
              >
                <div className="flex justify-center items-center border-2 rounded-[5px]   hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1  ">
                
                  <RiBarChart2Fill className="text-[32px] mx-3" />
                  <h1 className="">
                  Seminars
                </h1>
                </div>
              </Link>
            
              <Link
                to='/contact' 
              >
                <div className="flex justify-center items-center border-2  rounded-[5px]   hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1">
                
                  <IoBookSharp className="text-[32px] mx-3" />
                  <h1 className=" ">
Ideathon                </h1>
                </div>
              </Link>
            


            {/* Second column with buttons */}
          
              <Link
                to='/contact'
                

              >
                <div className="flex justify-center items-center border-2  rounded-[5px]   hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1">
                
                  <ImBooks className="text-[32px] mx-3" />
                  <h1 className="">
                  College Visits
                </h1>
                </div>
              </Link>
            
            
              {/* <Link
                to='/offerings/executivesearch'
                
              >
                <div className="flex justify-center items-center border-2  rounded-[5px]  hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1">
                
                  <MdManageSearch className="text-[32px] mx-3" />
                  <h1 className=" ">
                  Executive Search
                </h1>
                </div>
              </Link> */}
            
            
             
            
            
              <Link
                to='/contact'
              >
                <div className="flex justify-center items-center border-2  rounded-[5px]   hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1">
                
                  <FaPeopleArrows className="text-[32px] mx-3" />
                  <h1 className=" ">
                  Crowd Sourcing
                </h1>
                </div>
              </Link>
          </div>
        </div>
        </div>
            
        </>

    );
};

export default Events;
