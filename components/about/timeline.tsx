import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  {
    year: 2012,
    title: "Company Founded",
    description: "UFirst Sages established with a vision for excellence"
  },
  {
    year: 2015,
    title: "International Expansion",
    description: "Expanded operations to multiple locations"
  },
  {
    year: 2018,
    title: "Service Innovation",
    description: "Launched comprehensive civil engineering services"
  },
  {
    year: 2020,
    title: "Digital Transformation",
    description: "Implemented cutting-edge technology solutions"
  },
  {
    year: 2023,
    title: "Sustainable Growth",
    description: "Achieved significant milestones in sustainable practices"
  }
];

export function Timeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="relative pb-8">
              {index !== milestones.length - 1 && (
                <div className="absolute left-6 top-8 bottom-0 w-px bg-green-200" />
              )}
              <Card className="ml-14 relative">
                <CardContent className="p-6">
                  <div className="absolute -left-14 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}