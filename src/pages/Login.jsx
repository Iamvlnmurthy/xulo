import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { School, Lock, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    // Login handler
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await login(email, password);
            navigate('/');
        } catch (error) {
            console.error(error);
            alert("Login failed: " + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex bg-gray-50 font-sans">
            {/* Left Side - Brand & Aesthetics */}
            <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center p-12">
                {/* Background Animation Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 animate-pulse"></div>
                    <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-bounce duration-[10s]"></div>
                    <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-purple-500/20 rounded-full blur-[80px] animate-pulse duration-[8s]"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 text-white max-w-xl">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-inner">
                                <School size={26} className="text-indigo-300" />
                            </div>
                            <span className="text-3xl font-black tracking-tighter text-white">XULO</span>
                        </div>
                        <div className="h-6 w-px bg-white/20 mx-2"></div>
                        <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold uppercase tracking-wider">
                            Enterprise
                        </span>
                    </div>

                    <h1 className="text-5xl font-bold mb-6 leading-tight tracking-tight">
                        Powering the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Future of Education</span>
                    </h1>

                    <p className="text-slate-300 text-lg mb-10 leading-relaxed font-light">
                        Experience the most advanced ERP solution designed for modern institutions. Seamlessly manage students, finance, and academics in one unified platform.
                    </p>

                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        {[
                            'AI-Powered Analytics',
                            'Automated Attendance',
                            'Smart Timetable',
                            'Seamless Communication',
                            'Finance & Payroll',
                            'Library & Hostel'
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-8 h-8 rounded-full border-2 border-slate-900 bg-gray-600`}>
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full rounded-full" />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-slate-400">Trusted by 500+ Institutions across India</p>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-24 bg-white relative">
                <div className="w-full max-w-md space-y-8 animate-slide-up">
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
                                <School size={22} />
                            </div>
                            <span className="text-2xl font-bold text-gray-900 tracking-tight">XULO</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome Back</h2>
                        <p className="text-gray-500 mt-2 text-base">Please enter your details to sign in.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6 mt-8">
                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-600 transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 text-gray-900 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none bg-gray-50/50 hover:bg-white focus:bg-white font-medium"
                                        placeholder="admin@xulo.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="block text-sm font-semibold text-gray-700">Password</label>
                                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-600 transition-colors">
                                        <Lock size={20} />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 text-gray-900 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none bg-gray-50/50 hover:bg-white focus:bg-white font-medium"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 cursor-pointer">Remember for 30 days</label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg shadow-indigo-600/20 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-indigo-600/30 transform active:scale-[0.98]"
                        >
                            {isLoading ? (
                                <div className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Signing In...</span>
                                </div>
                            ) : (
                                <span className="flex items-center text-base">
                                    Sign In <ArrowRight size={18} className="ml-2" />
                                </span>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-center text-xs text-gray-400">
                            Demo Access: <span className="font-mono text-gray-600 bg-gray-100 px-1 py-0.5 rounded">admin@xulo.com</span> / <span className="font-mono text-gray-600 bg-gray-100 px-1 py-0.5 rounded">admin</span>
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-6 text-center text-xs text-gray-400 font-medium">
                    &copy; 2025 XULO Education Inc.
                </div>
            </div>
        </div>
    );
};

export default Login;
