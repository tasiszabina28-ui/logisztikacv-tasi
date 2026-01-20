import ProfileSection from "@/components/cv/ProfileSection";
import ContactInfo from "@/components/cv/ContactInfo";
import ExperienceSection from "@/components/cv/ExperienceSection";
import EducationSection from "@/components/cv/EducationSection";
import SkillsSection from "@/components/cv/SkillsSection";
import HobbiesSection from "@/components/cv/HobbiesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-5xl mx-auto">
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
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-muted-foreground text-sm">
          <p>© 2025 Tasi Szabina • Készült szeretettel</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
