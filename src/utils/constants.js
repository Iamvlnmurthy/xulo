// Indian Localization Constants

export const CURRENCY_SYMBOL = '₹';

export const ACADEMIC_BOARDS = [
    { id: 'cbse', name: 'CBSE (Central Board of Secondary Education)' },
    { id: 'ts-state', name: 'Telangana State Board (SSC)' },
    { id: 'ib', name: 'IB (International Baccalaureate)' },
    { id: 'icse', name: 'ICSE (Indian Certificate of Secondary Education)' }
];

export const GRADES = {
    'cbse': [
        'Playgroup', 'Nursery', 'LKG', 'UKG',
        'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
        'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
        'Class 11 (Science)', 'Class 11 (Commerce)', 'Class 11 (Humanities)',
        'Class 12 (Science)', 'Class 12 (Commerce)', 'Class 12 (Humanities)'
    ],
    'ts-state': [
        'Playgroup', 'Nursery', 'LKG', 'UKG',
        'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
        'Class 6', 'Class 7', 'Class 8', 'Class 9', 'SSC (Class 10)',
        'Inter 1st Year (MPC)', 'Inter 1st Year (BiPC)', 'Inter 1st Year (CEC)', 'Inter 1st Year (MEC)',
        'Inter 2nd Year (MPC)', 'Inter 2nd Year (BiPC)', 'Inter 2nd Year (CEC)', 'Inter 2nd Year (MEC)'
    ],
    'ib': [
        'PYP Early Years', 'PYP 1', 'PYP 2', 'PYP 3', 'PYP 4', 'PYP 5',
        'MYP 1', 'MYP 2', 'MYP 3', 'MYP 4', 'MYP 5',
        'DP 1', 'DP 2'
    ],
    'default': [
        'Playgroup', 'Nursery', 'LKG', 'UKG',
        'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
        'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
        'Class 11', 'Class 12'
    ]
};

export const SUBJECTS = {
    'cbse': ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi', 'Computer Science', 'Sanskrit'],
    'ts-state': ['Telugu', 'Hindi', 'English', 'Mathematics', 'Physical Science', 'Biological Science', 'Social Studies'],
    'ib': ['Language & Literature', 'Language Acquisition', 'Individuals & Societies', 'Sciences', 'Mathematics', 'Arts'],
    'default': ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Second Language']
};
