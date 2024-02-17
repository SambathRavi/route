import { CourseCard } from "./AllCourses"

export default function CyberSecurityCourses() {


    const course = [
        {
            "id": 1,
            "name": "Introduction to Cyber Security",
            "image": "https://picsum.photos/333",
            "description": "Gain a foundational understanding of cyber security concepts and principles. Learn about threats, vulnerabilities, and risk management strategies."
        },
        {
            "id": 2,
            "name": "Ethical Hacking and Penetration Testing",
            "image": "https://picsum.photos/334",
            "description": "Learn ethical hacking techniques to identify and mitigate security vulnerabilities. Explore penetration testing methodologies and tools."
        },
        {
            "id": 3,
            "name": "Network Security Fundamentals",
            "image": "https://picsum.photos/335",
            "description": "Explore fundamental concepts of network security. Learn to secure networks, detect intrusions, and protect against cyber attacks."
        },
        {
            "id": 4,
            "name": "Cyber Threat Intelligence",
            "image": "https://picsum.photos/336",
            "description": "Learn to analyze and interpret cyber threat intelligence data. Identify emerging threats, assess risks, and implement proactive security measures."
        },
        {
            "id": 5,
            "name": "Cryptographic Principles",
            "image": "https://picsum.photos/337",
            "description": "Understand cryptographic principles and techniques. Learn about encryption algorithms, key management, and cryptographic protocols."
        },
        {
            "id": 6,
            "name": "Security Operations and Incident Response",
            "image": "https://picsum.photos/338",
            "description": "Develop security operations and incident response skills. Learn to monitor systems, detect security incidents, and respond effectively to cyber threats."
        },
        {
            "id": 7,
            "name": "Web Application Security",
            "image": "https://picsum.photos/339",
            "description": "Explore web application security vulnerabilities and best practices. Learn to secure web applications against common security threats and attacks."
        },
        {
            "id": 8,
            "name": "Cloud Security Essentials",
            "image": "https://picsum.photos/340",
            "description": "Understand cloud security concepts and challenges. Learn to secure cloud environments, data, and applications in public and private clouds."
        },
        {
            "id": 9,
            "name": "Mobile Security Fundamentals",
            "image": "https://picsum.photos/341",
            "description": "Explore mobile security threats and defenses. Learn to secure mobile devices, applications, and networks against cyber attacks."
        },
        {
            "id": 10,
            "name": "IoT Security",
            "image": "https://picsum.photos/342",
            "description": "Learn to secure Internet of Things (IoT) devices and networks. Understand IoT security challenges, vulnerabilities, and best practices."
        },
        {
            "id": 11,
            "name": "Cyber Security Governance and Compliance",
            "image": "https://picsum.photos/343",
            "description": "Explore cyber security governance frameworks and compliance standards. Learn to establish security policies, procedures, and regulatory compliance."
        }
    ]





    return (
        <div className="container mt-3">
            <div className="row">
                {
                    course.map(course => (
                        <div className="col-md-4 p-3">
                            <CourseCard
                                key={course.id}
                                image={course.image}
                                name={course.name}
                                description={course.description}
                            />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}