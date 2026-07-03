import MainLayout from "@/components/MainLayout";

import ProfileSection from "@/components/cv/ProfileSection";
import ContactInfo from "@/components/cv/ContactInfo";
import ExperienceSection from "@/components/cv/ExperienceSection";
import EducationSection from "@/components/cv/EducationSection";
import SkillsSection from "@/components/cv/SkillsSection";
import HobbiesSection from "@/components/cv/HobbiesSection";
import PortfolioSection from "@/components/cv/PortfolioSection";

const Index = () => {
  return (
    <MainLayout>

      <div className="space-y-8 pb-12">
        {/* Teljes szélességű felső rész */}
        <ProfileSection />

        {/* Kétoszlopos elrendezés a maradék moduloknak */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* BAL OSZLOP (1/3): Elérhetőség, Képességek és Végzettség */}
          <div className="md:col-span-1 space-y-6">
            <ContactInfo />
            <SkillsSection />
            <EducationSection />
          </div>

          {/* JOBB OSZLOP (2/3): Munkatapasztalat */}
          <div className="md:col-span-2 space-y-6">
            <ExperienceSection />
          </div>

        </div>

        <HobbiesSection />

        <PortfolioSection />
      </div>

    </MainLayout>
  );
};

export default Index;