// ==========================================================================
// REAL-TIME EXPERT SESSION BOOKING SYSTEM (BOOKINGHUB)
// MOCK DATA STORE: Categories, Verified Experts, Services, & Demo Bookings
// ==========================================================================

const MOCK_CATEGORIES = [
  { id: 'all', name: 'All Domains', icon: '🌐' },
  { id: 'tech', name: 'IT & Cloud Architecture', icon: '💻' },
  { id: 'health', name: 'Healthcare & Clinical', icon: '🩺' },
  { id: 'finance', name: 'Startup & Finance', icon: '📈' },
  { id: 'legal', name: 'Legal & Compliance', icon: '⚖️' },
  { id: 'academic', name: 'EdTech & Research', icon: '🎓' }
];

const MOCK_EXPERTS = [
  {
    id: 'exp-1',
    name: 'Dr. Aarav Sharma',
    title: 'Senior Clinical Specialist & Tele-Health Director',
    organization: 'Apollo Speciality Care, Delhi-NCR',
    category: 'health',
    categoryLabel: 'Healthcare & Clinical',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face',
    rating: 4.95,
    reviewsCount: 142,
    experienceYears: 12,
    location: 'Delhi-NCR, India',
    mode: '1:1 Google Meet / In-Clinic',
    hourlyRate: 999,
    badge: 'Top Rated Doctor',
    verified: true,
    bio: 'Board-certified medical consultant with over 12 years of clinical experience in preventative medicine, health diagnostics, and lifestyle counseling. Regularly leads telemedicine workshops across premier institutions.',
    specialties: ['Preventative Healthcare', 'Diagnostic Reviews', 'Lifestyle Counseling', 'Tele-Consultation'],
    services: [
      { id: 'srv-1', title: '1:1 Clinical Assessment', duration: '45 mins', price: 999, desc: 'Personalized health evaluation, lab report review, and customized prescription advisory.' },
      { id: 'srv-2', title: 'Comprehensive Second Opinion', duration: '60 mins', price: 1499, desc: 'In-depth diagnostic review of historical medical records and surgical advisories.' }
    ],
    availableSlots: {
      'Today': [
        { time: '10:00 AM - 10:45 AM', status: 'available' },
        { time: '11:30 AM - 12:15 PM', status: 'booked' },
        { time: '02:00 PM - 02:45 PM', status: 'available' },
        { time: '04:30 PM - 05:15 PM', status: 'available' }
      ],
      'Tomorrow': [
        { time: '09:30 AM - 10:15 AM', status: 'available' },
        { time: '11:00 AM - 11:45 AM', status: 'available' },
        { time: '03:00 PM - 03:45 PM', status: 'booked' },
        { time: '05:30 PM - 06:15 PM', status: 'available' }
      ],
      'Day 3': [
        { time: '10:00 AM - 10:45 AM', status: 'available' },
        { time: '01:30 PM - 02:15 PM', status: 'available' },
        { time: '04:00 PM - 04:45 PM', status: 'available' }
      ]
    },
    reviews: [
      { user: 'Rohit Verma (Health Lead)', rating: 5, date: 'Yesterday', comment: 'Dr. Sharma gave crystal clear guidance on my diagnostics report. Very compassionate and professional.' },
      { user: 'Pooja Singhal', rating: 5, date: '3 days ago', comment: 'Booked instantly and the session started exactly on time. Seamless experience!' }
    ]
  },
  {
    id: 'exp-2',
    name: 'Rohan Verma',
    title: 'Principal Cloud Architect & Full-Stack Lead',
    organization: 'CloudScale Tech / ex-Amazon AWS',
    category: 'tech',
    categoryLabel: 'IT & Cloud Architecture',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
    rating: 4.98,
    reviewsCount: 218,
    experienceYears: 11,
    location: 'Bengaluru / Remote',
    mode: 'Screen Share & Live Code Review',
    hourlyRate: 1200,
    badge: 'Cloud Expert',
    verified: true,
    bio: 'Distinguished Cloud Architect with 11+ years guiding high-growth startups and enterprise teams on AWS/GCP Kubernetes, microservices architecture, Node.js scalability, and React frontend performance optimization.',
    specialties: ['AWS / GCP Cloud', 'System Design', 'React / Next.js Performance', 'Microservices'],
    services: [
      { id: 'srv-3', title: 'System Architecture & Scalability', duration: '60 mins', price: 1200, desc: 'Deep-dive review of system architecture, database bottleneck resolution, and microservice decoupling.' },
      { id: 'srv-4', title: '1:1 Technical Career & Project Review', duration: '45 mins', price: 800, desc: 'Portfolio review, capstone project architectural audit, and FAANG interview preparation roadmap.' }
    ],
    availableSlots: {
      'Today': [
        { time: '02:00 PM - 03:00 PM', status: 'booked' },
        { time: '04:00 PM - 05:00 PM', status: 'available' },
        { time: '06:30 PM - 07:30 PM', status: 'available' },
        { time: '08:00 PM - 09:00 PM', status: 'available' }
      ],
      'Tomorrow': [
        { time: '11:00 AM - 12:00 PM', status: 'available' },
        { time: '03:00 PM - 04:00 PM', status: 'available' },
        { time: '07:00 PM - 08:00 PM', status: 'booked' }
      ],
      'Day 3': [
        { time: '02:30 PM - 03:30 PM', status: 'available' },
        { time: '05:00 PM - 06:00 PM', status: 'available' }
      ]
    },
    reviews: [
      { user: 'Vrinda Jindal (Tech Founder)', rating: 5, date: '2 days ago', comment: 'Rohan solved our real-time slot synchronization logic in under 30 minutes! Exceptional mentor.' },
      { user: 'Aman Saxena', rating: 5, date: 'Last week', comment: 'Super clear explanation of distributed caching and API gateway patterns.' }
    ]
  },
  {
    id: 'exp-3',
    name: 'Adv. Priya Malhotra',
    title: 'Senior Corporate Attorney & IP Specialist',
    organization: 'Malhotra & Partners Legal Chambers',
    category: 'legal',
    categoryLabel: 'Legal & Compliance',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
    rating: 4.88,
    reviewsCount: 96,
    experienceYears: 9,
    location: 'New Delhi, India',
    mode: 'Confidential 1:1 Video Consultation',
    hourlyRate: 1800,
    badge: 'Legal Advisory',
    verified: true,
    bio: 'Advocate practicing at Delhi High Court specializing in technology contracts, intellectual property protection, startup incorporation compliance, and venture capital shareholder agreements.',
    specialties: ['Startup Legal', 'IP & Trademark Rights', 'Technology Contracts', 'Regulatory Compliance'],
    services: [
      { id: 'srv-5', title: 'Startup Legal Structure Consultation', duration: '60 mins', price: 1800, desc: 'Entity structuring, founders agreement drafting, IP rights ownership, and investor term sheet review.' },
      { id: 'srv-6', title: 'Contract & Non-Disclosure Audit', duration: '45 mins', price: 1400, desc: 'Thorough review of client service agreements, employment contracts, and NDA clauses.' }
    ],
    availableSlots: {
      'Today': [
        { time: '11:00 AM - 12:00 PM', status: 'available' },
        { time: '03:30 PM - 04:30 PM', status: 'available' }
      ],
      'Tomorrow': [
        { time: '10:30 AM - 11:30 AM', status: 'booked' },
        { time: '02:00 PM - 03:00 PM', status: 'available' },
        { time: '04:30 PM - 05:30 PM', status: 'available' }
      ],
      'Day 3': [
        { time: '11:00 AM - 12:00 PM', status: 'available' },
        { time: '03:00 PM - 04:00 PM', status: 'available' }
      ]
    },
    reviews: [
      { user: 'Siddharth Rao', rating: 5, date: '4 days ago', comment: 'Priya identified critical clauses in our vendor contract that saved our company lakhs.' },
      { user: 'Megha Gupta', rating: 5, date: '1 week ago', comment: 'High competence and fast turnaround time on legal advice.' }
    ]
  },
  {
    id: 'exp-4',
    name: 'Neha Kapoor, CA',
    title: 'Chartered Accountant & Financial Strategist',
    organization: 'Apex Financial Advisors & Tax Consultants',
    category: 'finance',
    categoryLabel: 'Startup & Finance',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
    rating: 4.92,
    reviewsCount: 165,
    experienceYears: 8,
    location: 'Gurugram / Online',
    mode: '1:1 Video Strategy Session',
    hourlyRate: 1500,
    badge: 'Finance Mentor',
    verified: true,
    bio: 'Fellow Chartered Accountant advising funded startups, high-net-worth individuals, and MSMEs on financial model audits, valuation methodologies, direct tax optimization, and investor pitch preparation.',
    specialties: ['Startup Valuation', 'Tax Strategy', 'Financial Modeling', 'GST & Corporate Audits'],
    services: [
      { id: 'srv-7', title: 'Financial Modeling & Valuation', duration: '60 mins', price: 2000, desc: 'DCF valuation, revenue projection model evaluation, and unit economics validation.' },
      { id: 'srv-8', title: 'Tax Planning & Compliance Audit', duration: '45 mins', price: 1500, desc: 'Corporate tax optimization, ESOP tax advisory, and GST deduction review.' }
    ],
    availableSlots: {
      'Today': [
        { time: '12:00 PM - 12:45 PM', status: 'available' },
        { time: '03:00 PM - 03:45 PM', status: 'available' },
        { time: '05:30 PM - 06:15 PM', status: 'booked' }
      ],
      'Tomorrow': [
        { time: '11:00 AM - 11:45 AM', status: 'available' },
        { time: '01:30 PM - 02:15 PM', status: 'available' },
        { time: '04:00 PM - 04:45 PM', status: 'available' }
      ],
      'Day 3': [
        { time: '10:00 AM - 10:45 AM', status: 'available' },
        { time: '02:30 PM - 03:15 PM', status: 'available' }
      ]
    },
    reviews: [
      { user: 'Vikrant Chadha', rating: 5, date: '3 days ago', comment: 'Neha helped us structure our seed funding financial statements cleanly. Highly recommend!' },
      { user: 'Kavita Joshi', rating: 5, date: 'Last week', comment: 'Clear, crisp tax planning advice tailored to tech consultants.' }
    ]
  },
  {
    id: 'exp-5',
    name: 'Prof. Vikram Singh',
    title: 'Academic Advisor & Research Mentor',
    organization: 'Centre for Advanced Computing & EdTech',
    category: 'academic',
    categoryLabel: 'EdTech & Research',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    rating: 4.96,
    reviewsCount: 310,
    experienceYears: 16,
    location: 'Delhi-NCR, India',
    mode: 'Academic Consultation & Thesis Review',
    hourlyRate: 800,
    badge: 'Research Guide',
    verified: true,
    bio: 'Distinguished academician and research supervisor with over 16 years of experience guiding postgraduate scholars on capstone architecture, paper publication in IEEE/Springer, and research methodology.',
    specialties: ['Project Structuring', 'Research Methodology', 'IEEE Formatting', 'Viva Preparation'],
    services: [
      { id: 'srv-9', title: 'Capstone Project Architecture Review', duration: '60 mins', price: 800, desc: 'Detailed evaluation of project objectives, DFD/UML diagrams, methodology, and software engineering rigor.' },
      { id: 'srv-10', title: 'Research Paper Advisory', duration: '45 mins', price: 1000, desc: 'Review of literature review, problem formulation, and citation formatting for publication.' }
    ],
    availableSlots: {
      'Today': [
        { time: '03:00 PM - 04:00 PM', status: 'available' },
        { time: '05:00 PM - 06:00 PM', status: 'available' },
        { time: '06:30 PM - 07:30 PM', status: 'booked' }
      ],
      'Tomorrow': [
        { time: '10:00 AM - 11:00 AM', status: 'available' },
        { time: '12:00 PM - 01:00 PM', status: 'available' },
        { time: '04:00 PM - 05:00 PM', status: 'available' }
      ],
      'Day 3': [
        { time: '09:30 AM - 10:30 AM', status: 'available' },
        { time: '02:00 PM - 03:00 PM', status: 'available' }
      ]
    },
    reviews: [
      { user: 'Tushar Sharma (Research Fellow)', rating: 5, date: '1 day ago', comment: 'Prof. Vikram gave invaluable feedback on our project flow and distributed scheduling patterns!' },
      { user: 'Ananya Roy', rating: 5, date: '4 days ago', comment: 'Patient, structured, and insightful academic guidance.' }
    ]
  },
  {
    id: 'exp-6',
    name: 'Ananya Deshmukh',
    title: 'Lead Product Designer & UX Architect',
    organization: 'DesignCraft Studio / ex-Swiggy',
    category: 'tech',
    categoryLabel: 'IT & Cloud Architecture',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
    rating: 4.91,
    reviewsCount: 112,
    experienceYears: 7,
    location: 'Pune / Remote',
    mode: 'Figma Live Screen Share',
    hourlyRate: 1100,
    badge: 'UX Mentor',
    verified: true,
    bio: 'Lead UX/UI Designer crafting high-converting, accessible user interfaces. Mentors aspiring designers and frontend developers on design systems, micro-interactions, responsive grids, and usability testing.',
    specialties: ['Figma Design Systems', 'UX Usability Audits', 'Mobile-First Grids', 'Design-to-Code'],
    services: [
      { id: 'srv-11', title: '1:1 UI/UX Portfolio Audit', duration: '45 mins', price: 900, desc: 'Comprehensive feedback on Figma wireframes, typography tokens, visual hierarchy, and accessibility.' },
      { id: 'srv-12', title: 'Design System Masterclass', duration: '60 mins', price: 1300, desc: 'Structuring atomic components, responsive auto-layout, and token synchronization for frontend teams.' }
    ],
    availableSlots: {
      'Today': [
        { time: '01:00 PM - 01:45 PM', status: 'available' },
        { time: '04:00 PM - 04:45 PM', status: 'available' }
      ],
      'Tomorrow': [
        { time: '02:00 PM - 02:45 PM', status: 'available' },
        { time: '05:30 PM - 06:15 PM', status: 'available' }
      ],
      'Day 3': [
        { time: '11:00 AM - 11:45 AM', status: 'available' },
        { time: '03:00 PM - 03:45 PM', status: 'available' }
      ]
    },
    reviews: [
      { user: 'Kunal Shinde', rating: 5, date: '3 days ago', comment: 'Ananya transformed our mobile views into an ultra-clean, intuitive interface!' },
      { user: 'Simran Walia', rating: 5, date: '1 week ago', comment: 'Incredible attention to visual details and spacing tokens.' }
    ]
  }
];

// Initial default demo bookings in case localStorage is empty
const INITIAL_DEMO_BOOKINGS = [
  {
    id: 'BK-2026-9041',
    expertId: 'exp-2',
    expertName: 'Rohan Verma',
    expertTitle: 'Principal Cloud Architect',
    expertAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
    serviceTitle: 'System Architecture & Scalability',
    dateText: 'Tomorrow',
    timeSlot: '04:00 PM - 05:00 PM',
    price: 1200,
    status: 'Confirmed',
    meetingLink: 'https://meet.google.com/exp-meet-9041',
    clientName: 'Vrinda Jindal',
    clientEmail: 'vrinda.jindal@example.com',
    clientPhone: '9876543210',
    topic: 'Consultation on Real-Time Slot Synchronization & Scalability for Frontend Platform',
    createdAt: '2026-09-24T10:00:00Z'
  },
  {
    id: 'BK-2026-8812',
    expertId: 'exp-5',
    expertName: 'Prof. Vikram Singh',
    expertTitle: 'Academic Advisor & Research Mentor',
    expertAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    serviceTitle: 'Capstone Project Architecture Review',
    dateText: 'Day 3',
    timeSlot: '10:00 AM - 11:00 AM',
    price: 800,
    status: 'Confirmed',
    meetingLink: 'https://meet.google.com/exp-meet-8812',
    clientName: 'Tushar Sharma',
    clientEmail: 'tushar.sharma@example.com',
    clientPhone: '9812345678',
    topic: 'Project Review on Real-Time Web Systems and Responsive UI Architecture',
    createdAt: '2026-09-23T14:30:00Z'
  },
  {
    id: 'BK-2026-7520',
    expertId: 'exp-1',
    expertName: 'Dr. Aarav Sharma',
    expertTitle: 'Senior Clinical Specialist',
    expertAvatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face',
    serviceTitle: '1:1 Clinical Assessment',
    dateText: 'Completed',
    timeSlot: '10:00 AM - 10:45 AM',
    price: 999,
    status: 'Completed',
    meetingLink: 'https://meet.google.com/exp-past-session',
    clientName: 'Vrinda Jindal',
    clientEmail: 'vrinda.jindal@example.com',
    clientPhone: '9876543210',
    topic: 'Preventative Wellness & Lifestyle Consultation',
    createdAt: '2026-09-20T11:00:00Z'
  }
];
