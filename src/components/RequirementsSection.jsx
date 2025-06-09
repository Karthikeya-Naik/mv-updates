import { Monitor, CircuitBoard } from 'lucide-react';

const RequirementsSection = ({ software, hardware }) => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6 my-8">
      <h2 className="text-2xl font-bold text-green-800 text-center mb-6">Requirements</h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Monitor className="text-green-600 w-6 h-6" />
            <h3 className="text-xl font-semibold text-green-700">Software:</h3>
          </div>
          <p className="text-gray-700 ml-8">{software}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <CircuitBoard className="text-green-600 w-6 h-6" />
            <h3 className="text-xl font-semibold text-green-700">Hardware:</h3>
          </div>
          <ul className="space-y-3">
            {hardware.map((item, index) => (
              <li key={index} className="flex items-start gap-3 ml-8">
                <CircuitBoard className="text-green-600 w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RequirementsSection;