import React from 'react';
import { useData } from '../context/DataContext';
import { Trash2, Save, Bell, Shield } from 'lucide-react';

const Settings = () => {
    const { resetData } = useData();

    const handleReset = () => {
        if (window.confirm("Are you sure? This will wipe all data and reset to defaults.")) {
            resetData();
        }
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-3xl font-display font-bold text-gray-900">Settings</h1>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Shield size={20} className="text-indigo-600" /> System Data
                </h3>
                <p className="text-sm text-gray-500 mb-6">Manage local data persistence.</p>

                <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-100">
                    <div>
                        <h4 className="font-bold text-red-900">Factory Reset</h4>
                        <p className="text-xs text-red-700">Clear all students, staff, and inventory data.</p>
                    </div>
                    <button
                        onClick={handleReset}
                        className="px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 transition"
                    >
                        Reset System
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 opacity-60 pointer-events-none">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Bell size={20} className="text-gray-400" /> Notifications (Coming Soon)
                </h3>
                <div className="flex items-center justify-between">
                    <span className="text-gray-600">Email Alerts</span>
                    <div className="w-10 h-5 bg-gray-200 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
