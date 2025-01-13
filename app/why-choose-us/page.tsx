import { Shield, Trophy, Users, Clock, HeartHandshake, Gem } from "lucide-react";

export default function WhyChooseUsPage() {
  const reasons = [
    {
      icon: Shield,
      title: "Trusted Excellence",
      description: "Over a decade of proven expertise and reliability in delivering exceptional business solutions."
    },
    {
      icon: Trophy,
      title: "Industry Leadership",
      description: "Recognized as a leader in auto sales, civil engineering, and general contracting services."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly qualified professionals dedicated to delivering outstanding results for every project."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to meeting deadlines and delivering projects on schedule without compromising quality."
    },
    {
      icon: HeartHandshake,
      title: "Customer Focus",
      description: "Dedicated to understanding and exceeding our clients' expectations with personalized solutions."
    },
    {
      icon: Gem,
      title: "Quality Assurance",
      description: "Rigorous quality control measures ensuring the highest standards in all our services."
    }
  ];

  return (
    <div className="pt-16">
      <section className="relative py-20 wave-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Us
            </h1>
            <p className="text-xl text-white/90">
              Discover what sets us apart in delivering exceptional business solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <reason.icon className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}