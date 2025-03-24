"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Icône personnalisée pour le marqueur Leaflet
const customIcon = new L.Icon({
  iconUrl: "/images/icone.jpg", // Remplacez par l'icône de votre choix
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div id='contact'  className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Formulaire */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nom *"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-full"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Numéro de téléphone *"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-full"
          />
          <select
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="w-full p-3 border rounded-full"
          >
            <option value="">Comment nous avez-vous trouvés ?</option>
            <option value="internet">Internet</option>
            <option value="recommandation">Recommandation</option>
            <option value="autre">Autre</option>
          </select>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition"
          >
            ENVOYER
          </button>
        </form>

        {/* Coordonnées */}
        <div className="mt-6 text-gray-700 space-y-2">
          <p>📞 Téléphone: <span className="font-semibold">+237 342 234</span></p>
          <p>📠 Fax: <span className="font-semibold">+237 342 234</span></p>
          <p>📧 Email: <span className="font-semibold text-green-500">info@ubora.com</span></p>
        </div>
      </div>

      {/* Carte */}
      <div className="h-96 w-full">
        <MapContainer center={[3.139, 101.6869]} zoom={13} className="h-full w-full rounded-md">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[3.139, 101.6869]} icon={customIcon}>
            <Popup>Notre emplacement</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
