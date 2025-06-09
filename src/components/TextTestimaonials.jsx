// import React, { useState, useEffect } from "react";


// import mobile from "../assets/mobile_image.png";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./videoTestimonials.css";
// import "./textTestimonials.css";

// const testimonials = [
//   {
//     image: sugu,
//     content:
//       "Sarvesh’s leadership played a crucial role in driving our team’s success. He had a remarkable ability to align our efforts with our goals and inspire us to achieve more than we thought possible. His leadership was instrumental in creating a motivated and high-performing team. Sarvesh’s workshops are ideal for anyone looking to lead their teams to success.",
//     name: "Sugumaran",
//   },
//   {
//     image: ram,
//     content:
//       "Working with Sarvesh was a transformative experience. He was always there to support and guide us, making sure we had everything we needed to succeed. His supportive leadership style created a safe and motivating environment where we could thrive. I strongly recommend his workshops to anyone looking to develop a supportive and effective leadership approach.",
//     name: "Rammohan",
//   },

//   {
//     image: shri,
//     content:
//       "Sarvesh has been one of my best Mentor and Career Guide.I have worked with him on organising and delivering several successful events and initiatives. He gave me the autonomy to make decisions and take ownership of work, which really helped me grow. His trust and support were instrumental in building my confidence and skills. He is one of the most disciplined professionals with great sense of humour, forward thinking ability. He is a transformational and visionary leader. He has been a motivation and inspiration to many young professionals and Leaders.I highly reccommend his workshops",
//     name: "Shri",
//   },

//   {
//     image: vijay,
//     content:
//       "During my time with Sarvesh, I was always encouraged to think outside the box and innovate. He provided the freedom and support needed to explore new ideas, which was incredibly empowering and led to many successful projects. Sarvesh’s focus on fostering innovation and creativity is something I greatly appreciate, and I highly recommend his workshops for aspiring leaders.",
//     name: "Vijay",
//   },
// ];

// const videoTestimonials = [
//   {
//     src: "https://www.youtube.com/embed/67EjIlCWZBc?si=gJSt1zxsfvTKJpcc",
//     content: (
//       <div>
//         "Great service!"
//         <span style={{ display: "block" }}>- Lavanya</span>
//       </div>
//     ),
//   },
//   {
//     src: "https://www.youtube.com/embed/RnZxOKVMdHA",
//     content: (
//       <div>
//         "Highly recommend!"
//         <span style={{ display: "block" }}>- Praneet</span>
//       </div>
//     ),
//   },
//   {
//     src: "https://www.youtube.com/embed/F69N7_4tGhg",
//     content: (
//       <div>
//         "Amazing experience!"
//         <span style={{ display: "block" }}>- Dharani</span>
//       </div>
//     ),
//   },

//   {
//     src: "https://www.youtube.com/embed/keGK7LlKXi0",
//     content: (
//       <div>
//         "Fantastic support!"
//         <span style={{ display: "block" }}>- Nagendra</span>
//       </div>
//     ),
//   },
//   {
//     src: "https://www.youtube.com/embed/OVJVsdmsWao",
//     content: (
//       <div>
//         "Amazing experience! "<span style={{ display: "block" }}>- Usha</span>
//       </div>
//     ),
//   },
//   {
//     src: "https://www.youtube.com/embed/KKh0QlwIPAk",
//     content: (
//       <div>
//         "Loved it! "<span style={{ display: "block" }}>- Shivam</span>
//       </div>
//     ),
//   },
//   {
//     src: "https://www.youtube.com/embed/9yX-x75JnOE",
//     content: (
//       <div>
//         "Very satisfied!"
//         <span style={{ display: "block" }}>- Priyanka</span>
//       </div>
//     ),
//   },

//   {
//     src: "https://www.youtube.com/embed/AnuK2kQtOI0",
//     content: (
//       <div>
//         "Would use again!"
//         <span style={{ display: "block" }}>- Rajendra</span>
//       </div>
//     ),
//   },

//   {
//     src: "https://www.youtube.com/embed/eD_9SaoNZMg",
//     content: (
//       <div>
//         "Great quality!"
//         <span style={{ display: "block" }}>- Soumya</span>
//       </div>
//     ),
//   },

//   {
//     src: "https://www.youtube.com/embed/LZqwFHJRoA0",
//     content: (
//       <div>
//         "Incredible experience!"
//         <span style={{ display: "block" }}>- Yamini</span>
//       </div>
//     ),
//   },

//   {
//     src: "https://www.youtube.com/embed/DRDpSf_xU6o",
//     content: (
//       <div>
//         "Very satisfied!"
//         <span style={{ display: "block" }}>- Madhukar</span>
//       </div>
//     ),
//   },

//   {
//     src: "https://www.youtube.com/embed/WRD3ypR9U70",
//     content: (
//       <div>
//         "Highly recommend!"
//         <span style={{ display: "block" }}>- Bhavita</span>
//       </div>
//     ),
//   },

//   {
//     src: "https://www.youtube.com/embed/tGHjZYwvKEA",
//     content: (
//       <div>
//         "Exceptional service!"
//         <span style={{ display: "block" }}>- Niharika</span>
//       </div>
//     ),
//   },
// ];

// function TestimonialCard({ testimonial, isExpanded, onToggle }) {
//   const truncatedContent =
//     testimonial.content.length > 100
//       ? testimonial.content.slice(0, 100) + "..."
//       : testimonial.content;

