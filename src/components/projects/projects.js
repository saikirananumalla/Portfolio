import * as React from "react"
import "./projects.scss"

const projectsData = [
  {
    "name": "Image Processing Application",
    "description": [
      "Developed an image processing application using Java and SpringBoot, leveraging OOP principles and design patterns (MVC, Builder) for maintainable architecture.",
      "Integrated gRPC for image transformation endpoints, reducing latency by 30% compared to similar tools.",
      "Employed AWS Load Balancing, AWS CloudWatch, AWS EC2, Auto Scaling, AWS S3 to achieve high reliability.",
    ],
    "used": [
      {"thing": "Java"},
      {"thing": "SpringBoot"},
      {"thing": "gRPC"},
      {"thing": "Programming Design"},
      {"thing": "AWS"},
      {"thing": "Redis"},
    ]
  },
  {
    "name": "StackOverflow Clone",
    "description": [
      "Built a StackOverflow-like platform using ReactJS and SpringBoot. Implemented JWT authentication, PostgreSQL for efficient data handling, and deployed with Docker and Kubernetes on AWS, ensuring 99.9% uptime.",
      "Integrated Kafka for asynchronous messaging and Cypress testing, reducing frontend bugs by 40% and improving system responsiveness.",
    ],
    "used": [
      {"thing": "AWS"},
      {"thing": "JWT Authentication"},
      {"thing": "React"},
      {"thing": "PostgreSQL"},
      {"thing": "Java"},
      {"thing": "SpringBoot"},
      {"thing": "Cypress"},
      {"thing": "Kafka"},
      {"thing": "Docker"},
      {"thing": "Kubernetes"},
    ]
  },
  {
    "name": "Crypto GPT",
    "description": [
      "Designed a dashboard displaying trends of the top 20 most valuable coins using GraphQL for real-time data fetching.",
      "Integrated OpenAI API for a chatbot providing accurate answers to crypto-related queries.",
      "Built a secure backend with advanced authentication and data encryption mechanisms for user safety.",
    ],
    "used": [
      {"thing": "Java"},
      {"thing": "SpringBoot"},
      {"thing": "GraphQL"},
      {"thing": "OpenAI"},
    ]
  },
]


const Projects = () => {
  return (
    <section className="section other-projects">
      <div className="section__title">Projects</div>
      <div className="section__content">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <div className="project__name">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
              ) : (
                <span>{project.name}</span>
              )}
            </div>
            <ul className="project__description">
              {project.description.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
            {project.githubUrl && (
              <p>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="small">
                  👨🏻‍💻 Github Source Code 👨🏻‍💻
                </a>
              </p>
            )}
            <div className="project__used">
              {project.used.map((item, itemIndex) => (
                <span key={itemIndex} className="project__used__item">{item.thing}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects