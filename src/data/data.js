import { assets } from "../assets/assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { parseExperienceYears, countUniqueClients } from "./dataHelpers";

export const navLinks = {
    about: {
        label: 'About',
        href: '#about'
    },
    skills: {
        label: 'Skills',
        href: '#skills'
    },
    experiences: {
        label: 'Experience',
        href: '#experience'
    },
    projects: {
        label: 'Projects',
        href: '#projects'
    },
    contact: {
        label: 'Contact',
        href: '#contact'
    }
}

export const socialLinks = {
    github: {
        link: 'https://github.com/keilalily',
        icon: FaGithub,
        label: "GitHub"
    },
    linkedin: {
        link: 'https://www.linkedin.com/in/kyla-marie-angeles/',
        icon: FaLinkedin,
        label: "LinkedIn"
    },
    email: {
        link: 'mailto:kylamarieangeles@gmail.com',
        icon: HiOutlineMail,
        label: "Email"
    }
}

export const skillSet = [
    { name: 'JavaScript', icon: assets.jsLogo },
    { name: 'TypeScript', icon: assets.typescriptLogo },

    { name: 'React', icon: assets.reactLogo },
    { name: 'Next.js', icon: assets.nextjsLogo },

    { name: 'Tailwind CSS', icon: assets.tailwindLogo },
    { name: 'Sass', icon: assets.sassLogo },

    { name: 'React Native', icon: assets.reactLogo },

    { name: 'Node.js', icon: assets.nodejsLogo },
    { name: 'Express.js', icon: assets.expressLogo },

    { name: 'MongoDB', icon: assets.mongodbLogo },

    { name: 'Git', icon: assets.gitLogo },
    { name: 'Postman', icon: assets.postmanLogo }
];

export const experiences = [
    {
        title: 'Junior Frontend Developer',
        company: 'Sprintify IT Services Corp',
        year: 'Aug 2026 - Present',
        description: [
            'Build and maintain web interfaces that adapt across devices using modern frontend technologies.',
            'Work with the development team to deliver responsive features and improve application performance.',
        ]
    },
    {
        title: 'Junior Frontend Developer',
        company: 'Parallel Quantum Corp',
        year: 'Oct 2025 - Aug 2026',
        description: [
            'Developed and maintained cross-platform web applications using modern frontend technologies.',
            'Collaborated closely with the team to implement responsive UI and ensure high performance.',
        ]
    },
    {
        title: 'React Native Developer',
        company: 'Numberfit Limited',
        year: 'Jul 2025 - Sep 2025',
        description: [
            'Developed a cross-platform scavenger hunt app for iOS and Android with features like QR code scanning, GPS navigation, age-specific questions, user registration, scoring, and a leaderboard.',
            'Integrated Firebase for backend services and translated Canva designs into functional UI.'
        ]
    },
    {
        title: 'Web Developer Intern',
        company: 'Arcvis Digital Design Services',
        year: 'Jan 2025 - May 2025',
        description: [
            'Built a full-stack website using MongoDB, Express.js, React.js, and Node.js to promote company services.',
            'Developed a custom admin dashboard for managing projects (create, update, delete).',
            'Delivered a responsive, user-friendly design and optimized backend performance.'
        ]
    }
]

export const projects = [
    {
        title: 'Lumora Play',
        description: 'A collection of casual browser games connected by a shared points system. Players can discover games from one dashboard and enjoy quick, replayable rounds.',
        tags: ['React', 'SASS', 'TypeScript'],
        link: 'https://lumora-play.onrender.com/'
    },
    {
        title: 'Arcvis Digital Design Services',
        description: 'A full-stack web app for presenting company services with a custom appointment booking system.',
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
        link: 'https://v2-arcvisdesigns.onrender.com/',
        images: [
            {
                src: '/projects/arcvis/home.webp',
                alt: 'Arcvis client homepage',
                device: 'desktop',
                caption: 'Client homepage'
            },
            {
                src: '/projects/arcvis/book.webp',
                alt: 'Arcvis client booking page',
                device: 'desktop',
                caption: 'Appointment booking'
            },
            {
                src: '',
                alt: 'Arcvis admin dashboard overview',
                device: 'desktop',
                caption: 'Admin dashboard'
            },
            {
                src: '',
                alt: 'Arcvis admin project management screen',
                device: 'desktop',
                caption: 'Project management'
            },
            {
                src: '',
                alt: 'Arcvis client homepage on mobile',
                device: 'phone',
                caption: 'Client mobile view'
            }
        ]
    },
    {
        title: 'PC Bulacan Rewards',
        description: 'A rewards management website where customers can check points and redeem items, with an admin dashboard for managing users and rewards.',
        tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
        link: 'https://rewards-pcb.vercel.app/'
    },
    {
        title: 'Maths Scavenger Hunt App',
        description: 'A mobile scavenger hunt app where players solve math problems to unlock clues and progress through locations.',
        tags: ['React Native', 'Firebase'],
        images: [
            {
                src: '/projects/scavenger-hunt/home.webp',
                alt: 'Maths Scavenger Hunt home screen',
                device: 'phone',
                caption: 'Home'
            },
            {
                src: '/projects/scavenger-hunt/scan.webp',
                alt: 'Maths Scavenger Hunt scanning screen',
                device: 'phone',
                caption: 'Scanner'
            },
            {
                src: '/projects/scavenger-hunt/map.webp',
                alt: 'Maths Scavenger Hunt map screen',
                device: 'phone',
                caption: 'Map'
            },
            {
                src: '/projects/scavenger-hunt/age.webp',
                alt: 'Maths Scavenger Hunt age selection screen',
                device: 'phone',
                caption: 'Age selection'
            },
            {
                src: '/projects/scavenger-hunt/question.webp',
                alt: 'Maths Scavenger Hunt math question screen',
                device: 'phone',
                caption: 'Math question'
            }
        ]
    },
    {
        title: 'Realtor Website',
        description: 'A responsive real estate website redesign created as a technical assessment for a job application.',
        tags: ['React', 'Tailwind CSS'],
        link: 'https://marci-metzger-theta.vercel.app/'
    },
    {
        title: 'Space Tourism',
        description: 'A responsive multi-page website developed based on a Frontend Mentor design challenge.',
        tags: ['React', 'Tailwind CSS'],
        link: 'https://spacetourism-murex.vercel.app/'
    },
    {
        title: 'IMPRINTA',
        description: 'A full-stack web app for managing printing services. It features secure auth and a user-friendly interface, rated 94% in usability tests.',
        tags: ['Flutter', 'Node.js', 'Firebase'],
        link: 'https://youtu.be/SCuGbweG-p4?si=vQuE7eh7H7SOVtU7'
    },
]

export const stats = {
    projects: {
        stat: projects.length,
        label: "Projects Built"
    },
    experiences: {
        stat: parseExperienceYears(experiences),
        label: "Years Experience"
    },
    technologies: {
        stat: skillSet.length,
        label: "Technologies"
    },
    clients: {
        stat: countUniqueClients(experiences),
        label: "Clients Served"
    },
}