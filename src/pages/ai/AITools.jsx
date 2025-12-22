import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, BookOpen, PenTool, BrainCircuit } from 'lucide-react';

const AITools = () => {
    const navigate = useNavigate();

    const tools = [
        {
            title: 'Lesson Planner',
            desc: 'Generate comprehensive lesson plans instantly.',
            icon: BookOpen,
            path: '/academics/planner',
            color: 'bg-indigo-500'
        },
        {
            title: 'Exam Generator',
            desc: 'Create quiz questions based on topics.',
            icon: PenTool,
            path: '/academics/exams',
            color: 'bg-purple-500'
        },
        {
            title: 'Student Analyst',
            desc: 'Predictive analysis of student performance.',
            icon: BrainCircuit,
            path: '/analytics',
            color: 'bg-pink-500'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-display font-bold text-gray-900">Teaching Co-Pilot</h1>
                <p className="text-gray-500">AI-powered tools to assist educators.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool, i) => (
                    <div
                        key={i}
                        onClick={() => navigate(tool.path)}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all cursor-pointer group"
                    >
                        <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                            <tool.icon size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{tool.title}</h3>
                        <p className="text-sm text-gray-500">{tool.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AITools;
