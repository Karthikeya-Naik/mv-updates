import React from "react";
import { ArrowRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";  // Assuming you're using React Router
import E_SDG_Icons_01 from "../assets/E_SDG_Icons_01.jpg";
import E_SDG_Icons_03 from "../assets/E_SDG_Icons_03.jpg";
import E_SDG_Icons_04 from "../assets/E_SDG_Icons_04.jpg";
import E_SDG_Icons_08 from "../assets/E_SDG_Icons_08.jpg";
import SDG_Logo from "../assets/SDG_logo.png";

const SDGSection = () => {
  const goals = [
    {
      id: 1,
      title: "No Poverty",
      imageUrl: E_SDG_Icons_01,  // Using placeholder for demo
      description:
        "Through coaching, Marichi Ventures helps individuals secure better employment, reducing poverty through increased income opportunities and also, as business grows, more the employment and the cycle continues",
      link: "https://sdgs.un.org/goals"
    },
    {
      id: 2,
      title: "Good Health and Well-being",
      imageUrl: E_SDG_Icons_03,
      description:
        "Our offerings improve mental well-being and work-life balance, promoting healthier workplaces.",
      link: "https://sdgs.un.org/goals"
    },
    {
      id: 3,
      title: "Quality Education",
      imageUrl: E_SDG_Icons_04,
      description:
        "Through personalized coaching programs, we provide access to quality education and skill-building opportunities.",
      link: "https://sdgs.un.org/goals"
    },
    {
      id: 4,
      title: "Decent Work and Economic Growth",
      imageUrl: E_SDG_Icons_08,
      description:
        "By improving employability, fostering leadership, and aligning talent, we support decent work and economic growth.",
      link: "https://sdgs.un.org/goals"
    },
  ];

  return (
    <section className="min-h-screen shadow-lg rounded overflow-hidden py-12" aria-label="Sustainable Development Goals">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            {/* <Globe className="w-12 h-12 text-blue-600 mr-4" aria-hidden="true" /> */}
            {/* <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Sustainable Development Goals
            </h1> */}
          </div>
          <div className="relative max-w-3xl mx-auto ">
            <img
              src={SDG_Logo}
              alt="UN Sustainable Development Goals Logo"
              className="h-24 mx-auto mb-8  transform transition-transform duration-500 hover:scale-105  px-4 sm:px-6 md:px-4 lg:px-8"
              loading="lazy"
            />
          </div>
          <p className="text-lg text-gray-600  mx-auto px-2">
          The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, provides a shared blueprint for peace and prosperity for people and the planet, now and into the future. At its heart are the 17 Sustainable Development Goals (SDGs), which are an urgent call for action by all countries - developed and developing - in a global partnership.  
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          With our solution at <span className="text-green-600 font-bold">Marichi Ventures</span>, we make the United Nations Sustainable Development Goals (SDGs) a reality by supporting 4 of these 17 goals. 
          </p>
        </div>

        {/* Goals Section */}
        <div className="space-y-8">
          {goals.map((goal, index) => (
            <div
              key={goal.id}
              className="transition-opacity duration-500 ease-in"
            >
              <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1">
                <div
                  className={`flex flex-col md:flex-row gap-8 w-full p-6 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-32 h-32 mx-auto md:mx-0 flex-shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={goal.imageUrl}
                      alt={`Icon representing ${goal.title}`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      {/* <span className="text-2xl font-bold text-green-600 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                        {String(goal.id).padStart(2, "0")}
                      </span> */}
                      <h2 className="text-xl font-semibold text-green-500 group-hover:text-green-600 transition-colors duration-300">
                        {goal.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {goal.description}
                    </p>
                    {/* <Link
                      to={goal.link}
                      target ="_blank"
                      className={`mt-4 inline-flex items-center gap-2 text-green-600 font-medium transition-all duration-300 hover:underline ${
                        index % 2 !== 0 ? "md:self-end" : ""
                      }`}
                      aria-label={`Learn more about ${goal.title}`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Join us in our mission to create sustainable impact through these
            key goals.
          </p>
          <Link
            to="https://sdgs.un.org/goals"
            target ="_blank"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            aria-label="Explore our sustainability initiatives"
          >
            Explore UN SDG Initiatives
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SDGSection;