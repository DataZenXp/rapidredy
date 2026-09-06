import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Ana Laboratories',
    category: 'Web Dev',
    description: 'A high-precision Next.js web platform for an ISO 9001:2015 certified analytical testing laboratory. Features custom 3D molecular visuals, analytical equipment showcase, and rapid B2B quotation flows.',
    tags: ['Next.js', 'Pharma & Lab', '3D UI', 'ISO Testing'],
    image: '/projects/ana-laboratories.jpg',
    link: 'https://www.analaboratories.co.in/',
    color: 'bg-toon-green',
    challenge: 'Ana Laboratories (established in 1969) required a modern, authoritative digital platform to present their sophisticated testing capabilities across pharmaceuticals, environment, food, and petrochemicals while enabling seamless client quotation requests.',
    solution: [
      'Engineered a high-performance Next.js application with interactive 3D molecular models and equipment inspection workflows.',
      'Designed structured testing directories for HPLC, GC-MS, and ICP-OES instrumentation.',
      'Streamlined B2B quotation inquiries with instant routing to the lab technical team.'
    ],
    impact: [
      { value: '50+', label: 'Years Legacy' },
      { value: '10k+', label: 'Samples Analyzed' },
      { value: '100%', label: 'Compliance Transparency' }
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'GSAP', 'Turbopack']
  },
  {
    id: 2,
    title: 'MSV Freight',
    category: 'Logistics',
    description: 'An international freight forwarding portal engineered for multi-modal logistics. Features a custom Canvas flight-path preloader, global trade lane directory, and instant consignment tracking.',
    tags: ['Logistics', 'Custom Animation', 'Freight', 'SEO'],
    image: '/projects/msv-freight.jpg',
    link: 'https://msvfreight.com/',
    color: 'bg-toon-blue',
    challenge: 'MSV Freight needed to elevate their digital brand to compete with global logistics giants, communicate multi-modal capabilities (Air, Sea, Customs, Warehousing), and provide customers with seamless tracking and quote access.',
    solution: [
      'Built a custom high-frame-rate aircraft flight-path animation that gracefully guides visitors across the platform.',
      'Organized multi-modal logistics services into clear, conversion-focused modules.',
      'Connected shipment tracking APIs and direct WhatsApp dispatch for round-the-clock logistics support.'
    ],
    impact: [
      { value: '25+', label: 'Years Experience' },
      { value: 'Pan-India', label: 'Network Coverage' },
      { value: '24/7', label: 'Logistics Dispatch' }
    ],
    techStack: ['HTML5', 'Vanilla JavaScript', 'Canvas API', 'CSS3 Animations', 'SEO Engine']
  },
  {
    id: 3,
    title: 'Genesis Marketing',
    category: 'Marketing',
    description: 'An authority-driven digital marketing agency portfolio engineered to turn visitors into booked clients. Built with GSAP 3D interactive flip cards, timezone-aware consultation booking, and Firebase analytics.',
    tags: ['Marketing', 'GSAP 3D', 'Booking Engine', 'Branding'],
    image: '/projects/genesis-marketing.jpg',
    link: 'https://www.marketingwithgenesis.com/',
    color: 'bg-toon-purple',
    challenge: 'Genesis required a bold agency website that immediately demonstrates their creative authority, showcases case studies with interactive flair, and automates discovery call scheduling without third-party friction.',
    solution: [
      'Developed 3D flip card service showcases with GSAP and ScrollTrigger animations.',
      'Built an integrated interactive calendar with real-time time-slot calculation and form validation.',
      'Integrated Firebase Analytics and instant lead capture pipelines.'
    ],
    impact: [
      { value: '3x', label: 'Lead Quality' },
      { value: '100%', label: 'Automated Booking' },
      { value: '95+', label: 'Lighthouse Score' }
    ],
    techStack: ['GSAP', 'ScrollTrigger', 'Tailwind CSS', 'Firebase', 'Lucide Icons']
  },
  {
    id: 4,
    title: 'Ekids India',
    category: 'Education',
    description: 'A premier educational coaching portal for Cambridge Checkpoint, IGCSE, and A-Level tutorial classes in Mumbai. Features interactive curriculum guides, achievement matrices, and parent enrollment funnels.',
    tags: ['Education', 'IGCSE Coaching', 'UI/UX', 'EdTech'],
    image: '/projects/ekids-india.jpg',
    link: 'https://ekidsindia.com/',
    color: 'bg-toon-yellow',
    challenge: 'Ekids needed to digitize their 17-year coaching legacy and showcase their exceptional 98% student success rate with a welcoming, modern interface that drives student admissions.',
    solution: [
      'Designed a warm, neo-minimalist brand design system with custom grid patterns and 3D card flips.',
      'Structured comprehensive course breakdowns for Grade 7-8 Checkpoint, IGCSE, and A-Level streams.',
      'Implemented high-conversion parent inquiry forms and animated statistic counters.'
    ],
    impact: [
      { value: '98%', label: 'Success Rate' },
      { value: '1k+', label: 'Students Mentored' },
      { value: '17+', label: 'Years Track Record' }
    ],
    techStack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Lucide Icons', 'FontAwesome']
  },
  {
    id: 5,
    title: 'Farhan Transport',
    category: 'Logistics',
    description: 'A high-velocity React application streamlining logistics. We digitized their entire booking flow, reducing manual entry by 40% and offering real-time fleet tracking.',
    tags: ['React', 'Logistics', 'Web App'],
    image: '/projects/farhan-transport.jpg',
    link: 'https://www.farhantransportservice.com',
    color: 'bg-toon-blue',
    challenge: 'Farhan Transport Service relied on manual phone bookings and paper records, leading to dispatch errors, lost tracking data, and an inability to scale operations efficiently.',
    solution: [
      'Developed a responsive React web application for seamless booking management.',
      'Integrated a real-time tracking dashboard for fleet monitoring.',
      'Automated the dispatch workflow to reduce human error.'
    ],
    impact: [
      { value: '40%', label: 'Less Admin Work' },
      { value: '2x', label: 'Booking Speed' },
      { value: '100%', label: 'Digital Tracking' }
    ],
    techStack: ['React', 'Node.js', 'Google Maps API', 'Tailwind CSS']
  },
  {
    id: 6,
    title: 'Awaaz FM',
    category: 'Mobile App',
    description: 'A dynamic multimedia platform featuring live audio & video streaming, real-time user chat, and interactive stories. A complete social entertainment ecosystem.',
    tags: ['Streaming', 'Video', 'Live Chat'],
    image: '/projects/awaazfm.jpg',
    link: 'https://Awaazfm.in',
    color: 'bg-toon-pink',
    challenge: 'Awaaz FM needed to evolve from standard radio into a visual, interactive platform. They required low-latency video streaming, synchronized live chat, and a "Stories" feature to boost engagement.',
    solution: [
      'Implemented WebRTC for seamless low-latency audio and video broadcasting.',
      'Built a scalable WebSocket infrastructure (Socket.io) to handle high-concurrency live chat.',
      'Developed an ephemeral "Stories" feature for updates and community interaction.'
    ],
    impact: [
      { value: 'Video+Audio', label: 'Dual Mode' },
      { value: 'Real-time', label: 'Chat System' },
      { value: '3x', label: 'User Retention' }
    ],
    techStack: ['WebRTC', 'Socket.io', 'React', 'Node.js']
  },
  {
    id: 7,
    title: 'Karuna Tutorials',
    category: 'Education',
    description: 'A structured digital learning hub. We developed an intuitive class structure using clean HTML/CSS to help students navigate complex curriculums effortlessly.',
    tags: ['HTML', 'Education', 'UI/UX'],
    image: '/projects/karuna-tutorials.jpg',
    link: 'https://www.karunapunjabitutorials.com/',
    color: 'bg-toon-yellow',
    challenge: 'The institution struggled with disorganized offline materials and student inquiries. They needed a centralized digital platform to display courses and class schedules.',
    solution: [
      'Designed a clean, structured class directory using semantic HTML/CSS.',
      'Created an intuitive navigation structure for different subjects and levels.',
      'Implemented a direct inquiry system to capture potential student leads.'
    ],
    impact: [
      { value: '60%', label: 'Inquiry Increase' },
      { value: '24/7', label: 'Information Access' },
      { value: '100%', label: 'Curriculum Visibility' }
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
  }
];

export const featuredProjects: Project[] = [
  projectsData[0], // Ana Laboratories
  projectsData[1], // MSV Freight
  projectsData[2], // Genesis Marketing
  projectsData[3], // Ekids India
  projectsData[4], // Farhan Transport
  projectsData[5]  // Awaaz FM
];

export const projectCategories = ['All', 'Web Dev', 'Logistics', 'Marketing', 'Education', 'Mobile App'];
