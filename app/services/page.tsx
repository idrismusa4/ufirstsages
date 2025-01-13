import { Car, Building2, Wrench, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Car,
      title: "Auto Sales",
      description: "Premium vehicles for all your needs",
      features: [
        "Wide selection of new and pre-owned vehicles",
        "Competitive pricing and financing options",
        "Expert vehicle consultation",
        "After-sales support and maintenance"
      ]
    },
    {
      icon: Building2,
      title: "Civil Engineering",
      description: "Expert engineering solutions",
      features: [
        "Infrastructure development",
        "Structural engineering",
        "Project management",
        "Environmental compliance"
      ]
    },
    {
      icon: Wrench,
      title: "General Contracts",
      description: "Comprehensive contracting services",
      features: [
        "Commercial construction",
        "Renovation projects",
        "Facility maintenance",
        "Equipment procurement"
      ]
    }
  ];

  return (
    <div className="pt-16">
      <section className="relative py-20 wave-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90">
              Comprehensive business solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-lg p-8">
                <service.icon className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}