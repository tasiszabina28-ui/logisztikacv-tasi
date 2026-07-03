import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const ContactInfo = () => {
  // 1. Behívjuk a fordítót
  const { t } = useLanguage();

  const contacts = [
    { 
      icon: Phone, 
      label: t("Telefon", "Phone"), // Fordítás
      value: "06 30 699 5010", 
      href: "tel:+36306995010" // Javítva: 'tel:' után nem kell pont és szóköz
    },
    { 
      icon: Mail, 
      label: t("E-mail", "Email"), // Fordítás
      value: "tasi.szabina28@gmail.com", 
      href: "mailto:tasi.szabina28@gmail.com" 
    },
    { 
      icon: MapPin, 
      label: t("Lakhely", "Location"), // Fordítás
      value: "Táborfalva" 
    },
    { 
      icon: Clock, 
      label: t("Elérhetőség", "Availability"), // Fordítás
      value: t("Heti 40 óra", "40 hours/week") // Fordítás
    },
  ];

  return (
    <section className="rounded-2xl p-6 shadow-md transition-colors duration-300
      bg-white border border-gray-100             
      dark:bg-zinc-900 dark:border-zinc-800"
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2
        text-gray-900 dark:text-white"
      >
        <div className="w-1 h-6 bg-primary rounded-full" />
        {/* Itt is fordítunk: */}
        {t("Elérhetőségek", "Contact Info")}
      </h2>
      
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <contact.icon className="w-5 h-5 text-primary" />
            </div>
            
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {contact.label}
              </p>
              
              {contact.href ? (
                <a 
                  href={contact.href} 
                  // Ha külső link (LinkedIn), nyíljon új ablakban
                  target={contact.label === "LinkedIn" ? "_blank" : undefined}
                  rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="font-medium hover:text-primary transition-colors
                    text-gray-900 dark:text-white"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="font-medium text-gray-900 dark:text-white">
                  {contact.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;