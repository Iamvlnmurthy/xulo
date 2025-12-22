import React from 'react';
import { Package, ShoppingCart, Archive, AlertTriangle, ChevronRight } from 'lucide-react';

const InventoryDashboard = () => {
    const categories = [
        { name: 'Stationery', count: 1240, status: 'Healthy' },
        { name: 'IT Infrastructure', count: 450, status: 'Healthy' },
        { name: 'Sports Equipment', count: 210, status: 'Low Stock' },
        { name: 'Lab Chemicals', count: 85, status: 'Critical' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900">Inventory & Assets</h1>
                    <p className="text-gray-500">Track stock levels, requests, and procurement.</p>
                </div>
                <div className="flex gap-2">
                    <button className="btn btn-ghost bg-white border border-gray-200">
                        <ShoppingCart size={18} /> Purchase Orders
                    </button>
                    <button className="btn btn-primary">
                        <Package size={18} /> Add Item
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Stock Overview */}
                <div className="lg:col-span-2 card p-6 bg-white">
                    <h3 className="font-bold text-gray-800 mb-4">Stock by Category</h3>
                    <div className="space-y-4">
                        {categories.map((cat, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-lg ${cat.status === 'Critical' ? 'bg-red-100 text-red-600' :
                                            cat.status === 'Low Stock' ? 'bg-orange-100 text-orange-600' :
                                                'bg-blue-100 text-blue-600'
                                        }`}>
                                        <Archive size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{cat.name}</h4>
                                        <p className="text-sm text-gray-500">{cat.count} Units</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    {cat.status === 'Critical' && <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">Reorder Now</span>}
                                    {cat.status === 'Low Stock' && <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded">Running Low</span>}
                                    <ChevronRight size={18} className="text-gray-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Low Stock Alerts */}
                <div className="card-premium bg-gradient-to-br from-rose-50 to-white border-rose-100 p-6">
                    <div className="flex items-center gap-2 text-rose-600 mb-4">
                        <AlertTriangle size={24} />
                        <h3 className="font-bold">Low Stock Alerts</h3>
                    </div>
                    <div className="space-y-3">
                        {[
                            { name: 'Sulphuric Acid (Lab)', left: '2 Bottles' },
                            { name: 'A4 Paper Rims', left: '5 Packs' },
                            { name: 'Football (Training)', left: '3 Units' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-3 rounded-lg border border-rose-100 flex justify-between items-center shadow-sm">
                                <span className="text-sm font-medium text-gray-700">{item.name}</span>
                                <span className="text-xs font-bold text-rose-600">{item.left}</span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 btn btn-primary bg-rose-500 hover:bg-rose-600 border-none shadow-none">Create Reorder Request</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryDashboard;
