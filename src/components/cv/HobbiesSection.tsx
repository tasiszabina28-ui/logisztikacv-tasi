import { 
  Camera, 
  Palette, 
  Dumbbell, 
  Search, 
  LineChart, 
  Presentation, 
  Layout 
} from "lucide-react";

const HobbiesSection = () => {
  const hobbies = [
    { 
      icon: Palette, 
      label: "Festészet & Kreatív alkotás", 
      // Sötét módban: Sötétlila háttér, világoslila szöveg
      color: "bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800" 
    },
    { 
      icon: Camera, 
      label: "Fotózás & Képszerkesztés", 
      color: "bg-pink-50 text-pink-700 border-pink-100 dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-800" 
    },
    { 
      icon: Search, 
      label: "Kutatás & Trendfigyelés", 
      color: "bg-teal-50 text-teal-700 border-teal-100 dark:bg-teal-900/20 dark:text-teal-300 dark:border-teal-800" 
    },
    { 
      icon: LineChart, 
      label: "Adatelemzés & Stratégia", 
      color: "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800" 
    },
    { 
      icon: Presentation, 
      label: "Prezentáció & Storytelling", 
      color: "bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800" 
    },
    { 
      icon: Dumbbell, 
      label: "Fitness & Egészségtudatosság", 
      color: "bg-green-50 text-green-700 border-green-100 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800" 
    },
    { 
      icon: Layout, 
      label: "Webdesign & Webfejlesztés", 
      color: "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800" 
    },
  ];

  return (
    // DOBOZ: Világos/Sötét háttér váltás
    <section className="rounded-3xl shadow-sm p-8 my-8 transition-colors duration-300
      bg-white border border-gray-100
      dark:bg-zinc-900 dark:border-zinc-800"
    >
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2
        text-gray-900 dark:text-white"
      >
        <div className="w-1 h-6 bg-primary rounded-full" />
        Érdeklődési körök
      </h3>
      
      <div className="flex flex-wrap gap-4">
        {hobbies.map((hobby, index) => (
          <div 
            key={index} 
            className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all hover:scale-105 shadow-sm 
              ${hobby.color || "bg-gray-50 text-gray-700 border-gray-200 dark:bg-zinc-800 dark:text-gray-300 dark:border-zinc-700"}`}
          >
            <hobby.icon size={20} strokeWidth={2} />
            <span className="font-semibold text-sm tracking-wide">
              {hobby.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HobbiesSection;