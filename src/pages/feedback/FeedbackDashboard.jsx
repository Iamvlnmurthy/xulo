import React, { useState } from 'react';
import { MessageCircle, CheckCircle, Clock, Filter, Search } from 'lucide-react';

const MOCK_FEEDBACK = [
    { id: 1, type: 'Parent', name: 'Mrs. Sharma', subject: 'Bus Route Delay', message: 'The bus (Route 4) has been arriving 20 mins late for the past week.', date: '21 Dec 2024', status: 'Open', priority: 'High' },
    { id: 2, type: 'Student', name: 'Rahul K. (Class 10)', subject: 'Water Cooler Issue', message: 'Second floor water cooler is not working.', date: '20 Dec 2024', status: 'Resolved', priority: 'Medium' },
    { id: 3, type: 'Staff', name: 'Mr. Verma', subject: 'Projector Maintenance', message: 'Lab 2 projector bulb needs replacement.', date: '19 Dec 2024', status: 'Open', priority: 'Medium' }
];

const FeedbackDashboard = () => {
    const [feedbacks, setFeedbacks] = useState(MOCK_FEEDBACK);
    const [filter, setFilter] = useState('All');

    const toggleStatus = (id) => {
        setFeedbacks(prev => prev.map(f =>
            f.id === id ? { ...f, status: f.status === 'Open' ? 'Resolved' : 'Open' } : f
        ));
    };

    const filtered = filter === 'All' ? feedbacks : feedbacks.filter(f => f.status === filter);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Feedback & Concerns</h1>
                    <p className="text-gray-500">Manage support tickets and feedback from stakeholders.</p>
                </div>
                <div className="flex gap-2">
                    <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white outline-none focus:border-indigo-500">
                        <option>This Week</option>
                        <option>Last Month</option>
                    </select>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card p-6 bg-white border-l-4 border-l-red-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Open Tickets</p>
                            <h3 className="text-3xl font-bold text-gray-900 mt-1">{feedbacks.filter(f => f.status === 'Open').length}</h3>
                        </div>
                        <div className="p-2 bg-red-50 text-red-600 rounded-lg"><Clock size={20} /></div>
                    </div>
                </div>
                <div className="card p-6 bg-white border-l-4 border-l-green-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Resolved</p>
                            <h3 className="text-3xl font-bold text-gray-900 mt-1">{feedbacks.filter(f => f.status === 'Resolved').length}</h3>
                        </div>
                        <div className="p-2 bg-green-50 text-green-600 rounded-lg"><CheckCircle size={20} /></div>
                    </div>
                </div>
                <div className="card p-6 bg-white border-l-4 border-l-indigo-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Total Feedback</p>
                            <h3 className="text-3xl font-bold text-gray-900 mt-1">{feedbacks.length}</h3>
                        </div>
                        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><MessageCircle size={20} /></div>
                    </div>
                </div>
            </div>

            {/* List */}
            <div className="card bg-white overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <div className="flex gap-2">
                        {['All', 'Open', 'Resolved'].map(s => (
                            <button
                                key={s}
                                onClick={() => setFilter(s)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === s ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-50'}`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                    <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Search..." className="pl-9 pr-4 py-1.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-indigo-500" />
                    </div>
                </div>

                <div className="divide-y divide-gray-50">
                    {filtered.map(item => (
                        <div key={item.id} className="p-6 hover:bg-gray-50/50 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex gap-2 items-center">
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${item.type === 'Parent' ? 'border-purple-200 text-purple-700 bg-purple-50' : item.type === 'Staff' ? 'border-amber-200 text-amber-700 bg-amber-50' : 'border-blue-200 text-blue-700 bg-blue-50'}`}>
                                        {item.type}
                                    </span>
                                    <span className="text-xs text-gray-400 font-mono">{item.date}</span>
                                </div>
                                <button
                                    onClick={() => toggleStatus(item.id)}
                                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${item.status === 'Open' ? 'border-red-200 bg-red-50 text-red-600' : 'border-green-200 bg-green-50 text-green-600'}`}
                                >
                                    {item.status === 'Open' ? <Clock size={12} /> : <CheckCircle size={12} />}
                                    {item.status}
                                </button>
                            </div>
                            <h4 className="font-bold text-gray-900 mb-1">{item.subject}</h4>
                            <p className="text-gray-600 text-sm mb-3">{item.message}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center font-bold text-[10px] text-gray-600">
                                    {item.name.charAt(0)}
                                </div>
                                <span>{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeedbackDashboard;
