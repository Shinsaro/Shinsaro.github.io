import React from "react";
import { View } from "react-native-web";
import { Col, Row } from "react-bootstrap";
import Skills from "./Skills.jsx";
import Introduccion from "./Introduccion.jsx";
import Projects from "./Projects.jsx";
import NavBarPortfolio from "../src/NavbarPortfolio.jsx";

function SinglePagePortfolio() {
  return (
    <View>
      <Col>
        <Row>
          <NavBarPortfolio />
        </Row>
        <Row
          style={{ marginLeft: 50, marginRight: 50, marginTop: 120 }}
          xs={2}
          md={20}
          xxl={20}
        >
          <Introduccion />
        </Row>
        <Row style={{ marginLeft: 50, marginRight: 50 }}>
          <Skills />
        </Row>
        <Row style={{ margin: 50 }}>
          <Projects />
        </Row>
      </Col>
    </View>
  );
}

export default SinglePagePortfolio;