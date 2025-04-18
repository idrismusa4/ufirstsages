import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "SWAT",
    role: "Executive Director",
    image: "/executive_director.jpg",
  },
  {
    name: "Benjamin Olagunju",
    role: "Chief Financial Officer",
    image: "/CFO.jpg"
  },
  {
    name: "Engr. Shalom Adalumo",
    role: "Director of Operations",
    image: "/DOO.jpg"
  }
];

export function TeamSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}