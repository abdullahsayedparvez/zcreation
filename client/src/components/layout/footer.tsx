import { Link } from "wouter";
import { Twitter, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-playfair font-bold text-primary-300 mb-4">
              ZCreation
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering women through elegant, high-quality hijabs that celebrate both tradition and contemporary style.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary-300 transition-colors duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-rose-400 transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-300 transition-colors duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary-300 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-primary-300 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-primary-300 transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-primary-300 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-gray-300">hello@zcreation.com</p>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-gray-300">
                123 Fashion Street<br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 ZCreation. All rights reserved. Designed with ❤️ for modest fashion.
          </p>
        </div>
      </div>
    </footer>
  );
}