//   return (
//     <div
//       className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg mx-2"
//       style={{
//         width: "calc(100vw / 2 - 20px)",
//         marginBottom: "8rem",
//         marginTop: "2rem",
//         height: "auto",
//         width: "auto",
//       }}
//     >
//       <img
//         src={testimonial.image}
//         alt="Person"
//         className="rounded-full object-cover w-[80px] h-[80px]"
//       />

//       <div className="mt-2 text-center font-bold">{testimonial.name}</div>
//       <div className="mt-2 text-center text-gray-700">
//         {isExpanded ? testimonial.content : truncatedContent}
//         {testimonial.content.length > 100 && (
//           <button onClick={onToggle} className="text-blue-500 underline ml-2">
//             {isExpanded ? "Read Less" : "Read More"}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// const TextTestimonialsCarousel = () => {
//   const setting = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 15000,
//   };

//   return (
//     <div
//       className="text-testimonials-container "
//       style={{ marginBottom: "100px", marginTop: "2rem" }}
//     >
//       <Slider {...setting}>
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="text-testimonial-slide">
//             {/* <div className="text-testimonial-wrapper  bg-red-500 ">
//               <div className="testimonial-image-container">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   style={{
//                         width: '80px',
//                         height: '80px',
//                         objectFit: 'cover',
//                         borderRadius: '50%',
                        
                  
//                    }}
//                   className="testimonial-image"
//                 />
//                 <div className="testimonial-name">{testimonial.name}</div>
//               </div>
//               <div className="text-testimonial-content">
//                 <p>{testimonial.content}</p>
//               </div>
//             </div> */}
//             <div className="text-testimonial-wrapper  text-black p-6 md:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
//               <div className="testimonial-image-container flex-shrink-0">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="testimonial-image w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-2 border-white shadow-sm"
//                 />
//                 <div className="testimonial-name text-center mt-2 font-semibold text-lg">
//                   {testimonial.name}
//                 </div>
//               </div>
//               <div className="text-testimonial-content text-center md:text-left">
//                 <p className="text-sm md:text-base text-black">
//                   {testimonial.content}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// const VideoTestimonialsCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 20000,
//   };

//   return (
//     <div className="video-testimonials-container mt-10">
//       <Slider {...settings}>
//         {videoTestimonials.map((testimonial, index) => (
//           <div key={index} className="testimonial-slide flex justify-center">
//             <div
//               className="relative video-wrapper"
//               style={{
//                 width: "355px",
//                 height: "560px",
//               }}
//             >
//               {/* Mobile image as the background */}
//               <img
//                 src={mobile}
//                 alt="Mobile Frame"
//                 className="absolute top-0 left-0 w-full h-full"
//                 style={{
//                   zIndex: 1,
//                   height: "107%",
//                 }}
//               />
//               {/* Video iframe on top */}
//               <iframe
//                 width="145"
//                 height="260"
//                 src={testimonial.src}
//                 title={`Testimonial ${index + 1}`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="absolute top-[70px] left-[18px] z-10"
//                 style={{
//                   width: "89%",
//                   height: "82%",
//                 }}
//               ></iframe>
//             </div>
//             {/* Testimonial content */}
//             <div className="testimonial-content text-center mt-4">
//               <p>{testimonial.content}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default function Testimonials() {
//   return (
//     <div>
//       <br />
//       <h2 className="text-center text-4xl font-bold my-8">
//         Voices of Experience: Hear their Stories
//       </h2>
//       <VideoTestimonialsCarousel />
//       <div>
//         {" "}
//         <br />
//         <br />
//         <br />
//         <br />
//       </div>

//       <h2 className="text-center text-4xl font-bold ">
//         Testimonials: Real Stories Real Impact
//       </h2>
//       <TextTestimonialsCarousel />
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const IMAGE_BASE_URL = "https://backend.marichiventures.com/admin/pages/uploads/text_testimonials";

// Helper function to convert YouTube Shorts URL to embed URL
const getEmbedUrl = (url) => {
  if (url.includes("/shorts/")) {
    return url.replace("/shorts/", "/embed/");
  }
  return url;
};

const TextTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [videoTestimonials, setVideoTestimonials] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    fetch('https://backend.marichiventures.com/admin/pages/text_testimonials.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched testimonials:', data);
        setTestimonials(data);
      })
      .catch(error => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://backend.marichiventures.com/admin/pages/video_testimonials.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch video testimonials');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched video testimonials:', data);
        setVideoTestimonials(data);
      })
      .catch(error => {
        console.error('Error fetching video testimonials:', error);
      });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: activeVideo === null,
    autoplaySpeed: 3000
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <header className="bg-green-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Testimonials
        </h1>
        <p className="text-xl text-green-600 max-w-2xl mx-auto">
          Hear directly from those who have experienced our transformative leadership and services.
        </p>
      </header>

      {/* Text Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-green-800">
            What Our Clients Say
          </h2>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="focus:outline-none">
                <div className="max-w-xl mx-auto">
                  <FaQuoteLeft className="text-green-500 text-xl mx-auto mb-6" />
                  <p className="text-md text-gray-700 italic mb-8">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <img 
                      src={`${IMAGE_BASE_URL}/${testimonial.image}`} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover" 
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-green-800">
            Hear Their Stories
          </h2>
          <Slider {...sliderSettings}>
            {videoTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="focus:outline-none">
                <div className="max-w-2xl mx-auto">
                  <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl">
                    <iframe
                      src={getEmbedUrl(testimonial.videoUrl)}
                      width="100%"
                      height="100%"
                      title={`Testimonial from ${testimonial.name}`}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onPlay={() => setActiveVideo(index)}
                      onPause={() => setActiveVideo(null)}
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default TextTestimonials;
