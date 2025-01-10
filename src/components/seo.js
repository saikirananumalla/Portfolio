import * as React from "react"

const seoData = {
  "title": "Sai Kiran Anumalla",
  "description": "Sai Kiran Anumalla is a Software Developer skilled in full stack development with focus on backend technologies.",
  "author": "Sai Kiran Anumalla",
  "siteUrl": "https://saikirananumalla.com",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
  </>
)

export default Seo
