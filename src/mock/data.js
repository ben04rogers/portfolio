import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ryan Neville | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My project portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ryan Neville',
  subtitle: `I'm a web developer from Bristol, UK`,
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'RGN-photo.jpg',
  paragraphOne: `I'm Ryan, a web developer from Thornbury. I'm passionate about tech and I love creating innovative and performant applications that make people's lives easier. I find learning new technologies and creating solutions to difficult problems massively rewarding.`,
  paragraphTwo: `The projects I'm working on right now live on the client side and are mostly React led. My evenings at the moment are spent learning node.js and Express. My long term goal is to become an effective full stack developer, able to efficiently turn great ideas into working products.`,
  paragraphThree: `In my spare time I play a lot of guitar, make electronic music with my modular synth, play rugby and love watching NFL games.`,
  resume:
    'https://www.canva.com/design/DAEa7g9-iy4/6aySdG726-pjyvSHFe5NXA/view?utm_content=DAEa7g9-iy4&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Company Website',
    info:
      'A website for a local company, constructed with create-react-app - featuring Google Maps API custom styled components from the Materialize library.',
    info2: 'React, Materialize, SASS, Google Maps API',
    url: '',
    repo: 'https://github.com/rgneville/material-ui-site', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'CV Generator',
    info:
      'A web application which generates and prints a CV using user entered data, using controlled forms and a global state management solution.',
    info2: 'React, Context API, SASS',
    url: '',
    repo: 'https://github.com/rgneville/cv-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'WeatherNow',
    info:
      'A web application which dynamically displays the present weather at a list of locations, from an array kept in local storage.',
    info2: 'JavaScript, OpenWeatherAPI, SASS',
    url: 'https://rgneville.github.io/weather-app/',
    repo: 'https://github.com/rgneville/weather-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Have a question or want to work with me? Please get in touch!`,
  btn: 'Email Me',
  email: 'rgneville91@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ryan-neville-593b1586/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rgneville',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
