import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Sparkles, User, Bot, Mic } from 'lucide-react';

const SUGGESTIONS = [
    "Show attendance for Class X",
    "Identify at-risk students",
    "Generate fee report",
    "Draft email to parents"
];

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: 'Hello! I am XULO AI. How can I assist you with school operations today?' }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), type: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const botMsg = {
                id: Date.now() + 1,
                type: 'bot',
                text: getSimulatedResponse(input)
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    const getSimulatedResponse = (query) => {
        const q = query.toLowerCase();

        // Fee/Financial Context
        if (q.includes('fee') || q.includes('payment') || q.includes('due')) {
            return `I've checked the financial records. Total collections for December are ₹12,45,000. There are 45 students with pending dues over ₹5,000. Would you like a list?`;
        }

        // Attendance Context
        if (q.includes('attendance') || q.includes('absent') || q.includes('present')) {
            return `Today's attendance summary: Class X-A has 92% attendance. 3 students (Rohan, Priya, Amit) are absent for 3+ consecutive days. I can send an SMS alert to their parents.`;
        }

        // Student Performance Context
        if (q.includes('grade') || q.includes('result') || q.includes('fail') || q.includes('topper')) {
            return `Academic Analysis: Class IX-B Math results are out. Average score: 78%. 5 students scored below 40%. The top scorer is Ananya Roy with 98%.`;
        }

        // Admission Context
        if (q.includes('admission')) {
            return `Admissions for 2024-25 are open. We have received 24 new enquiries this week. 12 are pending interview scheduling.`;
        }

        // General/Greeting
        if (q.includes('hello') || q.includes('hi')) return "Hello! I am XULO, your smart school assistant. Ask me about fees, attendance, or exam results.";

        return "I am processing that context. I can help with Student Data, Finance Reports, and Academic Scheduling. Please specify your query.";
    };

    return (
        <>
            {/* Floating Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-glow transition-all duration-300 hover:scale-110 flex items-center justify-center
                    ${isOpen ? 'bg-rose-500 rotate-90' : 'bg-gradient-to-r from-indigo-600 to-purple-600'}
                `}
            >
                {isOpen ? <X color="white" size={24} /> : <Sparkles color="white" size={24} />}
            </button>

            {/* Chat Interface */}
            {isOpen && (
                <div className="fixed bottom-24 right-8 z-40 w-96 h-[500px] glass-panel bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl flex flex-col animate-slide-up origin-bottom-right">

                    {/* Header */}
                    <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 rounded-t-2xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center border-2 border-white shadow-sm">
                                <Bot size={20} className="text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 text-sm">XULO Assistant</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <span className="text-xs text-gray-500">Online • AI Powered</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/30">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl p-3 text-sm shadow-sm ${msg.type === 'user'
                                    ? 'bg-indigo-600 text-white rounded-br-none'
                                    : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white rounded-2xl rounded-bl-none p-3 border border-gray-100 shadow-sm flex gap-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                                </div>
                            </div>
                        )}
                        <div ref={bottomRef}></div>
                    </div>

                    {/* Suggestions Area (if empty state) */}
                    {messages.length === 1 && (
                        <div className="px-4 pb-2">
                            <p className="text-xs text-gray-400 font-bold mb-2 uppercase tracking-wider">Suggested Queries</p>
                            <div className="flex flex-wrap gap-2">
                                {SUGGESTIONS.map((s, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setInput(s)}
                                        className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:bg-indigo-50 hover:border-indigo-200 transition-colors text-gray-600"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Input Area */}
                    <div className="p-3 border-t border-gray-100 bg-white rounded-b-2xl">
                        <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2 border border-gray-200 focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                            <input
                                type="text"
                                className="bg-transparent border-none flex-1 text-sm focus:outline-none focus:shadow-none focus:ring-0 p-0"
                                placeholder="Type a message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                                <Mic size={18} />
                            </button>
                            <button
                                onClick={handleSend}
                                className={`p-2 rounded-lg transition-all ${input.trim()
                                    ? 'bg-indigo-600 text-white shadow-md transform hover:scale-105'
                                    : 'bg-gray-200 text-gray-400 pointer-events-none'
                                    }`}
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIAssistant;
