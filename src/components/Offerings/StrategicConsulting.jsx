import React from "react";
import { Link } from "react-router-dom";

const StrategicConsulting = () => {
  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
    backgroundSize: "cover",
    position: "relative",
    backgroundPosition: "center",
  };

  const divStyle2 = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/4556779/pexels-photo-4556779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
    backgroundSize: "cover",

    position: "relative",
    backgroundPosition: "center",
  };

  const divStyle3 = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/48770/business-time-clock-clocks-48770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
    backgroundSize: "cover",

    position: "relative",
    backgroundPosition: "center",
  };
  const divStyle4 = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.pexels.com/photos/8892/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
    backgroundSize: "cover",

    position: "relative",
    backgroundPosition: "center",
  };

  const Card = ({ title, content }) => (
    <div className="rounded overflow-hidden shadow-lg p-6 mx-[6px] my-4 md:flex-shrink-0 md:my-2 w-full md:w-64 bg-slate-100 ">
      <div className="font-bold text-l mb-2">{title}</div>
      <p className="text-gray-700 text-[12px]">{content}</p>
    </div>
  );

  return (
    <>
      <div className="bg-fixed h-[100vh]" style={divStyle}>
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
          <h1 className="text-[#fff958] absolute md:top-[-100px] sm:top-[-60px] top-[-160px] left-0 md:px-[9rem] px-[4rem]">
            <Link to='/offerings'>OFFERINGS </Link>
            <span className="text-white">/ STRATEGIC CONSULTING</span>
            <div
              style={{
                borderTop: "1px solid grey",
                width: "100%",
                margin: "10px 0 0",
              }}
            ></div>
          </h1>
          <h1 className="font-bold text-5xl md:leading-[100px] ">
            Marichi Strategic Consulting
          </h1>
          <h1 className=" text-3xl">
            <span className="text-[#fff958]">"</span>Global Impact, Local
            Expertise
            <span className="text-[#fff958]">"</span>
          </h1>
        </div>
      </div>

      <div
        className="flex items-center max-h-screen h-[80vh]"
        style={divStyle2}
      >
        <div className="text-gray-700 text-center w-full md:w-3/4 lg:w-1/2 mx-auto p-4">
          <div className="border-t-2 border-gray-300 w-full my-4"></div>
          <h1 className="font-bold text-[18px] mb-4 text-white">
            Talent is the heartbeat of any Global Capability Center (GCC).
            <br /> Our expertise in global talent management ensures the
            recruitment, development, and retention of high-performing teams.
            <br /> We help organizations create a culture of excellence,
            diversity, and innovation to drive sustained success.
            <br />
            We are architects of strategic brilliance, dedicated to guiding
            organizations in establishing and optimizing Global Capability
            Centers. <br /> We don't just consult, we engineer success stories
            that resonate on a global scale.
          </h1>
          <div className="border-t-2 border-gray-300 w-full mt-4"></div>
        </div>
      </div>

      <div>
        <div className="md:flex justify-around md:w-full md:pb-0  pb-9 w-screen items-center border-b-2 bg-[#7b7676]">
          <img
            src="https://images.pexels.com/photos/4098340/pexels-photo-4098340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-[33rem] md:w-1/2 w-full md:mr-[-10px] md:pl-[2rem] object-cover"
          />
          <div className="text-center md:px-[6rem] sm:px-[2rem] px-auto md:w-1/2">
            <h1 className=" font-bold text-[40px] my-7 text-white leading-7">
              WHO WE ARE <br />
            </h1>
            <p className="text-[18px] font-normal text-white">
              We specialize in providing strategic consulting solutions to
              global capability centers, unlocking their full potential and
              guiding them toward sustained success. <br /> Our comprehensive
              suite of services is designed to navigate the complex landscape of
              global operations, empowering organizations to thrive in an
              ever-evolving business environment..
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="md:flex justify-around md:w-full w-screen items-center border-b-2 bg-[#3a3a3a] mt-[-30px] md:mt-[-3px]">
          <div className="text-center md:px-[6rem] sm:px-[2rem] px-auto md:w-1/2">
            <h1 className=" font-bold text-[40px] md:pt-0 pt-9 my-7 text-white leading-7">
              WHAT WE DO <br />
            </h1>
            <p className="text-[18px] font-normal text-white md:pb-0 pb-8">
              We partner with clients to craft bespoke strategies that transcend
              borders, unlock potential, and position Global Capability Centers
              as strategic assets that drive innovation, efficiency, and growth.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/4101145/pexels-photo-4101145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="h-[33rem] md:w-1/2 md:mr-7 md:ml-[-5px] md:pl-[2rem] object-cover"
          />
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center min-h-screen py-7 my-[-3px] px-6 bg-[#D3D3D3]"
        style={divStyle4}
      >
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-[#fbfcfd]">WHY YOU NEED US</h2>
          <p className="w-full text-[#fbfcfd]">
            At Marichi Strategic Consulting, we don't just provide solutions, we
            redefine possibilities. <br /> Here's why you need us by your side.
          </p>
        </div>
        <div className="flex flex-wrap justify-around w-[full] md:w-[226vh] md:ml-4 md:px-[8rem] px-[2rem]">
          <Card
            title="Strategic Insight for Global Excellence:  
"
            content="In the ever-evolving landscape of GCCs, strategic foresight is non-negotiable. Our team brings a wealth of experience and a deep understanding of global markets, empowering your organization to navigate complexities with confidence. We are not just consultants; we are architects of global excellence.

"
          />
          <Card
            title="Tailored Solutions for Your Unique Journey: 
"
            content="No two capability centres are alike, and neither are our solutions. We pride ourselves on delivering bespoke strategies that align with your organization's objectives, culture, and aspirations. Whether you're scaling operations, optimizing processes, or enhancing innovation, we tailor our approach to fit seamlessly into your unique journey.

"
          />
          <Card
            title="Global Perspective, Local Expertise: 
"
            content="Navigating global markets requires a nuanced understanding of both global trends and local intricacies. With a global perspective and boots on the ground, our consultants bring a unique blend of international insights and local expertise. We bridge the gap between global strategy and on-the-ground execution.

"
          />
          <Card
            title="Driving Efficiency and Innovation: 
"
            content="Efficiency is the backbone of success, and innovation is the catalyst for growth. At Marichi Strategic Consulting, we combine tried-and-true methodologies with a forward-thinking approach. From streamlining operations to fostering a culture of innovation, we are your partners in driving efficiency and unlocking new possibilities.

"
          />
          <Card
            title="Responsive and Collaborative Partnership: 
"
            content="Your goals are our goals, and your challenges are opportunities for collaboration. We are committed to building a responsive and collaborative partnership that goes beyond transactional consulting. Our team becomes an extension of yours, working hand-in-hand towards shared success.
"
          />
        </div>
      </div>


      <div
        className="md:flex justify-center md:h-[510px] py-6 text-white "
        style={divStyle3}
      >
        <div
          className="md:w-full md:max-w-screen-md m-auto text-center bg-opacity-10"
        >
          <h1 className="font-semibold text-l md:text-6xl mb-4">
            Get in Touch With Us
          </h1>
          <p className="text-sm md:text-base mb-4">
            To initiate a conversation with our consultants, if you are looking for setting up and scale your operations in India GCCs or want to know how to be more efficient by following best industry best practices press the button below. </p>
          <Link to="/contact">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-md">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

    </>
  );
};

export default StrategicConsulting;
