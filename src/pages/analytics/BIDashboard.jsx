import React from 'react';
import { TrendingUp, Users, AlertTriangle, Cpu, Activity, PieChart } from 'lucide-react';
import { CURRENCY_SYMBOL } from '../../utils/constants';

const BIDashboard = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900 flex items-center gap-2">
                        <Activity className="text-indigo-600" />
                        Business Intelligence
                    </h1>
                    <p className="text-gray-500">AI-driven insights and predictive analytics for strategic decision making.</p>
                </div>
                <div className="flex gap-3">
                    <select className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:ring-2 focus:ring-indigo-100 outline-none">
                        <option>This Academic Year</option>
                        <option>Last Quarter</option>
                    </select>
                    <button className="btn btn-primary">
                        <Cpu size={18} /> Generate AI Report
                    </button>
                </div>
            </div>

            {/* AI Insights Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card-premium p-6 relative overflow-hidden group hover:border-indigo-400 transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <TrendingUp size={80} className="text-indigo-600" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Revenue Forecast</h3>
                    <div className="text-3xl font-display font-bold text-gray-900 mb-1">{CURRENCY_SYMBOL}2.4M</div>
                    <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-4">
                        <span>+12.5% vs Last Year</span>
                    </div>
                    <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                        <p className="text-xs text-indigo-800">
                            <strong>AI Prediction:</strong> 95% probability of exceeding annual targets based on current admission trends.
                        </p>
                    </div>
                </div>

                <div className="card-premium p-6 relative overflow-hidden group hover:border-rose-400 transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <AlertTriangle size={80} className="text-rose-600" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">At-Risk Students</h3>
                    <div className="text-3xl font-display font-bold text-gray-900 mb-1">24</div>
                    <div className="flex items-center gap-2 text-sm text-rose-600 font-medium mb-4">
                        <span>High Priority Intervention</span>
                    </div>
                    <div className="p-3 bg-rose-50 rounded-lg border border-rose-100">
                        <p className="text-xs text-rose-800">
                            <strong>Early Warning:</strong> 24 students detected with declining attendance (&lt;75%) and grade drops.
                        </p>
                    </div>
                </div>

                <div className="card-premium p-6 relative overflow-hidden group hover:border-emerald-400 transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Users size={80} className="text-emerald-600" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Staff Retention Risk</h3>
                    <div className="text-3xl font-display font-bold text-gray-900 mb-1">Low</div>
                    <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium mb-4">
                        <span>Satisfaction Index: 4.8/5</span>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                        <p className="text-xs text-emerald-800">
                            <strong>Sentiment Analysis:</strong> Recent feedback indicates high morale. No immediate attrition risks detected.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Heatmap Simulation */}
                <div className="card-premium p-6 bg-white min-h-[400px] flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-gray-800">Student Performance Heatmap</h3>
                        <button className="text-sm text-indigo-600 font-medium hover:underline">View Details</button>
                    </div>

                    <div className="flex-1 grid grid-cols-12 gap-1 p-4 bg-gray-50 rounded-xl border border-gray-100 min-h-[300px]">
                        {/* Simulating a heatmap with explicit mock data for better visibility */}
                        {Array.from({ length: 144 }).map((_, i) => {
                            // Create a more realistic clustering effect for "performance"
                            const row = Math.floor(i / 12);
                            const col = i % 12;
                            // Mock higher performance in middle rows (subjects)
                            const baseIntensity = (Math.sin(row * 0.5) + Math.cos(col * 0.5) + 2) / 4;
                            const randomVar = Math.random() * 0.2;
                            const intensity = baseIntensity + randomVar;

                            let colorClass = 'bg-gray-100';
                            let tooltip = 'Average';

                            if (intensity > 0.85) { colorClass = 'bg-indigo-600'; tooltip = 'Excellent (90%+)'; }
                            else if (intensity > 0.7) { colorClass = 'bg-indigo-500'; tooltip = 'Good (75-89%)'; }
                            else if (intensity > 0.55) { colorClass = 'bg-indigo-400'; tooltip = 'Average (60-74%)'; }
                            else if (intensity > 0.4) { colorClass = 'bg-indigo-300'; tooltip = 'Below Avg (40-59%)'; }
                            else { colorClass = 'bg-red-200'; tooltip = 'Critical (<40%)'; }

                            return (
                                <div
                                    key={i}
                                    className={`rounded-sm w-full h-full ${colorClass} hover:opacity-80 transition-all cursor-pointer hover:scale-110 shadow-sm`}
                                    title={`Student ${i + 1}: ${tooltip}`}
                                ></div>
                            )
                        })}
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                        <span>Subject: Mathematics</span>
                        <div className="flex items-center gap-2">
                            <span>Low</span>
                            <div className="w-16 h-2 rounded-full bg-gradient-to-r from-indigo-100 to-indigo-600"></div>
                            <span>High Performance</span>
                        </div>
                    </div>
                </div>

                {/* Department Performance */}
                <div className="card-premium p-6 bg-white">
                    <h3 className="font-bold text-gray-800 mb-6">Department Efficiency Analysis</h3>
                    <div className="space-y-6">
                        {[
                            { name: 'Science Dept', score: 92, trend: 'up' },
                            { name: 'Mathematics', score: 88, trend: 'stable' },
                            { name: 'Humanities', score: 85, trend: 'down' },
                            { name: 'Arts & Sports', score: 95, trend: 'up' }
                        ].map((dept, i) => (
                            <div key={i}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-700">{dept.name}</span>
                                    <span className="text-sm font-bold text-gray-900">{dept.score}%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                        style={{ width: `${dept.score}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    {dept.trend === 'up' && 'Doing better than last month'}
                                    {dept.trend === 'down' && 'Needs attention due to resource shortage'}
                                    {dept.trend === 'stable' && 'Consistent performance'}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BIDashboard;
