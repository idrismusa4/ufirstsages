import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Building2, Wrench, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Business district"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              We Bring Success to Your Business
            </h1>
            <p className="text-xl text-white mb-8">
              Professional services in Auto Sales, Civil Engineering, and General Contracts
            </p>
            <div className="space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700"
              >
                <Link href="/services">Our Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-black border-white hover:bg-white hover:text-green-600"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Key Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Car className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Auto Sales</h3>
                <p className="text-gray-600 mb-4">
                  Premium vehicles and exceptional customer service for all your automotive needs.
                </p>
                <Link
                  href="/services#auto-sales"
                  className="text-green-600 hover:text-green-700 inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Civil Engineering</h3>
                <p className="text-gray-600 mb-4">
                  Expert engineering solutions for construction and infrastructure projects.
                </p>
                <Link
                  href="/services#civil-engineering"
                  className="text-green-600 hover:text-green-700 inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">General Contracts</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive contracting services for diverse business needs.
                </p>
                <Link
                  href="/services#general-contracts"
                  className="text-green-600 hover:text-green-700 inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Updates</h2>
            <Button asChild variant="outline">
              <Link href="/news">View All News</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add news cards here */}
          </div>
        </div>
      </section>
    </div>
  );
}