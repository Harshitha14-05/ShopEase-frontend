import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {selectedCategory === 'All' ? 'All Products' : selectedCategory}
        </h2>
        <p className="text-gray-600 mt-2">
          {filteredProducts.length} products available
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}