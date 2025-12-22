import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import StudentList from './pages/students/StudentList';
import StudentRegistration from './pages/students/StudentRegistration';
import FeeStructure from './pages/finance/FeeStructure';
import FeeCollection from './pages/finance/FeeCollection';
import StaffList from './pages/hr/StaffList';
import StaffAttendance from './pages/hr/StaffAttendance';
import GradeBook from './pages/academics/GradeBook';
import TransportDashboard from './pages/transport/TransportDashboard';
import BIDashboard from './pages/analytics/BIDashboard';
import LibraryDashboard from './pages/library/LibraryDashboard';
import HostelDashboard from './pages/hostel/HostelDashboard';
import InventoryDashboard from './pages/inventory/InventoryDashboard';
import CommunicationHub from './pages/communication/CommunicationHub';
import AdmissionsDashboard from './pages/admissions/AdmissionsDashboard';
import SchoolStore from './pages/store/SchoolStore';
import AlumniDashboard from './pages/alumni/AlumniDashboard';
import CertificatesDashboard from './pages/certificates/CertificatesDashboard';
import PayrollDashboard from './pages/hr/Payroll';
import SecurityDashboard from './pages/security/SecurityDashboard';
import TimetableDashboard from './pages/academics/Timetable';
import LessonPlanner from './pages/academics/planner/LessonPlanner';
import ExamPortal from './pages/academics/exam/ExamPortal';
import DigitalLocker from './pages/students/DigitalLocker';
import AITools from './pages/ai/AITools';
import Settings from './pages/Settings';

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

import { NAVIGATION_MODULES } from './utils/navigationConfig';
import GenericModulePage from './components/common/GenericModulePage';
import MessManagement from './pages/hostel/MessManagement';
import FeedbackDashboard from './pages/feedback/FeedbackDashboard';
import StudentWithdrawal from './pages/students/StudentWithdrawal';

// ... existing imports ...

// Map paths to existing components
const PAGE_COMPONENTS = {
  '/students': <StudentList />,
  '/students/new': <StudentRegistration />,
  '/students/locker': <DigitalLocker />,
  '/students/inactive': <StudentWithdrawal />, // NEW
  '/finance': <FeeCollection />,
  '/finance/structure': <FeeStructure />,
  '/hr': <StaffList />,
  '/hr/attendance': <StaffAttendance />,
  '/hr/payroll': <PayrollDashboard />,
  '/academics': <GradeBook />,
  '/academics/timetable': <TimetableDashboard />,
  '/academics/planner': <LessonPlanner />,
  '/academics/exams': <ExamPortal />,
  '/transport': <TransportDashboard />,
  '/security': <SecurityDashboard />,
  '/analytics': <BIDashboard />,
  '/library': <LibraryDashboard />,
  '/hostel': <HostelDashboard />,
  '/hostel/mess': <MessManagement />, // NEW
  '/inventory': <InventoryDashboard />,
  '/communication': <CommunicationHub />,
  '/concerns/feedback': <FeedbackDashboard />, // NEW
  '/admissions': <AdmissionsDashboard />,
  '/store': <SchoolStore />,
  '/alumni': <AlumniDashboard />,
  '/certificates': <CertificatesDashboard />,
  '/ai-tools': <AITools />,
  '/settings': <Settings />,
};

function App() {
  // Flatten all navigation items for route generation
  const allNavItems = NAVIGATION_MODULES.reduce((acc, module) => {
    module.sections.forEach(section => {
      section.items.forEach(item => {
        acc.push(item);
      });
    });
    return acc;
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />

            {/* Dynamic Routes Generation */}
            {allNavItems.map(item => (
              <Route
                key={item.path}
                path={item.path.replace(/^\//, '')} // Remove leading slash for nested routes
                element={PAGE_COMPONENTS[item.path] || <GenericModulePage title={item.label} />}
              />
            ))}

            {/* Fallback for manually nested paths not in Nav Config but in PAGE_COMPONENTS that need specific nested handling */}
            <Route path="students/new" element={<StudentRegistration />} />
            <Route path="students/locker" element={<DigitalLocker />} />

          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
