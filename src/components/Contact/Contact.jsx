import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';

import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import phoneIcon from '../../images/phone-call.svg';
import emailIcon from '../../images/email.svg';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={250} delay={250} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <div className="contact-wrapper__text">
              <img src={phoneIcon} alt="Phone icon" style={{ height: '20px', fill: 'white' }} />
              <p className="contact-wrapper__text">07854 535947</p>
            </div>
            <div className="contact-wrapper__text">
              <img src={emailIcon} alt="Email icon" style={{ height: '20px', fill: 'white' }} />
              <p className="contact-wrapper__text">rgneville91@gmail.com</p>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:${email}`}
            >
              {btn || "Let's Talk"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
