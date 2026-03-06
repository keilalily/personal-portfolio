import { assets } from "../assets/assets";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
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
        icon: FaGithub
    },
    linkedin: {
        link: 'https://www.linkedin.com/in/kyla-marie-angeles/',
        icon: FaLinkedin
    },
    email: {
        link: 'mailto:kylamarieangeles@gmail.com',
        icon: HiOutlineMail
    }
}

export const skillSet = [
    {
        name: 'React',
        icon: assets.reactLogo
    },
    {
        name: 'Next.js',
        icon: assets.nextjsLogo
    },
    {
        name: 'Tailwind CSS',
        icon: assets.tailwindLogo
    },
    {
        name: 'JavaScript',
        icon: assets.jsLogo
    },
    {
        name: 'Node.js',
        icon: assets.nodejsLogo
    },
    {
        name: 'MongoDB',
        icon: assets.mongodbLogo
    }
];

export const experiences = [
    {
        title: 'Junior Frontend Developer',
        company: 'Parallel Quantum',
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
        title: 'Tic-Tac-Toe Game',
        description: 'A simple, modern Tic-Tac-Toe game built with Next.js 14 App Router, Tailwind CSS, and shadcn/ui. It lets players choose X or O, track their score, and reset the board.',
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
        title: 'Arcvis Digital Design Services Website',
        description: 'A full-stack web application built to present company services and projects. Includes a custom appointment booking system to schedule meetings directly with the owner.',
        year: 'Jan 2025 - May 2025',
        tags: ['React', 'Node.js', 'MongoDB'],
        link: 'https://arcvisdesigns.onrender.com/'
    },
    {
        title: 'Space Tourism Website',
        description: 'A responsive multi-page website developed based on a Frontend Mentor design challenge.',
        year: 'Apr 2025',
        tags: ['React', 'Tailwind CSS'],
        link: 'https://keilalily.github.io/fm-space-tourism-website/'
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