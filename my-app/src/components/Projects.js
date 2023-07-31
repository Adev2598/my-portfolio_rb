import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import artImg from "../assets/img/article-writing(1).jpg";
import lapImg from "../assets/img/laptop.jpg";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () =>{

    const projects = [
        {
            title:"Bachelor Project",
            description:"Unreal Survival - UE-5 PC Game",
            imgUrl:artImg,
        },
        {
            title:"Research Article",
            description:"Social Acceptance of Renewable Energy",
            imgUrl:lapImg,
        }
    ];
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible}) => 
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                <h2>Projects</h2>
                                <p>My Projects:</p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Bachelors Project</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="second">Research Article</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="third">Personal Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                      key={index}
                                                      {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Test1</Tab.Pane>
                                <Tab.Pane eventKey="third">Test2</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}