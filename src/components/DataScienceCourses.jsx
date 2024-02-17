import { CourseCard } from "./AllCourses"

export default function DataScienceCourses() {


    const course = [
        {
            "id": 1,
            "name": "Introduction to Data Science",
            "image": "https://picsum.photos/311",
            "description": "Begin your journey into the world of data science. Explore foundational concepts, techniques, and tools used in data analysis and visualization."
        },
        {
            "id": 2,
            "name": "Python for Data Science",
            "image": "https://picsum.photos/312",
            "description": "Learn Python programming language for data science. Master data manipulation, analysis, and visualization using popular Python libraries."
        },
        {
            "id": 3,
            "name": "Machine Learning Fundamentals",
            "image": "https://picsum.photos/313",
            "description": "Dive into the fundamentals of machine learning. Understand supervised, unsupervised, and reinforcement learning algorithms and their applications."
        },
        {
            "id": 4,
            "name": "Data Analysis with Pandas",
            "image": "https://picsum.photos/314",
            "description": "Explore data analysis and manipulation with Pandas library. Learn to clean, transform, and analyze datasets efficiently using Pandas."
        },
        {
            "id": 5,
            "name": "Data Visualization with Matplotlib and Seaborn",
            "image": "https://picsum.photos/315",
            "description": "Master data visualization techniques using Matplotlib and Seaborn libraries in Python. Create stunning visualizations to communicate insights effectively."
        },
        {
            "id": 6,
            "name": "Deep Learning Essentials",
            "image": "https://picsum.photos/316",
            "description": "Introduction to deep learning principles and neural networks. Explore architectures, optimization techniques, and applications of deep learning models."
        },
        {
            "id": 7,
            "name": "Natural Language Processing",
            "image": "https://picsum.photos/317",
            "description": "Learn natural language processing (NLP) techniques for text analysis and understanding. Explore sentiment analysis, named entity recognition, and more."
        },
        {
            "id": 8,
            "name": "Big Data Analytics with Spark",
            "image": "https://picsum.photos/318",
            "description": "Introduction to big data analytics with Apache Spark. Learn distributed computing, data processing, and analysis at scale using Spark framework."
        },
        {
            "id": 9,
            "name": "Time Series Analysis and Forecasting",
            "image": "https://picsum.photos/319",
            "description": "Master time series analysis techniques for forecasting. Explore methods like ARIMA, SARIMA, and exponential smoothing for time series modeling."
        },
        {
            "id": 10,
            "name": "Data Science Projects",
            "image": "https://picsum.photos/320",
            "description": "Apply your data science skills to real-world projects. Learn to develop, implement, and evaluate data science solutions across various domains."
        },
        {
            "id": 11,
            "name": "Data Science Ethics and Privacy",
            "image": "https://picsum.photos/321",
            "description": "Explore ethical considerations and privacy issues in data science. Understand the importance of responsible data handling and decision-making."
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