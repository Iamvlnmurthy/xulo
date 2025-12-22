import React, { useState } from 'react';
import { BookOpen, Award, Download, ChevronRight } from 'lucide-react';
import { SUBJECTS, GRADES } from '../../utils/constants';

// ... MOCK_EXAMS ...

const GradeBook = () => {
    const [selectedClass, setSelectedClass] = useState('Class 10');
    // In a real app, this would come from the selected Class/Section context
    const currentSubjects = SUBJECTS['cbse'];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                {/* ... Header ... */}
            </div>

            {/* ... Cards ... */}

            {/* Marks Entry Table Preview */}
            <div className="card bg-white overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <div className="flex items-center gap-4">
                        <h3 className="font-semibold text-gray-800">Marks Entry</h3>
                        <select
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                            className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-1.5"
                        >
                            {GRADES['cbse'].map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                        <span className="text-sm text-gray-500">({currentSubjects[1]})</span>
                    </div>

                    <div className="flex gap-2">
                        <button className="btn btn-primary text-sm py-1.5">Save Marks</button>
                    </div>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-white text-gray-500 text-xs uppercase font-semibold border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-3">Roll No</th>
                            <th className="px-6 py-3">Student Name</th>
                            <th className="px-6 py-3">Theory (80)</th>
                            <th className="px-6 py-3">Internal (20)</th>
                            <th className="px-6 py-3">Total (100)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {[1, 2, 3].map((i) => (
                            <tr key={i}>
                                <td className="px-6 py-3 text-gray-600">{i}</td>
                                <td className="px-6 py-3 font-medium text-gray-900">Student {i}</td>
                                <td className="px-6 py-3"><input type="number" className="w-20 px-2 py-1 border rounded text-center" defaultValue={75 + (i * 2) % 20} /></td>
                                <td className="px-6 py-3"><input type="number" className="w-20 px-2 py-1 border rounded text-center" defaultValue={15 + (i % 5)} /></td>
                                <td className="px-6 py-3 font-bold text-gray-800">-</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default GradeBook;
