import React, { useState } from 'react';
import { Book, Search, User, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const MOCK_BOOKS_INITIAL = [
    { id: 1, title: 'Introduction to Physics', author: 'H.C. Verma', isbn: '978-81-717', status: 'Available', category: 'Science' },
    { id: 2, title: 'Concept of Mathematics', author: 'R.D. Sharma', isbn: '978-81-999', status: 'Issued', category: 'Mathematics', dueDate: '2024-12-25', issuedTo: 'Aarav Patel' },
    { id: 3, title: 'Organic Chemistry', author: 'Morrison & Boyd', isbn: '978-01-326', status: 'Available', category: 'Science' },
    { id: 4, title: 'History of India', author: 'Bipin Chandra', isbn: '978-81-255', status: 'Overdue', category: 'History', dueDate: '2024-12-20', issuedTo: 'Zara Khan' },
];

const LibraryDashboard = () => {
    const [books, setBooks] = useState(MOCK_BOOKS_INITIAL);
    const [searchTerm, setSearchTerm] = useState('');

    const handleIssue = (book) => {
        const studentName = prompt("Enter Student Name to issue book to:");
        if (studentName) {
            const updatedBooks = books.map(b => {
                if (b.id === book.id) {
                    return { ...b, status: 'Issued', issuedTo: studentName, dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] };
                }
                return b;
            });
            setBooks(updatedBooks);
            alert(`Book issued to ${studentName}`);
        }
    };

    const handleReturn = (book) => {
        if (window.confirm(`Interact return for "${book.title}"?`)) {
            const updatedBooks = books.map(b => {
                if (b.id === book.id) {
                    return { ...b, status: 'Available', issuedTo: null, dueDate: null };
                }
                return b;
            });
            setBooks(updatedBooks);
            alert("Book returned successfully.");
        }
    };

    const handleAddBook = () => {
        const title = prompt("Enter Book Title:");
        const author = prompt("Enter Author:");
        if (title && author) {
            const newBook = {
                id: books.length + 1,
                title,
                author,
                isbn: `978-${Math.floor(Math.random() * 1000)}`,
                status: 'Available',
                category: 'General'
            };
            setBooks([...books, newBook]);
            alert("New book added to catalog.");
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-display font-bold text-gray-900">Library Management</h1>
                    <p className="text-gray-500">Manage catalog, circulation, and digital resources.</p>
                </div>
                <button className="btn btn-primary" onClick={handleAddBook}>
                    <Book size={18} /> Add New Book
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="card p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-indigo-100 text-indigo-600"><Book size={24} /></div>
                    <div><p className="text-sm text-gray-500">Total Books</p><h3 className="text-xl font-bold">12,504</h3></div>
                </div>
                <div className="card p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-orange-100 text-orange-600"><Clock size={24} /></div>
                    <div><p className="text-sm text-gray-500">Issued Today</p><h3 className="text-xl font-bold">45</h3></div>
                </div>
                <div className="card p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-red-100 text-red-600"><AlertCircle size={24} /></div>
                    <div><p className="text-sm text-gray-500">Overdue</p><h3 className="text-xl font-bold">12</h3></div>
                </div>
                <div className="card p-4 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-green-100 text-green-600"><CheckCircle size={24} /></div>
                    <div><p className="text-sm text-gray-500">Returned</p><h3 className="text-xl font-bold">38</h3></div>
                </div>
            </div>

            {/* Search */}
            <div className="card p-4 bg-white/80 backdrop-blur-sm border border-gray-200">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by Title, Author, ISBN, or Student Name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-indigo-100 transition-all font-medium"
                    />
                </div>
            </div>

            {/* Books Table */}
            <div className="card overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50 border-b border-gray-100 text-gray-500 text-xs uppercase font-semibold">
                        <tr>
                            <th className="px-6 py-4">Book Details</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Circulation</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {books.filter(b => b.title.toLowerCase().includes(searchTerm.toLowerCase())).map((book) => (
                            <tr key={book.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                                            <Book size={16} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{book.title}</h4>
                                            <p className="text-xs text-gray-500">{book.author} • {book.isbn}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{book.category}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${book.status === 'Available' ? 'bg-green-100 text-green-700' :
                                        book.status === 'Issued' ? 'bg-indigo-100 text-indigo-700' :
                                            'bg-red-100 text-red-700'
                                        }`}>
                                        {book.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    {book.status !== 'Available' ? (
                                        <div>
                                            <div className="flex items-center gap-1 text-gray-900 font-medium">
                                                <User size={12} className="text-gray-400" /> {book.issuedTo}
                                            </div>
                                            <p className={`text-xs ${book.status === 'Overdue' ? 'text-red-500 font-bold' : 'text-gray-500'}`}>
                                                Due: {book.dueDate}
                                            </p>
                                        </div>
                                    ) : (
                                        <span className="text-gray-400 text-xs">-</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    {book.status === 'Available' ? (
                                        <button onClick={() => handleIssue(book)} className="btn btn-primary py-1.5 px-3 text-xs">Issue</button>
                                    ) : (
                                        <button onClick={() => handleReturn(book)} className="btn btn-ghost py-1.5 px-3 text-xs border border-gray-200">Return</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LibraryDashboard;
