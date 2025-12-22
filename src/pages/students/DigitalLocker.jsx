import React from 'react';
import { Folder, FileText, Upload, MoreVertical, Lock } from 'lucide-react';

const DigitalLocker = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900">Digital Locker</h1>
                    <p className="text-gray-500">Secure storage for your academic documents.</p>
                </div>
                <button className="btn btn-primary">
                    <Upload size={18} /> Upload Document
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Folders */}
                {['Marksheets', 'Certificates', 'ID Proofs', 'Assignments'].map((folder, i) => (
                    <div key={i} className="card p-4 hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="flex justify-between items-start mb-3">
                            <Folder size={32} className="text-indigo-400 fill-indigo-50 group-hover:text-indigo-500 transition-colors" />
                            <button className="text-gray-300 hover:text-gray-600"><MoreVertical size={16} /></button>
                        </div>
                        <h3 className="font-bold text-gray-800">{folder}</h3>
                        <p className="text-xs text-gray-400 mt-1">{(i + 1) * 3} files</p>
                    </div>
                ))}
            </div>

            <div className="card bg-white mt-6">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-gray-800">Recent Files</h3>
                    <button className="text-xs font-bold text-indigo-600">View All</button>
                </div>
                <div className="divide-y divide-gray-100">
                    {[
                        { name: 'Grade_X_Final_Result.pdf', size: '2.4 MB', type: 'PDF', date: '2 days ago' },
                        { name: 'Merit_Certificate_2024.jpg', size: '1.1 MB', type: 'IMG', date: '1 week ago' },
                        { name: 'Science_Project_vFinal.docx', size: '4.5 MB', type: 'DOC', date: '2 weeks ago' },
                    ].map((file, i) => (
                        <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs ${file.type === 'PDF' ? 'bg-red-50 text-red-600' :
                                        file.type === 'IMG' ? 'bg-blue-50 text-blue-600' : 'bg-blue-100 text-blue-700'
                                    }`}>
                                    {file.type}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm mb-0.5">{file.name}</h4>
                                    <p className="text-xs text-gray-400">{file.size} • Uploaded {file.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded bg-gray-100 text-gray-500" title="Secure"><Lock size={14} /></div>
                                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-400"><MoreVertical size={16} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DigitalLocker;
