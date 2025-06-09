import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Banner = ({ title, description, bg_image }) => {
  return (
    <div
      className="w-full h-[70vh] text-white flex flex-col justify-center items-center text-center p-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${bg_image})`, // Corrected with backticks
        backgroundSize: 'cover', // Ensures the image covers the entire area
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents image repetition
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8">{description}</p>

      {/* Uncomment and use this block if needed */}
      {/* <Link 
        to={buttonLink}
        target="_blank"
        className="px-8 py-3 bg-white text-green-600 rounded-md font-semibold flex items-center gap-2 hover:scale-105 transition-transform duration-300 hover:shadow-lg"
      >
        Learn More
        <ArrowRight size={20} />
      </Link> */}
    </div>
  );
};

export default Banner;
