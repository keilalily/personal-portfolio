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
        company: 'Parallel Quantum Corp',
        year: 'Oct 2025 - Present',
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
        title: 'Arcvis Digital Design Services',
        description: 'A full-stack web app for presenting company services with a custom appointment booking system. Redesigned a year later with a premium navy-and-gold identity, removing all UI libraries (MUI, Swiper) in favor of fully custom components.',
        year: 'Jan 2025 — Apr 2026',
        tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
        link: 'https://v2-arcvisdesigns.onrender.com/',
        linkV1: 'https://arcvisdesigns.onrender.com/',
    },
    {
        title: 'Memory Game',
        description: 'A responsive card matching game where players flip tiles to find matching pairs and complete the board.',
        year: 'Oct 2025',
        tags: ['React', 'SASS'],
        link: 'https://memory-game-seven-ruby.vercel.app/'
    },
    // {
    //     title: 'PC Bulacan Rewards',
    //     description: 'A rewards management website where customers can check points and redeem items, with an admin dashboard for managing users and rewards.',
    //     year: 'Aug 2025 - Sep 2025',
    //     tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    //     link: 'https://rewards-pcb.vercel.app/'
    // },
    {
        title: 'Maths Scavenger Hunt App',
        description: 'A mobile scavenger hunt app where players solve math problems to unlock clues and progress through locations.',
        year: 'Aug 2025 - Sep 2025',
        tags: ['React Native', 'Firebase'],
        images: [
            '/projects/scavenger-hunt/home.webp',
            '/projects/scavenger-hunt/scan.webp',
            '/projects/scavenger-hunt/map.webp',
            '/projects/scavenger-hunt/age.webp',
            '/projects/scavenger-hunt/question.webp'
        ]
    },
    {
        title: 'Realtor Website',
        description: 'A responsive real estate website redesign created as a technical assessment for a job application.',
        year: 'Aug 2025',
        tags: ['React', 'Tailwind CSS'],
        link: 'https://marci-metzger-theta.vercel.app/'
    },
    {
        title: 'Tic-Tac-Toe Game',
        description: 'A simple, modern Tic-Tac-Toe game that lets players choose X or O, track their score, and reset the board.',
        year: 'Jul 2025',
        tags: ['Next.js', 'Tailwind CSS'],
        link: 'https://tic-tac-toe-game-ecru-kappa.vercel.app/'
    },
    {
        title: 'Country Quiz Master',
        description: 'A responsive quiz app built with React and Tailwind CSS. It uses the Rest Countries API to generate flag, capital, and continent questions with score tracking and answer feedback.',
        year: 'Jun 2025',
        tags: ['React', 'Tailwind CSS'],
        link: 'https://country-quiz-master-phi.vercel.app/'
    },
    {
        title: 'Space Tourism',
        description: 'A responsive multi-page website developed based on a Frontend Mentor design challenge.',
        year: 'Apr 2025',
        tags: ['React', 'Tailwind CSS'],
        link: 'https://spacetourism-murex.vercel.app/'
    },
    {
        title: 'IMPRINTA',
        description: 'A full-stack web app for managing printing services. It features secure auth and a user-friendly interface, rated 94% in usability tests.',
        year: 'May 2024 - Dec 2024',
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