import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCards";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Experience
        </h1>

        <div style={{ paddingTop: 50 }}></div>
        <ExperienceCard
          title="ProgramPro"
          position="Software Developer"
          timePeriod="Jan 2024 - Present"
          description1="Architected and implemented 3+ scalable single-page applications using React and Next.js, optimizing SEO and performance with SSR and SSG, achieving a 30% faster load time"
          description2="Built a library of 20+ reusable components with TypeScript, enforcing type safety across a large codebase, reducing runtime errors by 22% and new feature development time by 13%"
          description3="Optimized bundle sizes and reduced initial load time using code-splitting, tree-shaking, and dynamic imports, resulting in 18% faster load times and improved application performance"
          linkProject=""
        />
        <div style={{ paddingTop: 40 }}></div>

        <ExperienceCard
          title="Petro-Wagon"
          position="Full Stack Developer - Contract"
          timePeriod="Apr 2023 - Oct 2023"
          description1="Collaborated with a cross-functional team to design authentication and authorization services using OAuth 2.0 through NextAuth and JWT methods, enhancing security protocols and resulting in a 17% faster login"
          description2="Engineered scalable backend solutions for course content management using MongoDB, yielding a 15% increase in overall system throughput"
          description3="Led an independent programming project to optimize 10+ RESTful APIs for handling user data, and implemented secure payment processing using Stripe’s JavaScript library, leading to a 23% boost in latency optimization"
          linkProject=""
        />

        <div style={{ paddingTop: 40 }}></div>
        <ExperienceCard
          title="SOCA"
          position="Web Developer"
          timePeriod="May 2022 - Feb 2023"
          description1="Built an interactive website in React and Redux for a cricket league played in Ontario by 16 teams every year"
          description2="Reduced page load time by 25% with server-side rendering and pre-fetching critical resources, ensuring faster FCP"
          description3="Enhanced UI scalability using React.memo hook for memoization, concurrent rendering, and data caching, significantly reducing re-renders and lowering processing costs by 20%"
          linkProject="https://github.com/J268sing/iRead"
        />
        <div style={{ paddingTop: 40 }}></div>
        <ExperienceCard
          title="Testing Engineer - Intern"
          position="Software Developer"
          timePeriod="May 2021 – Aug 2021"
          description1="Initiated the creation of 50+ UI tests and resolved UI/UX issues, ensuring full adherence to quality standards"
          description2="Implemented CI/CD pipelines with GitHub Actions, CircleCI, Vercel and Docker to automate testing, integration, and deployment processes, enhancing development efficiency"
          description3="Automated testing that will be performed at all layers of programming interfaces"
          linkProject="https://github.com/J268sing/iRead"
        />

      </Container>
    </Container>
  );
}

export default Experience;
