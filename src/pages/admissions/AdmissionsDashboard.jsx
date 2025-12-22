import React from 'react';
import { UserPlus, Filter, PhoneCall, Calendar } from 'lucide-react';

const MOCK_LEADS = [
    { id: 1, name: 'Kabir Singh', grade: 'Class I', parent: 'Preeti Singh', status: 'New Enquiry', source: 'Website', date: '2 hrs ago' },
    { id: 2, name: 'Ananya Roy', grade: 'Class V', parent: 'S. Roy', status: 'Follow Up', source: 'Referral', date: '1 day ago' },
    { id: 3, name: 'Dev Patel', grade: 'Class XI', parent: 'M. Patel', status: 'Documents Pending', source: 'Walk-in', date: '3 days ago' },
];

const AdmissionsDashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900">Admissions</h1>
                    <p className="text-gray-500">Manage enquiries, leads, and online applications.</p>
                </div>
                <button className="btn btn-primary">
                    <UserPlus size={18} /> New Enquiry
                </button>
            </div>

            {/* Pipeline Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {['New Enquiries', 'Follow Ups', 'Assessment', 'Ready to Enroll'].map((stage, i) => (
                    <div key={i} className="card p-4 border-l-4 border-indigo-500">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stage}</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">{12 + i * 3}</h3>
                    </div>
                ))}
            </div>

            <div className="card bg-white">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-gray-800">Recent Enquiries</h3>
                    <button className="btn btn-ghost text-sm border border-gray-200"><Filter size={14} /> Filter</button>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
                        <tr>
                            <th className="px-6 py-4">Student Name</th>
                            <th className="px-6 py-4">Grade</th>
                            <th className="px-6 py-4">Parent Details</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Source</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {MOCK_LEADS.map((lead) => (
                            <tr key={lead.id} className="hover:bg-gray-50/50">
                                <td className="px-6 py-4 font-medium text-gray-900">{lead.name}</td>
                                <td className="px-6 py-4 text-gray-600">{lead.grade}</td>
                                <td className="px-6 py-4 text-sm">
                                    <div>{lead.parent}</div>
                                    <div className="text-xs text-gray-400">Received {lead.date}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide ${lead.status === 'New Enquiry' ? 'bg-blue-100 text-blue-600' :
                                        lead.status === 'Follow Up' ? 'bg-orange-100 text-orange-600' :
                                            'bg-purple-100 text-purple-600'
                                        }`}>
                                        {lead.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">{lead.source}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100" title="Call">
                                            <PhoneCall size={16} />
                                        </button>
                                        <button className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100" title="Schedule Interview">
                                            <Calendar size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdmissionsDashboard;
