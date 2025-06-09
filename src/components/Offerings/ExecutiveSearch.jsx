import React from "react";
import { Link } from "react-router-dom";


const ExecutiveSearch = () => {
  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/6953567/pexels-photo-6953567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
    backgroundSize: "cover",
    position: "relative",
  };

  const divStyle2 = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/94818/pexels-photo-94818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",

  };

  const divStyle3 = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/48770/business-time-clock-clocks-48770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",

  };
  const divStyle4 = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.pexels.com/photos/8892/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",

  };

  const Card = ({ title, content }) => (
    <div className="rounded overflow-hidden shadow-lg p-6 mx-[6px] my-4 md:flex-shrink-0 md:my-2 w-full md:w-64 bg-slate-100 ">
      <div className="font-bold text-l mb-2">{title}</div>
      <p className="text-gray-700 text-[12px]">{content}</p>
    </div>
  );
  return (
    <>
      <div className=" h-[100vh] bg-fixed" style={divStyle}>
        <div
          className="text-container text-white w-full md:mx-auto"
          style={{
            position: "absolute",
            top: "43%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h1 className="text-[#FF3131] absolute md:top-[-100px] sm:top-[-60px] top-[-160px] left-0 md:px-[9rem] px-[4rem]">
            <Link to='/offerings'>OFFERINGS </Link>
            <span className="text-white">/ EXECUTIVE SEARCH</span>

            <div
              style={{
                borderTop: "1px solid grey",
                width: "100%",
                margin: "6px 0 0",
              }}
            ></div>
          </h1>
          <h1 className="font-bold text-5xl leading-20">
            Marichi Executive Search
          </h1>
          <h1 className=" text-3xl mt-6">
            <span className="text-[#FF3131]">"</span> Shaping tomorrow's leadership today
            <span className="text-[#FF3131]">"</span>
          </h1>
        </div>
      </div>

      <div className="flex items-center max-h-screen bg-fixed h-[80vh]" style={divStyle2}>
        <div className="text-white text-center w-full md:w-3/4 lg:w-1/2 mx-auto md:p-4 p-8">
          <div className="border-t-2 border-gray-300 w-full my-4"></div>
          <h1 className="font-bold text-[18px] mb-4">
            Welcome to Marichi Executive Search, where exceptional leadership meets unparalleled opportunities. As a premier executive search firm, we specialize in identifying and placing top-tier executives who drive success and innovation for organizations across industries
          </h1>
          <div className="border-t-2 border-gray-300 w-full mt-4"></div>
        </div>
      </div>

      <div>
        <div className="md:flex justify-around md:w-full w-screen items-center border-b-2 bg-[#7b7676]">
          <img
            src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className=" h-[33rem] md:w-1/2 w-full object-cover"
          />
          <div className="text-center md:px-[6rem] px-[2rem] md:my-7 my-12  md:w-1/2">
            <h1 className=" font-bold text-[40px] mb-7 text-white leading-7">
              WHO WE ARE <br />
            </h1>
            <p className="text-[18px] font-normal text-white">
              Our work extends beyond filling positions, it's about crafting legacies. <br /> We take pride in contributing to the success stories of both our clients and the executives we place. <br /> By facilitating impactful matches, we play a pivotal role in shaping the future of organizations and fostering leadership excellence.

            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="md:flex justify-around md:w-full w-screen items-center border-b-2 bg-[#3a3a3a] mt-[-30px] md:mt-[-3px] md:pt-0 pt-9">
          <div className="text-center md:px-[6rem] px-[2rem] md:w-1/2 md:pb-0 pb-12">
            <h1 className=" font-bold text-[40px] my-7 text-white leading-7">
              WHAT WE DO <br />
            </h1>
            <p className="text-[18px] font-normal text-white">
              We specialize in unlocking the full potential of your organization by strategically connecting you with top-tier executive talent. <br /> With a deep understanding of the dynamic business landscape, we are committed to reshaping your leadership team with the best-fit executives who embody the vision, values, and goals of your company.

            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-[33rem] md:w-1/2 md:ml-[-5px] md:pl-[2rem] object-cover"
          />
        </div>
      </div>


      <div className="flex flex-col items-center justify-center min-h-screen py-7 my-[-3px] bg-[#D3D3D3]" style={divStyle4}>
        <div className="mb-6 text-center">
          <h2 className="text-[40px] font-bold text-[#fbfcfd]">WHY YOU NEED US</h2>
          <p className="w-full text-[#fbfcfd] px-[2rem]">In the dynamic landscape of business, the key to sustainable success lies in the caliber of leadership at the helm. <br /> At Marichi Executive Search, we understand that finding the right executives to lead your organization is not just a task, it's a strategic imperative. <br /> Here's why you need us in your corner:
          </p>
        </div>
        <div className="flex flex-wrap justify-around w-[full] md:w-[226vh] md:ml-4 md:px-[14rem] px-[2rem]">
          <Card title="Tailored Solutions: Your Success, Your Way 
" content="One size does not fit all, especially when it comes to leadership. We believe in crafting customized solutions that align with your organizational goals, culture, and unique challenges. Our tailored approach ensures that the executives we bring to your doorstep not only meet the criteria on paper but resonate with the ethos of your company.
" />
          <Card title="Extensive Network: Access to Exceptional Talent
" content="In the world of executive search, connections are everything. Our extensive global network and strategic partnerships grant us access to a pool of exceptional executive talent. We don't just fill positions; we identify leaders who bring strategic vision, innovation, and a commitment to driving your business forward.
" />
          <Card title="Rigorous Assessment: Beyond the Resume 
" content="Our commitment to quality extends beyond the surface. We go beyond the resume to conduct thorough assessments, evaluating candidates not just on their qualifications but on their leadership style, cultural fit, and potential for long-term impact. Our rigorous process ensures that the executives we present are the right fit for your organization's future.
" />
          <Card title="Confidentiality and Trust: Your Success, Our Priority
" content="We understand the sensitivity of executive searches and the importance of confidentiality. At Marichi Executive Search, your trust is our priority. Our discreet and confidential approach ensures that your search is conducted with the utmost professionalism and respect for your organizational dynamics.
" />
          <Card title="Long-Term Partnerships: Beyond Placement 
" content="Our commitment doesn't end with the placement. We believe in cultivating long-term partnerships with our clients, providing ongoing support and insight to ensure the success of the executives we place. Your success is our success.
" />
        </div>
      </div>

      <div
        className="md:flex justify-center md:h-[510px] md:py-6 py-16 text-white"
        style={divStyle3}
      >
        <div
          className="md:w-full md:max-w-screen-md m-auto text-center bg-opacity-10"
        >
          <h1 className="font-semibold text-l md:text-6xl mb-4">
            Elevate your leadership <br /> team with <br /> Marichi Executive Search.
          </h1>
          <p className="text-sm md:text-base mb-4">
            Partner with us to redefine the future of your organization through visionary leadership.
          </p>
          <Link to="/offerings/executivesearch">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 md:py-3 px-4 md:px-6  rounded-md">
              Get Started with Executive Search
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ExecutiveSearch;
