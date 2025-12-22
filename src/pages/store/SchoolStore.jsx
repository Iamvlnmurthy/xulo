import React, { useState } from 'react';
import { ShoppingBag, Star, Plus, Minus, Tag } from 'lucide-react';

const PRODUCTS = [
    { id: 1, name: 'School Uniform (Winter) - Blazer', price: '₹1,450', category: 'Uniform', image: 'https://placehold.co/100?text=Blazer', rating: 4.5 },
    { id: 2, name: 'House T-Shirt (Red)', price: '₹450', category: 'Uniform', image: 'https://placehold.co/100?text=T-Shirt', rating: 4.8 },
    { id: 3, name: 'Complete Math Kit (Class IX)', price: '₹750', category: 'Books', image: 'https://placehold.co/100?text=Kit', rating: 4.2 },
    { id: 4, name: 'School Backpack (Waterproof)', price: '₹1,200', category: 'Accessories', image: 'https://placehold.co/100?text=Bag', rating: 4.6 },
];

const SchoolStore = () => {
    const [cartCount, setCartCount] = useState(2);

    const addToCart = (product) => {
        setCartCount(prev => prev + 1);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900">School Store</h1>
                    <p className="text-gray-500">Purchase uniforms, books, and school merchandise.</p>
                </div>
                <button
                    className="btn btn-primary relative"
                    onClick={() => alert("Cart feature is currently a demo. Items are tracked in local state.")}
                >
                    <ShoppingBag size={18} /> Cart
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[10px] rounded-full flex items-center justify-center border-2 border-white">{cartCount}</span>
                </button>
            </div>

            {/* Filter Tags */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {['All Items', 'Uniforms', 'Books', 'Stationery', 'Accessories'].map((tag, i) => (
                    <button
                        key={i}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {PRODUCTS.map((product) => (
                    <div key={product.id} className="card p-0 group overflow-hidden">
                        <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                            {/* Placeholder Image Overlay */}
                            <div className="absolute inset-0 bg-gray-200 opacity-50 group-hover:scale-105 transition-transform duration-300"></div>
                            <ShoppingBag size={40} className="text-gray-300 z-10" />
                            <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-600">
                                {product.category}
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-gray-900 line-clamp-2 h-10">{product.name}</h3>
                                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 px-1.5 py-0.5 rounded">
                                    <Star size={10} fill="currentColor" /> {product.rating}
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-indigo-600 mb-4">{product.price}</h4>

                            <button
                                onClick={() => addToCart(product)}
                                className="w-full btn btn-primary flex justify-center text-sm py-2"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}

                {/* Promo Card */}
                <div className="card-premium bg-gradient-to-br from-indigo-500 to-purple-600 border-none text-white p-6 flex flex-col justify-center items-center text-center">
                    <Tag size={48} className="mb-4 text-white/50" />
                    <h3 className="font-bold text-xl mb-2">Winter Sale!</h3>
                    <p className="text-indigo-100 text-sm mb-6">Get 20% off on all winter uniforms until Dec 31st.</p>
                    <button className="px-6 py-2 bg-white text-indigo-600 rounded-lg font-bold hover:bg-gray-50 transition-colors shadow-lg">
                        View Offers
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SchoolStore;
