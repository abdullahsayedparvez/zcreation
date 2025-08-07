import { X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen || !product) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleViewDetails = () => {
    window.open(product.link, '_blank');
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
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-xl object-cover h-64 md:h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-4">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {product.description}
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-300 mr-3" />
                    <span className="text-gray-700 font-medium">Premium quality materials</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-300 mr-3" />
                    <span className="text-gray-700 font-medium">Easy care and maintenance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-300 mr-3" />
                    <span className="text-gray-700 font-medium">Available in multiple sizes</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button
                    onClick={handleViewDetails}
                    className="w-full bg-primary-300 text-white py-3 rounded-lg hover:bg-primary-400 transition-colors duration-300 font-poppins font-medium"
                  >
                    View Full Details
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-primary-300 text-primary-300 py-3 rounded-lg hover:bg-primary-300 hover:text-white transition-all duration-300 font-poppins font-medium"
                  >
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
