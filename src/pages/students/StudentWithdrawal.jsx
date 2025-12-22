import React, { useState } from 'react';
import { UserMinus, AlertTriangle, FileText, Check } from 'lucide-react';

const WITHDRAWALS = [
    { id: 1, name: 'Sarthak Singh', class: 'Class 9-B', reason: 'Transfer to another city', date: '22 Dec 2024', status: 'Pending Approval' },
    { id: 2, name: 'Priya Mehta', class: 'Class 4-A', reason: 'Personal Reasons', date: '20 Dec 2024', status: 'Approved' },
];

const StudentWithdrawal = () => {
    const [requests, setRequests] = useState(WITHDRAWALS);

    const handleApprove = (id) => {
        setRequests(prev => prev.map(r => r.id === id ? { ...r, status: 'Approved' } : r));
        alert("Withdrawal Approved! Student status set to Inactive.");
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Withdrawals & Inactive Students</h1>
                    <p className="text-gray-500">Manage Transfer Certificates (TC) and student exits.</p>
                </div>
                <button className="btn btn-primary bg-red-600 hover:bg-red-700 border-red-600">
                    <UserMinus size={18} /> Initiate Withdrawal
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="card bg-white overflow-hidden">
                        <div className="p-4 border-b border-gray-100 bg-gray-50">
                            <h3 className="font-bold text-gray-800">Withdrawal Requests</h3>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {requests.map(req => (
                                <div key={req.id} className="p-4 flex items-center justify-between hover:bg-white transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                                            <UserMinus size={18} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{req.name}</h4>
                                            <p className="text-xs text-gray-500">{req.class} • Applied on {req.date}</p>
                                            <p className="text-sm text-gray-700 mt-1 italic">"{req.reason}"</p>
                                        </div>
                                    </div>
                                    <div>
                                        {req.status === 'Pending Approval' ? (
                                            <div className="flex gap-2">
                                                <button className="btn btn-ghost text-xs border border-gray-200">Reject</button>
                                                <button onClick={() => handleApprove(req.id)} className="btn btn-primary text-xs py-1.5 px-3">Approve TC</button>
                                            </div>
                                        ) : (
                                            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold border border-green-100 flex items-center gap-1">
                                                <Check size={12} /> TC Issued
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="card bg-indigo-900 text-white p-6 relative overflow-hidden">
                        <h3 className="font-bold text-lg mb-4 relative z-10">TC Generation</h3>
                        <p className="text-indigo-200 text-sm mb-4 relative z-10">Generate compliant Transfer Certificates automatically based on student data.</p>
                        <button className="w-full py-2 bg-white text-indigo-900 font-bold rounded-lg relative z-10 hover:bg-indigo-50 transition-colors">Generate New TC</button>
                        <FileText className="absolute -bottom-4 -right-4 text-indigo-800 opacity-50" size={100} />
                    </div>

                    <div className="card bg-white p-6">
                        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <AlertTriangle size={18} className="text-amber-500" /> Attrition Rate
                        </h3>
                        <div className="text-2xl font-display font-bold text-gray-900">1.2%</div>
                        <p className="text-xs text-green-600 font-medium">Lower than last year (1.8%)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentWithdrawal;
