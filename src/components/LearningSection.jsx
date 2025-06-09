import { useState } from 'react';
import { 
  GraduationCap,
  Code2,
  FileCode2,
  Settings,
  ListChecks,
  LayoutDashboard,
  FolderGit2,
  Database,
  Binary,
  ServerCog,
  Terminal,
  Workflow,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const LearningSection = ({ points }) => {
  const [showAll, setShowAll] = useState(false);
  const displayPoints = showAll ? points : points.slice(0, 8);

  // More specific technical learning icons
  const icons = [
    <Code2 className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />,        // Programming concepts
    <FileCode2 className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />,    // File/code structure
    <Settings className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />,     // Configuration/setup
    <ListChecks className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />,   // Best practices
    <LayoutDashboard className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />, // UI/Interfaces
    <FolderGit2 className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />,   // Version control/projects
    <Database className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />,     // Data/storage
    <Binary className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />,       // Core concepts
    <ServerCog className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />,    // Server/infrastructure
    <Terminal className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />,     // Command line/tools
    <Workflow className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />      // Processes/workflows
  ];

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6 my-8">
      <h2 className="text-2xl font-bold text-green-800 text-center mb-6">
        <GraduationCap className="inline-block w-8 h-8 mr-2 mb-1" />
        What You'll Learn
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-3 p-3 rounded hover:bg-green-50 transition-colors">
            {icons[index % icons.length]}
            <span className="text-gray-700">{point}</span>
          </li>
        ))}
      </ul>
      {points.length > 8 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 text-green-600 hover:text-green-700 flex items-center justify-center gap-2 w-full font-medium"
        >
          {showAll ? (
            <>
              Show Less
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show More
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default LearningSection;