import React from 'react'
import {Link} from 'react-router-dom'
const CarrerCounseling = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/2977567/pexels-photo-2977567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        backgroundSize: "cover",
        position: "relative",
    };

    const divStyle2 = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/5711163/pexels-photo-5711163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",

    };

    const divStyle3 = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/5417675/pexels-photo-5417675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
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
            heading: "Expert Guidance Tailored to You",
            def: "At Marichi Ventures, we understand that your career is as unique as you are. Our seasoned career counselors bring a wealth of experience and industry insights to provide personalized guidance. Whether you are a recent graduate, a mid-career professional, or contemplating a career switch, we tailor our services to align with your individual goals and aspirations.  "
        },
        {
            heading: "Strategic Career Planning:",
            def: "Embark on a strategic path to success with our comprehensive career planning services. We don't just offer generic advice; we delve deep into your strengths, preferences, and ambitions to craft a roadmap that aligns with your long-term objectives. Together, we'll define achievable milestones and navigate the complexities of the ever-evolving job market."
        },
        {
            heading: "Unlock Your Potential:     ",
            def: " We believe that everyone possesses untapped potential. Our mission is to help you discover and leverage your strengths, enabling you to excel in your chosen field. Whether it's honing your skills, identifying growth opportunities, or overcoming challenges, we're here to empower you to reach new heights.       "
        },
        {
            heading: "Job Search Optimization:",
            def: " In a competitive job market, strategic job searching is key. Our team equips you with the tools, resources, and strategies needed to stand out. From resume optimization and interview coaching to leveraging professional networks, we provide the support required to navigate the job search landscape successfully."
        },
        {
            heading: "Career Transition Support: ",
            def: "Considering a career change? Our career counseling services extend beyond exploration. We guide you through the intricacies of transitioning to a new field, ensuring a seamless and well-informed shift. Make your career transitions smoother with our expert insights and support."
        },
        {
            heading: "Continuous Support, Lifelong Success:",
            def: " Your journey doesn't end with a single session. At Marichi Ventures, we are committed to your lifelong success. Our ongoing support includes periodic check-ins, access to updated resources, and additional guidance as your career evolves. We're here for you every step of the way."
        },
        {
            heading: "Invest in Your Future:",
            def: " Your career is one of the most significant investments you'll make. Choosing Marichi Ventures means investing in a partnership that prioritizes your success. Let's embark on a transformative journey together and position you for a future filled with professional achievement and personal satisfaction."
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
                    <h1 className="text-[#ff00a6] absolute md:top-[-100px] sm:top-[-60px] top-[-160px] left-0 md:px-[9rem] px-[4rem]">
                        <Link to='/offerings'>OFFERINGS </Link>
                        <span className='text-white'>/ CAREER COUNSELING</span>
                        <div
                            style={{
                                borderTop: "1px solid grey",
                                width: "100%",
                                margin: "6px 0 0",
                            }}
                        ></div>
                    </h1>
                    <h1 className="font-bold text-5xl leading-[5rem]">
                        Marichi Career Counseling 
                    </h1>
                    <h1 className=" text-3xl "> 
                        <span className="text-[#ff00a6] mt-8">"</span> Your Trusted Partner In {" "}
                       Charting <br /> a Course towards a Fulfilling <br /> and Successful Career{" "}
                        <span className="text-[#ff00a6]">"</span>
                    </h1>
                </div>
            </div>

            <div className="flex items-center max-h-screen h-[80vh] bg-fixed" style={divStyle2}>
                <div className="text-white text-center w-full md:w-3/4 lg:w-1/2 mx-auto md:p-4 p-8">
                    <div className="border-t-2 border-gray-300 w-full my-4"></div>
                    <h1 className="font-bold text-[18px] mb-4">
                        At Marichi Career Counselling, our commitment is to provide personalized guidance, understanding the unique nature of each individual's journey. Navigating through diverse career options becomes seamless with our empathetic support system, ensuring you feel heard and guided. Our continuous dedication to industry trends keeps you informed and ready for success. Empowerment is at the core of our approach, fostering informed decisions and confident leadership. Join us for a transformative journey, where dreams are crafted, and self-discovery leads to professional success.
                    </h1>
                    <div className="border-t-2 border-gray-300 w-full mt-4"></div>
                </div>
            </div>

            <div>
                <div className="md:flex justify-around md:w-full w-screen items-center border-b-2 bg-[#7b7676]">
                    <img
                        src="https://images.pexels.com/photos/850360/pexels-photo-850360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        className=" md:w-1/2 w-full h-[33rem]  object-cover"
                    />
                    <div className="text-center md:px-[6rem] px-[2rem] md:my-7 my-12  md:w-1/2">
                        <h1 className=" font-bold text-[40px] mb-7 text-white leading-7">
                            WHO WE ARE <br />
                        </h1>
                        <p className="text-[18px] font-normal text-white">
                            Marichi Career Counseling (MCC) is a dedicated space where career aspirations transform into reality. We believe that every individual has a unique professional journey waiting to unfold. At the heart of our mission is a commitment to empower individuals to navigate their career journeys with confidence, purpose, and fulfillment.

                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div className="md:flex justify-around md:w-full w-screen items-center  bg-[#3a3a3a] mt-[-30px] md:mt-[-3px] md:pt-0 pt-9">
                    <div className="text-center md:px-[6rem] px-[2rem] md:w-1/2 md:pb-0 pb-12">
                        <h1 className=" font-bold text-[40px] my-7 text-white leading-7">
                            WHAT WE DO <br />
                        </h1>
                        <p className="text-[18px] font-normal text-white">
                            More than just career counseling, we offer a partnership in your success story. Our engagement doesn't end with advice; we stay connected, offering ongoing support as you navigate career transitions, challenges, and triumphs.

                        </p>
                    </div>
                    <img
                        src="https://images.pexels.com/photos/7394609/pexels-photo-7394609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        className="h-[33rem] md:w-1/2 md:ml-[-5px] md:pl-[2rem] object-cover"
                    />
                </div>
            </div>

            <div className="w-full  px-[3rem]  text-white" style={divStyle4}>
                <h1 className='text-center text-[40px] font-bold uppercase mb-8 pt-9' >Why You Need Us</h1>
                <p className='text-center text-[20px] mb-8 '>Wondering why you need us on your professional journey? Here are compelling reasons that set us apart.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:grid-rows-3 md:gap-2 pb-10">
                    {data.map((list, index) => (

                        <div
                            key={index}
                            className="p-4 border rounded-md shadow-md hover:bg-gray-100 hover:text-gray-700 transition duration-300 my-1 mx-4"
                        >
                            <h1 className='font-semibold sm:text-[20px] text-[12px]  '>{list.heading}</h1>
                            <p className='sm:text-[15px] '>{list.def}</p>

                        </div>

                    ))}
                </div>
            </div>

            <div
        className="md:flex justify-center md:h-[510px]  text-white "
        style={divStyle3}
      >
        <div
          className="md:w-full md:max-w-screen-md m-auto text-center bg-opacity-10"
        >
          <h1 className="font-semibold text-l md:text-5xl mb-4">
          Our engagement doesn't end with advice; we stay connected <br />
          </h1>
          <p className='text-l md:text-xl mb-4'>More than just career counseling, we offer a partnership in your success story.</p>
          <Link to="/contact">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-md">
            Get Started with Career Counselling
            </button>
          </Link>
          
        </div>
      </div>

        </>
    )
}

export default CarrerCounseling