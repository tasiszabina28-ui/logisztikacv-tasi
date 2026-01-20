import { GraduationCap } from "lucide-react";

interface Education {
  school: string;
  degree: string;
  period: string;
  description?: string;
}

const EducationSection = () => {
  const education: Education[] = [
    {
      school: "Budapesti Gazdasági Egyetem - MÜKK",
      degree: "Kereskedelem-marketing képzés",
      period: "2022 - jelenleg",
      description: "Kereskedelem szakirány"
    },
    {
      school: "KSZC Kandó Kálmán Technikum",
      degree: "Képzőművészeti szakgimnázium",
      period: "2017 - 2022",
      description: "Képzőművészeti tagozat, érettségi"
    },
  ];

  return (
    <section className="bg-card rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <div className="w-1 h-6 bg-primary rounded-full" />
        Végzettség
      </h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="flex gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">{edu.school}</h3>
              <p className="text-primary text-sm font-medium">{edu.degree}</p>
              <p className="text-muted-foreground text-xs mt-1">{edu.period}</p>
              {edu.description && (
                <p className="text-muted-foreground text-xs mt-1">{edu.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
