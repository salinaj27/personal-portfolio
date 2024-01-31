import { Container, Col, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg2 from "../assets/img/project-img2.png";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

export const Projects = () => {
  const projects = [
    {
      title: "Github Finder App",
      description: "User Finder",
      imgUrl: projImg2,
    },
    {
      title: "Mern Stack Proj",
      description: "Full-stack Development",
      imgUrl: projImg11,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project}></ProjectCard>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">More on the way!</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
