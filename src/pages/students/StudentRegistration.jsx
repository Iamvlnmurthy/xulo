import { ACADEMIC_BOARDS, GRADES } from '../../utils/constants';

const StudentRegistration = () => {
    const navigate = useNavigate();
    const { addStudent } = useData();

    // Form State
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', dob: '', gender: 'Male',
        bloodGroup: '', religion: '',
        admissionNo: '', admissionDate: new Date().toISOString().split('T')[0],
        board: 'cbse', // Default
        grade: '', section: '',
        fatherName: '', motherName: '', contactNo: '', email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!formData.firstName || !formData.lastName || !formData.grade || !formData.contactNo) {
            alert("Please fill required fields!");
            return;
        }

        const fullName = `${formData.firstName} ${formData.lastName}`;
        const newStudent = {
            admissionNo: formData.admissionNo || `ADM-${Date.now().toString().slice(-4)}`,
            name: fullName,
            class: `${formData.grade}-${formData.section}`,
            board: formData.board,
            parent: formData.fatherName || formData.motherName,
            mobile: formData.contactNo,
            status: 'Active',
            ...formData
        };

        addStudent(newStudent);
        alert("Student Saved Successfully!");
        navigate('/students');
    };

    const availableGrades = GRADES[formData.board] || GRADES['default'];

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">New Admission</h1>
                    <p className="text-gray-500">Register a new student into the system.</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => navigate('/students')} className="btn btn-ghost border border-gray-200 bg-white">
                        <X size={18} /> Cancel
                    </button>
                    <button onClick={handleSubmit} className="btn btn-primary">
                        <Save size={18} /> Save Student
                    </button>
                </div>
            </div>

            <div className="card bg-white border border-gray-200 overflow-hidden">
                <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
                    <h3 className="font-semibold text-gray-800">Basic Information</h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Photo Upload */}
                    <div className="md:col-span-2 flex justify-center mb-6">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-32 h-32 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                                <Upload size={32} />
                            </div>
                            <button className="text-sm text-indigo-600 font-medium hover:underline">Upload Photo</button>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">First Name <span className="text-red-500">*</span></label>
                        <input name="firstName" onChange={handleChange} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none" placeholder="e.g. Aarav" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Last Name <span className="text-red-500">*</span></label>
                        <input name="lastName" onChange={handleChange} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none" placeholder="e.g. Patel" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Date of Birth <span className="text-red-500">*</span></label>
                        <input name="dob" onChange={handleChange} type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Gender <span className="text-red-500">*</span></label>
                        <select name="gender" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none bg-white">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Blood Group</label>
                        <select name="bloodGroup" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none bg-white">
                            <option value="">Select...</option>
                            <option>A+</option><option>B+</option><option>O+</option><option>AB+</option>
                            <option>A-</option><option>B-</option><option>O-</option><option>AB-</option>
                        </select>
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Religion</label>
                        <input name="religion" onChange={handleChange} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none" />
                    </div>
                </div>

                <div className="border-t border-b border-gray-100 bg-gray-50 px-6 py-4">
                    <h3 className="font-semibold text-gray-800">Academic Details</h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Admission Number</label>
                        <input name="admissionNo" onChange={handleChange} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none" placeholder="Auto-generated if empty" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Admission Date <span className="text-red-500">*</span></label>
                        <input name="admissionDate" onChange={handleChange} type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none" defaultValue={new Date().toISOString().split('T')[0]} />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Syllabus / Board <span className="text-red-500">*</span></label>
                        <select name="board" onChange={handleChange} value={formData.board} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none bg-white">
                            {ACADEMIC_BOARDS.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                        </select>
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Grade/Class <span className="text-red-500">*</span></label>
                        <select name="grade" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none bg-white">
                            <option value="">Select Class...</option>
                            {availableGrades.map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Section <span className="text-red-500">*</span></label>
                        <select name="section" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none bg-white">
                            <option value="">Select Section...</option>
                            <option>A</option><option>B</option><option>C</option><option>D</option><option>E</option>
                        </select>
                    </div>
                </div>

                <div className="border-t border-b border-gray-100 bg-gray-50 px-6 py-4">
                    <h3 className="font-semibold text-gray-800">Parent/Guardian Details</h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Father's Name</label>
                        <input name="fatherName" onChange={handleChange} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Mother's Name</label>
                        <input name="motherName" onChange={handleChange} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Primary Contact No <span className="text-red-500">*</span></label>
                        <input name="contactNo" onChange={handleChange} type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <input name="email" onChange={handleChange} type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentRegistration;
