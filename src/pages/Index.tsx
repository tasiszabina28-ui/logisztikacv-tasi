import ProfileSection from "@/components/cv/ProfileSection";
import ContactInfo from "@/components/cv/ContactInfo";
import ExperienceSection from "@/components/cv/ExperienceSection";
import EducationSection from "@/components/cv/EducationSection";
import SkillsSection from "@/components/cv/SkillsSection";
import HobbiesSection from "@/components/cv/HobbiesSection";
import PortfolioSection from "@/components/cv/PortfolioSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/8 rounded-full blur-2xl" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header with profile */}
        <header className="bg-card rounded-3xl p-8 shadow-lg mb-8">
          <ProfileSection />
        </header>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar */}
          <aside className="space-y-6">
            <ContactInfo />
            <EducationSection />
            <HobbiesSection />
          </aside>

          {/* Main content */}
          <main className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-md">
              <ExperienceSection />
            </div>
            <SkillsSection />
            <PortfolioSection />
          </main>
        </div>

      </div>
    </div>
  );
};

export default Index;
