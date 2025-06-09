import React from 'react'
import { Link } from 'react-router-dom'
import PCC from "/src/assets/PCC.jpg";
const ExecutiveCoaching = () => {

    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        backgroundSize: "cover",
        position: "relative",
    };

    const divStyle2 = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(https://images.pexels.com/photos/1340185/pexels-photo-1340185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",

    };

    const divStyle3 = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/1436119/pexels-photo-1436119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
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
            heading: "Customized Solutions:",
            def: "Tailored coaching programs designed to meet your unique goals. "
        },
        {
            heading: "Experienced Coaches: ",
            def: "A team of seasoned professionals dedicated to your success."
        },
        {
            heading: "Holistic Approach:",
            def: "Going beyond skill-building to nurture the whole leader.    "
        },
    ];

    return (
        <>
            <div className="h-[100vh] bg-fixed" style={divStyle}>
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
                    <h1 className="text-[#FF5F1F] absolute md:top-[-100px] sm:top-[-60px] top-[-80px] left-0 md:px-[9rem] px-[4rem]">
                        <Link to='/offerings'>OFFERINGS </Link>
                        <span className='text-white'>/ EXECUTIVE COACHING</span>
                        <div
                            style={{
                                borderTop: "1px solid grey",
                                width: "100%",
                                margin: "6px 0 0",
                            }}
                        ></div>
                    </h1>
                    <h1 className="font-bold text-5xl leading-20">
                        Marichi Executive Coaching
                    </h1>
                    <h1 className=" text-3xl mt-6">
                        <span className="text-[#FF5F1F]">"</span> Empowering Leadership Excellence
                        <span className="text-[#FF5F1F]">"</span>
                        <div className="mb-2 mt-4 w-full">
                            <h2 className="text-4xl font-semibold mb-8 text-center"></h2>
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        src={PCC}
                                        alt="Knowledge Partner"
                                        className="w-32 md:w-48 mt-15 aspect-square object-contain rounded-lg shadow-lg"
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
                        Effective Coaching creates a transformative ripple effect, shaping entire organizations. Our strategic executive coaching aligns with organizational goals, fostering excellence, resilience, and innovation. Experience positive shifts in team dynamics and engagement, leading to overall organizational enhancement. Whether you're an emerging or seasoned leader, our tailored coaching addresses unique needs at different career stages. Join us for a transformative journey in leadership impact.
                    </h1>
                    <div className="border-t-2 border-gray-300 w-full mt-4"></div>
                </div>
            </div>

            {/* <div className="relative  py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-orange-600 opacity-10 pointer-events-none"></div>
                
                <div className="relative max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2 items-center">
                    <div className="p-10 space-y-6 text-left">
                        <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                        Executive Coaching
                        </div>
                        
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                        Elevate Your Skills with Expert Webinars
                        </h2>
                        
                        <p className="text-gray-600 text-lg">
                        Register now and explore upcoming sessions from industry leaders
                        </p>
                        
                        <Link to="/webinars">
                        <button className="w-full md:w-auto bg-orange-500 text-white px-8 my-2 py-3 rounded-xl hover:bg-orange-600 transition-colors shadow-md hover:shadow-xl transform hover:scale-105">
                            View Webinars
                        </button>
                        </Link>
                    </div>
                    
                    <div className="hidden md:block bg-orange-50 h-full p-10 flex items-center justify-center">
                        <div className="w-64 h-64 bg-orange-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-32 h-32 text-orange-600">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        </div>
                    </div>
                    </div>
                </div>
                </div> */}


            <div>
                <div className="md:flex justify-around md:w-full w-screen items-center border-b-2 bg-[#7b7676]">
                    <img
                        src="https://images.pexels.com/photos/9147807/pexels-photo-9147807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        className="h-[33rem] md:w-1/2 w-full object-cover"
                    />
                    <div className="text-center md:px-[6rem] px-[2rem] md:my-7 my-12  md:w-1/2">
                        <h1 className=" font-bold text-[40px] mb-7 text-white leading-7">
                            WHO WE ARE <br />
                        </h1>
                        <p className="text-[18px] font-normal text-white">
                            We specialize in unlocking the full potential of leaders and transforming organizations through bespoke executive coaching. Our commitment is to empower individuals with the skills, mindset, and strategies needed to thrive in today's dynamic business landscape.
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
                            Our executive coaching programs go beyond traditional leadership training. We delve into the core of leadership development, fostering self-awareness, emotional intelligence, and a strategic mindset. Through one-on-one coaching sessions, workshops, and immersive experiences, we equip leaders with the skills to navigate complexities and inspire teams.

                        </p>
                    </div>
                    <img
                        src="https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        className="h-[33rem] md:w-1/2 md:ml-[-5px] md:pl-[2rem] object-cover"
                    />
                </div>
            </div>
            <div className='pb-10 w-full ' style={divStyle4}>
                <div className="container place-content-center text-white">
                    <h1 className='text-center text-[2rem] font-bold uppercase py-6'>Why You Need Us</h1>
                    <p className='text-center text-[1rem] md:m-auto md:mt-[-10px] md:py-3 md:w-[50%]'>At Marichi Executive Coaching, We are more than coaches; we are partners in your leadership evolution. Navigating the complex terrain of leadership requires more than just skills—it demands a tailored approach, strategic insights, and a trusted guide. Here's why partnering with us is the key to unlocking your leadership potential.
                    </p>
                    <div className="grid grid-cols-1 md:m-auto mt-6 md:w-[50%] md:grid-cols-2 lg:grid-cols-2 gap-4 md:grid-rows-3 md:gap-2 ">
                        {data.map((list, index) => (

                            <div
                                key={index}
                                className="p-4 border rounded-md shadow-md hover:text-black hover:bg-gray-100  hover:cursor-pointer transition duration-300 my-1 mx-4 ${
                                    index === 3 ? 'col-start-1 col-end-3 md:col-start-1 md:col-end-3' : ''
                                  }`"
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
                        Get in Touch With Us
                    </h1>
                    <p className="text-sm md:text-base mb-4">
                        Whether you are an individual leader or represent an organization aiming for excellence, we invite you to embark on a journey of growth, impact, and leadership mastery. </p>
                    <Link to="/contact">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-md">
                            Get Started with Executive Coaching
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ExecutiveCoaching