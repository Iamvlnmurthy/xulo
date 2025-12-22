import React from 'react';
import { Home, Users, Bed, Coffee, Plus } from 'lucide-react';

const HostelDashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900">Hostel & Residency</h1>
                    <p className="text-gray-500">Manage boarding houses, room allocation, and mess.</p>
                </div>
                <div className="flex gap-2">
                    <button className="btn btn-ghost bg-white border border-gray-200">
                        <Coffee size={18} /> Mess Menu
                    </button>
                    <button className="btn btn-primary">
                        <Plus size={18} /> Allocate Room
                    </button>
                </div>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card-premium p-6">
                    <h3 className="text-sm font-bold text-gray-500 uppercase">Occupancy</h3>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900">342</span>
                        <span className="text-sm text-gray-400">/ 400 Beds</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 mt-4">
                        <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                </div>
                <div className="card-premium p-6">
                    <h3 className="text-sm font-bold text-gray-500 uppercase">Leave Requests</h3>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900">8</span>
                        <span className="text-sm text-gray-400">Pending</span>
                    </div>
                </div>
            </div>

            {/* Buildings Grid */}
            <h2 className="text-xl font-bold text-gray-800 mt-4">Hostel Buildings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Boys Hostel A (Junior)', 'Boys Hostel B (Senior)', 'Girls Hostel (Main)'].map((hostel, i) => (
                    <div key={i} className="card group hover:border-indigo-400 cursor-pointer overflow-hidden p-0">
                        <div className="h-32 bg-gray-100 flex items-center justify-center relative">
                            <Home size={48} className="text-gray-300" />
                            <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-xs font-bold text-green-600">
                                Open
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="font-bold text-lg text-gray-900 mb-1">{hostel}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-500 my-4">
                                <span className="flex items-center gap-1"><Bed size={16} /> 120 Beds</span>
                                <span className="flex items-center gap-1"><Users size={16} /> 2 Wardens</span>
                            </div>
                            <button className="w-full btn btn-ghost bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 text-sm">View Rooms</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HostelDashboard;
