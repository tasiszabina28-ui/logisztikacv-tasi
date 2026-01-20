import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Adminisztrációs gyakornok",
      company: "EGIS Gyógyszergyár Zrt.",
      period: "2025.05 - 2026.01",
      description: "Az automatizálási és metrológia főosztály munkáját segítem, adminisztrációs tevékenységet végzek a belső rendszerekben, valamint Excel munkák."
    },
    {
      title: "Supply chain gyakornok",
      company: "Euroapi Hungary Kft.",
      period: "2024.08 - 2024.12",
      description: "A beszerzési osztály munkáját segítettem, anyagáramlással kapcsolatos Excel táblázatokban dolgoztam."
    },
    {
      title: "Back office gyakornok",
      company: "UNIQA Biztosító Zrt.",
      period: "2024.03 - 2024.07",
      description: "Ügyfélszolgálati munkát végeztem, egyszerűbb ügyeket kezeltem és e-mailben kommunikáltam az ügyfelekkel."
    },
    {
      title: "Irodai asszisztens",
      company: "Fedex Express Hungary KFT.",
      period: "2023.05 - 2023.11",
      description: "Import vám osztályon segédkeztem a vámkezelésben, vámkezelési megbízásokat és értesítéseket küldtem ki, ügyfelekkel tartottam kapcsolatot."
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-primary" />
        </div>
        Munkatapasztalat
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="relative pl-6 pb-6 border-l-2 border-primary/20 last:pb-0"
          >
            <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
            <div className="bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-foreground">{exp.title}</h3>
                <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-primary font-medium text-sm mb-2">{exp.company}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
