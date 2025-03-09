import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Priyam Nagar </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I’m currently pursuing my <span className="purple">Bachelor of Computer Applications (Data Science & Analytics)</span> at <span className="purple">Jagan Institute of Management Studies, IPU</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing creative visuals with Figma and Canva 🎨
            </li>
            <li className="about-activity">
              <ImPointRight /> Competing in hackathons and solving real-world problems 🏆
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Priyam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;