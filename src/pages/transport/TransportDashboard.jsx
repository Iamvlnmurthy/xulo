import React from 'react';
import { Map, Navigation, Bus, Users, Clock } from 'lucide-react';

const TransportDashboard = () => {
    return (
        <div className="space-y-6 h-[calc(100vh-100px)] flex flex-col">
            <div className="flex justify-between items-center shrink-0">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Transport & Fleet</h1>
                    <p className="text-gray-500">Live vehicle tracking and route management.</p>
                </div>
                <div className="flex gap-2">
                    <button className="btn btn-ghost border bg-white">
                        <Users size={18} /> Manage Routes
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
                {/* List Panel */}
                <div className="card bg-white flex flex-col h-full overflow-hidden">
                    <div className="p-4 border-b border-gray-100 bg-gray-50">
                        <h3 className="font-bold text-gray-800">Active Vehicles (4)</h3>
                    </div>
                    <div className="overflow-y-auto flex-1 p-2 space-y-2">
                        {['Bus 1 (Route A)', 'Bus 2 (Route B)', 'Van 1 (Route C)', 'Bus 4 (Route D)'].map((bus, idx) => (
                            <div key={idx} className="p-3 rounded-lg border border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer transition-all group">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 bg-indigo-100 text-indigo-600 rounded">
                                            <Bus size={16} />
                                        </div>
                                        <span className="font-semibold text-gray-800 text-sm">{bus}</span>
                                    </div>
                                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-1"><Navigation size={12} /> Near City Center</span>
                                    <span className="flex items-center gap-1"><Clock size={12} /> On Time</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Map View (Placeholder) */}
                <div className="lg:col-span-2 card bg-gray-100 relative overflow-hidden flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="absolute inset-0 bg-blue-50/50" style={{
                        backgroundImage: 'radial-gradient(circle, #dbeafe 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}></div>

                    <div className="relative z-10 text-center p-8 bg-white/80 backdrop-blur rounded-xl shadow-lg max-w-sm">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                            <Map size={32} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Google Maps Integration</h3>
                        <p className="text-gray-500 text-sm mb-4">
                            Live GPS tracking API integration required. Simulator mode active.
                        </p>
                        <button className="btn btn-primary w-full">Enable Simulator</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransportDashboard;
