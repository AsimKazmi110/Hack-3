'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  _id: string;
  title: string;
  description: string;
  productImage: string;
  price: number;
  discountpercentage?: number;
  tags: string[];
}

const Card: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <Image src={product.productImage} alt={product.title} width={600} height={400} />
          <p>Price: {product.price}</p>
          {product.discountpercentage && <p>Discount: {product.discountpercentage}%</p>}
          <p>Tags: {product.tags.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
