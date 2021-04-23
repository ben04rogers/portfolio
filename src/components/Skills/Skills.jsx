import React from 'react';
import Fade from 'react-reveal/Fade';
import { ListGroup } from 'react-bootstrap';
import Title from '../Title/Title';

const Skills = () => {
  const breakpoint = 'md';
  return (
    <section id="skills">
      <Title title="Skills" />
      <div className="skills-wrapper">
        <Fade bottom duration={250} delay={250} distance="30px">
          <ListGroup horizontal={breakpoint}>
            <ListGroup.Item className="single-skill">HTML</ListGroup.Item>
            <ListGroup.Item className="single-skill">CSS</ListGroup.Item>
            <ListGroup.Item className="single-skill">JavaScript</ListGroup.Item>
            <ListGroup.Item className="single-skill">React (including Context API)</ListGroup.Item>
            <ListGroup.Item className="single-skill">SASS</ListGroup.Item>
            <ListGroup.Item className="single-skill">git</ListGroup.Item>
            <ListGroup.Item className="single-skill">SQL</ListGroup.Item>
            <ListGroup.Item className="single-skill">npm/yarn</ListGroup.Item>
            <ListGroup.Item className="single-skill">Gatsby</ListGroup.Item>
            <ListGroup.Item className="single-skill">Material UI</ListGroup.Item>
            <ListGroup.Item className="single-skill">Bootstrap</ListGroup.Item>
          </ListGroup>
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
