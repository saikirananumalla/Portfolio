import * as React from "react"


const backgroundData = {
  title: "Background",
  part1: "I am a Masters in Computer Science student at ",
  part2: "Northeastern University",
  line2: "My expertise spans developing robust backend systems, optimizing cloud-based workflows, and integrating advanced tools to drive efficiency and scalability. With hands-on experience in building event-driven cloud-native microservices, I thrive at the intersection of technology and innovation. I actively stay updated on the latest trends in cloud technologies, system design, and software development to deliver impactful solutions.",
  line3Part1: "When I'm not in front of a computer screen",
  line3Part2: ", you would likely find me in the gym or experimenting new recipes !!",
};
const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        {backgroundData.part1}
        <strong>{backgroundData.part2}</strong>
        {backgroundData.part3}
      </p>
      <p>
        {backgroundData.line2}
      </p>
      <p>
        <strong>{backgroundData.line3Part1}</strong>{backgroundData.line3Part2}
      </p>
    </div>
  </section>
)

export default Background
