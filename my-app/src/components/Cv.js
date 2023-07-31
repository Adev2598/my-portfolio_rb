import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import artImg from "../assets/img/article-writing(1).jpg";
import lapImg from "../assets/img/laptop.jpg";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Cv = () =>{
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible}) => 
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                <h2>CV</h2>
                                <p>Download My CV:</p>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    <span className="nabar-text">
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}