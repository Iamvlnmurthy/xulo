
import {
    LayoutDashboard, Users, Banknote, Briefcase, GraduationCap,
    Bus, ShieldCheck, BarChart2, Settings, Sparkles, School,
    UserPlus, MessageSquare, Book, Home, Package, ShoppingBag,
    Award, FileBadge, Calendar, Folder, PenTool, Layers,
    Database, Network, Share2, Grid
} from 'lucide-react';

export const NAVIGATION_MODULES = [
    {
        id: 'frp',
        title: 'FRP (Core)',
        description: 'Organisation, Students & Core Settings',
        icon: Layers,
        sections: [
            {
                title: 'Organisation',
                items: [
                    { label: 'Branch Settings', path: '/settings/branch' },
                    { label: 'Manage Admin Users', path: '/settings/users' },
                    { label: 'Manage Menus', path: '/settings/menus' },
                    { label: 'Reports', path: '/reports/organisation' }
                ]
            },
            {
                title: 'SIS & Enrollments',
                items: [
                    { label: 'Student List', path: '/students' }, // Existing
                    { label: 'Admissions & Enquiries', path: '/admissions' }, // Existing
                    { label: 'Student Groups', path: '/students/groups' },
                    { label: 'Withdrawals & Inactive', path: '/students/inactive' },
                    { label: 'Certificate Management', path: '/certificates' } // Existing
                ]
            },
            {
                title: 'Hostel & Mess',
                items: [
                    { label: 'Hostel Dashboard', path: '/hostel' }, // Existing
                    { label: 'Room Allocation', path: '/hostel/rooms' },
                    { label: 'Mess Menu', path: '/hostel/mess' }
                ]
            },
            {
                title: 'Concerns & Feedback',
                items: [
                    { label: 'Support Tickets', path: '/concerns/tickets' },
                    { label: 'Feedback', path: '/concerns/feedback' }
                ]
            }
        ]
    },
    {
        id: 'finance',
        title: 'Finance',
        description: 'Fees, Accounting & Store',
        icon: Banknote,
        sections: [
            {
                title: 'Fee Management',
                items: [
                    { label: 'Fee Collection', path: '/finance' }, // Existing
                    { label: 'Fee Structure', path: '/finance/structure' }, // Existing
                    { label: 'Fee Reports', path: '/finance/reports' },
                    { label: 'Concessions', path: '/finance/concessions' }
                ]
            },
            {
                title: 'Accounting',
                items: [
                    { label: 'Expenses', path: '/finance/expenses' },
                    { label: 'Bank Reconciliation', path: '/finance/bank' },
                    { label: 'Petty Cash', path: '/finance/petty-cash' }
                ]
            },
            {
                title: 'School Store',
                items: [
                    { label: 'Store Dashboard', path: '/store' }, // Existing
                    { label: 'Inventory', path: '/inventory' }, // Existing
                    { label: 'Orders & Sales', path: '/store/orders' },
                    { label: 'Vendors', path: '/store/vendors' }
                ]
            }
        ]
    },
    {
        id: 'hr',
        title: 'HR & Payroll',
        description: 'Staff, Attendance & Leaves',
        icon: Briefcase,
        sections: [
            {
                title: 'Staff Management',
                items: [
                    { label: 'Staff Directory', path: '/hr' }, // Existing
                    { label: 'Recruitment', path: '/hr/recruitment' },
                    { label: 'Staff Groups', path: '/hr/groups' }
                ]
            },
            {
                title: 'Attendance & Leaves',
                items: [
                    { label: 'Daily Attendance', path: '/hr/attendance' }, // Existing
                    { label: 'Biometric Logs', path: '/hr/biometric' },
                    { label: 'Leave Management', path: '/hr/leaves' }
                ]
            },
            {
                title: 'Payroll',
                items: [
                    { label: 'Payroll Dashboard', path: '/hr/payroll' }, // Existing
                    { label: 'Salary Structure', path: '/hr/salary' },
                    { label: 'Payslip Generation', path: '/hr/payslips' }
                ]
            }
        ]
    },
    {
        id: 'academics',
        title: 'Academics (GB)',
        description: 'Gradebook, Exams & Timetable',
        icon: GraduationCap,
        sections: [
            {
                title: 'Grade Book (CBSE/State)',
                items: [
                    { label: 'Marks Entry', path: '/academics' }, // Existing
                    { label: 'Report Cards', path: '/academics/reports' },
                    { label: 'Scholastic Skills', path: '/academics/skills' }
                ]
            },
            {
                title: 'Timetable',
                items: [
                    { label: 'Class Timetable', path: '/academics/timetable' }, // Existing
                    { label: 'Teacher Timetable', path: '/academics/timetable/teachers' },
                    { label: 'Substitutions', path: '/academics/substitutions' }
                ]
            },
            {
                title: 'Examination',
                items: [
                    { label: 'Exam Schedule', path: '/academics/exams/schedule' },
                    { label: 'Online Exams', path: '/academics/exams' }, // Existing
                    { label: 'Question Bank', path: '/academics/question-bank' }
                ]
            }
        ]
    },
    {
        id: 'lms',
        title: 'LMS',
        description: 'Learning & Content',
        icon: Book,
        sections: [
            {
                title: 'Learning',
                items: [
                    { label: 'Assignments', path: '/lms/assignments' },
                    { label: 'Online Classes', path: '/lms/classes' },
                    { label: 'Lesson Planner', path: '/academics/planner' } // Existing
                ]
            },
            {
                title: 'Library',
                items: [
                    { label: 'Library Dashboard', path: '/library' }, // Existing
                    { label: 'Issue/Return', path: '/library/circulation' },
                    { label: 'Catalog', path: '/library/catalog' }
                ]
            },
            {
                title: 'Content',
                items: [
                    { label: 'Digital Library', path: '/lms/content' },
                    { label: 'Flash Cards', path: '/lms/flashcards' }
                ]
            }
        ]
    },
    {
        id: 'connect',
        title: 'Connect',
        description: 'SMS, Email & WhatsApp',
        icon: Share2,
        sections: [
            {
                title: 'Communication',
                items: [
                    { label: 'Communication Hub', path: '/communication' }, // Existing
                    { label: 'Send SMS', path: '/connect/sms' },
                    { label: 'WhatsApp', path: '/connect/whatsapp' },
                    { label: 'Email', path: '/connect/email' }
                ]
            },
            {
                title: 'Alumni',
                items: [
                    { label: 'Alumni Network', path: '/alumni' }, // Existing
                    { label: 'Events', path: '/alumni/events' }
                ]
            }
        ]
    },
    {
        id: 'addons',
        title: 'Add-ons',
        description: 'Transport, Security & Others',
        icon: Grid,
        sections: [
            {
                title: 'Transport',
                items: [
                    { label: 'Transport Dashboard', path: '/transport' }, // Existing
                    { label: 'Route Management', path: '/transport/routes' },
                    { label: 'Vehicle Tracking', path: '/transport/tracking' }
                ]
            },
            {
                title: 'Security',
                items: [
                    { label: 'Gate Pass', path: '/security' }, // Existing
                    { label: 'Visitor Logs', path: '/security/visitors' }
                ]
            },
            {
                title: 'Analytics',
                items: [
                    { label: 'BI Dashboard', path: '/analytics' }, // Existing
                    { label: 'Custom Reports', path: '/analytics/custom' }
                ]
            }
        ]
    }
];
