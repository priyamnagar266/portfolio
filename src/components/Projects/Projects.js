import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import qr from "../../Assets/Projects/qr generator.png";
import esign from "../../Assets/Projects/esign.png";
import datasense from "../../Assets/Projects/datasense.png";
import text2image from "../../Assets/Projects/text2image.png";
import echonews from "../../Assets/Projects/echonews.png";
import serenityconnect from "../../Assets/Projects/serenityconnect.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={serenityconnect}
              isBlog={false}
              title="Serenity Connect"
              description="Serenity Connect is a MERN stack-powered mental health support platform designed to provide self-assessment tools, anonymous discussion forums, and access to licensed therapists. It fosters a safe, stigma-free community where users can seek support, share experiences, and access personalized wellness resources. "
              ghLink="https://github.com/priyamnagar266/serenity-connect"
              demoLink="https://serenity-connect.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={echonews}
              isBlog={false}
              title="EchoNews"
              description="EchoNews is an API-powered news aggregator platform built with HTML, CSS, and JavaScript, delivering the latest news from multiple sources. It allows users to search, save, and share articles, ensuring a seamless and personalized reading experience. With a clean and responsive UI, it provides quick access to trending and relevant news."         
              ghLink="https://github.com/priyamnagar266/news-website"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datasense}
              isBlog={false}
              title="Data Sense"
              description="DataSense is a Flask-based web application that provides interactive data profiling reports. Users can upload CSV or Excel files to generate detailed statistics, visualizations, and insights, helping them understand data structure, quality, trends, and patterns effortlessly. It simplifies data analysis and anomaly detection, making it easier for users to identify key insights and potential issues in their datasets. "
              ghLink="https://github.com/priyamnagar266/DataSense"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={esign}
              isBlog={false}
              title="E-sign"
              description="E-Sign is a web-based signature tool developed using HTML, CSS, and JavaScript, allowing users to draw their signature on a canvas with any color of their choice. Once completed, the signature can be downloaded in PNG format for easy use on documents and digital platforms. With a clean and intuitive interface, E-Sign provides a seamless and efficient signing experience."
              ghLink="https://github.com/priyamnagar266/esign"
              demoLink="https://esign-snowy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text2image}
              isBlog={false}
              title="Text-2-Image"
              description="Text-2-Image is a text-to-image generation tool built using Hugging Face, HTML, CSS, and JavaScript. It allows users to enter text prompts and generate AI-powered images instantly. With a user-friendly interface, Text-2-Image simplifies AI-driven image creation, making it easy to bring ideas to life with just a few words.."
              ghLink="https://github.com/priyamnagar266/TEXT-2-IMAGE"
              demoLink="https://text-2-image.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qr}
              isBlog={false}
              title="GEN-QR"
              description="QR Code Generator is a web-based tool developed using HTML, CSS, JavaScript, and an API that allows users to create custom QR codes instantly. Users can enter text, URLs, or other data, and the tool generates a scannable QR code that can be downloaded and used anywhere. With a simple and responsive interface, QR Code Generator makes creating and sharing QR codes quick and effortless."
              ghLink="https://github.com/priyamnagar266/qr-code-generator"
              demoLink="https://qr-code-generator-brown-sigma.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
