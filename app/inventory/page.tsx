"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Car,
  Calendar,
  Fuel,
  Gauge,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const inventory = [
  {
    id: 1,
    title: "2023 Toyota Camry XSE",
    price: 32999,
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    year: 2023,
    mileage: 15000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Leather Seats",
      "Navigation System",
      "Sunroof",
      "Blind Spot Monitor",
      "Apple CarPlay"
    ]
  },
  {
    id: 2,
    title: "2022 Honda CR-V Touring",
    price: 34999,
    images: [
      "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    year: 2022,
    mileage: 22000,
    fuelType: "Gasoline",
    transmission: "CVT",
    features: [
      "AWD",
      "Honda Sensing",
      "Leather Interior",
      "Panoramic Roof",
      "Wireless Charging"
    ]
  },
  {
    id: 3,
    title: "2023 Tesla Model 3 Long Range",
    price: 45999,
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    year: 2023,
    mileage: 8000,
    fuelType: "Electric",
    transmission: "Automatic",
    features: [
      "Autopilot",
      "Premium Interior",
      "Glass Roof",
      "Premium Sound System",
      "Full Self-Driving Capability"
    ]
  },
  {
    id: 4,
    title: "2022 BMW X5 xDrive40i",
    price: 62999,
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    year: 2022,
    mileage: 18000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "xDrive AWD",
      "M Sport Package",
      "Head-Up Display",
      "Harman Kardon Audio",
      "Panoramic Moonroof"
    ]
  },
  {
    id: 5,
    title: "2023 Ford F-150 Lariat",
    price: 55999,
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    year: 2023,
    mileage: 12000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "4x4",
      "Pro Power Onboard",
      "Sync 4",
      "B&O Sound System",
      "360-Degree Camera"
    ]
  },
  {
    id: 6,
    title: "2022 Mercedes-Benz GLE 350",
    price: 58999,
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    year: 2022,
    mileage: 20000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "4MATIC AWD",
      "MBUX",
      "Burmester Sound",
      "Air Suspension",
      "Driver Assistance Package"
    ]
  },
  {
    id: 7,
    title: "2023 Porsche Macan S",
    price: 72999,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    year: 2023,
    mileage: 9000,
    fuelType: "Gasoline",
    transmission: "PDK",
    features: [
      "Sport Chrono Package",
      "Adaptive Air Suspension",
      "BOSE® Surround Sound",
      "LED Matrix Headlights",
      "Sport Design Package"
    ]
  },
  {
    id: 8,
    title: "2022 Lexus RX 350 F Sport",
    price: 49999,
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    year: 2022,
    mileage: 16000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "F SPORT Handling",
      "Mark Levinson Audio",
      "Panoramic View Monitor",
      "Head-Up Display",
      "Wireless Charging"
    ]
  },
  {
    id: 9,
    title: "2023 Audi Q7 Premium Plus",
    price: 65999,
    images: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    year: 2023,
    mileage: 11000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "quattro® AWD",
      "Virtual Cockpit Plus",
      "Bang & Olufsen® 3D Sound",
      "Adaptive Air Suspension",
      "Executive Package"
    ]
  },
  {
    id: 10,
    title: "2022 Volvo XC90 Recharge",
    price: 68999,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    year: 2022,
    mileage: 14000,
    fuelType: "Plug-in Hybrid",
    transmission: "Automatic",
    features: [
      "AWD",
      "Bowers & Wilkins Audio",
      "Air Suspension",
      "Pilot Assist",
      "Advanced Package"
    ]
  }
];

export default function InventoryPage() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedVehicle.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedVehicle.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="pt-16">
      <section className="relative py-12 md:py-20 wave-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Vehicle Inventory
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Browse our selection of premium vehicles
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {inventory.map((vehicle) => (
              <Card
                key={vehicle.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  setSelectedVehicle(vehicle);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={vehicle.images[0]}
                    alt={vehicle.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2">{vehicle.title}</h3>
                  <p className="text-xl md:text-2xl font-bold text-green-600 mb-4">
                    ${vehicle.price.toLocaleString()}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{vehicle.year}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Gauge className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{vehicle.mileage.toLocaleString()} mi</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Fuel className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{vehicle.fuelType}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Car className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{vehicle.transmission}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={selectedVehicle !== null}
        onOpenChange={(open) => !open && setSelectedVehicle(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl">{selectedVehicle?.title}</DialogTitle>
          </DialogHeader>
          {selectedVehicle && (
            <div className="space-y-6">
              <div className="relative h-48 sm:h-64 md:h-[400px]">
                <Image
                  src={selectedVehicle.images[currentImageIndex]}
                  alt={selectedVehicle.title}
                  fill
                  className="object-cover rounded-lg"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    ${selectedVehicle.price.toLocaleString()}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>Year: {selectedVehicle.year}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Gauge className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>Mileage: {selectedVehicle.mileage.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Fuel className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>Fuel: {selectedVehicle.fuelType}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Car className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>Transmission: {selectedVehicle.transmission}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedVehicle.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={() => setSelectedVehicle(null)}>
                  Close
                </Button>
                <Button>Contact Sales</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}