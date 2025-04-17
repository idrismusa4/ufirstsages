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

interface Vehicle {
  id: number;
  title: string;
  price: number;
  images: string[];
  videos?: string[];
  year: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  features: string[];
}

// Helper type for media items
type MediaItem = {
  type: 'image' | 'video';
  src: string;
};

const inventory: Vehicle[] = [
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
  // {
  //   id: 2,
  //   title: "2022 Honda CR-V Touring",
  //   price: 34999,
  //   images: [
  //     "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  //     "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  //     "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  //   ],
  //   year: 2022,
  //   mileage: 22000,
  //   fuelType: "Gasoline",
  //   transmission: "CVT",
  //   features: [
  //     "AWD",
  //     "Honda Sensing",
  //     "Leather Interior",
  //     "Panoramic Roof",
  //     "Wireless Charging"
  //   ]
  // },
  // {
  //   id: 3,
  //   title: "2023 Tesla Model 3 Long Range",
  //   price: 45999,
  //   images: [
  //     "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  //   ],
  //   year: 2023,
  //   mileage: 8000,
  //   fuelType: "Electric",
  //   transmission: "Automatic",
  //   features: [
  //     "Autopilot",
  //     "Premium Interior",
  //     "Glass Roof",
  //     "Premium Sound System",
  //     "Full Self-Driving Capability"
  //   ]
  // },
  // {
  //   id: 4,
  //   title: "2022 BMW X5 xDrive40i",
  //   price: 62999,
  //   images: [
  //     "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  //   ],
  //   year: 2022,
  //   mileage: 18000,
  //   fuelType: "Gasoline",
  //   transmission: "Automatic",
  //   features: [
  //     "xDrive AWD",
  //     "M Sport Package",
  //     "Head-Up Display",
  //     "Harman Kardon Audio",
  //     "Panoramic Moonroof"
  //   ]
  // },
  // {
  //   id: 5,
  //   title: "2023 Ford F-150 Lariat",
  //   price: 55999,
  //   images: [
  //     "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  //   ],
  //   year: 2023,
  //   mileage: 12000,
  //   fuelType: "Gasoline",
  //   transmission: "Automatic",
  //   features: [
  //     "4x4",
  //     "Pro Power Onboard",
  //     "Sync 4",
  //     "B&O Sound System",
  //     "360-Degree Camera"
  //   ]
  // },
  // {
  //   id: 6,
  //   title: "2022 Mercedes-Benz GLE 350",
  //   price: 58999,
  //   images: [
  //     "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  //   ],
  //   year: 2022,
  //   mileage: 20000,
  //   fuelType: "Gasoline",
  //   transmission: "Automatic",
  //   features: [
  //     "4MATIC AWD",
  //     "MBUX",
  //     "Burmester Sound",
  //     "Air Suspension",
  //     "Driver Assistance Package"
  //   ]
  // },
  // {
  //   id: 7,
  //   title: "2023 Porsche Macan S",
  //   price: 72999,
  //   images: [
  //     "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  //   ],
  //   year: 2023,
  //   mileage: 9000,
  //   fuelType: "Gasoline",
  //   transmission: "PDK",
  //   features: [
  //     "Sport Chrono Package",
  //     "Adaptive Air Suspension",
  //     "BOSE® Surround Sound",
  //     "LED Matrix Headlights",
  //     "Sport Design Package"
  //   ]
  // },
  // {
  //   id: 8,
  //   title: "2022 Lexus RX 350 F Sport",
  //   price: 49999,
  //   images: [
  //     "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  //   ],
  //   year: 2022,
  //   mileage: 16000,
  //   fuelType: "Gasoline",
  //   transmission: "Automatic",
  //   features: [
  //     "F SPORT Handling",
  //     "Mark Levinson Audio",
  //     "Panoramic View Monitor",
  //     "Head-Up Display",
  //     "Wireless Charging"
  //   ]
  // },
  // {
  //   id: 9,
  //   title: "2023 Audi Q7 Premium Plus",
  //   price: 65999,
  //   images: [
  //     "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  //   ],
  //   year: 2023,
  //   mileage: 11000,
  //   fuelType: "Gasoline",
  //   transmission: "Automatic",
  //   features: [
  //     "quattro® AWD",
  //     "Virtual Cockpit Plus",
  //     "Bang & Olufsen® 3D Sound",
  //     "Adaptive Air Suspension",
  //     "Executive Package"
  //   ]
  // },
  // {
  //   id: 10,
  //   title: "2022 Volvo XC90 Recharge",
  //   price: 68999,
  //   images: [
  //     "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  //   ],
  //   year: 2022,
  //   mileage: 14000,
  //   fuelType: "Plug-in Hybrid",
  //   transmission: "Automatic",
  //   features: [
  //     "AWD",
  //     "Bowers & Wilkins Audio",
  //     "Air Suspension",
  //     "Pilot Assist",
  //     "Advanced Package"
  //   ]
  // },
  {
    id: 11,
    title: "Toyota Bus",
    price: 45999,
    images: [
      "/cars/Toyota Bus/27.jpg",
      "/cars/Toyota Bus/28.jpg"
    ],
    year: 2022,
    mileage: 25000,
    fuelType: "Diesel",
    transmission: "Manual",
    features: [
      "16 Seater",
      "Air Conditioning",
      "Power Steering",
      "ABS",
      "Central Locking"
    ]
  },
  {
    id: 12,
    title: "Toyota Camry 2015",
    price: 18500,
    images: [
      "/cars/Camry 2015/16.jpg",
      "/cars/Camry 2015/17.jpg"
    ],
    year: 2015,
    mileage: 65000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Bluetooth Connectivity",
      "Backup Camera",
      "Cruise Control",
      "Keyless Entry",
      "Alloy Wheels"
    ]
  },
  {
    id: 13,
    title: "Toyota Prado 2016 Series",
    price: 39999,
    images: [
      "/cars/Prado 2016 Series/22.jpg",
      "/cars/Prado 2016 Series/23.jpg",
      "/cars/Prado 2016 Series/24.jpg",
      "/cars/Prado 2016 Series/25.jpg",
    ],
    year: 2016,
    mileage: 48000,
    fuelType: "Diesel",
    transmission: "Automatic",
    features: [
      "4WD",
      "Leather Interior",
      "Sunroof",
      "Navigation System",
      "Parking Sensors"
    ]
  },
  {
    id: 14,
    title: "Mercedes-Benz C Series",
    price: 36500,
    images: [
      "/cars/Benz C Series/18.jpg",
      "/cars/Benz C Series/19.jpg"
    ],
    year: 2018,
    mileage: 35000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Premium Audio",
      "Heated Seats",
      "Panoramic Roof",
      "Lane Assist",
      "Keyless Start"
    ]
  },
  {
    id: 15,
    title: "Toyota Landcruiser Prado VXL",
    price: 59999,
    images: [
      "/cars/Landcruiser Prado VXl/12.jpg",
      "/cars/Landcruiser Prado VXl/13.jpg",
      "/cars/Landcruiser Prado VXl/14.jpg",
      "/cars/Landcruiser Prado VXl/15.jpg",
      "/cars/Landcruiser Prado VXl/26.jpg",
    ],
    videos:[
      "/cars/Landcruiser Prado VXl/32.mp4",
      // "/cars/Landcruiser Prado VXl/33.mp4"
    ],
    year: 2020,
    mileage: 22000,
    fuelType: "Diesel",
    transmission: "Automatic",
    features: [
      "Multi-terrain Select",
      "Premium Leather",
      "JBL Sound System",
      "360 Camera",
      "Crawl Control"
    ]
  },
  {
    id: 16,
    title: "Toyota Hilux",
    price: 42500,
    images: [
      "/cars/Hilux/3.jpg",
      "/cars/Hilux/4.jpg",
      "/cars/Hilux/11.jpg",
    ],
    videos: [
      "/cars/Hilux/30.mp4",
      "/cars/Hilux/31.mp4"
    ],
    year: 2021,
    mileage: 18000,
    fuelType: "Diesel",
    transmission: "Manual",
    features: [
      "4x4",
      "Tow Package",
      "Bed Liner",
      "Off-road Package",
      "Bluetooth"
    ]
  },
  {
    id: 17,
    title: "Mercedes-Benz GLK 300",
    price: 29999,
    images: [
      "/cars/GLK 300/9.jpg",
      "/cars/GLK 300/8.jpg",
      "/cars/GLK 300/20.jpg",
      "/cars/GLK 300/21.jpg",
    ],
    year: 2017,
    mileage: 42000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "4MATIC AWD",
      "Heated Steering Wheel",
      "Memory Seats",
      "Blind Spot Assist",
      "Harman Kardon Sound"
    ]
  },
  {
    id: 18,
    title: "Lexus RX350",
    price: 46500,
    images: [
      "/cars/Lexus Rx350/2.jpg",
      "/cars/Lexus Rx350/10.jpg"
    ],
    year: 2019,
    mileage: 31000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Mark Levinson Audio",
      "Ventilated Seats",
      "Power Liftgate",
      "Heads-up Display",
      "Adaptive Cruise Control"
    ]
  },
  {
    id: 19,
    title: "Mercedes-Benz G63 AMG",
    price: 189999,
    images: [
      "/cars/Benz G63/1.jpg",
      "/cars/Benz G63/5.jpg",
      "/cars/Benz G63/6.jpg",
      "/cars/Benz G63/7.jpg"
    ],
    videos: [
      "/cars/Benz G63/29.mp4"
    ],
    year: 2022,
    mileage: 8000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "577 HP Twin-Turbo V8",
      "AMG Performance Exhaust",
      "Exclusive Interior",
      "Designo Package",
      "Night Package"
    ]
  }
];

