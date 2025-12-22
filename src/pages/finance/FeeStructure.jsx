import React, { useState } from 'react';
import { Plus, Trash2, Edit2, DollarSign, Save, X } from 'lucide-react';

const MOCK_FEE_STRUCTURE = [
    { id: 1, name: 'Tuition Fee - Class X', amount: 45000, frequency: 'Annual', type: 'Academic' },
    { id: 2, name: 'Tuition Fee - Class IX', amount: 42000, frequency: 'Annual', type: 'Academic' },
    { id: 3, name: 'Transport - Zone A', amount: 12000, frequency: 'Annual', type: 'Transport' },
    { id: 4, name: 'Computer Lab Fee', amount: 5000, frequency: 'One-time', type: 'Lab' },
];

const FeeStructure = () => {
    const [fees, setFees] = useState(MOCK_FEE_STRUCTURE);
    const [isAdding, setIsAdding] = useState(false);
    const [newFee, setNewFee] = useState({ name: '', amount: '', frequency: 'Annual', type: 'Academic' });

    const handleAdd = () => {
        if (!newFee.name || !newFee.amount) return;
        setFees([...fees, { ...newFee, id: Date.now(), amount: Number(newFee.amount) }]);
        setIsAdding(false);
        setNewFee({ name: '', amount: '', frequency: 'Annual', type: 'Academic' });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Fee Structure</h1>
                    <p className="text-gray-500">Manage school fee categories and amounts.</p>
                </div>
                <button onClick={() => setIsAdding(true)} className="btn btn-primary">
                    <Plus size={18} /> Add Fee Category
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card p-5 border-l-4 border-indigo-500 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Fee Categories</p>
                        <h3 className="text-2xl font-bold text-indigo-700">{fees.length}</h3>
                    </div>
                    <div className="p-3 bg-indigo-50 rounded-full text-indigo-600">
                        <DollarSign size={20} />
                    </div>
                </div>
            </div>

            {isAdding && (
                <div className="card p-6 bg-indigo-50 border border-indigo-100 animate-slide-up">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">New Fee Category</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <input
                            type="text"
                            placeholder="Fee Name (e.g. Tuition Class X)"
                            value={newFee.name}
                            onChange={(e) => setNewFee({ ...newFee, name: e.target.value })}
                            className="input-field px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                        <input
                            type="number"
                            placeholder="Amount"
                            value={newFee.amount}
                            onChange={(e) => setNewFee({ ...newFee, amount: e.target.value })}
                            className="input-field px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                        <select
                            value={newFee.frequency}
                            onChange={(e) => setNewFee({ ...newFee, frequency: e.target.value })}
                            className="input-field px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none"
                        >
                            <option>Annual</option>
                            <option>Term-wise</option>
                            <option>Monthly</option>
                            <option>One-time</option>
                        </select>
                        <select
                            value={newFee.type}
                            onChange={(e) => setNewFee({ ...newFee, type: e.target.value })}
                            className="input-field px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none"
                        >
                            <option>Academic</option>
                            <option>Transport</option>
                            <option>Hostel</option>
                            <option>Lab</option>
                            <option>Miscellaneous</option>
                        </select>
                    </div>
                    <div className="flex gap-2 mt-4 justify-end">
                        <button onClick={() => setIsAdding(false)} className="btn btn-ghost bg-white">Cancel</button>
                        <button onClick={handleAdd} className="btn btn-primary">Save Fee</button>
                    </div>
                </div>
            )}

            <div className="card overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
                        <tr>
                            <th className="px-6 py-4">Fee Name</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Frequency</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {fees.map((fee) => (
                            <tr key={fee.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">{fee.name}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-600 border border-gray-200">
                                        {fee.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{fee.frequency}</td>
                                <td className="px-6 py-4 font-bold text-gray-800">${fee.amount.toLocaleString()}</td>
                                <td className="px-6 py-4 text-right flex justify-end gap-2">
                                    <button className="text-blue-500 hover:bg-blue-50 p-2 rounded-lg"><Edit2 size={16} /></button>
                                    <button className="text-red-500 hover:bg-red-50 p-2 rounded-lg"><Trash2 size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeeStructure;
