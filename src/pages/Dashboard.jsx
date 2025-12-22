import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
    Users,
    DollarSign,
    UserCheck,
    Bell,
    MoreHorizontal,
    ArrowUp,
    Activity,
    Calendar,
    Wallet,
    TrendingUp
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = [
    { name: 'Jan', students: 400, fees: 240 },
    { name: 'Feb', students: 300, fees: 139 },
    { name: 'Mar', students: 200, fees: 980 },
    { name: 'Apr', students: 278, fees: 390 },
    { name: 'May', students: 189, fees: 480 },
    { name: 'Jun', students: 239, fees: 380 },
    { name: 'Jul', students: 349, fees: 430 },
];

import { useData } from '../context/DataContext';

import { CURRENCY_SYMBOL } from '../utils/constants';

const Dashboard = () => {
    const { user } = useAuth();
    const { students, staff, inventory } = useData();

    // Calculate Real Stats
    const totalStudents = students.length;
    const activeStaff = staff.filter(s => s.status === 'Active').length;
    const lowStockItems = inventory.filter(i => i.stock < 10).length;

    // Premium Stat Cards
    const STAT_CARDS = [
        {
            title: 'Total Students',
            value: totalStudents.toLocaleString(),
            label: `+${students.filter(s => s.status === 'Active').length} Active`,
            icon: Users,
            color: 'bg-blue-500',
            gradient: 'from-blue-500 to-cyan-400',
            shadow: 'shadow-blue-500/20'
        },
        {
            title: 'Staff Present',
            value: `${Math.round((activeStaff / staff.length) * 100)}%`, // Real calculation
            label: `${activeStaff}/${staff.length} On Campus`,
            icon: UserCheck,
            color: 'bg-violet-500',
            gradient: 'from-violet-600 to-indigo-500',
            shadow: 'shadow-violet-500/20'
        },
        {
            title: 'Total Collections',
            value: `${CURRENCY_SYMBOL}45,231`,
            label: `+${CURRENCY_SYMBOL}1.2k today`,
            icon: DollarSign,
            color: 'bg-violet-500',
            gradient: 'from-violet-600 to-indigo-500',
            shadow: 'shadow-violet-500/20'
        },
        {
            title: 'Growth Rate',
            value: '24.5%',
            label: 'Consistent Growth',
            icon: TrendingUp,
            color: 'bg-emerald-500',
            gradient: 'from-emerald-400 to-teal-500',
            shadow: 'shadow-emerald-500/20'
        },
    ];

    return (
        <div className="space-y-8 pb-10">
            {/* Welcome & Context */}
            <div className="flex flex-col sm:flex-row justify-between items-end gap-4">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900 tracking-tight">
                        Dashboard
                    </h1>
                    <p className="text-gray-500 font-medium mt-1">
                        Overview of <span className="text-indigo-600 font-bold">XULO</span> ecosystem stats.
                    </p>
                </div>
                <div className="flex items-center gap-3 bg-white p-1.5 rounded-xl shadow-sm border border-gray-100">
                    <div className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg uppercase tracking-wide">
                        Academic Year 2024-25
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400"><Calendar size={18} /></button>
                </div>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {STAT_CARDS.map((stat, idx) => (
                    <div
                        key={idx}
                        className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                        {/* Hover Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${stat.shadow} bg-gradient-to-br ${stat.gradient}`}>
                                <stat.icon size={22} />
                            </div>
                            <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-lg text-xs font-bold">
                                <ArrowUp size={12} /> 12%
                            </div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-4xl font-display font-bold text-gray-900 mb-1 tracking-tighter">{stat.value}</h3>
                            <p className="text-gray-500 font-medium text-sm">{stat.title}</p>
                            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                {stat.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts & Analytics Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Main Chart Section */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="glass-panel p-8 bg-white shadow-sm border border-gray-100 rounded-2xl relative overflow-hidden h-[400px]">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Financial Overview</h3>
                                <p className="text-sm text-gray-500">Income vs Student Growth</p>
                            </div>
                            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-400">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>

                        <div className="h-[280px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorFees" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                                        itemStyle={{ color: '#374151', fontSize: '12px', fontWeight: 'bold' }}
                                    />
                                    <Area type="monotone" dataKey="fees" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorFees)" />
                                    <Area type="monotone" dataKey="students" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorStudents)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Sub-grid for Actionable Items */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-6 rounded-[2rem] bg-indigo-900 text-white relative overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-indigo-900/20 transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
                            <div className="relative z-10">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                    <Users size={20} className="text-white" />
                                </div>
                                <h3 className="font-bold text-lg mb-1">New Admission</h3>
                                <p className="text-indigo-200 text-xs mb-4">Start enrollment process</p>
                                <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                            </div>
                        </div>
                        <div className="p-6 rounded-[2rem] bg-orange-500 text-white relative overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-orange-500/20 transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
                            <div className="relative z-10">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                    <Bell size={20} className="text-white" />
                                </div>
                                <h3 className="font-bold text-lg mb-1">Send Notice</h3>
                                <p className="text-orange-100 text-xs mb-4">Broadcast to all parents</p>
                                <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar - Activity & Notice */}
                <div className="space-y-8">
                    <div className="glass-panel p-6 bg-white shadow-sm border border-gray-100 rounded-[2rem] h-full flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                        </div>

                        <div className="space-y-6 relative flex-1">
                            {/* Timeline Line */}
                            <div className="absolute left-6 top-4 bottom-4 w-px bg-gray-100"></div>

                            {[
                                { title: 'New Student: Rahul K.', time: '10 mins ago', type: 'admission', color: 'bg-blue-500', icon: Users },
                                { title: 'Fees Processed', time: '2 hours ago', type: 'finance', color: 'bg-green-500', icon: DollarSign },
                                { title: 'Staff Meeting Started', time: '4 hours ago', type: 'event', color: 'bg-orange-500', icon: Calendar },
                                { title: 'System Backup', time: 'Yesterday', type: 'system', color: 'bg-gray-500', icon: Activity },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 relative z-10 items-start group">
                                    <div className={`w-12 h-12 rounded-2xl ${item.color} shadow-lg shadow-gray-200 flex items-center justify-center shrink-0 text-white scale-90 group-hover:scale-100 transition-transform`}>
                                        <item.icon size={18} />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="font-bold text-gray-800 text-sm group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                                        <p className="text-xs text-gray-400 font-medium mt-0.5">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-50">
                            <h4 className="font-bold text-gray-800 text-sm mb-3">System Status</h4>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-gray-50 p-3 rounded-xl text-center">
                                    <p className="text-[10px] text-gray-400 uppercase font-bold">Server</p>
                                    <p className="text-green-600 font-bold text-xs">● Online</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-xl text-center">
                                    <p className="text-[10px] text-gray-400 uppercase font-bold">Latency</p>
                                    <p className="text-gray-600 font-bold text-xs">24ms</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
