import * as React from "react"
import "./skills.scss"

const skillsData = {
  "languagesTitle": "Languages",
  "languages": ["Java", "Javascript", "Typescript", "Python", "C++", "Swift"],
  "frameworksTitle": "Frameworks/Technologies",
  "frameworks": ["REST", "gRPC", "GraphQL", "Web Sockets", "SpringBoot", "Camunda", "FastAPI", "Node.js", "Express.js", "React", "Terraform", "Kafka", "Jenkins", "Jackson", "JUnit", "Mockito"],
  "toolsTitle": "Databases",
  "tools": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", "Firestore"],
  "designTitle": "Cloud & Devops",
  "design": ["Amazon Web Services", "Docker", "Kubernetes", "CI/ CD Pipelines", "Azure", "GCP", "Git", "Maven", "Gradle", "Grafana", "Postman", "JIRA", "Confluence"],
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.languagesTitle}</div>
          <ul>
            {skillsData.languages.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.frameworksTitle}</div>
          <ul>
            {skillsData.frameworks.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.toolsTitle}</div>
          <ul>
            {skillsData.tools.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.designTitle}</div>
          <ul>
            {skillsData.design.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
