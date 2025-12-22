import React, { useState } from 'react';
import { Sparkles, BookOpen, Clock, CheckCircle, FileText, ChevronRight } from 'lucide-react';

const LessonPlanner = () => {
    const [formData, setFormData] = useState({ subject: 'Physics', topic: '', grade: 'Class X', duration: '1 Week' });
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(false);

    const generatePlan = () => {
        if (!formData.topic) return alert("Please enter a topic!");
        setLoading(true);
        setTimeout(() => {
            setPlan({
                title: `Unit Plan: ${formData.topic}`,
                subject: `${formData.grade} - ${formData.subject}`,
                days: [
                    { day: 1, title: 'Introduction & Core Concepts', desc: `Define basic terms of ${formData.topic}. Use real-world examples.` },
                    { day: 2, title: 'Deep Dive: Principles', desc: 'Explaining underlying theories and mathematical formulas.' },
                    { day: 3, title: 'Lab Activity / Practical', desc: 'Hands-on experiment to demonstrate the concept visually.' },
                    { day: 4, title: 'Assessment & Review', desc: 'Quiz and doubt clearing session.' }
                ]
            });
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-display font-bold text-gray-900">AI Lesson Planner</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="card bg-white h-fit p-6 space-y-4">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2"><Sparkles size={16} className="text-purple-500" /> Plan Generator</h3>

                    <div>
                        <label className="text-xs font-bold text-gray-500">Grade</label>
                        <select className="w-full mt-1 p-2 border rounded-lg" onChange={e => setFormData({ ...formData, grade: e.target.value })}>
                            <option>Class X</option><option>Class IX</option><option>Class VIII</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-500">Subject</label>
                        <select className="w-full mt-1 p-2 border rounded-lg" onChange={e => setFormData({ ...formData, subject: e.target.value })}>
                            <option>Physics</option><option>Chemistry</option><option>Math</option><option>History</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-500">Topic</label>
                        <input className="w-full mt-1 p-2 border rounded-lg" placeholder="e.g. Gravity" onChange={e => setFormData({ ...formData, topic: e.target.value })} />
                    </div>

                    <button onClick={generatePlan} disabled={loading} className="w-full btn btn-primary flex justify-center">
                        {loading ? 'Generating AI Plan...' : 'Generate Plan'}
                    </button>
                </div>

                <div className="lg:col-span-2">
                    {plan ? (
                        <div className="card p-6 bg-white border-indigo-100 animate-fade-in">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h2>
                            <p className="text-sm text-gray-500 mb-6">{plan.subject}</p>
                            <div className="space-y-4">
                                {plan.days.map((d) => (
                                    <div key={d.day} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                        <h4 className="font-bold text-indigo-700 text-sm">Day {d.day}: {d.title}</h4>
                                        <p className="text-xs text-gray-600 mt-1">{d.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 text-gray-400 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                            <Sparkles size={48} className="mb-4 opacity-50" />
                            <p>Enter details to generate an AI lesson plan.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default LessonPlanner;
