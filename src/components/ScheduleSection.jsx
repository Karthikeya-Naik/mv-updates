import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const WeekAccordion = ({ week, topics }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-green-50 p-4 text-left font-semibold text-green-700 rounded-md flex justify-between items-center hover:bg-green-100 transition-colors"
      >
        {week}
        <ChevronDown
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {isOpen && (
        <div className="p-4 border border-t-0 rounded-b-md bg-white">
          <ul className="space-y-2">
            {topics.map((topic, index) => (
              <li key={index} className="text-gray-700 flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-green-600" />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ScheduleSection = ({ schedule }) => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6 my-8">
      <h2 className="text-2xl font-bold text-green-800 text-center mb-6">Course Schedule</h2>
      <div className="space-y-2">
        {schedule.map((week, index) => (
          <WeekAccordion
            key={index}
            week={week.week}
            topics={week.topics}
          />
        ))}
      </div>
    </div>
  );
};

export default ScheduleSection;