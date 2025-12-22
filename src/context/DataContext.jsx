import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    // --- Initial State Loaders ---
    const loadState = (key, defaultValue) => {
        try {
            const saved = localStorage.getItem(key);
            return saved ? JSON.parse(saved) : defaultValue;
        } catch (e) {
            console.error(`Error loading ${key}`, e);
            return defaultValue;
        }
    };

    // --- State Definitions ---
    const [students, setStudents] = useState(() => loadState('xulo_students', [
        { id: 101, name: 'Aarav Patel', grade: 'Class 10-A', status: 'Active', feesDue: 0, admissionNo: 'AD1001', parent: 'Rajesh Patel', mobile: '9876543210' },
        { id: 102, name: 'Ishaan Sharma', grade: 'Nursery-A', status: 'Active', feesDue: 15000, admissionNo: 'AD1002', parent: 'Vikram Sharma', mobile: '9876543211' },
        { id: 103, name: 'Ananya Gupta', grade: 'Class 5-B', status: 'Active', feesDue: 0, admissionNo: 'AD1003', parent: 'Sanjay Gupta', mobile: '9876543212' },
        { id: 104, name: 'Rohan Verma', grade: 'Class 12 (Science)-A', status: 'Active', feesDue: 0, admissionNo: 'AD1004', parent: 'Amit Verma', mobile: '9876543213' },
        { id: 105, name: 'Meera Reddy', grade: 'LKG-C', status: 'Active', feesDue: 5000, admissionNo: 'AD1005', parent: 'Kiran Reddy', mobile: '9876543214' },
        { id: 106, name: 'Vihaan Kumar', grade: 'Playgroup-A', status: 'Active', feesDue: 8000, admissionNo: 'AD1006', parent: 'Arun Kumar', mobile: '9876543215' },
        { id: 107, name: 'Saanvi Rao', grade: 'UKG-B', status: 'Active', feesDue: 2000, admissionNo: 'AD1007', parent: 'Prakash Rao', mobile: '9876543216' },
        { id: 108, name: 'Kabir Singh', grade: 'Class 1-A', status: 'Active', feesDue: 12000, admissionNo: 'AD1008', parent: 'Raj Singh', mobile: '9876543217' },
        { id: 109, name: 'Diya Menon', grade: 'Class 2-C', status: 'Active', feesDue: 0, admissionNo: 'AD1009', parent: 'Suresh Menon', mobile: '9876543218' },
        { id: 110, name: 'Arjun Nair', grade: 'Class 3-B', status: 'Active', feesDue: 4500, admissionNo: 'AD1010', parent: 'Vinod Nair', mobile: '9876543219' },
        { id: 111, name: 'Zara Khan', grade: 'Class 4-A', status: 'Active', feesDue: 0, admissionNo: 'AD1011', parent: 'Imran Khan', mobile: '9876543220' },
        { id: 112, name: 'Vivaan Joshi', grade: 'Class 6-B', status: 'Active', feesDue: 6000, admissionNo: 'AD1012', parent: 'Deepak Joshi', mobile: '9876543221' },
        { id: 113, name: 'Aditya Mishra', grade: 'Class 7-A', status: 'Active', feesDue: 0, admissionNo: 'AD1013', parent: 'Manish Mishra', mobile: '9876543222' },
        { id: 114, name: 'Kavya Iyer', grade: 'Class 8-C', status: 'Active', feesDue: 3000, admissionNo: 'AD1014', parent: 'Ramesh Iyer', mobile: '9876543223' },
        { id: 115, name: 'Pranav Das', grade: 'Class 9-B', status: 'Active', feesDue: 0, admissionNo: 'AD1015', parent: 'Subhash Das', mobile: '9876543224' },
        { id: 116, name: 'Neha Chawla', grade: 'Class 11 (Commerce)-A', status: 'Active', feesDue: 18000, admissionNo: 'AD1016', parent: 'Vikas Chawla', mobile: '9876543225' },
    ]));

    const [staff, setStaff] = useState(() => loadState('xulo_staff', [
        { id: 1, name: 'Dr. Sarah Connor', role: 'Principal', department: 'Admin', status: 'Active' },
        { id: 2, name: 'John Doe', role: 'Teacher', department: 'Science', status: 'Active' },
    ]));

    const [inventory, setInventory] = useState(() => loadState('xulo_inventory', [
        { id: 1, item: 'Projector X1', category: 'Electronics', stock: 5, status: 'In Use' },
        { id: 2, item: 'Whiteboard Markers', category: 'Stationery', stock: 150, status: 'Available' },
    ]));

    const [notifications, setNotifications] = useState(() => loadState('xulo_notifications', [
        { id: 1, title: 'System Update', message: 'XULO 2.0 is live!', type: 'system', read: false },
    ]));

    // --- Persistence Effects ---
    useEffect(() => localStorage.setItem('xulo_students', JSON.stringify(students)), [students]);
    useEffect(() => localStorage.setItem('xulo_staff', JSON.stringify(staff)), [staff]);
    useEffect(() => localStorage.setItem('xulo_inventory', JSON.stringify(inventory)), [inventory]);
    useEffect(() => localStorage.setItem('xulo_notifications', JSON.stringify(notifications)), [notifications]);

    // --- Actions ---

    // Students
    const addStudent = (student) => {
        const newStudent = { ...student, id: Date.now() };
        setStudents(prev => [...prev, newStudent]);
        return newStudent;
    };

    const updateStudent = (id, updates) => {
        setStudents(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s));
    };

    const deleteStudent = (id) => {
        setStudents(prev => prev.filter(s => s.id !== id));
    };

    // Staff
    const addStaff = (member) => {
        const newMember = { ...member, id: Date.now() };
        setStaff(prev => [...prev, newMember]);
    };

    // Inventory
    const updateStock = (id, delta) => {
        setInventory(prev => prev.map(item =>
            item.id === id ? { ...item, stock: Math.max(0, item.stock + delta) } : item
        ));
    };

    // Global Reset
    const resetData = () => {
        localStorage.clear();
        window.location.reload();
    };

    const value = {
        students, addStudent, updateStudent, deleteStudent,
        staff, addStaff,
        inventory, updateStock,
        notifications,
        resetData
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};
