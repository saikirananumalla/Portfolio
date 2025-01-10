import * as React from "react"
import "./experience.scss"


const experienceData = [
  {
    "company": "Software Engineering Intern",
    "url": "https://www.Codametrix.com/",
    "time": "Jun 2024 - Nov 2024",
    "position": "Codametrix"
  },
  {
    "company": "Software Engineer",
    "url": "https://www.bny.com/",
    "time": "Jul 2021 - Aug 2023",
    "position": "BNY"
  },
  {
    "company": "Software Developer Intern",
    "url": "https://research.samsung.com/",
    "time": "May 2020 - Jun 2020",
    "position": "Samsung Research India"
  },
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data) => (
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.company}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="job__position">{data.position}</div>
            </div>
          ))
        }
      </div>
    </div>
  </section>
)

export default Experience
