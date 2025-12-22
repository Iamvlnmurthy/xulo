import React, { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, FileText, Download } from 'lucide-react';

const GenericModulePage = ({ title }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleCreate = () => {
        alert(`Create New ${title.slice(0, -1)}: functionality coming soon!`);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                    <p className="text-gray-500">Manage {title.toLowerCase()} records and details.</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => alert('Exporting data...')} className="btn btn-ghost border border-gray-200 bg-white">
                        <Download size={18} className="mr-2" /> Export
                    </button>
                    <button onClick={handleCreate} className="btn btn-primary">
                        <Plus size={18} /> Add New
                    </button>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="card p-4 bg-white flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder={`Search ${title.toLowerCase()}...`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    />
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <button className="btn btn-ghost border border-gray-200 bg-white">
                        <Filter size={18} className="mr-2" /> Filter
                    </button>
                </div>
            </div>

            {/* Empty State / Content Area */}
            <div className="card bg-white min-h-[400px] flex flex-col items-center justify-center text-center p-8 border-dashed border-2 border-gray-100">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <FileText size={32} className="text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">No Records Found</h3>
                <p className="text-gray-500 max-w-sm mb-6">
                    You haven't added any {title.toLowerCase()} data yet. creating a new record to get started.
                </p>
                <button onClick={handleCreate} className="btn btn-primary bg-gray-900 text-white hover:bg-gray-800">
                    <Plus size={18} /> Create First Record
                </button>
            </div>
        </div>
    );
};

export default GenericModulePage;
