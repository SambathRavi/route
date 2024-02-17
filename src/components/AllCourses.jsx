export function CourseCard({ image, name, description }) {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={name} width={200} height={230} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: '#0aaa01' }} >Learn More</a>
            </div>
        </div>
    );
};
export default function AllCourses() {


    const course = [
        {
            id: 1,
            image: "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg",
            name: "Full Stack Development",
            description: "Learn full stack web development with React, Node.js, and MongoDB."
        },
        {
            id: 2,
            image: "https://img.freepik.com/free-photo/business-person-futuristic-business-environment_23-2150970195.jpg",
            name: "Data Science",
            description: "Master data science skills including Python programming and machine learning."
        },
        {
            id: 3,
            image: "https://img.freepik.com/premium-photo/binary-code-digital-technology-background-made-with-zeros-ones_601748-25090.jpg",
            name: "Cyber Security",
            description: "Explore cybersecurity concepts and techniques to protect digital assets."
        },
        {
            id: 4,
            image: "https://img.freepik.com/free-vector/businessman-top-clock_23-2147618185.jpg",
            name: "Career",
            description: "Learn full stack web development with React, Node.js, and MongoDB."
        },
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
                {/* <div className="col-md-4 p-3">
                    <CourseCard
                        image="https://img.freepik.com/free-photo/business-person-futuristic-business-environment_23-2150970195.jpg"
                        name="Data Science"
                        description="Master data science skills including Python programming and machine learning."
                    />
                </div>
                <div className="col-md-4 p-3">
                    <CourseCard
                        image="https://img.freepik.com/premium-photo/binary-code-digital-technology-background-made-with-zeros-ones_601748-25090.jpg"
                        name="Cyber Security"
                        description="Explore cybersecurity concepts and techniques to protect digital assets."
                    />
                </div>
                <div className="col-md-4 p-3">
                    <CourseCard
                        image="https://img.freepik.com/free-vector/businessman-top-clock_23-2147618185.jpg"
                        name="Career"
                        description="Explore cybersecurity concepts and techniques to protect digital assets."
                    />
                </div> */}
            </div>
        </div>
    )
}