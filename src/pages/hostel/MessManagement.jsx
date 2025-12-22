import React, { useState } from 'react';
import { Coffee, Sun, Moon, Plus, AlertCircle } from 'lucide-react';

const MEAL_TYPES = [
    { id: 'breakfast', label: 'Breakfast', icon: Coffee, time: '07:30 AM - 09:00 AM' },
    { id: 'lunch', label: 'Lunch', icon: Sun, time: '12:30 PM - 02:00 PM' },
    { id: 'dinner', label: 'Dinner', icon: Moon, time: '07:30 PM - 09:00 PM' }
];

const STOCK_ITEMS = [
    { item: 'Rice', quantity: '500 kg', status: 'High' },
    { item: 'Wheat Flour', quantity: '350 kg', status: 'High' },
    { item: 'Cooking Oil', quantity: '12 L', status: 'Low' },
    { item: 'Vegetables', quantity: '45 kg', status: 'Medium' }
];

const MessManagement = () => {
    const [menu, setMenu] = useState({
        breakfast: 'Idli, Sambar, Chutney, Coffee/Tea',
        lunch: 'Rice, Dal Fry, Mixed Veg Curry, Curd, Pickle',
        dinner: 'Chapati, Paneer Butter Masala, Rice, Salad'
    });

    const handleMenuChange = (type, value) => {
        setMenu(prev => ({ ...prev, [type]: value }));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Mess Management</h1>
                    <p className="text-gray-500">Plan daily meals and monitor kitchen stock.</p>
                </div>
                <button className="btn btn-primary">
                    <Plus size={18} /> Add New Item
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Daily Menu Planner */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="card bg-white p-6">
                        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                            Today's Menu ({new Date().toLocaleDateString()})
                        </h3>
                        <div className="space-y-6">
                            {MEAL_TYPES.map((meal) => (
                                <div key={meal.id} className="flex gap-4 items-start">
                                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                                        <meal.icon size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-1">
                                            <h4 className="font-semibold text-gray-900">{meal.label}</h4>
                                            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">{meal.time}</span>
                                        </div>
                                        <textarea
                                            value={menu[meal.id]}
                                            onChange={(e) => handleMenuChange(meal.id, e.target.value)}
                                            className="w-full text-sm text-gray-600 bg-gray-50 border border-transparent focus:border-indigo-300 focus:bg-white rounded-lg p-3 transition-all outline-none"
                                            rows="2"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button className="btn btn-primary bg-green-600 hover:bg-green-700">Save Menu</button>
                        </div>
                    </div>
                </div>

                {/* Kitchen Stock */}
                <div className="space-y-6">
                    <div className="card bg-white p-6">
                        <h3 className="font-bold text-gray-800 mb-4">Kitchen Stock</h3>
                        <div className="space-y-3">
                            {STOCK_ITEMS.map((s, i) => (
                                <div key={i} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                                    <div>
                                        <p className="font-medium text-gray-800 text-sm">{s.item}</p>
                                        <p className="text-xs text-gray-500">{s.quantity}</p>
                                    </div>
                                    {s.status === 'Low' && <AlertCircle size={18} className="text-red-500" />}
                                    {s.status === 'Medium' && <div className="w-2 h-2 rounded-full bg-yellow-500"></div>}
                                    {s.status === 'High' && <div className="w-2 h-2 rounded-full bg-green-500"></div>}
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-4 btn btn-ghost text-indigo-600 text-sm font-medium">View Full Inventory</button>
                    </div>

                    <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-6 text-white">
                        <h3 className="font-bold text-lg mb-2">Food Wastage Report</h3>
                        <div className="text-3xl font-display font-bold mb-1">4.2 kg</div>
                        <p className="text-orange-100 text-sm">Recorded yesterday</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessManagement;
