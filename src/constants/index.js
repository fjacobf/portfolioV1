import {instagram, github, gmail, linkedin} from '../assets';
export const about = {
  "presentation": "Hi! I am Felipe, a computer engineering student at University of Porto. I´ve been studying programming since high school and love creating new things!"
}

export const projects = [
  {
    title: "Dynamicity",
    description: "",
    technologies: ["react", "html5", "tailwind", "javascript"],
  },
]

export const contacts = [
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/fjacob__/"
  },{
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/fjjferreira/"
  },{
    name: "Github",
    icon: github,
    link: "https://github.com/fojacob"
  },{
    name: "Gmail",
    icon: gmail,
    link: "mailto:felipe.jacob.ferreira@gmail.com"
  }
]

export const experiences = [
  {
    company_name: "JuniFeup",
    icon: instagram,
    iconBg: "black",
    position: "Software Engineer",
    date: "November 2023 - Present",
    description: ["Acted as a consultant developing web applications for companies, such as Deloitte and 88Padel using frameworks like React.js and Laravel.","Worked in the ERP, an internal tool used to organize all the events, members, clients and collaborators from JuniFEUP. Developed using technologies such as NodeJs, Postgres, Docker, React, Tailwind and Sass.","Applied scrum methodology to reach clients satisfaction as well as the necessary productivity to finish in a timely manner.","Technologies: React, Docker, NodeJS, Tailwind, Sass, GitLab Pipelines, PostgreSQL."],
    technologies: [],
  },
  {
    company_name: "Cetaps",
    icon: instagram,
    iconBg: "black",
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
    icon: instagram,
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
