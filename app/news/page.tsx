import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsPage() {
  const news = [
    {
      title: "Expansion into New Markets",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "UFirst Sages announces expansion into new international markets, bringing our expertise to more clients globally."
    },
    {
      title: "Sustainable Engineering Initiative",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Launch of our new sustainable engineering initiative, focusing on eco-friendly construction practices."
    },
    {
      title: "Award-Winning Project",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "UFirst Sages receives industry recognition for excellence in civil engineering project management."
    }
  ];

  return (
    <div className="pt-16">
      <section className="relative py-20 wave-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-white/90">
              Stay informed about our latest developments and achievements
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card key={item.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-green-600 hover:text-green-700">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}