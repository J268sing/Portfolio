import React from "react";
import { Container} from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import Github from "./Github"
function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Card className="project-card-view">
          <Card.Body>
            <Card.Text style={{ textAlign: "justify" }}>
              <strong>Languages</strong>
              <div style={{ marginBottom: 20 }}>  Python • C++ • TypeScript • Java • Kotlin • Go  • C • JavaScript • SQL • Scheme • Bash • HTML/CSS</div>
              <strong>Frameworks/Libraries</strong>
              <div style={{ marginBottom: 20 }}>React • Next.js • Node.js • Flask • Redis • PyTorch • Pandas • Numpy • PostgreSQL • AWS • MySQL</div>
               <strong>Tools</strong>
              <div > • Git • Android Studio • AWS • Bash • Docker • Kubernetes  • Jira</div>
              
            </Card.Text>
          </Card.Body>
        </Card>
        <Github className="about-section" />
      </Container>
    </Container>
  );
}

export default Skills;
