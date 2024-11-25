import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm a Mathematics and Computer Science graduate from <span className="purple">University of Waterloo. </span>
            interested in Web development, algorithms, and computer systems. I love working on web app projects from design to development.            <br />
            <br />
            Current software interests:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> React
            </li>
            <li className="about-activity">
              <ImPointRight /> Frontent Engineering
            </li>
            <li className="about-activity">
              <ImPointRight /> Distributed Systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Startups
            </li>
          </ul>

          <p style={{  textAlign: "justify" ,marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "If you're afraid to change something it is clearly poorly designed"{" "}
          </p>
          <footer style={{  textAlign:"end" }} className="blockquote-footer">Martin Fowler</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
