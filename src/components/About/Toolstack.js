import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiWindows,
  SiRender,
  SiFigma,
  SiCanva,
  SiTableau,
  SiPowerbi
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
 <Col xs={4} md={2} className="tech-icons" title="Windows">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Netlify">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Render">
        <SiRender />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Figma">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Canva">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Tableau">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Power BI">
        <SiPowerbi />
      </Col>
    </Row>
  );
}

export default Toolstack;
