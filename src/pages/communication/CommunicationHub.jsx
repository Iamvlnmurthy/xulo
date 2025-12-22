import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Send, Search, Paperclip } from 'lucide-react';

const MOCK_CONVERSATIONS = [
    { id: 1, name: 'Mrs. Sharma (Parent)', type: 'WhatsApp', preview: 'Is the school closed tomorrow due to rain?', time: '10:30 AM', unread: 2 },
    { id: 2, name: 'Mr. Rajesh Gupta', type: 'Email', preview: 'Application for Leave - Rajesh Junior', time: 'Yesterday', unread: 0 },
    { id: 3, name: 'All Staff Group', type: 'SMS', preview: 'Meeting scheduled at 4 PM in Conference Hall.', time: 'Yesterday', unread: 0 },
];

const CommunicationHub = () => {
    const [selectedChat, setSelectedChat] = useState(MOCK_CONVERSATIONS[0]);

    return (
        <div className="h-[calc(100vh-120px)] flex flex-col">
            <div className="mb-4">
                <h1 className="text-2xl font-bold text-gray-900">Communication Hub</h1>
                <p className="text-gray-500">Unified inbox for SMS, Email, and WhatsApp.</p>
            </div>

            <div className="flex-1 card bg-white flex overflow-hidden border border-gray-200 shadow-xl">
                {/* Sidebar List */}
                <div className="w-80 border-r border-gray-100 bg-gray-50 flex flex-col">
                    <div className="p-4 border-b border-gray-100">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="text"
                                placeholder="Search messages..."
                                className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-300 text-sm"
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {MOCK_CONVERSATIONS.map((chat) => (
                            <div
                                key={chat.id}
                                onClick={() => setSelectedChat(chat)}
                                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-white transition-colors ${selectedChat.id === chat.id ? 'bg-white border-l-4 border-l-indigo-500 shadow-sm' : ''}`}
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className={`text-sm font-semibold ${selectedChat.id === chat.id ? 'text-indigo-900' : 'text-gray-800'}`}>{chat.name}</h4>
                                    <span className="text-[10px] text-gray-400">{chat.time}</span>
                                </div>
                                <p className="text-xs text-gray-500 line-clamp-1">{chat.preview}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded border ${chat.type === 'WhatsApp' ? 'bg-green-50 text-green-600 border-green-100' :
                                            chat.type === 'Email' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                                'bg-orange-50 text-orange-600 border-orange-100'
                                        }`}>
                                        {chat.type}
                                    </span>
                                    {chat.unread > 0 && <span className="bg-rose-500 text-white text-[10px] px-1.5 rounded-full ml-auto">{chat.unread}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col bg-white">
                    {/* Chat Header */}
                    <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                {selectedChat.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 text-sm">{selectedChat.name}</h3>
                                <div className="flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    <span className="text-xs text-gray-400">Online via {selectedChat.type}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><Phone size={18} /></button>
                            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><Mail size={18} /></button>
                        </div>
                    </div>

                    {/* Chat Messages (Placeholder) */}
                    <div className="flex-1 overflow-y-auto p-6 bg-slate-50 space-y-4">
                        <div className="flex justify-start">
                            <div className="max-w-md bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700">
                                <p>Hello, is the school closed tomorrow due to heavy rain forecast?</p>
                                <span className="text-[10px] text-gray-400 mt-1 block">10:30 AM</span>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="max-w-md bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none shadow-md text-sm">
                                <p>Hi Mrs. Sharma! Yes, the school will remain closed tomorrow (23rd Dec) as per district orders. A formal notification SMS will be sent shortly.</p>
                                <span className="text-indigo-200 text-[10px] mt-1 block text-right">10:32 AM • Sent by Admin</span>
                            </div>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-gray-100 shrink-0">
                        <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                            <button className="text-gray-400 hover:text-gray-600 p-2"><Paperclip size={20} /></button>
                            <input type="text" placeholder="Type your message..." className="flex-1 bg-transparent border-none outline-none text-sm" />
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-lg shadow-md transition-all">
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunicationHub;
