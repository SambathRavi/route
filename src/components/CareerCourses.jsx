import { CourseCard } from "./AllCourses"

export default function CareerCourses() {


    const course = [
        {
            "id": 1,
            "name": "Career Planning and Development",
            "image": "https://picsum.photos/322",
            "description": "Develop a strategic approach to career planning and advancement. Identify your strengths, interests, and goals to create a roadmap for success."
        },
        {
            "id": 2,
            "name": "Resume Writing Workshop",
            "image": "https://picsum.photos/323",
            "description": "Learn the essentials of writing effective resumes. Craft compelling resumes that highlight your skills, experience, and achievements."
        },
        {
            "id": 3,
            "name": "Interview Preparation Guide",
            "image": "https://picsum.photos/324",
            "description": "Prepare for job interviews effectively. Learn strategies to answer common interview questions, showcase your qualifications, and make a positive impression."
        },
        {
            "id": 4,
            "name": "Effective Communication Skills",
            "image": "https://picsum.photos/325",
            "description": "Master the art of effective communication. Develop strong verbal, nonverbal, and written communication skills for professional success."
        },
        {
            "id": 5,
            "name": "Leadership and Management Fundamentals",
            "image": "https://picsum.photos/326",
            "description": "Gain essential leadership and management skills. Learn to motivate teams, make strategic decisions, and drive organizational success."
        },
        {
            "id": 6,
            "name": "Negotiation Skills for Professionals",
            "image": "https://picsum.photos/327",
            "description": "Enhance your negotiation skills in professional settings. Learn negotiation strategies, tactics, and techniques to achieve win-win outcomes."
        },
        {
            "id": 7,
            "name": "Time Management and Productivity",
            "image": "https://picsum.photos/328",
            "description": "Master time management techniques to boost productivity. Learn to prioritize tasks, set goals, and effectively manage your time for optimal results."
        },
        {
            "id": 8,
            "name": "Emotional Intelligence in the Workplace",
            "image": "https://picsum.photos/329",
            "description": "Develop emotional intelligence skills for the workplace. Enhance self-awareness, self-regulation, empathy, and interpersonal relationships."
        },
        {
            "id": 9,
            "name": "Networking and Building Professional Relationships",
            "image": "https://picsum.photos/330",
            "description": "Learn effective networking strategies to build professional relationships. Develop connections, expand your network, and create opportunities for growth."
        },
        {
            "id": 10,
            "name": "Career Transition Strategies",
            "image": "https://picsum.photos/331",
            "description": "Navigate career transitions with confidence. Learn strategies to explore new opportunities, rebrand yourself, and successfully transition to new roles."
        },
        {
            "id": 11,
            "name": "Work-Life Balance and Wellness",
            "image": "https://picsum.photos/332",
            "description": "Achieve work-life balance and prioritize wellness. Learn strategies to manage stress, maintain health, and thrive both personally and professionally."
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