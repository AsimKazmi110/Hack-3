import { FC } from "react";
import Image from "next/image";

interface Card {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  ratingCount: number;
  image: string;
  category: string;
  tags: string[];
}

interface ProductDetailProps {
  product: Card;
}

const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
  const defaultImage = "/path/to/default/image.jpg"; // Define your default image path here

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image Section */}
          <div className="flex justify-center items-center">
            <Image
              src={product.image || defaultImage}  // Fallback to default image if product.image is invalid
              alt={product.image}
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col">
            <h2 className="text-gray-900 text-3xl font-bold mb-3">{product.name}</h2>
            <p className="text-gray-600 text-base mb-4">{product.description}</p>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-gray-600 text-lg font-bold">${product.price}</span>
              <span className="text-teal-700 text-base font-bold">
                {product.discountPercentage}% Off
              </span>
            </div>

            <div className="flex flex-col mb-4">
              <p className="text-gray-600 font-semibold">Category:</p>
              <p className="text-gray-800">{product.category}</p>
            </div>

            <div className="flex flex-col mb-4">
              <p className="text-gray-600 font-semibold">Tags:</p>
              <ul className="list-disc pl-6">
                {product.tags.map((tag, index) => (
                  <li key={index} className="text-gray-800">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center items-center gap-4 mt-6">
              <button className="px-6 py-2 bg-teal-600 text-white font-bold rounded-lg">
                Add to Cart
              </button>
              <button className="px-6 py-2 border-2 border-teal-600 text-teal-600 font-bold rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
