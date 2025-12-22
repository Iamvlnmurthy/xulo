import React, { useState } from 'react';
import { PenTool, Timer, CheckCircle, FileText, Brain } from 'lucide-react';

const ExamPortal = () => {
    const handleCreateExam = () => {
        const subject = prompt("Enter Subject Name:");
        if (subject) {
            alert(`New exam draft created for ${subject}. Redirecting to question builder...`);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900">Online Exams</h1>
                    <p className="text-gray-500">Create, manage, and grade assessments remotely.</p>
                </div>
                <button className="btn btn-primary bg-indigo-600" onClick={handleCreateExam}>
                    <PenTool size={18} /> Create New Exam
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* AI Question Generator */}
                <div className="card bg-gradient-to-br from-violet-600 to-indigo-700 text-white p-6 relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 bg-white/10 w-32 h-32 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <Brain size={24} className="text-purple-200" />
                            <h3 className="font-bold text-lg">AI Question Banks</h3>
                        </div>
                        <p className="text-indigo-100 text-sm mb-6">
                            Generate quiz questions automatically based on syllabus topics using Xulo AI.
                        </p>
                        <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-bold border border-white/20 transition-colors">
                            Try AI Generator
                        </button>
                    </div>
                </div>

                {/* Active Exams Stats */}
                <div className="card p-6 border-l-4 border-green-500 bg-white">
                    <p className="text-gray-500 font-bold text-xs uppercase">Live Now</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-2">Class X - Math</h3>
                    <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
                        <Timer size={16} className="text-orange-500" /> Ends in 45 mins
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full mt-3 overflow-hidden">
                        <div className="bg-green-500 h-full w-[75%]"></div>
                    </div>
                    <p className="text-xs text-right mt-1 text-gray-400">142/180 submitted</p>
                </div>

                <div className="card p-6 bg-white">
                    <p className="text-gray-500 font-bold text-xs uppercase">Scheduled</p>
                    <div className="mt-4 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FileText size={18} /></div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm">Physics Mid-Term</h4>
                                <p className="text-xs text-gray-400">Tomorrow, 10:00 AM</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-pink-50 text-pink-600 rounded-lg"><FileText size={18} /></div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm">English Literature</h4>
                                <p className="text-xs text-gray-400">Dec 28, 09:00 AM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Results */}
            <div className="card bg-white">
                <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-800">Recent Results</h3>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
                        <tr>
                            <th className="px-6 py-4">Exam Name</th>
                            <th className="px-6 py-4">Class</th>
                            <th className="px-6 py-4">Avg. Score</th>
                            <th className="px-6 py-4">Top Scorer</th>
                            <th className="px-6 py-4 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50/50">
                            <td className="px-6 py-4 font-medium text-gray-900">Chemistry Unit Test</td>
                            <td className="px-6 py-4 text-gray-600">Class IX-B</td>
                            <td className="px-6 py-4 font-bold text-green-600">84%</td>
                            <td className="px-6 py-4 text-sm text-gray-600">Rahul Sharma (98%)</td>
                            <td className="px-6 py-4 text-right">
                                <span className="px-2 py-1 bg-green-50 text-green-600 rounded text-xs font-bold border border-green-100">Published</span>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                            <td className="px-6 py-4 font-medium text-gray-900">History Quiz</td>
                            <td className="px-6 py-4 text-gray-600">Class VIII-A</td>
                            <td className="px-6 py-4 font-bold text-orange-500">72%</td>
                            <td className="px-6 py-4 text-sm text-gray-600">Ananya Roy (95%)</td>
                            <td className="px-6 py-4 text-right">
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-bold border border-gray-200">Grading</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExamPortal;
