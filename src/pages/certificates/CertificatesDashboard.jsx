import React from 'react';
import { FileBadge, Download, Printer, Award, FileCheck } from 'lucide-react';

const CertificatesDashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900">Certificates</h1>
                    <p className="text-gray-500">Generate and manage official school documents.</p>
                </div>
                <button className="btn btn-primary">
                    <FileBadge size={18} /> Generate New
                </button>
            </div>

            {/* Certificate Templates */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: 'Transfer Certificate', color: 'bg-indigo-500', icon: FileCheck },
                    { title: 'Character Certificate', color: 'bg-emerald-500', icon: Award },
                    { title: 'Bonafide Certificate', color: 'bg-amber-500', icon: FileBadge },
                ].map((cert, i) => (
                    <div key={i} className="card p-6 cursor-pointer hover:border-indigo-300 transition-colors group">
                        <div className={`w-12 h-12 rounded-xl ${cert.color} text-white flex items-center justify-center mb-4 shadow-lg opacity-90 group-hover:scale-110 transition-transform`}>
                            <cert.icon size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">{cert.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">Official template v2.1</p>
                        <button className="text-indigo-600 text-sm font-bold hover:underline">Select Template</button>
                    </div>
                ))}
            </div>

            {/* Issued History */}
            <div className="card bg-white">
                <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-800">Recently Issued Documents</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500 uppercase font-semibold">
                            <tr>
                                <th className="px-6 py-4">Student ID</th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Document Type</th>
                                <th className="px-6 py-4">Issued Date</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[1, 2, 3, 4].map((i) => (
                                <tr key={i} className="hover:bg-gray-50/50">
                                    <td className="px-6 py-4 font-mono text-gray-500">STU-2023-{100 + i}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">Student Name {i}</td>
                                    <td className="px-6 py-4">Transfer Certificate</td>
                                    <td className="px-6 py-4 text-gray-500">Dec 20, 2024</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 rounded-full text-xs font-bold bg-green-50 text-green-600 border border-green-100">Issued</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 text-gray-400 hover:text-indigo-600" title="Print"><Printer size={16} /></button>
                                            <button className="p-2 text-gray-400 hover:text-indigo-600" title="Download PDF"><Download size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CertificatesDashboard;
