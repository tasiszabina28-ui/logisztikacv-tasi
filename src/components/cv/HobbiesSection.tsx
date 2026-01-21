import { 
  Camera, 
  Palette, 
  BookOpen, 
  Dumbbell, 
  Search, 
  LineChart, 
  Presentation, // Ha piros, cseréld 'Mic'-re
  Layout        // Ez az új ikon a Webdesignhoz
} from "lucide-react";
const HobbiesSection = () => {
  const hobbies = [
   // --- 3. KREATÍV & SZEMÉLYES ---
    { 
      icon: Palette, 
      label: "Festészet & Kreatív alkotás", 
      color: "bg-purple-50 text-purple-700 border-purple-100" 
    },
    { 
      icon: Camera, 
      label: "Fotózás & Képszerkesztés", 
      color: "bg-pink-50 text-pink-700 border-pink-100" 
    },
    { 
      icon: Search, 
      label: "Kutatás & Trendfigyelés", 
      color: "bg-teal-50 text-teal-700 border-teal-100" 
    },
    { 
      icon: LineChart, 
      label: "Adatelemzés & Stratégia", 
      color: "bg-indigo-50 text-indigo-700 border-indigo-100" 
    },
    { 
      icon: Presentation, 
      label: "Prezentáció & Storytelling", 
      color: "bg-orange-50 text-orange-700 border-orange-100" 
    },
 { 
      icon: Dumbbell, 
      label: "Fitness & Egészségtudatosság", 
      color: "bg-green-50 text-green-700 border-green-100" 
    },
    { 
      icon: Layout, 
      label: "Webdesign & Webfejlesztés", 
      color: "bg-blue-50 text-blue-700 border-blue-100" 
    },
   ];
  return (
    // ITT TÖRTÉNT A VÁLTOZÁS: Hozzáadtam a fehér doboz stílusait
    <section className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100 my-8">
      
      <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <div className="w-1 h-6 bg-primary rounded-full" />
        Érdeklődési körök
      </h3>
      
      <div className="flex flex-wrap gap-4">
        {hobbies.map((hobby, index) => (
          <div 
            key={index} 
            className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all hover:scale-105 shadow-sm ${hobby.color || "bg-gray-50 text-gray-700 border-gray-200"}`}
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