export default function InventoryPage() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  // Combine images and videos into a single media array
  const getMediaItems = (vehicle: Vehicle | null): MediaItem[] => {
    if (!vehicle) return [];
    
    const mediaItems: MediaItem[] = [
      ...vehicle.images.map(img => ({ type: 'image', src: img } as MediaItem)),
    ];
    
    if (vehicle.videos && vehicle.videos.length > 0) {
      mediaItems.push(...vehicle.videos.map(video => ({ type: 'video', src: video } as MediaItem)));
    }
    
    return mediaItems;
  };

  const handlePrevMedia = () => {
    if (!selectedVehicle) return;
    const mediaItems = getMediaItems(selectedVehicle);
    setCurrentMediaIndex((prev) =>
      prev === 0 ? mediaItems.length - 1 : prev - 1
    );
  };

  const handleNextMedia = () => {
    if (!selectedVehicle) return;
    const mediaItems = getMediaItems(selectedVehicle);
    setCurrentMediaIndex((prev) =>
      prev === mediaItems.length - 1 ? 0 : prev + 1
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
                  setCurrentMediaIndex(0);
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
                {/* Render either image or video based on media type */}
                {(() => {
                  const mediaItems = getMediaItems(selectedVehicle);
                  const currentMedia = mediaItems[currentMediaIndex];
                  
                  if (!currentMedia) return null;
                  
                  if (currentMedia.type === 'image') {
                    return (
                      <Image
                        src={currentMedia.src}
                        alt={selectedVehicle.title}
                        fill
                        className="object-cover rounded-lg"
                        onError={(e) => {
                          // Add error handling for images
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
                        }}
                      />
                    );
                  } else {
                    return (
                      <video 
                        src={currentMedia.src} 
                        controls 
                        className="absolute inset-0 w-full h-full rounded-lg object-cover"
                        playsInline
                        controlsList="nodownload"
                        onError={(e) => {
                          // Add error handling for videos
                          const target = e.target as HTMLVideoElement;
                          target.poster = "https://via.placeholder.com/800x600?text=Video+Not+Found";
                        }}
                      >
                        Your browser does not support the video tag.
                      </video>
                    );
                  }
                })()}
                
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevMedia();
                  }}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextMedia();
                  }}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                
                {/* Add media indicator dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                  {getMediaItems(selectedVehicle).map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentMediaIndex 
                          ? "bg-white" 
                          : "bg-white/50"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentMediaIndex(index);
                      }}
                    />
                  ))}
                </div>
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