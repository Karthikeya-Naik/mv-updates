
import { Mail } from 'lucide-react';
import SunilGupta from "../assets/SunilGupta.jpg";
const InstructorSection = ({ name, title, bio, guarantee, contact }) => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6 my-8">
      <h2 className="text-2xl font-bold text-green-800 text-center mb-6">Meet Your Instructor</h2>
      
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-shrink-0 w-full md:w-80">
          <img 
            src={SunilGupta} 
            alt={name}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-bold text-green-700">{name}</h3>
          <p className="text-gray-600 font-semibold whitespace-pre-line">{title}</p>
          <p className="text-gray-700">{bio}</p>

          {/* <div className="bg-green-50 p-4 rounded-md shadow-sm">
            <p className="text-green-700 font-medium">{guarantee}</p>
          </div> */}

          <div className="flex items-center gap-2 text-gray-700">
            <span>Contact:</span>
            <a 
              href={`mailto:${contact}`}
              className="text-green-600 hover:text-green-700 flex items-center gap-1"
            >
              <Mail size={16} />
              {contact}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;