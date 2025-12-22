import React from 'react';
import { Users, Calendar, Gift, Search, Linkedin, Mail } from 'lucide-react';

const AlumniDashboard = () => {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900">Alumni Network</h1>
                    <p className="text-gray-500">Connect with former students and manage alumni relations.</p>
                </div>
                <button className="btn btn-primary">
                    <Calendar size={18} /> Plan Reunion
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card p-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-blue-100 font-medium mb-1">Total Alumni</p>
                            <h3 className="text-3xl font-bold">12,450</h3>
                        </div>
                        <div className="p-2 bg-white/20 rounded-lg"><Users size={24} /></div>
                    </div>
                    <p className="text-sm text-blue-100 mt-4">+450 graduated this year</p>
                </div>
                <div className="card p-6 bg-white">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 font-medium mb-1">Upcoming Events</p>
                            <h3 className="text-3xl font-bold text-gray-900">3</h3>
                        </div>
                        <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><Calendar size={24} /></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">Next: Class of 2015 Reunion (Dec 28)</p>
                </div>
                <div className="card p-6 bg-white">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 font-medium mb-1">Donations Raised</p>
                            <h3 className="text-3xl font-bold text-gray-900">$45K</h3>
                        </div>
                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Gift size={24} /></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">Goal: $100K for New Library</p>
                </div>
            </div>

            {/* Alumni Directory */}
            <div className="card bg-white">
                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h3 className="text-lg font-bold text-gray-800">Notable Alumni</h3>
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search alumni..."
                            className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-indigo-500 text-sm"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {[
                        { name: 'Dr. Sarah Jenkin', role: 'Neurosurgeon', batch: '2008', company: 'City Hospital', img: 'https://placehold.co/100?text=SJ' },
                        { name: 'Rajiv Malhotra', role: 'Senior Engineer', batch: '2012', company: 'Google', img: 'https://placehold.co/100?text=RM' },
                        { name: 'Amanda Cole', role: 'Entrepreneur', batch: '2010', company: 'FinTech Co.', img: 'https://placehold.co/100?text=AC' },
                    ].map((person, i) => (
                        <div key={i} className="flex gap-4 items-center p-4 rounded-xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all group">
                            <img src={person.img} alt={person.name} className="w-16 h-16 rounded-full object-cover" />
                            <div>
                                <h4 className="font-bold text-gray-900">{person.name}</h4>
                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Class of {person.batch}</p>
                                <p className="text-sm text-gray-600">{person.role} at {person.company}</p>
                                <div className="flex gap-2 mt-2">
                                    <button className="text-gray-400 hover:text-blue-600"><Linkedin size={16} /></button>
                                    <button className="text-gray-400 hover:text-indigo-600"><Mail size={16} /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AlumniDashboard;
