import * as React from "react"
import "./footer.scss"

const socialData = [
  {
    "title": "email",
    "url": "mailto:saikirananumalla@gmail.com"
  },
  {
    "title": "github",
    "url": "https://github.com/saikirananumalla"
  },
  {
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/saikirananumalla/"
  },
]
const Footer = () => (
  <footer className="footer">
    <div className="footer__links">
      {
        socialData.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer" title="{{link.title}}">
            <span className="text">{social.title}</span>
          </a>
        ))
      }
    </div>
  </footer>
)

export default Footer
