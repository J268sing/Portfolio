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
          title="SOCA"
          position="Web Developer"
          timePeriod="June 2021 - August 2021"
          description1="Built an interactive website in React and Redux for a cricket league played in Ontario by 16 teams every year"
          description2="Improved load time by 15% by managing website’s state with redux and integrating lazy loading of images"
          description3="Built a scalable UI capable of handling big traffic load by reducing UI re-renderings which decreased data
          processing cost by 20%"
          linkProject="https://github.com/J268sing/iRead"
        />

        <div style={{ paddingTop: 40 }}></div>
        <ExperienceCard
          title="Petro-Wagon"
          position="Software Engineer"
          timePeriod="August 2019 - January 2020"
          description1="Developed an Android app for an online fuel delivery service based startup from scratch"
          description2="Programmed app’s local database using Android Room and implemented SQL queries to store mutable live data"
          description3="Maintained structured code using MVVM architecture to enhance reusability and optimized app performance"
          linkProject="https://github.com/J268sing/iRead"
        />
        <div style={{ paddingTop: 40 }}></div>
        <ExperienceCard
          title="Stark Softwares"
          position="Software Developer"
          timePeriod="May 2017 - August 2017"
          description1="Contributed to over 50 UI automation tests and debugged UI/UX issues, ensuring 100% compliance with quality"
          description2="Effectively wrote clean and reusable code for designing templates for clients and performed troubleshooting"
          description3="Automated testing that will be performed at all layers of programming interfaces"
          linkProject="https://github.com/J268sing/iRead"
        />

      </Container>
    </Container>
  );
}

export default Experience;
