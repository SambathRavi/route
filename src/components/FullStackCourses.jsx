import { CourseCard } from "./AllCourses"

export default function FullStackCourses() {


    const course = [
        {
            "id": 1,
            "name": "Full Stack Web Development Bootcamp",
            "image": "https://picsum.photos/300",
            "description": "Intensive bootcamp covering front-end and back-end development with HTML, CSS, JavaScript, Node.js, Express, and MongoDB."
        },
        {
            "id": 2,
            "name": "React and Redux for Full Stack Developers",
            "image": "https://picsum.photos/301",
            "description": "Master React and Redux for building modern, scalable web applications. Learn advanced techniques and best practices for full stack development."
        },
        {
            "id": 3,
            "name": "Node.js and Express Crash Course",
            "image": "https://picsum.photos/302",
            "description": "Accelerated course on building web servers with Node.js and Express. Dive deep into middleware, routing, and database integration."
        },
        {
            "id": 4,
            "name": "MongoDB for Beginners",
            "image": "https://picsum.photos/303",
            "description": "Introduction to MongoDB database management. Learn document-oriented data storage and retrieval for full stack applications."
        },
        {
            "id": 5,
            "name": "Advanced JavaScript Concepts",
            "image": "https://picsum.photos/304",
            "description": "Explore advanced JavaScript concepts such as closures, prototypes, asynchronous programming, and functional programming."
        },
        {
            "id": 6,
            "name": "GraphQL Crash Course",
            "image": "https://picsum.photos/305",
            "description": "Rapid introduction to GraphQL for full stack developers. Learn schema definition, queries, mutations, and subscriptions."
        },
        {
            "id": 7,
            "name": "Docker Fundamentals",
            "image": "https://picsum.photos/306",
            "description": "Fundamental concepts of Docker containerization. Learn to build, deploy, and manage containerized applications efficiently."
        },
        {
            "id": 8,
            "name": "AWS Cloud Development Essentials",
            "image": "https://picsum.photos/307",
            "description": "Essential skills for cloud development on Amazon Web Services. Explore EC2, S3, Lambda, and other AWS services for scalable applications."
        },
        {
            "id": 9,
            "name": "Git and GitHub Mastery",
            "image": "https://picsum.photos/308",
            "description": "Master Git version control and GitHub collaboration. Learn branching, merging, rebasing, and best practices for team development."
        },
        {
            "id": 10,
            "name": "DevOps for Full Stack Developers",
            "image": "https://picsum.photos/309",
            "description": "Introduction to DevOps principles and practices. Explore automation, continuous integration, and deployment pipelines."
        },
        {
            "id": 11,
            "name": "Full Stack Testing Strategies",
            "image": "https://picsum.photos/310",
            "description": "Comprehensive guide to testing full stack applications. Cover unit testing, integration testing, end-to-end testing, and test-driven development."
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