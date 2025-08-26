import { useState } from "react";
import { X, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductModalProps) {
  if (!isOpen || !product) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Collect images into an array
  const images = [product.image1, product.image2, product.image3].filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
          >
            <X className="w-8 h-8" />
          </Button>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image Slider */}
              <div className="relative">
                <img
                  src={images[currentIndex]}
                  alt={product.name}
                  className="w-full rounded-xl object-cover h-64 md:h-auto"
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Product Details */}
              <div>
                <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-4">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  {product.description}
                </p>

                {/* Price */}
                <p className="text-2xl font-bold text-primary-500 mb-6">
                  ₹250/-
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-300 mr-3" />
                    <span className="text-gray-700 font-medium">
                      Premium quality materials
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-300 mr-3" />
                    <span className="text-gray-700 font-medium">
                      Easy care and maintenance
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-300 mr-3" />
                    <span className="text-gray-700 font-medium">
                      Available in multiple sizes
                    </span>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="mt-6 text-center">
                  <p className="text-lg font-semibold text-gray-800">
                    📞 Contact us:{" "}
                    <a
                      href="tel:+919136786290"
                      className="text-primary-500 hover:underline"
                    >
                      +91 9136786290
                    </a>{" "}
                    |{" "}
                    <a
                      href="tel:+919892692952"
                      className="text-primary-500 hover:underline"
                    >
                      +91 9892692952
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
