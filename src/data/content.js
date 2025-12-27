export const content = {
    en: {
        nav: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            education: "Education",
            contact: "Contact",
        },
        hero: {
            greeting: "Hello, I'm",
            name: "Yassine Gharbi",
            title: "Software Engineering Student",
            subtitle: "Building modern web solutions with clean code and creative design.",
            cta: "View My Work",
            contact: "Get in Touch",
        },
        about: {
            title: "About Me",
            description: "I am a Computer Science student at Faculté des Sciences de Tunis (FST), currently pursuing a degree in Software Engineering. I am passionate about web development and eager to join a dynamic team for my End of Studies Internship (PFE). My goal is to learn, grow, and make an impact through technology.",
        },
        skills: {
            title: "Technical Skills",
            languages: "Languages",
            frameworks: "Frameworks & Libraries",
            tools: "Tools & Platforms",
            data: {
                languages: ["HTML", "CSS", "SQL", "Python", "C", "Java", "JavaScript"],
                frameworks: ["React.js", "Spring Boot", "Node.js", "Express.js", "JEE (Java EE)"],
                tools: ["Git", "MySQL", "SQL Server", "Power BI", "SSIS"],
            },
        },
        projects: {
            title: "Projects",
            viewCode: "View Code",
            items: [
                {
                    id: "saga",
                    title: "SAGA – Automated Absence Management System",
                    description: "Team project (4 members) composed of multiple modules (Administration, Teacher, Student). I exclusively developed the Teacher module (frontend and backend). Features include dynamic weekly scheduling, session retrieval via API, automatic student display, and a Present/Absent system with real-time database updates.\n\n• Technical Challenges: React state management, Express API design, and real-time data synchronization.\n• Technologies: React.js, Express.js, MySQL, Passport.js.",
                    tech: ["React.js", "Express.js", "MySQL", "Passport.js"],
                    link: "https://github.com/Ahmed-BenHajAmor/pfa",
                },
                {
                    id: "nike",
                    title: "Nike Clone",
                    description: "A modern e-commerce clone of the Nike website built to master Tailwind CSS and React. Features a responsive design, product showcase, and a clean UI.",
                    tech: ["React.js", "Tailwind CSS"],
                    link: "https://github.com/Raylhm/nike-clone",
                },
            ],
        },
        education: {
            title: "Education",
            degree: "Licence in Computer Science – Software Engineering",
            university: "Faculté des Sciences de Tunis (FST)",
            year: "Expected Graduation: 2026",
            coursework: "Relevant Coursework: Object-Oriented Programming, Data Structures, Algorithms, Database Design, JEE (Java EE), Mobile Development (Android), Cloud & Virtualization, IT Security, SOA Architecture & Web Services, Big Data, Machine Learning, Distributed Application Development.",
        },
        contact: {
            title: "Contact Me",
            text: "I am currently open to internship opportunities (PFE). Feel free to reach out!",
            email: "yassine.ghrb@gmail.com",
            phone: "+216 23634036",
            location: "Ben Arous, Tunisia",
        },
        footer: {
            rights: "All rights reserved.",
            built: "Built with React & Vite",
        },
    },
    fr: {
        nav: {
            about: "À propos",
            skills: "Compétences",
            projects: "Projets",
            education: "Éducation",
            contact: "Contact",
        },
        hero: {
            greeting: "Bonjour, je suis",
            name: "Yassine Gharbi",
            title: "Étudiant en Génie Logiciel",
            subtitle: "Création de solutions web modernes avec un code propre et un design créatif.",
            cta: "Voir mes projets",
            contact: "Me contacter",
        },
        about: {
            title: "À propos",
            description: "Je suis étudiant en informatique à la Faculté des Sciences de Tunis (FST), actuellement en licence de Génie Logiciel. Passionné par le développement web, je suis à la recherche d'un stage de fin d'études (PFE) au sein d'une équipe dynamique. Mon objectif est d'apprendre, d'évoluer et d'avoir un impact grâce à la technologie.",
        },
        skills: {
            title: "Compétences Techniques",
            languages: "Langages",
            frameworks: "Frameworks et Bibliothèques",
            tools: "Outils et Plateformes",
            data: {
                languages: ["HTML", "CSS", "SQL", "Python", "C", "Java", "JavaScript"],
                frameworks: ["React.js", "Spring Boot", "Node.js", "Express.js", "JEE (Java EE)"],
                tools: ["Git", "MySQL", "SQL Server", "Power BI", "SSIS"],
            },
        },
        projects: {
            title: "Projets",
            viewCode: "Voir le code",
            items: [
                {
                    id: "saga",
                    title: "SAGA – Système Automatisé de Gestion des Absences",
                    description: "Projet réalisé en équipe (4 membres), composé de plusieurs modules (Administration, Enseignant, Étudiant). J’ai développé exclusivement le module Enseignant en frontend et backend : emploi du temps hebdomadaire dynamique, récupération des séances via API, affichage automatique des étudiants et système Présent/Absent avec mise à jour en base de données.\n\n• Défis techniques : gestion d’état (React), design d’API Express et synchronisation des données en temps réel.\n• Technologies utilisées : React.js (frontend), Express.js (backend), MySQL (base de données), Passport.js (authentification).",
                    tech: ["React.js", "Express.js", "MySQL", "Passport.js"],
                    link: "https://github.com/Ahmed-BenHajAmor/pfa",
                },
                {
                    id: "nike",
                    title: "Nike Clone",
                    description: "Un clone moderne du site e-commerce Nike, créé pour maîtriser Tailwind CSS et React. Dispose d'un design responsive, d'une vitrine de produits et d'une interface utilisateur épurée.",
                    tech: ["React.js", "Tailwind CSS"],
                    link: "https://github.com/Raylhm/nike-clone",
                },
            ],
        },
        education: {
            title: "Formation",
            degree: "Licence en Informatique – Génie Logiciel",
            university: "Faculté des Sciences de Tunis (FST)",
            year: "Diplôme prévu : 2026",
            coursework: "Cours pertinents : Programmation orientée objet, structures de données, algorithmique, Conception de bases de données, JEE (Java EE), Développement mobile (Android), Cloud et virtualisation, Sécurité informatique, Architecture SOA et Services Web, Big Data, Machine Learning, Développement applicatif réparti.",
        },
        contact: {
            title: "Me Contacter",
            text: "Je suis actuellement ouvert aux opportunités de stage (PFE). N'hésitez pas à me contacter !",
            email: "yassine.ghrb@gmail.com",
            phone: "+216 23634036",
            location: "Ben Arous, Tunisie",
        },
        footer: {
            rights: "Tous droits réservés.",
            built: "Créé avec React & Vite",
        },
    },
};
