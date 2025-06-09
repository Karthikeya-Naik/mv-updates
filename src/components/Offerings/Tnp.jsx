import React from 'react'
import { courseoverview, mids, midsshortlogo } from '../../assets'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import RGuru from "../../assets/r_guru_logo.png";
import SASSAVVY from "../../assets/SASSAVVY_Logo.png";
import midslogo2 from "../../assets/midslogo2.png";
const Tnp = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(101, 183, 65,0.5), rgba(101, 183, 65,1)), url(https://images.pexels.com/photos/6985185/pexels-photo-6985185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
    };

    const divStyle2 = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
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
        <div className="rounded overflow-hidden shadow-lg p-6 mx-[1px] my-2 md:flex-shrink-0 md:my-2 w-full md:w-64 bg-slate-100 ">
            <div className="font-bold text-l mb-2">{title}</div>
            <p className="text-gray-700 text-[12px]">{content}</p>
        </div>
    );

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const data = [
        {
            heading: "End to End training",
            def: "Programming (SAS, R), Domain, CDISC Standards, stats, Soft Skills, Industry Awareness.",
        },
        {
            heading: "Instructors",
            def: "Quality training from corporate professionals and industry leaders of repute & renown.            ",
        },
        {
            heading: "Corporate Connect            ",
            def: "Fortnightly visit of industry professionals to share their career journey.            ",
        },
        {
            heading: "Wide Course Range            ",
            def: "Access to numerous courses on trending technologies like R and Python.            ",
        },
        {
            heading: "Customized Training            ",
            def: "Tailored sessions to meet specific learning needs of Programmers and Data Scientists in Pharma & CRO industry.            ",
        },

        {
            heading: "Immersive Training Programme            ",
            def: "Hands on practical training for each topic, and real Life examples from Pharma R&D and case studies.            ",
        },
    ];

    const selections = [
        { id: 1, title: "Card 1", content: "Content for Card 1" },
        { id: 2, title: "Card 2", content: "Content for Card 2" },
        { id: 3, title: "Card 3", content: "Content for Card 3" },
        { id: 4, title: "Card 4", content: "Content for Card 4" },
        { id: 5, title: "Card 5", content: "Content for Card 5" },
        { id: 6, title: "Card 6", content: "Content for Card 6" },
        { id: 7, title: "Card 7", content: "Content for Card 7" },
        { id: 8, title: "Card 8", content: "Content for Card 8" },
    ];

    return (
        <>
            <div className=" h-[100vh] bg-fixed" style={divStyle}>
                <div
                    className="text-container text-white w-full md:mx-auto "
                    style={{
                        position: "absolute",
                        top: "43%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                    }}
                >   
                <img src={midslogo2} alt="" className='h-[16rem] object-contain mx-auto pb-5 md:p-4 p-8'  />
                    <h1 className="text-[#39FF14] absolute md:top-[-100px] sm:top-[-60px] top-[-160px] left-0 md:px-[9rem] px-[4rem] py-[2rem]">
                       
                        <Link to='/offerings'>OFFERINGS </Link>
                        <span className='text-white'>/ TRAINING & PLACEMENT</span>
                        <div
                            style={{
                                borderTop: "1px solid grey",
                                width: "100%",
                                margin: "6px 0 0",
                            }}
                        ></div>
                    </h1>
                    
                    <h1 className=" text-3xl text-center mt-6">
                        <span className="text-black">"</span> Building Top 1%   {" "}
                        in Data Sciences {" "}
                        <span className="text-black">"</span>
                    </h1>
                </div>
            </div>

            <div className="flex items-center max-h-screen h-[80vh] bg-fixed" style={divStyle2}>
                <div className="text-white text-center w-full md:w-3/4 lg:w-1/2 mx-auto md:p-4 p-8">
                    <div className="border-t-2 border-gray-300 w-full my-4"></div>
                    <h1 className="font-bold text-[18px] mb-4">
                        MIDS is a centre of learning for niche life sciences courses aimed at training, nurturing, and mentoring Data Scientists, who can make impactful contributions to drug discovery and make life-changing difference.
                    </h1>
                    <div className="border-t-2 border-gray-300 w-full mt-4"></div>
                </div>
            </div>

            {/* <div className="relative  py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-green-600 opacity-10 pointer-events-none"></div>
      
      <div className="relative max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-10 space-y-6 text-left">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
             Master  R & SAS
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Elevate Your Skills with Expert Webinars
            </h2>
            
            <p className="text-gray-600 text-lg">
            Register now and explore upcoming sessions from industry leaders
            </p>
            
            <Link to="/webinars">
              <button className="w-full md:w-auto bg-green-500 text-white px-8 my-2 py-3 rounded-xl hover:bg-green-600 transition-colors shadow-md hover:shadow-xl transform hover:scale-105">
                View Webinars
              </button>
            </Link>
          </div>
          
          <div className="hidden md:block bg-green-50 h-full p-10 flex items-center justify-center">
            <div className="w-64 h-64 bg-green-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-32 h-32 text-green-600">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div> */}

            <div className="bg-gray-100 py-16 mx-auto flex justify-between">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Training Programs</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* R Training Card */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300">
                            <img 
                                src={RGuru} 
                                alt="R Training" 
                                className="w-full h-48"
                            />
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2">R Training Program</h3>
                                <p className="text-gray-600 mb-4">
                                    Comprehensive R programming training for clinical trials and data analysis. 
                                    Learn from industry experts and get hands-on experience.
                                </p>
                                <Link 
                                    to="/r-training"
                                    className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        {/* SAS Training Card */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300">
                            <img 
                                src={SASSAVVY} 
                                alt="SAS Training" 
                                className="w-full h-48 p-8"
                            />
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2">SAS Training Program</h3>
                                <p className="text-gray-600 mb-4">
                                    Master SAS programming with our comprehensive training program. 
                                    Perfect for clinical research and data analysis careers.
                                </p>
                                <button 
                                    className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                                    onClick={() => alert('Coming Soon!')}
                                >
                                    Coming Soon
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid md:grid-cols-3 grid-row-3 place-content-center justify-items-center p-[4rem] ">
                {/* Card 1 */}
                <div className="w-[380px] md:w-[300px] rounded overflow-hidden shadow-lg bg-white md:my-0 my-2 md:mx-0">
                    <img
                        src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Card Image"
                        className="w-full h-32 object-cover"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">VISION</div>
                        <p className="text-gray-700 w-full text-[11px]">
                            To be a global leader of talent & strategy for Data Sciences organizations
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-full md:w-[300px] max-w-sm rounded overflow-hidden shadow-lg bg-white md:my-0 my-8">
                    <img
                        src="https://images.pexels.com/photos/7666429/pexels-photo-7666429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Card Image"
                        className="w-full h-32 object-cover"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">MISSION</div>
                        <p className="text-gray-700 w-full text-[11px]">
                            To help Data Sciences industry to achieve its full potential using
                            innovative solutions, and expertise to be adaptable in this
                            evolving landscape.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-full md:w-[300px] max-w-sm rounded overflow-hidden shadow-lg bg-white md:my-0 my-2">
                    <img
                        src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Card Image"
                        className="w-full h-32 object-cover"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-1">CORE VALUES</div>
                        <div className="bullet-points">
                            <ul className="flex list-disc text-gray-700 w-full text-[13px] space-x-4 md:space-x-0 md:flex-col">
                                <li className="ml-42">Faith</li>
                                <li className="ml-2">Excellence</li>
                                <li className="ml-2">Integrity</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div
                className="md:flex justify-center md:h-[510px] bg-fixed md:py-6 py-16 text-white"
                style={divStyle3}
            >
                <div
                    className="md:w-full md:max-w-screen-md m-auto text-center bg-opacity-10"
                >
                    <h1 className="font-semibold text-l md:text-6xl mb-4">
                    MIDS is the place where talent and opportunity meet to change the world
                    </h1>
                    <p className="text-sm md:text-base mb-4">
                    Partner with us to get the best data scientists
                    </p>
                    <Link to="/contact">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 md:py-3 px-4 md:px-6  rounded-md">
                            Get Started with Training & Placement
                        </button>
                    </Link>
                </div>
            </div>
            
        </>
    )
}

export default Tnp