// import { Trophy, CheckCircle } from 'lucide-react';

// const BenefitsList = ({ title, benefits }) => {
//   return (
//     <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6 my-8">
//       <h2 className="text-2xl font-bold text-green-800 text-center mb-6">
//         <Trophy className="inline-block w-8 h-8 mr-2 mb-1" />
//         {title}
//       </h2>
//       <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {benefits.map((benefit, index) => (
//           <li 
//             key={index}
//             className="flex items-start gap-3 p-3 rounded hover:bg-green-50 transition-colors"
//           >
//             <CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
//             <span className="text-gray-700">{benefit}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BenefitsList;






// import { Trophy, CheckCircle, Award, Lightbulb, TrendingUp, Code, Clock, Search, BookOpen, Users, ThumbsUp } from 'lucide-react';
// import { useState } from 'react';

// const BenefitsList = ({ title, benefits, type = "benefits" }) => {
//   const [hoveredItem, setHoveredItem] = useState(null);

//   // Choose appropriate icon for each benefit based on content keywords
//   const getIconForBenefit = (benefit, index) => {
//     // For the benefits list
//     if (type === "benefits") {
//       if (benefit.includes("practical") || benefit.includes("examples"))
//         return <Code className="text-green-600 w-5 h-5" />;
//       if (benefit.includes("statistical"))
//         return <TrendingUp className="text-green-600 w-5 h-5" />;
//       if (benefit.includes("SAS"))
//         return <BookOpen className="text-green-600 w-5 h-5" />;
//       if (benefit.includes("productivity"))
//         return <Lightbulb className="text-green-600 w-5 h-5" />;
//       return <Award className="text-green-600 w-5 h-5" />;
//     } 
//     // For the top reasons list
//     else {
//       // Map specific icons based on index and content for top reasons
//       const iconMap = [
//         <Users className="text-green-600 w-5 h-5" />, // mentoring
//         <Clock className="text-green-600 w-5 h-5" />, // time
//         <ThumbsUp className="text-green-600 w-5 h-5" />, // pain points
//         <Code className="text-green-600 w-5 h-5" />, // SAS tasks
//         <Lightbulb className="text-green-600 w-5 h-5" />, // lectures
//         <Search className="text-green-600 w-5 h-5" />, // search
//         <BookOpen className="text-green-600 w-5 h-5" />, // content-rich
//         <TrendingUp className="text-green-600 w-5 h-5" />, // references
//         <Users className="text-green-600 w-5 h-5" />, // mentoring class
//         <Award className="text-green-600 w-5 h-5" /> // no prior experience
//       ];
//       return iconMap[index] || <CheckCircle className="text-green-600 w-5 h-5" />;
//     }
//   };

//   // Get background color class based on benefit type
//   const getBgColorClass = () => {
//     return type === "benefits" ? "border-green-600" : "border-blue-600";
//   };

//   // Get title icon based on list type
//   const getTitleIcon = () => {
//     return type === "benefits" ? 
//       <Trophy className="text-green-600 w-8 h-8" /> : 
//       <Award className="text-blue-600 w-8 h-8" />;
//   };

//   // Get accent color based on list type
//   const getAccentColor = () => {
//     return type === "benefits" ? "bg-green-600" : "bg-blue-600";
//   };

//   // Get hover color based on list type
//   const getHoverColor = () => {
//     return type === "benefits" ? "hover:bg-green-50" : "hover:bg-blue-50";
//   };

//   // Get active hover color based on list type
//   const getActiveHoverColor = (index) => {
//     if (type === "benefits") {
//       return hoveredItem === index ? "bg-green-50 shadow-md" : "hover:bg-green-50";
//     } else {
//       return hoveredItem === index ? "bg-blue-50 shadow-md" : "hover:bg-blue-50";
//     }
//   };

//   // Get icon background color based on list type
//   const getIconBgColor = () => {
//     return type === "benefits" ? "bg-green-100" : "bg-blue-100";
//   };

//   return (
//     <div className={`w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6 my-8 border-t-4 ${getBgColorClass()}`}>
//       <div className="flex flex-col items-center mb-8">
//         <div className={`${getIconBgColor()} p-3 rounded-full mb-4`}>
//           {getTitleIcon()}
//         </div>
//         <h2 className="text-2xl font-bold text-gray-800 text-center max-w-4xl">
//           {title}
//         </h2>
//         <div className={`w-16 h-1 ${getAccentColor()} mt-3 mb-4 rounded`}></div>
//       </div>

//       <ul className={`grid grid-cols-1 ${benefits.length > 5 ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-3xl mx-auto'} gap-4`}>
//         {benefits.map((benefit, index) => (
//           <li 
//             key={index}
//             className={`flex items-start gap-3 p-4 rounded-lg border border-gray-100 transition-all ${getActiveHoverColor(index)}`}
//             onMouseEnter={() => setHoveredItem(index)}
//             onMouseLeave={() => setHoveredItem(null)}
//           >
//             <div className={`${getIconBgColor()} p-2 rounded-full flex-shrink-0`}>
//               {getIconForBenefit(benefit, index)}
//             </div>
//             <div>
//               <span className="text-gray-700">{benefit}</span>
//               {hoveredItem === index && type === "benefits" && (
//                 <div className="h-1 w-12 bg-green-600 mt-2 rounded animate-pulse"></div>
//               )}
//               {hoveredItem === index && type !== "benefits" && (
//                 <div className="h-1 w-12 bg-blue-600 mt-2 rounded animate-pulse"></div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
      
//       {type === "benefits" && (
//         <div className="text-center mt-6">
//           <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
//             Expert-Led Training • Practical Examples • Proven Results
//           </span>
//         </div>
//       )}
      
//       {type !== "benefits" && (
//         <div className="text-center mt-6">
//           <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
//             Accelerated Learning • Simplified Understanding • Industry Recognition
//           </span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BenefitsList;




import { Trophy, CheckCircle } from 'lucide-react';

const BenefitsList = ({ title, benefits }) => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6 my-8 border-t-4 border-green-600">
      <div className="flex items-center justify-center mb-6">
        <Trophy className="text-green-600 w-8 h-8 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">
          {title}
        </h2>
      </div>
      
      <div className="w-16 h-1 bg-green-600 mx-auto mb-6 rounded"></div>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <li 
            key={index}
            className="flex cursor-pointer items-start gap-3 p-4 rounded-lg border border-gray-100 hover:bg-green-50 transition-colors"
          >
            <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
              <CheckCircle className="text-green-600 w-5 h-5" />
            </div>
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
      
      <div className="text-center mt-6">
        <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          Expert-Led Training • Practical Examples • Proven Results
        </span>
      </div>
    </div>
  );
};

export default BenefitsList;