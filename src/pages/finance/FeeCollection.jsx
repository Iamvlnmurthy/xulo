import React, { useState } from 'react';
import { Search, Printer, CheckCircle, AlertCircle, CreditCard } from 'lucide-react';
import { CURRENCY_SYMBOL } from '../../utils/constants';

const MOCK_STUDENT_DUES = {
    name: 'Aarav Patel',
    class: 'Class X-A',
    admissionNo: 'ADM-2024-001',
    parent: 'Rajesh Patel',
    balance: 0,
    dues: [
        { id: 1, title: 'Term 1 Tuition Fee', amount: 15000, dueDate: '2024-04-10', status: 'Pending' },
        { id: 2, title: 'Transport Fee (Apr-Jun)', amount: 4000, dueDate: '2024-04-10', status: 'Pending' },
        { id: 3, title: 'Annual Development Charges', amount: 5000, dueDate: '2024-03-31', status: 'Overdue' }
    ]
};

const FeeCollection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [student, setStudent] = useState(null);
    const [selectedDues, setSelectedDues] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        // Simulate finding data
        if (searchTerm.length > 2) {
            setStudent(MOCK_STUDENT_DUES);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const toggleDue = (id) => {
        if (selectedDues.includes(id)) {
            setSelectedDues(selectedDues.filter(d => d !== id));
        } else {
            setSelectedDues([...selectedDues, id]);
        }
    };

    const totalPayable = student?.dues
        .filter(d => selectedDues.includes(d.id))
        .reduce((sum, d) => sum + d.amount, 0) || 0;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Fee Collection</h1>
                    <p className="text-gray-500">Collect fees and generate receipts.</p>
                </div>
            </div>

            <div className="card p-6 bg-white shadow-sm">
                <form onSubmit={handleSearch} className="flex gap-4 items-center">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 font-medium outline-none"
                            placeholder="Search by Admission No (e.g. ADM-2024-001) or Name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </form>
            </div>

            {student && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
                    {/* Student Profile Card */}
                    <div className="card p-0 overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
                            <h3 className="text-xl font-bold">{student.name}</h3>
                            <p className="opacity-90">{student.admissionNo}</p>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-500">Class</span>
                                <span className="font-semibold">{student.class}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-500">Parent</span>
                                <span className="font-semibold">{student.parent}</span>
                            </div>
                            <div className="flex justify-between pt-2">
                                <span className="text-gray-500">Wallet Balance</span>
                                <span className="font-bold text-green-600">{CURRENCY_SYMBOL}{student.balance}</span>
                            </div>
                        </div>
                    </div>

                    {/* Dues List */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="card bg-white p-6">
                            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <AlertCircle size={20} className="text-amber-500" /> Pending Dues
                            </h3>
                            <div className="space-y-3">
                                {student.dues.map((due) => (
                                    <div
                                        key={due.id}
                                        className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${selectedDues.includes(due.id)
                                            ? 'border-indigo-500 bg-indigo-50'
                                            : 'border-gray-200 hover:border-indigo-300'
                                            }`}
                                        onClick={() => toggleDue(due.id)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-5 h-5 rounded border flex items-center justify-center ${selectedDues.includes(due.id) ? 'bg-indigo-500 border-indigo-500' : 'border-gray-300'
                                                }`}>
                                                {selectedDues.includes(due.id) && <CheckCircle size={14} className="text-white" />}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">{due.title}</h4>
                                                <p className="text-xs text-gray-500">Due: {due.dueDate}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-gray-900">{CURRENCY_SYMBOL}{due.amount}</p>
                                            {due.status === 'Overdue' && <span className="text-xs text-red-500 font-medium">Overdue</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Payment Summary */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-lg text-gray-600 font-medium">Total Payable</span>
                                    <span className="text-3xl font-bold text-gray-900">{CURRENCY_SYMBOL}{totalPayable.toLocaleString()}</span>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        className="flex-1 btn btn-primary py-3 text-lg"
                                        disabled={totalPayable === 0}
                                    >
                                        <CreditCard className="mr-2" /> Collect Payment
                                    </button>
                                    <button className="btn btn-ghost border border-gray-200" disabled={totalPayable === 0} onClick={handlePrint}>
                                        <Printer size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeeCollection;
