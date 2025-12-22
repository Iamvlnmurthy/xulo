import React from 'react';
import { CreditCard, Download, Send, DollarSign } from 'lucide-react';

const PayrollDashboard = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-display font-bold text-gray-900">Payroll Management</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Payroll Stats */}
                <div className="card bg-indigo-900 text-white p-6">
                    <p className="text-indigo-200">Total Monthly Payout</p>
                    <h3 className="text-3xl font-bold mt-1">$145,200</h3>
                    <p className="text-xs text-indigo-300 mt-2">148 Employees Processed</p>
                </div>
                <div className="card bg-white p-6">
                    <p className="text-gray-500">Pending Approvals</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-1">4</h3>
                    <p className="text-xs text-indigo-600 font-bold mt-2 cursor-pointer">View Requests</p>
                </div>
                <div className="card bg-white p-6">
                    <p className="text-gray-500">Next Pay Date</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-1">Dec 31</h3>
                    <p className="text-xs text-green-600 font-bold mt-2">On Schedule</p>
                </div>
            </div>

            <div className="card bg-white">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-gray-800">Staff Salary List (Dec 2024)</h3>
                    <button className="btn btn-primary text-sm"><Send size={14} /> Run Payroll</button>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
                        <tr>
                            <th className="px-6 py-4">Employee ID</th>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Structure</th>
                            <th className="px-6 py-4">Net Salary</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <tr key={i} className="hover:bg-gray-50/50">
                                <td className="px-6 py-4 font-mono text-gray-400">EMP-00{i}</td>
                                <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                    Staff Member {i}
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    Teacher (Grade A)
                                    <div className="text-[10px] text-gray-400">Basic + HRA + DA</div>
                                </td>
                                <td className="px-6 py-4 font-bold text-gray-800">$4,200</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${i < 3 ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'}`}>
                                        {i < 3 ? 'Paid' : 'Pending'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-indigo-600"><Download size={18} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PayrollDashboard;
