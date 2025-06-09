import React from 'react'
import { midsshortlogo } from '../../assets'
import { GoDotFill } from "react-icons/go";
import {Link } from 'react-router-dom'


const StaffingSolutions = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        backgroundSize: "cover",
        backgroundPosition: "",
        position: "relative",
    };

    const divStyle2 = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0.8, 0.6), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/10341102/pexels-photo-10341102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",

    };

    const divStyle3 = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
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
        <div className="rounded overflow-hidden shadow-lg p-3 text-center mx-[2px] my-2 md:flex-shrink-0 md:my-2 w-full md:w-64 bg-slate-100 ">
            <div className="font-bold text-l mb-2">{title}</div>
            <p className="text-gray-700 text-[12px]">{content}</p>
        </div>
    );

    const selections = [
        {
            id: 1, title: "Talent Acquisition", list1: "Sourcing Candidates: We actively source and identify potential candidates through various channels, including online job boards, social media, networking events, and their own candidate databases.",
            list2: "Recruitment Marketing: We employ recruitment marketing strategies to promote job opportunities and the employer brand, making the company more attractive to potential candidates."
        },
        {
            id: 2, title: "Candidate Screening and Assesment",
            list1: "Skill Evaluation: We conduct thorough assessments to evaluate candidates' skills, qualifications, and suitability for specific roles. This ensures that only qualified candidates are presented to the client.    ",
            list2: "Interviewing: We often conduct initial interviews to assess candidates' communication skills, cultural fit, and overall suitability for the position."
        },
        {
            id: 3, title: "Temporary and Permanent Placement",
            list1: "Temporary Staffing: We provide temporary or contract staff to companies to address short-term needs, such as project-based work, seasonal demands, or temporary staff shortages. ",
            list2: "Permanent Placement: We assist in the recruitment of permanent employees for full-time positions within the client's organization."
        },
        {
            id: 4, title: "Flexibility and Scanlability",
            list1: "Adapting to Workforce Changes: We offer flexibility to companies facing fluctuations in their workforce needs. This includes scaling up or down based on project demands, seasonal variations, or economic conditions.",
            list2: "Specialized Staffing: We specialize in Lifesciences industries, providing expertise in finding candidates with specialized skills and knowledge."
        },
        {
            id: 5, title: "Employer Branding",
            list1: "Representation of Clients: We represent the client's brand to potential candidates, helping to enhance the company's reputation and attractiveness in the job market.",
            list2: "Promoting a Positive Candidate Experience: We ensure a positive experience for candidates during the recruitment process so that it reflects well on the client company and contributes to a positive employer brand"
        },
        {
            id: 6, title: "Cost Efficiency",
            list1: "Reduced Recruitment Costs: Outsourcing recruitment to us can result in cost savings for the client, as we handle various aspects of the hiring process, including advertising, candidate sourcing, and initial screening.",
            list2: "Time Savings: We streamline the recruitment process, saving time for the client's internal HR team and allowing them to focus on core business functions."
        },
        {
            id: 7, title: "Market Insights",
            list1: "Industry Expertise: We have expertise in Lifesciences industries and provide valuable insights into market trends, salary benchmarks, and talent availability.",
            list2: " Global Reach: We have candidates from multiple countries in our database so can assist in sourcing candidates across different regions for companies with global operations."
        },
        {
            id: 8, title: "Compliance and Legal Support",
            list1: "Regulatory Compliance: We stay informed about labor laws and regulations, ensuring that the recruitment process complies with legal requirements.",
            list2: " Risk Mitigation: We help mitigate risks related to employment law, taxes, and other regulatory aspects, reducing the client's exposure to legal challenges."
        },
    ];

    const process = [
        {
            title: "Client Needs Assessment:",
            content: "Understand the client's workforce requirements through discussions, gathering information about open positions, qualifications, and skills.",
        },
        {
            title: "Job Posting and Advertising:",
            content: "Create compelling job descriptions and post them on various channels, including job boards, websites, and social media, to attract a diverse pool of candidates.",
        },
        {
            title: "Candidate Sourcing:",
            content: " Actively source candidates using methods like database searches, job boards, social media engagement, and networking.",
        },
        {
            title: "Resume Screening:",
            content: "Review resumes to shortlist candidates who match client criteria, identifying those with the right qualifications and experience.",
        },
        {
            title: "Initial Contact and Pre-Screening:",
            content: " Conduct pre-screening interviews, discussing skills, work experience, career goals, and assessing communication skills and cultural fit.",
        },
        {
            title: "Interviews and Assessment:",
            content: "Qualified candidates undergo in-depth interviews, technical evaluations, skills testing, and behavioral interviews to assess suitability",
        },
        {
            title: "Presentation to the Client:",
            content: "Present a shortlist of qualified candidates to the client, including detailed profiles, resumes, and assessments.",
        },
        {
            title: "Reference Checking:",
            content: " Verify work history, performance, and overall suitability by contacting candidate reference.",
        },
        {
            title: "Client Interviews:",
            content: " Facilitate client interviews with selected candidates, involving one or more rounds based on the client's hiring process.",
        },
        {
            title: "Selection and Job Offer:",
            content: "Facilitate the job offer process, negotiating terms, salary, and start dates.",
        },
        {
            title: "Onboarding Support:",
            content: "  Assist with the onboarding process to ensure a smooth transition for the new employee into the client organization.",
        },
        {
            title: "Continuous Communication:",
            content: "  Maintain open communication with both clients and candidates, providing regular updates and making adjustments as needed.",
        },
        {
            title: "Follow-Up and Quality Assurance:",
            content: "Conduct follow-up checks after placement to ensure satisfaction and promptly address any issues, maintaining positive relationships.",
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
                    <h1 className="text-[#FF5F1F] absolute md:top-[-100px] sm:top-[-60px] top-[-160px] left-0 md:px-[9rem] px-[4rem]">
                    <Link to='/offerings'>OFFERINGS </Link>
                        <span className='text-white'>/ STAFFING SOLUTIONS</span>
                       
                        <div
                            style={{
                                borderTop: "1px solid grey",
                                width: "100%",
                                margin: "6px 0 0",
                            }}
                        ></div>
                    </h1>
                    <h1 className="font-bold text-5xl leading-20">
                        Marichi Staffing Solutions
                    </h1>
                    <h1 className=" text-3xl mt-4">
                        <span className="text-[#FF5F1F]">"</span> Our Staffing, Your Success{" "}
                        <span className="text-[#FF5F1F]">"</span>
                    </h1>
                </div>
            </div>

            <div className="flex items-center bg-fixed max-h-screen h-[80vh]" style={divStyle2}>
                <div className="text-white text-center w-full md:w-3/4 lg:w-1/2 mx-auto md:p-4 p-8">
                    <div className="border-t-2 border-gray-300 w-full my-4"></div>
                    <h1 className="font-bold text-[18px] mb-4">
                        Marichi Staffing Solutions (MSS) plays a crucial role in helping companies address their workforce needs and overcome staffing challenges. We specialize in connecting employers with qualified candidates, managing the recruitment process, and providing flexible staffing solutions.
                    </h1>
                    <div className="border-t-2 border-gray-300 w-full mt-4"></div>
                </div>
            </div>

            <div>
                <div className="md:flex justify-around md:w-full w-screen items-center border-b-2 bg-[#7b7676]">
                    <img
                        src="https://images.pexels.com/photos/9034275/pexels-photo-9034275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        className=" md:w-1/2 w-full  h-[33rem] object-cover"
                    />
                    <div className="text-center md:px-[6rem] px-[2rem] md:my-7 my-12  md:w-1/2">
                        <h1 className=" font-bold text-[40px] mb-7 text-white leading-7">
                            WHO WE ARE <br />
                        </h1>
                        <p className="text-[18px] font-normal text-white">
                            Welcome to Marichi Staffing Solutions, where our passion lies in building bridges between exceptional talent and the opportunities that propel businesses forward. At the heart of our mission is a commitment to redefining staffing solutions and fostering connections that endure.
                        </p>
                    </div>
                </div>
            </div>


    <div className="flex flex-col items-center justify-center pt-[6rem] px-[2rem] pb-[4rem] my-[-3px] bg-[#D3D3D3]" style={divStyle4}>
    <div className="mb-6 text-center">
        <h2 className="text-[30px] md:text-[40px] font-bold text-[#fbfcfd]">WHY YOU NEED US</h2>
        <p className="w-full text-[#fbfcfd] text-sm md:text-base">Companies are facing a talent shortage in today’s competitive world when it comes to staffing because of the following reasons.</p>
    </div>
    <div className="flex flex-wrap justify-center gap-4 px-4 md:px-[6rem] w-full">
        <Card title="Increased competition for skilled workers" className="w-full sm:w-[150px] md:w-[200px]" />
        <Card title="Mismatched expectations" className="w-full sm:w-[150px] md:w-[200px]" />
        <Card title="Adapting to remote work trends" className="w-full sm:w-[150px] md:w-[200px]" />
        <Card title="Addressing diversity and inclusion concerns" className="w-full sm:w-[150px] md:w-[200px]" />
        <Card title="Impact of technological advancements on traditional recruiting methods" className="w-full sm:w-[150px] md:w-[200px]" />
        <Card title="Lengthy Recruitment Processes" className="w-full sm:w-[150px] md:w-[200px]" />
        <Card title="Ineffective Recruitment Strategies" className="w-full sm:w-[150px] md:w-[200px]" />
    </div>
</div>




            <div className='text-white' style={divStyle3}>
                <h1 className='text-center font-bold sm:text-[40px] text-[2rem] py-6 uppercase'>What We Do</h1>
                <p className='text-center text-[18px]'>Here are several ways in which we help companies</p>
                <div className={`container mx-auto mt-8 pb-10 px-8 `} >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:grid-rows-2 md:gap-7 mb-8">
                        {selections.map((card) => (
                            <div
                                key={card.id}
                                className="p-4 border rounded-md shadow-md hover:bg-gray-100 hover:cursor-pointer hover:text-black transition duration-300"
                            >
                                <h2 className="text-lg font-semibold md:text-[18px] mb-2">{card.title}</h2>
                                <ul className='text-[14px]'>
                                    <li>{card.list1}</li>
                                    <li>{card.list2}</li>

                                </ul>
                            </div>
                        ))}
                    </div>
                    <h1 className='text-center'>In summary, we serve as strategic partners for companies seeking efficient and effective workforce solutions. By leveraging our expertise, resources, and industry knowledge, we contribute to the successful identification, recruitment, and placement of qualified candidates, enabling companies to meet their staffing needs and focus on their core business activities.
                    </h1>
                </div>
            </div>
            <div className='text-white p-[3rem]' style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),url('https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize:"cover", backgroundPosition:"center", position:"relative"}}>
                <h1 className='text-center font-bold uppercase sm:text-[40px] my-3'>How we do it</h1>
                <p className='text-center'>
                    The recruitment process is a continuous and iterative approach, adapting to feedback and evolving client needs. Our success is built on effective communication, a deep understanding of client requirements, and a commitment to finding the best-fit candidates.
                </p>
                <div className="container mx-auto mt-8 justify-around ">
                    <h1 className='text-center pb-7 text-[2rem]'>Our structured recruitment process involves several key stages</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:grid-rows-2 md:gap-4 text-center ">
                        {process.map((card, index) => (
                            <div
                                key={index}
                                className="p-4 border rounded-md shadow-md hover:cursor-pointer hover:bg-gray-100 hover:text-black transition duration-300 mx-auto"
                            >   
                                <div className='border-2 rounded-full w-[30px] mb-2 mx-auto'>{index+1}</div>

                                <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
                                <p>{card.content}</p>
                            </div>
                        ))}
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
                    Build bridges between exceptional talent and the opportunities that propel businesses forward
                    </h1>
                    <p className="text-sm md:text-base mb-4">
                    Partner with us to redefine the staffing solutions for your organisation
                    </p>
                    <Link to="/contact">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 md:py-3 px-4 md:px-6  rounded-md">
                            Get Started with Staffing Solutions
                        </button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default StaffingSolutions
