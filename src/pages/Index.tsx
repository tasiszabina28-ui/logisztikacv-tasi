// 1. IMPORTÁLD BE A LAYOUT-OT:
import MainLayout from "@/components/MainLayout"; 

// Importáld a többi szekciót is (Profile, Skills, stb.)
import ProfileSection from "@/components/cv/ProfileSection";
import ContactInfo from "@/components/cv/ContactInfo";
import ExperienceSection from "@/components/cv/ExperienceSection";
import EducationSection from "@/components/cv/EducationSection";
import SkillsSection from "@/components/cv/SkillsSection";
import HobbiesSection from "@/components/cv/HobbiesSection";
import PortfolioSection from "@/components/cv/PortfolioSection";

const Index = () => {
  return (
    // 2. CSOMAGOLD BE AZ EGÉSZET EBBE:
    <MainLayout>
      
      {/* Itt vannak a szekcióid */}
      <div className="space-y-8 pb-12">
        <ProfileSection />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
            <ContactInfo />
             <HobbiesSection />
           
          </div>
          
          <div className="md:col-span-2 space-y-6">
           <PortfolioSection />
            
           
            <SkillsSection />
          </div>
        </div>
 <EducationSection />
        <ExperienceSection />
      </div>

    </MainLayout>
  );
};

export default Index;
