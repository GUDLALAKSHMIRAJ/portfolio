import blockchainPdf from "../../assets/blockchain.pdf";
import mernPdf from "../../assets/MERN-Accommodation-Listing-Platform.pdf";
import tenderPdf from "../../assets/Tender_Management_System.pdf";

const project = [
    {
        name: "Blockchain-Based Healthcare Data Security System",
        logo: "https://i.ibb.co/r41nZkd/image.png",
        briefDesc: "Secure blockchain-based healthcare data management system.",
        desc: [
            "Developed a blockchain-based healthcare data management system ensuring secure and tamper-proof storage using SHA-256 hashing.",
            "Implemented patient record creation, validation, and block linking to maintain transparency, integrity, and immutability of medical data.",
            "Designed role-based access control for doctors and patients to improve secure information sharing without central dependency.",
            "Integrated cryptographic hashing mechanisms to prevent unauthorized data modifications.",
            "Built backend services using Python and Flask to handle block validation and transaction processing.",
            "Focused on enhancing healthcare data privacy and decentralized record management."
        ],
        tech: ["Blockchain", "SHA-256", "Cryptography", "Python", "Flask"],
        githubLink: "https://github.com/GUDLALAKSHMIRAJ/BlockChain-Based-HealthCare-Sytem",
        liveLink: "",
        previewPdf: blockchainPdf
        
    },
    {
        name: "MERN Accommodation Listing Platform",
        logo: "https://i.ibb.co/r41nZkd/image.png",
        briefDesc: "Full-stack accommodation booking and listing platform built with MERN stack.",
        desc: [
            "Built a full-stack accommodation listing platform with secure user authentication and session management using Passport.js and MongoStore.",
            "Implemented complete CRUD operations for property listings along with review and rating functionality.",
            "Designed RESTful APIs, controllers, middleware, and MongoDB schemas using Mongoose for structured data handling.",
            "Integrated dynamic EJS components and category-based filtering for enhanced user experience.",
            "Ensured secure session persistence and authorization using authentication strategies.",
            "Optimized database queries and backend logic for scalable performance."
        ],
        tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Passport.js", "JavaScript"],
        githubLink: "https://github.com/GUDLALAKSHMIRAJ/MERN",
        liveLink: "",
        previewPdf: mernPdf
    },
    {
        name: "Tender Management System",
        logo: "https://i.ibb.co/r41nZkd/image.png",
        briefDesc: "Web-based system for digital tender submission and management.",
        desc: [
            "Developed a centralized web-based platform for vendors to view, submit, and manage tenders digitally.",
            "Implemented frontend using HTML, CSS, and Bootstrap with responsive design principles.",
            "Built backend using Java, J2EE, JSP, and JDBC with MySQL for efficient data storage and retrieval.",
            "Automated report generation for awarded tenders to enhance transparency and administrative efficiency.",
            "Integrated database connectivity with dynamic web components for seamless operations.",
            "Focused on improving workflow efficiency and reducing manual tender processing."
        ],
        tech: ["Java", "J2EE", "JSP", "JDBC", "MySQL", "Bootstrap", "HTML", "CSS"],
        githubLink: "https://github.com/GUDLALAKSHMIRAJ/Tender-Management-System",
        liveLink: "",
        previewPdf: tenderPdf
    }
];

export { project };