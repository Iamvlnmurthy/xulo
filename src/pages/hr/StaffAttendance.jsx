import React from 'react';
import { Calendar, Clock, Check, X, AlertTriangle } from 'lucide-react';

const MOCK_ATTENDANCE = [
    { id: 1, name: 'Sarah Wilson', empId: 'EMP001', checkIn: '08:45 AM', status: 'Present' },
    { id: 2, name: 'James Rodriquez', empId: 'EMP002', checkIn: '09:05 AM', status: 'Late' },
    { id: 3, name: 'Emily Blunt', empId: 'ADMIN01', checkIn: '-', status: 'Absent' },
    { id: 4, name: 'Michael Chang', empId: 'SUP004', checkIn: '-', status: 'On Leave' },
];

const StaffAttendance = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Daily Attendance</h1>
                    <p className="text-gray-500">Track staff presence and timings.</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200">
                    <Calendar size={18} className="text-gray-500" />
                    <span className="font-medium text-gray-700">{new Date().toLocaleDateString()}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 card bg-white">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-sm font-medium text-gray-500">Employee</th>
                                <th className="px-6 py-4 text-sm font-medium text-gray-500">Check In</th>
                                <th className="px-6 py-4 text-sm font-medium text-gray-500">Status</th>
                                <th className="px-6 py-4 text-sm font-medium text-gray-500 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {MOCK_ATTENDANCE.map((row) => (
                                <tr key={row.id}>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                                                {row.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-900">{row.name}</div>
                                                <div className="text-xs text-gray-500">{row.empId}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-sm">{row.checkIn}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1
                                            ${row.status === 'Present' ? 'bg-green-100 text-green-700' : ''}
                                            ${row.status === 'Late' ? 'bg-yellow-100 text-yellow-700' : ''}
                                            ${row.status === 'Absent' ? 'bg-red-100 text-red-700' : ''}
                                            ${row.status === 'On Leave' ? 'bg-blue-100 text-blue-700' : ''}
                                          `}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-1">
                                            <button className="p-1 rounded hover:bg-green-50 text-green-600" title="Mark Present"><Check size={18} /></button>
                                            <button className="p-1 rounded hover:bg-red-50 text-red-600" title="Mark Absent"><X size={18} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Summary Widget */}
                <div className="space-y-4">
                    <div className="card p-4 bg-white">
                        <h3 className="font-bold text-gray-800 mb-3">Today's Summary</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Present</span>
                                <span className="font-bold text-green-600">42</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Late Login</span>
                                <span className="font-bold text-yellow-600">5</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Absent</span>
                                <span className="font-bold text-red-600">3</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">On Leave</span>
                                <span className="font-bold text-blue-600">2</span>
                            </div>
                            <div className="border-t pt-2 mt-2 flex justify-between items-center font-bold">
                                <span>Total Staff</span>
                                <span>52</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffAttendance;
