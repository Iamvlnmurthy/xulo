import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import AIAssistant from '../modules/ai/AIAssistant'; // New Feature

const DashboardLayout = () => {
    return (
        <div className="flex h-screen bg-gray-50/50 overflow-hidden">
            <Sidebar />

            <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
                <Header />
                <main className="flex-1 overflow-y-auto p-8">
                    <div className="animate-fade-in max-w-7xl mx-auto pb-20">
                        <Outlet />
                    </div>
                </main>
            </div>

            {/* AI Assistant Floating Button */}
            <AIAssistant />
        </div>
    );
};

export default DashboardLayout;
