import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const contacts = [
    { icon: Phone, label: "Telefon", value: "06 30 699 5010" },
    { icon: Mail, label: "E-mail", value: "tasi.szabina28@gmail.com", href: "mailto:tasi.szabina28@gmail.com" },
    { icon: MapPin, label: "Lakhely", value: "Budapest" },
    { icon: Clock, label: "Elérhetőség", value: "Heti 40 óra" },
  ];

  return (
    // 1. A DOBOZ HÁTTERE ÉS KERETE
    <section className="rounded-2xl p-6 shadow-md transition-colors duration-300
      bg-white border border-gray-100             
      dark:bg-zinc-900 dark:border-zinc-800"
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2
        text-gray-900 dark:text-white"
      >
        <div className="w-1 h-6 bg-primary rounded-full" />
        Elérhetőségek
      </h2>
      
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center gap-3">
            {/* Az ikon háttere maradhat primary/10, az sötétben is jól néz ki */}
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <contact.icon className="w-5 h-5 text-primary" />
            </div>
            
            <div>
              {/* A címke színe (szürke -> világosszürke) */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {contact.label}
              </p>
              
              {/* Az érték színe (fekete -> fehér) */}
              {contact.href ? (
                <a 
                  href={contact.href} 
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