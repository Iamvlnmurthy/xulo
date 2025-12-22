import { GRADES } from '../../utils/constants';

const TimetableDashboard = () => {
    const [isGenerating, setIsGenerating] = React.useState(false);
    const [lastOptimized, setLastOptimized] = React.useState('Just now');
    const [selectedClass, setSelectedClass] = React.useState('Class 10');

    // ... handleGenerate ...

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                {/* ... Header ... */}
            </div>

            {/* ... Options ... */}

            {/* Weekly Schedule Grid */}
            <div className="card bg-white overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <h3 className="font-bold text-gray-800">Timetable for:</h3>
                        <select
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                            className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2"
                        >
                            {GRADES['cbse'].map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <span className="px-3 py-1 bg-gray-100 rounded-full font-medium text-gray-600 cursor-pointer">Week View</span>
                        <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-400 cursor-pointer">Day View</span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-[800px] grid grid-cols-6 border-b border-gray-100 bg-gray-50">
                        <div className="p-4 text-xs font-bold text-gray-400 uppercase">Time / Day</div>
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                            <div key={day} className="p-4 text-xs font-bold text-gray-600 uppercase text-center border-l border-gray-100">{day}</div>
                        ))}
                    </div>
                    {['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM'].map((time, timeIdx) => (
                        <div key={timeIdx} className="min-w-[800px] grid grid-cols-6 border-b border-gray-100">
                            <div className="p-4 text-xs font-bold text-gray-400 border-r border-gray-100 flex items-center justify-center">
                                {time}
                            </div>
                            {[1, 2, 3, 4, 5].map((dayIdx) => {
                                const isBreak = time === '12:00 PM';
                                if (isBreak) return <div key={dayIdx} className="bg-gray-50 p-4 text-center text-xs font-bold text-gray-300 tracking-widest border-l border-gray-100">LUNCH</div>;

                                // Mock Data Logic
                                const subjects = ['Mathematics', 'Physics', 'English', 'History', 'Comp. Sci'];
                                const teachers = ['S. Guha', 'R. Roy', 'K. Das', 'P. Sen', 'A. Ali'];
                                const subject = subjects[(timeIdx + dayIdx) % 5];
                                const teacher = teachers[(timeIdx + dayIdx) % 5];
                                const color = ['bg-blue-50 text-blue-700', 'bg-purple-50 text-purple-700', 'bg-orange-50 text-orange-700', 'bg-pink-50 text-pink-700', 'bg-emerald-50 text-emerald-700'][(timeIdx + dayIdx) % 5];

                                return (
                                    <div key={dayIdx} className={`p-3 m-1 rounded-lg border border-transparent hover:border-indigo-200 cursor-pointer transition-all ${color} border-l border-gray-100`}>
                                        <p className="font-bold text-xs">{subject}</p>
                                        <p className="text-[10px] opacity-80 mt-1">{teacher}</p>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimetableDashboard;
