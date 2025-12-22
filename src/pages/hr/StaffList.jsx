import React, { useState } from 'react';
import { UserPlus, Mail, Phone, MapPin } from 'lucide-react';
import Table from '../../components/common/Table';

const MOCK_STAFF = [
    { id: 1, empId: 'EMP001', name: 'Sarah Wilson', role: 'Mathematics Teacher', department: 'Academic', email: 'sarah@xulo.com', status: 'Active' },
    { id: 2, empId: 'EMP002', name: 'James Rodriquez', role: 'Science Teacher', department: 'Academic', email: 'james@xulo.com', status: 'Active' },
    { id: 3, empId: 'ADMIN01', name: 'Emily Blunt', role: 'Accountant', department: 'Finance', email: 'accounts@xulo.com', status: 'Active' },
    { id: 4, empId: 'SUP004', name: 'Michael Chang', role: 'Bus Driver', department: 'Transport', email: 'mike@xulo.com', status: 'On Leave' },
];

const StaffList = () => {
    const columns = [
        {
            header: 'Employee', accessor: 'name', render: (row) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                        {row.name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{row.name}</h4>
                        <p className="text-xs text-gray-500">{row.role}</p>
                    </div>
                </div>
            )
        },
        { header: 'ID', accessor: 'empId', render: (row) => <span className="font-mono text-xs">{row.empId}</span> },
        { header: 'Department', accessor: 'department' },
        {
            header: 'Contact', accessor: 'email', render: (row) => (
                <div className="flex flex-col text-xs text-gray-500">
                    <div className="flex items-center gap-1"><Mail size={12} /> {row.email}</div>
                </div>
            )
        },
        {
            header: 'Status', accessor: 'status', render: (row) => (
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                    {row.status}
                </span>
            )
        }
    ];

    const handleAction = (type, row) => {
        if (type === 'view') {
            alert(`VIEW STAFF DETAILS:\n\nName: ${row.name}\nRole: ${row.role}\nDepartment: ${row.department}\nEmail: ${row.email}`);
        } else if (type === 'edit') {
            alert(`EDIT MODE enabled for ${row.name}. (Mock functionality)`);
        } else if (type === 'delete') {
            if (window.confirm(`Are you sure you want to delete ${row.name}? This action cannot be undone.`)) {
                alert("Staff member deleted successfully.");
            }
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Staff Directory</h1>
                    <p className="text-gray-500">Manage all organization employees.</p>
                </div>
                <button className="btn btn-primary">
                    <UserPlus size={18} /> Add New Staff
                </button>
            </div>

            <Table
                columns={columns}
                data={MOCK_STAFF}
                onAction={handleAction}
            />
        </div>
    );
};

export default StaffList;
