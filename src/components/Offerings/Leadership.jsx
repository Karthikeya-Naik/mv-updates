import React from 'react'
import {Link} from 'react-router-dom'
// import lg1 from "/src/assets/lg1.png";
import icf from "/src/assets/icf.jpg";
const Leadership = () => {

    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/5686103/pexels-photo-5686103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        backgroundSize: "cover",
        position: "relative",
    };

    const divStyle2 = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/1113804/pexels-photo-1113804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",

    };

    const divStyle3 = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/867092/pexels-photo-867092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
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

    const data = [
        {
            heading: "Strategic Leadership Expertise: Navigating the Path to Excellence",
            def: "In the ever-evolving business environment, strategic leadership is paramount. We bring a wealth of expertise in guiding leaders to navigate complexity, make informed decisions, and drive organizations toward excellence. With a deep understanding of industry dynamics, we are your compass in the journey to strategic leadership mastery.  "
        },
        {
            heading: "Tailored Programs for Lasting Impact: One Size Does Not Fit All",
            def: "Off-the-shelf solutions fall short in a world where leadership challenges are as diverse as the leaders themselves. We pride ourselves on offering tailored leadership development programs crafted to address your specific needs. Our approach goes beyond generic training, ensuring that the skills developed resonate with your organizational context."
        },
        {
            heading: "Innovation in Leadership Learning: Shaping Future Leaders",
            def: "The landscape of leadership is evolving, and so should the approach to leadership development. We leverage cutting-edge methodologies, interactive learning experiences, and a forward-thinking mindset to equip leaders with the skills necessary to thrive in the future. Your leadership journey is not just about today; it's about shaping tomorrow.     "
        },
        {
            heading: "Holistic Leadership Development: Nurturing Mind, Body, and Soul ",
            def: " True leadership extends beyond the boardroom. We embrace a holistic approach to leadership development, recognizing the interconnectedness of mind, body, and soul. Our programs go beyond traditional training, fostering well-rounded leaders who bring not only professional excellence but also a positive impact to all facets of life."
        },
        {
            heading: "Your Success is Our Mission: Partnering for Long-Term Growth  ",
            def: "When you choose Marichi Ventures, you are not just selecting a service; you are forging a partnership for long-term success. Your triumphs are our milestones, and we are dedicated to supporting your leadership journey every step of the way."
        },
    ];

    return (
        <>

            <div className="h-[100vh] bg-fixed" style={divStyle}>
                <div
                    className="text-container w-full text-white mx-auto md:px-0 px-[1rem]"
                    style={{
                        position: "absolute",
                        top: "43%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                    }}
                >
                    <h1 className="text-[#04d9ff] absolute md:top-[-100px] sm:top-[-60px] top-[-160px] left-0 md:px-[9rem] px-[4rem]">
                    <Link to='/offerings'>OFFERINGS </Link>
                        <span className='text-white'>/ LEADERSHIP DEVELOPMENT</span>
                
                        <div
                            style={{
                                borderTop: "1px solid grey",
                                width: "100%",
                                margin: "6px 0 0",
                            }}
                        ></div>
                    </h1>
                    <h1 className="font-bold text-5xl leading-20">
                        Marichi Leadership Development
                    </h1>
                    <h1 className=" text-3xl text-center md:mt-8">
                        <span className="text-[#04d9ff]">"</span> Elevating Leadership, {" "}
                        <br /> Igniting Potential{" "}
                        
                        <span className="text-[#04d9ff]">"</span>
                        <div className="mb-2 mt-4 w-full">
                          <h2 className="text-4xl font-semibold mb-8 text-center"></h2>
                          <div className="flex flex-col items-center">
                            <div className="flex-shrink-0">
                              <img
                                src={icf}
                                alt="Knowledge Partner"
                                className="w-32 md:w-48 aspect-square object-contain rounded-lg shadow-lg"
                              />
                            </div>
                           
                          </div>
                        </div>
                    </h1>
                </div>
            </div>
            
            
            <div className="flex items-center max-h-screen h-[80vh] bg-fixed" style={divStyle2}>
                <div className="text-white text-center w-full md:w-3/4 lg:w-1/2 mx-auto md:p-4 p-8">
                    <div className="border-t-2 border-gray-300 w-full my-4"></div>
                    <h1 className="font-bold text-[18px] mb-4">
                        Tailored programs for startups and enterprises. Elevate leadership with Marichi's expertise. Ignite leadership potential with our transformative journey. Embrace leadership as continuous growth. Trailblazers in shaping inspirational leaders. Join us to inspire, innovate, and drive change in your leadership journey.
                    </h1>
                    <div className="border-t-2 border-gray-300 w-full mt-4"></div>
                </div>
            </div>

            <div>
                <div className="md:flex justify-around md:w-full w-screen items-center border-b-2 bg-[#7b7676]">
                    <img
                        src="https://images.pexels.com/photos/5053731/pexels-photo-5053731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        className="h-[33rem] md:w-1/2 w-full object-cover object-center"
                    />
                    <div className="text-center md:px-[6rem] px-[2rem] md:my-7 my-12  md:w-1/2">
                        <h1 className=" font-bold text-[40px] mb-7 text-white leading-7">
                            WHO WE ARE <br />
                        </h1>
                        <p className="text-[18px] font-normal text-white">
                            We envision a world where leaders thrive in today's dynamic business landscape. Our mission is to cultivate transformative leadership that breaks conventional boundaries. Uniquely, we are committed to a personalized, strategic approach, collaborating with organizations to design tailored programs addressing challenges, unlocking potential, and creating lasting impact.

                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div className="md:flex justify-around md:w-full w-screen items-center bg-[#3a3a3a] mt-[-30px] md:mt-[-3px] md:pt-0 pt-9">
                    <div className="text-center md:px-[6rem] px-[2rem] md:w-1/2 md:pb-0 pb-12">
                        <h1 className=" font-bold text-[40px] my-7 text-white leading-7">
                            WHAT WE DO <br />
                        </h1>
                        <p className="text-[18px] font-normal text-white">
                            Our programs surpass traditional training, offering leaders an experiential journey blending knowledge, self-discovery, and practical application. Tailored for leaders at all levels, our comprehensive leadership development suite caters to emerging talents and seasoned executives. We provide a continuum of learning experiences to meet the diverse demands of leadership in today's dynamic business landscape.
                        </p>
                    </div>
                    <img
                        src="https://images.pexels.com/photos/6794920/pexels-photo-6794920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        className="h-[33rem] md:w-1/2 md:ml-[-5px] md:pl-[2rem] object-cover"
                    />
                </div>
            </div>
            <div className='pb-6' style={divStyle4}>
                <div className="container mx-auto  px-[3rem] mb-[4rem] text-white">
                    <h1 className='text-center text-[2rem] font-bold uppercase mb-8 md:pt-9'>Why You Need Us</h1>
                    <p className='text-center text-[1rem] mb-8'>At Marichi Leadership Development, we recognize that the pursuit of exceptional leadership is not just a choice; it's a necessity. In a dynamic business landscape, where leadership defines the trajectory of success, we stand as your partner in transformative leadership development. Here's why you need us:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:grid-rows-3 md:gap-2 place-content-center justify-items-stretch">
                        {data.map((list, index) => (

                            <div
                                key={index}
                                className={`p-4 border rounded-md shadow-md hover:text-black hover:bg-gray-100  hover:cursor-pointer transition duration-300 my-1 mx-4`}
                            >
                                <h1 className='font-semibold sm:text-[20px] text-[12px]'>{list.heading}</h1>
                                <p className='sm:text-[15px]'>{list.def}</p>

                            </div>

                        ))}
                    </div>
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
          Ready to elevate your leadership and inspire success?          </h1>
         
          <Link to="/contact">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-md">
            Contact Us
            </button>
          </Link>
          <p className="text-sm md:text-base mt-4 mb-4">
          
          to embark on your transformative leadership journey. </p>
        </div>
      </div>

            

        </>
    )
}

export default Leadership