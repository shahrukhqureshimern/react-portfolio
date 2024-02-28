import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Logo-x.png";
import projImg2 from "../assets/img/banner-3.webp";
import projImg3 from "../assets/img/webmark-two.webp";
import projImg4 from "../assets/img/abstract-two.webp";
import projImg5 from "../assets/img/abstract-one.webp";
import projImg6 from "../assets/img/webmark-one.webp";
import projImga from "../assets/img/web1.webp";
import projImgb from "../assets/img/web2.webp";
import projImgc from "../assets/img/web3.webp";
import projImgd from "../assets/img/website-banner 4.webp";
import projImge from "../assets/img/website-banner 5.webp";
import projImgf from "../assets/img/website-banner 6.webp";
import Imga from "../assets/img/banner 1.webp";
import Imgb from "../assets/img/banner 3.webp";
import Imgc from "../assets/img/banner-2.webp";
import Imgd from "../assets/img/smm-banner 1.webp";
import Imge from "../assets/img/smm-banner 2.webp";
import Imgf from "../assets/img/smm-banner 3.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const logoprojects = [
    // ----logo porfolio----
    {
      title: "LOGO DESIGN",
      description: "DESIGN/ BRANDING",
      imgUrl: projImg1,
    },
    {
      title: "LOGO DESIGN",
      description: "DESIGN/ BRANDING",
      imgUrl: projImg2,
    },
    {
      title: "LOGO DESIGN",
      description: "DESIGN/ BRANDING",
      imgUrl: projImg3,
    },
    {
      title: "LOGO DESIGN",
      description: "DESIGN/ BRANDING",
      imgUrl: projImg5,
    },
    {
      title: "LOGO DESIGN",
      description: "DESIGN/ BRANDING",
      imgUrl: projImg4,
    },
    {
      title: "LOGO DESIGN",
      description: "DESIGN/ BRANDING",
      imgUrl: projImg6,
    },
  ];
    const webprojects = [
    // ------Web portfolio-----
    {
      title: "WEB DEVELOPMENT",
      description: "DESIGN/ DEVELOPMENT",
      imgUrl: projImga,
    },
    {
      title: "WEB DEVELOPMENT",
      description: "DESIGN/ DEVELOPMENT",
      imgUrl: projImgc,
    },
    {
      title: "WEB DEVELOPMENT",
      description: "DESIGN/ DEVELOPMENT",
      imgUrl: projImgb,
    },
    {
      title: "WEB DEVELOPMENT",
      description: "DESIGN/ DEVELOPMENT",
      imgUrl: projImgd,
    },
    {
      title: "WEB DEVELOPMENT",
      description: "DESIGN/ DEVELOPMENT",
      imgUrl: projImgf,
    },
    {
      title: "WEB DEVELOPMENT",
      description: "DESIGN/ DEVELOPMENT",
      imgUrl: projImge,
    },
  ];
  const appprojects = [
    // ------App portfolio-----
    {
      title: "MOBILE DEVELOPMENT",
      description: "DEVELOPMENT/ TECHNOLOGY",
      imgUrl: Imga,
    },
    {
      title: "MOBILE DEVELOPMENT",
      description: "DEVELOPMENT/ TECHNOLOGY",
      imgUrl: Imgc,
    },
    {
      title: "MOBILE DEVELOPMENT",
      description: "DEVELOPMENT/ TECHNOLOGY",
      imgUrl: Imgb,
    },
    
  ]
  const branding = [
    // ----logo porfolio----
    {
      title: "SOCIAL MEDIA MARKETING",
      description: "MARKETING/ DESIGN",
      imgUrl: Imgd,
    },
    {
      title: "SOCIAL MEDIA MARKETING",
      description: "MARKETING/ DESIGN",
      imgUrl: Imge,
    },
    {
      title: "SOCIAL MEDIA MARKETING",
      description: "MARKETING/ DESIGN",
      imgUrl: Imgf,
    },
    
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Go through our portfolio below and understand the value we can bring to your business.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">LOGO DESIGN</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">WEB DEVELOPMENT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">APP DEVELOPMENT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">BRANDING</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          logoprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          webprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          appprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <Row>
                        {
                          branding.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
