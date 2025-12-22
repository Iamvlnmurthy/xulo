import React from 'react';
import { ShieldCheck, UserPlus, LogOut, Clock, Camera } from 'lucide-react';

const SecurityDashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900">Safety & Security</h1>
                    <p className="text-gray-500">Visitor management and gate pass control.</p>
                </div>
                <button className="btn btn-primary bg-rose-600 hover:bg-rose-700 border-none shadow-rose-500/20">
                    <UserPlus size={18} /> New Visitor Entry
                </button>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="card p-4 border-l-4 border-green-500">
                    <p className="text-xs text-gray-500 font-bold uppercase">Inside Campus</p>
                    <h3 className="text-2xl font-bold text-gray-900">12</h3>
                    <p className="text-xs text-green-500 mt-1">Visitors Active</p>
                </div>
                <div className="card p-4 border-l-4 border-blue-500">
                    <p className="text-xs text-gray-500 font-bold uppercase">Total Today</p>
                    <h3 className="text-2xl font-bold text-gray-900">45</h3>
                </div>
                <div className="card p-4 border-l-4 border-orange-500">
                    <p className="text-xs text-gray-500 font-bold uppercase">Gate Passes</p>
                    <h3 className="text-2xl font-bold text-gray-900">8</h3>
                    <p className="text-xs text-orange-500 mt-1">Issued for Students</p>
                </div>
                <div className="card p-4 border-l-4 border-purple-500">
                    <p className="text-xs text-gray-500 font-bold uppercase">Camera Status</p>
                    <h3 className="text-2xl font-bold text-gray-900">Online</h3>
                    <p className="text-xs text-purple-500 mt-1">16/16 Active</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Visitor Log */}
                <div className="lg:col-span-2 card bg-white">
                    <div className="p-4 border-b border-gray-100">
                        <h3 className="font-bold text-gray-800">Active Visitor Log</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                                        <Camera size={16} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Visitor Name {i}</h4>
                                        <p className="text-xs text-gray-500">Meeting: Principal • Reason: Admission</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-1 text-green-600 text-xs font-bold mb-1">
                                        <Clock size={10} /> IN: 10:30 AM
                                    </div>
                                    <button className="text-[10px] font-bold text-red-500 hover:bg-red-50 px-2 py-1 rounded border border-red-100">
                                        MARK EXIT
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Pass */}
                <div className="card bg-gray-900 text-gray-300 p-6">
                    <div className="flex items-center gap-3 mb-6 text-white">
                        <ShieldCheck size={24} className="text-emerald-400" />
                        <h3 className="font-bold text-lg">Gate Pass</h3>
                    </div>
                    <p className="text-sm mb-4">Issue a digital gate pass for students leaving early.</p>

                    <div className="space-y-4">
                        <div>
                            <label className="text-xs font-bold uppercase">Student ID</label>
                            <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 text-white mt-1 focus:outline-none focus:border-indigo-500" placeholder="e.g. STU-2024-001" />
                        </div>
                        <div>
                            <label className="text-xs font-bold uppercase">Reason</label>
                            <select className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 text-white mt-1">
                                <option>Medical Emergency</option>
                                <option>Family Function</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all">
                            Issue Gate Pass
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecurityDashboard;
