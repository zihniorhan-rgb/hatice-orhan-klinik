import { Phone, Instagram, MessageSquareText, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

export default function HaticeOrhanClinic() {
  const [language, setLanguage] = useState("tr");

  const content = {
    tr: {
      name: "Dr. Hatice Orhan",
      title: "Diş Hekimi, Ortodonti Uzmanı",
      about:
        "Dr. Hatice Orhan, İstanbul Üsküdar'daki kliniğinde ortodonti ve modern diş hekimliği hizmetleri sunmaktadır. Gülümsemenizi önemsiyoruz.",
      services: [
        "Ortodonti",
        "Ağız, Diş ve Çene Cerrahisi",
        "Dental Radyoloji",
        "Endodonti",
        "Estetik Diş Hekimliği",
        "İmplantoloji",
        "Pedodonti",
        "Periodontoloji"
      ],
      contact: {
        phone: "0216 532 1010",
        whatsapp: "0552 701 6687",
        instagram: "@htcorhan",
        address: "Üsküdar, İstanbul",
        map: "https://maps.google.com/?q=Üsküdar+İstanbul",
        appointment: "https://wa.me/905527016687"
      },
      buttons: {
        contact: "İletişime Geç",
        services: "Hizmetlerimiz",
        about: "Hakkımızda",
        gallery: "Galeri",
        appointment: "Randevu Al"
      }
    },
    en: {
      name: "Dr. Hatice Orhan",
      title: "Dentist, Orthodontist",
      about:
        "Dr. Hatice Orhan provides orthodontic and modern dental services at her clinic in Üsküdar, Istanbul. We care about your smile.",
      services: [
        "Orthodontics",
        "Oral, Dental and Maxillofacial Surgery",
        "Dental Radiology",
        "Endodontics",
        "Aesthetic Dentistry",
        "Implantology",
        "Pedodontics",
        "Periodontology"
      ],
      contact: {
        phone: "0216 532 1010",
        whatsapp: "0552 701 6687",
        instagram: "@htcorhan",
        address: "Üsküdar, Istanbul",
        map: "https://maps.google.com/?q=Üsküdar+İstanbul",
        appointment: "https://wa.me/905527016687"
      },
      buttons: {
        contact: "Contact Us",
        services: "Our Services",
        about: "About Us",
        gallery: "Gallery",
        appointment: "Book Appointment"
      }
    }
  };

  const lang = content[language];

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{lang.name}</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={() => setLanguage("tr")}>TR</button>
          <button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={() => setLanguage("en")}>EN</button>
        </div>
      </div>
      <p className="text-lg text-gray-600">{lang.title} – {lang.contact.address}</p>

      <div className="my-6 grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">{lang.buttons.about}</h2>
          <p>{lang.about}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">{lang.buttons.services}</h2>
          <ul className="list-disc list-inside">
            {lang.services.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">{lang.buttons.gallery}</h2>
          <div className="grid grid-cols-3 gap-2">
            <img src="https://source.unsplash.com/160x160/?dental,clinic" alt="clinic" className="rounded-xl" />
            <img src="https://source.unsplash.com/160x160/?orthodontics" alt="ortodonti" className="rounded-xl" />
            <img src="https://source.unsplash.com/160x160/?dental,smile" alt="smile" className="rounded-xl" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">İletişim</h2>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2"><Phone size={16} /> {lang.contact.phone}</p>
            <p className="flex items-center gap-2"><MessageSquareText size={16} /> {lang.contact.whatsapp}</p>
            <p className="flex items-center gap-2"><Instagram size={16} /> {lang.contact.instagram}</p>
            <a href={lang.contact.map} className="flex items-center gap-2 text-blue-600" target="_blank" rel="noopener noreferrer">
              <MapPin size={16} /> Haritada Göster
            </a>
            <a href={lang.contact.appointment} className="flex items-center gap-2 text-green-600 font-semibold mt-2" target="_blank" rel="noopener noreferrer">
              <Calendar size={16} /> {lang.buttons.appointment}
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} {lang.name} – Tüm hakları saklıdır.
      </div>
    </div>
  );
}
