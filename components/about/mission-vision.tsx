import { Rocket, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function MissionVision() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Rocket className="h-8 w-8 text-green-600" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-600">
                To deliver exceptional business solutions through innovation, 
                integrity, and unwavering commitment to quality, while fostering 
                sustainable growth for our clients and communities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Eye className="h-8 w-8 text-green-600" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-600">
                To be the leading provider of integrated business solutions, 
                recognized globally for our excellence, innovation, and positive 
                impact on the communities we serve.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}