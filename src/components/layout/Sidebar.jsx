import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    School, Sparkles, ChevronDown, ChevronRight,
    LayoutDashboard, LogOut, ChevronLeft
} from 'lucide-react';
import { NAVIGATION_MODULES } from '../../utils/navigationConfig';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
    const location = useLocation();
    const { user, logout } = useAuth();

    // Initialize active module based on current path, or default to first
    const getActiveModuleFromPath = () => {
        const path = location.pathname;
        for (const module of NAVIGATION_MODULES) {
            // Simple check if path starts with module id or matches one of its items
            // This is heuristic; for production might need exact mapping
            if (path.includes(module.id) || module.sections.some(s => s.items.some(i => i.path === path))) {
                return module.id;
            }
        }
        return NAVIGATION_MODULES[0].id;
    };

    const [expandedModule, setExpandedModule] = useState(getActiveModuleFromPath());

    const toggleModule = (moduleId) => {
        setExpandedModule(expandedModule === moduleId ? null : moduleId);
    };

    return (
        <aside className="hidden md:flex flex-col w-72 h-screen z-20 bg-white/5 border-r border-white/20 backdrop-blur-xl transition-all duration-300">
            <div className="flex flex-col h-full overflow-hidden">

                {/* Brand Area */}
                <div className="h-20 flex items-center px-6 border-b border-gray-100/10 relative shrink-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 pointer-events-none"></div>
                    <div className="relative z-10 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                            <School size={22} strokeWidth={2.5} />
                        </div>
                        <div>
                            <h1 className="font-display font-bold text-2xl text-gray-900 tracking-tight leading-none">XULO</h1>
                            <span className="text-[10px] font-bold tracking-widest text-indigo-500 uppercase">Enterprise</span>
                        </div>
                    </div>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1 custom-scrollbar">

                    {/* Dashboard Link (Always Visible) */}
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => `
                            flex items-center px-4 py-3 rounded-xl transition-all duration-200 mb-4
                            ${isActive ? 'bg-indigo-50 text-indigo-700 font-bold shadow-sm' : 'text-gray-600 hover:bg-gray-50/50 hover:text-gray-900'}
                        `}
                    >
                        <LayoutDashboard size={20} className="mr-3" />
                        <span className="text-sm truncate">Dashboard</span>
                    </NavLink>

                    <div className="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 mt-4">Modules</div>

                    {NAVIGATION_MODULES.map((module) => {
                        const isExpanded = expandedModule === module.id;
                        // Check if any child is active
                        const isActive = location.pathname.includes(module.path) || module.sections.some(s => s.items.some(i => i.path === location.pathname));

                        return (
                            <div key={module.id} className="mb-2">
                                <button
                                    onClick={() => toggleModule(module.id)}
                                    className={`
                                        w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group
                                        ${isActive ? 'text-indigo-700 bg-indigo-50/50' : 'text-gray-600 hover:bg-gray-50/50'}
                                    `}
                                >
                                    <div className="flex items-center">
                                        <module.icon
                                            size={20}
                                            className={`mr-3 transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'}`}
                                        />
                                        <span className={`text-sm font-medium tracking-wide truncate ${isActive ? 'font-bold' : ''}`}>{module.title}</span>
                                    </div>
                                    {isExpanded ? <ChevronDown size={16} className="opacity-50" /> : <ChevronRight size={16} className="opacity-50" />}
                                </button>

                                {/* Nested Sections */}
                                {isExpanded && (
                                    <div className="mt-1 ml-4 pl-4 border-l-2 border-indigo-100 space-y-4 py-2 animate-in slide-in-from-top-2 duration-200">
                                        {module.sections.map((section, idx) => (
                                            <div key={idx}>
                                                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2 pl-2">{section.title}</h4>
                                                <div className="space-y-1">
                                                    {section.items.map((item, i) => (
                                                        <NavLink
                                                            key={i}
                                                            to={item.path}
                                                            className={({ isActive }) => `
                                                                flex items-center px-3 py-2 rounded-lg text-sm transition-colors
                                                                ${isActive
                                                                    ? 'text-indigo-700 bg-white shadow-sm font-medium'
                                                                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50/50'}
                                                            `}
                                                        >
                                                            <span className="truncate">{item.label}</span>
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* AI Tools Separator */}
                    <div className="mt-6 mb-3 px-4">
                        <div className="h-px bg-gray-200"></div>
                    </div>

                    <NavLink
                        to="/ai-tools"
                        className={({ isActive }) => `
                flex items-center px-4 py-3 rounded-xl transition-all duration-200 group relative
                ${isActive
                                ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 font-semibold'
                                : 'text-gray-600 hover:bg-purple-50'}
              `}
                    >
                        {({ isActive }) => (
                            <>
                                <Sparkles size={20} className="mr-3 text-purple-500" />
                                <span className="text-sm truncate">AI Tools</span>
                            </>
                        )}
                    </NavLink>
                </nav>

                {/* Footer User Info */}
                <div className="p-4 bg-gradient-to-b from-white/0 to-white/80 shrink-0">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm cursor-pointer hover:border-indigo-200 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                            {user?.name?.charAt(0) || 'U'}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-gray-900 truncate">{user?.name || 'User'}</p>
                            <p className="text-[10px] text-gray-500 truncate">{user?.email || 'user@xulo.com'}</p>
                        </div>
                        <button onClick={logout} className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-red-500">
                            <LogOut size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
