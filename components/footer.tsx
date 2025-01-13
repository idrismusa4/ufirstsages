import Link from "next/link";
import { Car, Building2, Wrench, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-6 w-6 text-green-500" />
              <span className="font-bold text-lg">UFirst Sages</span>
            </div>
            <p className="text-gray-400">
              We bring success to your business through professional services in Auto Sales,
              Civil Engineering, and General Contracts.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-green-500">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-gray-400 hover:text-green-500">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Car className="h-4 w-4" />
                <span>Auto Sales</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Building2 className="h-4 w-4" />
                <span>Civil Engineering</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Wrench className="h-4 w-4" />
                <span>General Contracts</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Abuja, Port Harcourt, USA</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890" className="hover:text-green-500">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@ufirstsages.com" className="hover:text-green-500">
                  info@ufirstsages.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} UFirst Sages. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}