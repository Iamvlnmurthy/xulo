import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { Search, Bell, Menu, LogOut, User, Command, Mic, Moon, Sun } from 'lucide-react';

const Header = () => {
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="h-20 flex items-center justify-between px-8 bg-white/10 backdrop-blur-md border-b border-white/20 z-10 sticky top-0">
            {/* Search Pill */}
            <div className="glass-panel px-4 py-2.5 flex items-center gap-3 !bg-white/20 backdrop-blur-xl shadow-sm border border-white/30 w-96 transition-all focus-within:w-[450px] focus-within:shadow-md focus-within:border-indigo-200">
                <Search size={18} className="text-gray-400" />
                <input
                    type="text"
                    placeholder="Ask XULO (e.g., 'Show attendance for Class X')..."
                    className="bg-transparent border-none p-0 focus:ring-0 text-sm w-full placeholder-gray-400"
                />
                <div className="flex gap-2">
                    <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 transition-colors" title="Voice Search">
                        <Mic size={16} />
                    </button>
                    <div className="hidden sm:flex items-center gap-1 bg-gray-100 rounded px-1.5 py-0.5 border border-gray-200">
                        <Command size={10} className="text-gray-500" />
                        <span className="text-[10px] font-bold text-gray-500">K</span>
                    </div>
                </div>
            </div>

            {/* Right Group */}
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-xl hover:bg-gray-100/50 text-gray-500 transition-colors"
                    title="Toggle Theme"
                >
                    {theme === 'dark' ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} />}
                </button>
                {/* Action Buttons */}
                <div className="glass-panel p-1.5 flex items-center gap-1 !bg-white/20 backdrop-blur-xl shadow-sm border border-white/30">
                    <button className="relative p-2.5 rounded-xl hover:bg-gray-100/80 text-gray-500 transition-all hover:text-indigo-600">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
                    </button>
                </div>

                {/* Profile Pill */}
                <div className="glass-panel pl-4 pr-1.5 py-1.5 flex items-center gap-3 !bg-white/20 backdrop-blur-xl shadow-sm border border-white/30 cursor-pointer hover:shadow-md transition-all">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold text-gray-800 leading-tight">{user?.name}</p>
                        <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider">{user?.role?.replace('_', ' ')}</p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5 shadow-md shadow-indigo-500/20">
                        <div className="w-full h-full rounded-[10px] bg-white overflow-hidden relative">
                            {user?.avatar ? (
                                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-50 text-indigo-600">
                                    <User size={20} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
