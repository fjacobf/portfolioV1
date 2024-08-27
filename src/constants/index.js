import {instagram, github, gmail, linkedin, juni, cetaps, interup, dynamicity, feupbook, guuri} from '../assets';
export const about = ["Hi! I'm Felipe, a highly adaptable and diligent developer. I've worked with many teams and with different technologies before which granted me experience in working with people and developing projects.","Creativity has always been in my personality and I believe that software development is the best way I found to exercise it. For me, it is wonderful to see how you can create different solutions for the same problem and overcome challenges in the most unexpected way.","I'm seeking opportunities to apply my skills in a professional setting, gaining experience, and making meaningful contributions."]

export const projects = [
  {
    name: "Dynamicity",
    image: dynamicity,
    description: "Web application designed to create and edit maps. You can load a geoJson file, add new structures and edit the structures on it.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "leaftlet",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/fjacobf/Dynamicity" 
  },
  {
    name: "FeupBook",
    image: feupbook,
    description: "A fullstack social network project, Similar to instagram, it has a infinite feed, comment section, follow and likes system.",
    tags: [
      {
        name: "Laravel",
        color: "orange-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/fjacobf/feupbook" 
  },
  {
    name: "Guuri",
    image: guuri,
    description: "A mobile aplication destined to find common places to make your trip feel like home. Integrated with google maps API and firebase.",
    tags: [
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
  
    ],
    source_code_link: "https://github.com/FEUP-LEIC-ES-2022-23/2LEIC01T1" 
  },
]

export const contacts = [
  {
    name: "LinkedIn",
    icon: linkedin,
    username: "/fjacobf",
    link: "https://www.linkedin.com/in/fjacobf/"
  },{
    name: "Github",
    icon: github,
    username: "fjacobf",
    link: "https://github.com/fjacobf"
  },{
    name: "Gmail",
    icon: gmail,
    username: "felipe.jacob.ferreira\n@gmail.com",
    link: "mailto:felipe.jacob.ferreira@gmail.com"
  }
]

export const experiences = [
  {
    company_name: "JuniFeup",
    icon: juni,
    iconBg: "black",
    position: "Software Engineer",
    date: "November 2023 - Present",
    description: ["Acted as a consultant developing web applications for companies, such as Deloitte and 88Padel using frameworks like React.js and Laravel.","Worked in the ERP, an internal tool used to organize all the events, members, clients and collaborators from JuniFEUP. Developed using technologies such as NodeJs, Postgres, Docker, React, Tailwind and Sass.","Applied scrum methodology to reach clients satisfaction as well as the necessary productivity to finish in a timely manner.","Technologies: React, Docker, NodeJS, Tailwind, Sass, GitLab Pipelines, PostgreSQL."],
    technologies: [],
  },
  {
    company_name: "Cetaps",
    icon: cetaps,
    iconBg: "#84001c",
    position: "Software Engineer",
    date: "April 2023 - November 2023",
    description: ["Work in a database repository with over 30.000 literary works, improving its filters and creating an interface to navigate it.",
      "Develop websites in wordpress with PHP and Javascript.",
      "Create scripts in Python and R to process analytical data, implement text and image analysis and AI solutions.",
      "Technologies: Wordpress, Python, R, PHP, Javascript, CSS, MySql."
      ],
    technologies: [],
  },
  {
    company_name: "InterUP",
    icon: interup,
    iconBg: "black",
    position: "Web Developer",
    date: "Jul 2022 - April 2023",
    description: ["Developed a web application used as a backoffice to sort locals and events in association databases using HTML, CSS, Javascript and React.",
      "Built REST API’s for fast integration between system components.",
      "Designed a mobile app for InterUp using Flutter as well as built prototypes using Figma.",
      "Technologies: React, Flutter, Javascript, HTML, CSS, Scrum, GIT, PostgreSQL."
      ],
    technologies: [],
  }
]
