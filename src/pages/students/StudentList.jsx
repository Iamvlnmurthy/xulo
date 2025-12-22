import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Filter, Download } from 'lucide-react';
import Table from '../../components/common/Table';
import { useData } from '../../context/DataContext';
import { GRADES } from '../../utils/constants';

const StudentList = () => {
    const { students } = useData();
    const [searchTerm, setSearchTerm] = useState('');

    const columns = [
        { header: 'Admission No', accessor: 'admissionNo', render: (row) => <span className="font-mono text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">{row.admissionNo}</span> },
        {
            header: 'Student Name', accessor: 'name', render: (row) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">
                        {row.name.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-900">{row.name}</span>
                </div>
            )
        },
        { header: 'Class', accessor: 'class' },
        { header: 'Parent Name', accessor: 'parent' },
        { header: 'Contact', accessor: 'mobile' },
        {
            header: 'Status', accessor: 'status', render: (row) => (
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                    {row.status}
                </span>
            )
        },
    ];

    const filteredData = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.admissionNo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handlePrint = () => {
        window.print();
    };

    const handleExport = () => {
        const csvContent = "data:text/csv;charset=utf-8," +
            ["Admission No,Name,Class,Parent,Mobile,Status"].join(",") + "\n" +
            filteredData.map(r => `${r.admissionNo},${r.name},${r.class},${r.parent},${r.mobile},${r.status}`).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "students.csv");
        document.body.appendChild(link);
        link.click();
    };

    const handleAction = (type, row) => {
        if (type === 'view') {
            // In real app, navigate to /students/:id
            alert(`STUDENT DETAILS:\n\nName: ${row.name}\nClass: ${row.class}\nParent: ${row.parent}\nContact: ${row.mobile}`);
        } else if (type === 'edit') {
            alert(`Edit Student: ${row.name} (Coming Soon)`);
        } else if (type === 'delete') {
            if (window.confirm(`Delete ${row.name}?`)) {
                alert("Student deleted successfully.");
            }
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Student Directory</h1>
                    <p className="text-gray-500">Manage student admissions and records.</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={handlePrint} className="btn btn-ghost border border-gray-200 bg-white">Print List</button>
                    <Link to="/students/new" className="btn btn-primary">
                        <Plus size={18} /> Add New Student
                    </Link>
                </div>
            </div>

            {/* Filters */}
            <div className="card p-4 bg-white flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name or admission no..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    />
                </div>

                {/* Class Filter */}
                <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
                    <option value="">All Classes</option>
                    {GRADES.default.map(c => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>

                <div className="flex gap-2 w-full sm:w-auto">
                    <button onClick={handleExport} className="btn btn-ghost border border-gray-200 bg-white hover:bg-gray-50">
                        <Download size={18} className="text-gray-500" /> Export CSV
                    </button>
                </div>
            </div>

            <div className="print:block">
                <Table
                    columns={columns}
                    data={filteredData}
                    onAction={handleAction}
                />
            </div>
        </div >
    );
};

export default StudentList;
