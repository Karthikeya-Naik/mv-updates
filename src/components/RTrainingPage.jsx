import Banner from './Banner';
import LearningSection from './LearningSection';
import RequirementsSection from './RequirementsSection';
import InstructorSection from './InstructorSection';
import PricingSection from './PricingSection';
import WorkshopSection from './WorkshopSection';
import ScheduleSection from './ScheduleSection';
import BenefitsList from './BenefitsSection';

import {
  bannerData,
  learningPoints,
  requirements,
  instructorData,
  pricingPlans,
  workshops,
  courseSchedule,
  benefits,
  topReasons
} from './RTrainingData';

const RTrainingPage = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Banner {...bannerData} />
      
      <main className="container mx-auto px-4 py-8">
        <LearningSection points={learningPoints} />
        <RequirementsSection {...requirements} />
        <InstructorSection {...instructorData} />
        <PricingSection plans={pricingPlans} />
        <WorkshopSection workshops={workshops} />
        <ScheduleSection schedule={courseSchedule} />
        
        <BenefitsList
          title="How is the R-Guru Mentoring Program Better than Leading R Training Vendors"
          benefits={benefits}
        />
        
        <BenefitsList
          title="Top Ten Reasons to Enroll in R-Guru to Earn your R Clinical Trials Certificate"
          benefits={topReasons}
        />
      </main>
    </div>
  );
};

export default RTrainingPage;