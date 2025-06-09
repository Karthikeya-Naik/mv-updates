// Carousel.js

import React from "react";
import Slider from "react-slick";
import { Link, Router } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { BiSolidDownArrowSquare } from "react-icons/bi";

const slidesContent = [
  {
    title: "MARICHI VENTURES",
    content:
      "Unleashing boundless possibilities by linking minds",
    image:
      "https://images.pexels.com/photos/19597458/pexels-photo-19597458/free-photo-of-view-of-a-seashore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonLabel: "Learn More",
    linkTo: "https://drive.google.com/file/d/1Sy5kahamY3HyGt71PgPVj4hkdXk29cO4/view?usp=sharing",
    target:'_blank' ,
  },
  //{
    //title: "MARICHI INSTITUTE OF DATA SCIENCES",
    //content:
    //  "Building TOP 1% in Data Sciences",
    //image:
    //  "https://images.pexels.com/photos/2453293/pexels-photo-2453293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //buttonLabel: "Learn More ",
    //linkTo: "/offerings/tnp", 
    //target:'_parent' ,
 // },
   {
     title: "MARICHI STAFFING SOLUTIONS",
     content:
       "Our Staffing, Your Success.",
     image:
       "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     buttonLabel: "Learn More ",
     linkTo:"/offerings/staffingsolutions",
     target:'_parent' ,
   },
  {
    title: "MARICHI CAREER COUNSELLING",
    content:
      "Your Career Compass. Your trusted partner in charting a course toward a fulfilling and successful career.",
    image:
      "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonLabel: "Learn More ",
    linkTo:"/offerings/carrercounselling",
    target:'_parent' ,
  },
  {
    title: "MARICHI LEADERSHIP DEVELOPMENT",
    content:
      "Redefining Leadership.",
    image:
      "https://images.pexels.com/photos/2121455/pexels-photo-2121455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonLabel: "Learn More ",
    linkTo:"/offerings/leadership",
    target:'_parent' ,
  },
  {
    title: "MARICHI EXECUTIVE COACHING",
    content:
      "Addressing the unique needs of leaders at different stages of their careers.",
    image:
      "https://images.pexels.com/photos/17867764/pexels-photo-17867764/free-photo-of-deer-on-grassland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonLabel: "Learn More ",
    linkTo:"/offerings/executivecoaching",
    target:'_parent' ,
  },
  // {
  //   title: "MARICHI EXECUTIVE SEARCH ",
  //   content:
  //     "Shaping Tomorrow's Leadership Today !",
  //   image:
  //     "https://images.pexels.com/photos/10035858/pexels-photo-10035858.jpeg",
  //   buttonLabel: "Learn More ",
  //   linkTo: "/offerings/executivesearch", 
  //   target:'_parent' ,
  // },
  {
    title: "MARICHI STRATEGIC CONSULTING",
    content:
      "Navigating Complexity, Crafting Clarity.",
    image:
      "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonLabel: "Learn More ",
    linkTo:"/offerings/strategicconsulting",
    target:'_parent' ,
  },
  // {
  //   title: "MARICHI DATA SCIENCES SUMMIT",
  //   content:
  //     "Journey into the Future with the Data Sciences Summit.",
  //   image:
  //     "https://images.pexels.com/photos/16917230/pexels-photo-16917230/free-photo-of-crowded-streets-and-boats-on-the-canal-in-amsterdam-netherlands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   buttonLabel: "Learn More ",
  //   linkTo:"/events",
  //   target:'_parent' ,
  // },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="carousel-container relative mt-[4%] md:mt-[3%]" data-aos="zoom-in" style={{ marginTop: '50px' }}>
      <Slider {...settings}>
        {slidesContent.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide relative ${index === 0 ? 'first-slide' : ''}` ${
            index === 1 ? 'second-slide' : ''
          }`}"
          >
            <h1 className="absolute top-4 left-6 text-white text-lg">
              A MARICHI VENTURES OFFERING
            </h1>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className=" w-full h-96 object-cover mb-4 "
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <div
                className={`${
                  index === 0
                    ? "first-slide-content"
                    : index === 1
                    ? "second-slide-content"
                    : ""
                }`}
              >{/* Additional content styling specific to the first or second slide */}</div>
              <div
                style={
                 {
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: "50%",
                        padding: "50px",
                        marginBottom: "10px",
                      }
                    
                }
              >
                <h1 className="text-3xl font-bold mb-4">{slide.title}</h1>
                <div className="red-line mb-2"></div>
                <p className="mb-4">
                  {slide.content}
                </p>
                <Link target={slide.target} to={slide.linkTo}>
                <button  className="bg-green-600  hover:bg-green-700 text-white px-4 py-2 rounded">
                  {slide.buttonLabel}
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
