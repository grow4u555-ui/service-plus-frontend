import React from "react";

const services = [
  { title: "Fast Delivery", desc: "Quick and reliable delivery services." },
  { title: "24/7 Support", desc: "Always available for your assistance." },
  { title: "Affordable Price", desc: "Best services at the lowest price." },
];

export default function CardSection() {
  return (
    <section className="py-16 container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
        >
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.desc}</p>
        </div>
      ))}
    </section>
  );
}
