import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const contacts = [
    { icon: Phone, label: "Telefon", value: "06 30 699 5010" },
    { icon: Mail, label: "E-mail", value: "tasi.szabina28@gmail.com", href: "mailto:tasi.szabina28@gmail.com" },
    { icon: MapPin, label: "Helyszín", value: "Budapest, XIV. kerület" },
    { icon: Clock, label: "Elérhetőség", value: "Heti 30-40 óra" },
  ];

  return (
    <section className="bg-card rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <div className="w-1 h-6 bg-primary rounded-full" />
        Elérhetőségek
      </h2>
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <contact.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{contact.label}</p>
              {contact.href ? (
                <a 
                  href={contact.href} 
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-foreground font-medium">{contact.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
