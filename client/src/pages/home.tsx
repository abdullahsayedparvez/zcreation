import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, DollarSign } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/lib/types";
import hijabImage from "@assets/DALL·E 2025-01-28 11.25.33 - A traditional Saudi-style Islamic hijab, featuring elegant and modest design. The fabric is soft and flowing, with intricate embroidery in gold or sil_1754556878214.webp";
import childrenImage from "@assets/children-g0fdd56c8a_1280_1754557049130.jpg";

export default function Home() {
  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ['/src/data/products.json'],
    queryFn: async () => {
      const response = await fetch('/src/data/products.json');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    },
  });

  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100/90 to-rose-100/90 z-10"></div>
        <div
          className="relative h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${hijabImage})`,
          }}
        >
          <div className="relative z-20 flex items-center justify-center h-full">
            <div className="text-center px-4 max-w-4xl mx-auto animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
                Elegant Modest Fashion
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto">
                Discover the perfect blend of style, comfort, and modesty with ZCreation's premium hijab collection
              </p>
              <div className="space-x-4">
                <Link href="/products">
                  <Button className="bg-primary-300 text-white px-8 py-3 rounded-full font-poppins font-medium hover:bg-primary-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Explore Collection
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-poppins font-medium hover:bg-white hover:text-primary-300 transition-all duration-300"
                  >
                    Our Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
              Why Choose ZCreation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional values with contemporary style to create hijabs that empower and inspire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-300" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Crafted from the finest fabrics with attention to every detail, ensuring comfort and durability
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">
                Modern Designs
              </h3>
              <p className="text-gray-600">
                Contemporary styles that reflect current fashion trends while honoring traditional values
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-primary-300" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">
                Fair Pricing
              </h3>
              <p className="text-gray-600">
                Accessible luxury that doesn't compromise on quality or ethical production practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url(${childrenImage})`,
            }}
          ></div>
          <div className="absolute inset-0 bg-primary-50/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular designs, loved by women worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button className="w-full bg-primary-300 text-white py-2 rounded-lg hover:bg-primary-400 transition-colors duration-300">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button className="bg-primary-300 text-white px-8 py-3 rounded-full font-poppins font-medium hover:bg-primary-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
