// my name, position, pic
export const BaseInfo = {
  name: "Nathan Fenoglio",
  position: "Software Developer",
  profilePic: "/images/tst_school_pic.jpg",
};

// about me descriptions
export const aboutInfo = {
  title: "Software Engineering, Bass Playing, Electronic Music Producing Explorer",
  description1:
    "I’m a passionate Computer Science graduate from UT Arlington with a strong foundation in software development and early career experience. My technical skills span across languages like C++, Java, Python, C#, and JavaScript, but what truly drives me is the opportunity to solve challenging problems and build innovative solutions that have a positive effect.",
  description2:
    "I enjoy working closely with teams to understand complex issues, exchange ideas, and build software. I pride myself on being an effective communicator and team player, helping to foster a positive environment that helps to aid in a project's success. I’m continually striving to expand my knowledge and grow as a developer. Whether it’s learning a new technology or brainstorming creative solutions.",
  description3:
    "Along with software, music has always been a source of creativity and a passion for me and I have composed, collaborated, and played bass across various genres including metal, funk, hip hop, jazz, electronic, and progressive whatever. Please check out some of my software and music projects below and contact me to create something new together!",
};

// general skills 
// for some reason I can only get bg-blue-800 to work
export const aboutInfoSkills = [ 
  {
    id: 1,
    skill: "Frontend Development",
    color: "bg-blue-800",
  },
  {
    id: 2,
    skill: "Backend Development",
    color: "bg-blue-800",
    // color: "bg-orange-800",  
  },
  {
    id: 3,
    skill: "Full Stack Development",
    color: "bg-blue-800",
    // color: "bg-green-800",  
  },
  {
    id: 4,
    skill: "Mobile Development",
    color: "bg-blue-800",
  },
  {
    id: 5,
    skill: "VST3 Plugin Development",
    color: "bg-blue-800",
    // color: "bg-orange-800",  
  },
  {
    id: 6,
    skill: "Game Development",
    color: "bg-blue-800",
    // color: "bg-green-800",  
  },

];

// software projects data image, url navigation link to project page, title, category for filtering to display different categories of projects
export const projectData = [
  {
    id: 1,
    image: "/images/Title_Screen_Screenshot.jpg",
    url: "/projects/escapeFromUTA",
    title: "Escape From UTA",
    category: "Games",
  },
  {
    id: 2,
    // image: "/images/MultiDimensionalMazes.jpg",
    // image: "/images/Picture1.png]",
    image: "/images/Picture1.png",
    url: "/projects/multiDimensionalMazes",
    title: "MultiDimensional Mazes With 3D Rotations",
    category: "Games",
  },
  {
    id: 3,
    image: "/images/intro.png",
    url: "/projects/smartpaws",
    title: "SmartPaws Virtual Veterinarian",
    category: "Mobile",
  },
  {
    id: 4,
    image: "/images/midi_seq_screenshot_1.jpg",
    url: "/projects/midiseq",
    title: "Midi VST3 Plugin Multi Sequence Manipulator",
    category: "Music",
  },
  {
    id: 5,
    image: "/images/GraphTraversalSequencerImage.jpg",
    url: "/projects/graphtraversalseq",
    title: "Graph Traversal Sequencer",
    category: "Music",
  },
  {
    id: 6,
    image: "/images/midi_harmonizer_screenshot_1.jpg",
    url: "/projects/midiharmonizer",
    title: "Midi Harmonizer Plugin",
    category: "Music",
  },
  {
    id: 7,
    image: "/images/restaurant_screenshot_1.png",
    url: "/projects/restaurant",
    title: "Restaurant Menus",
    category: "Web",
  },
];

// skills programming languages/frameworks
// invert property if wanting to invert the image colors
export const skillsData = [
  {
    id: 1,
    title: "React",
    image: "/images/react.svg",
    invert: 0,
  },
  {
    id: 2,
    title: "CSS",
    image: "/images/css.svg",
    invert: 0,
  },
  {
    id: 3,
    title: "JavaScript",
    image: "/images/js.svg",
    invert: 0,
  },
  {
    id: 4,
    title: "TypeScript",
    image: "/images/ts.svg",
    invert: 0,
  },
  {
    id: 5,
    title: "HTML",
    image: "/images/html.svg",
    invert: 0,
  },
  {
    id: 6,
    title: "Node JS",
    image: "/images/node.svg",
    invert: 0,
  },
  {
    id: 7,
    title: "MongoDB",
    image: "/images/mongo.svg",
    invert: 0,
  },
  {
    id: 8,
    title: "Python",
    image: "/images/python.svg",
    invert: 0,
  },
  {
    id: 9,
    title: "Firebase",
    image: "/images/firebase.svg",
    invert: 0,
  },
  {
    id: 10,
    title: "Next.js",
    image: "/images/next-dot-js.svg",
    invert: 0,
  },
  {
    id: 11,
    title: "Express.js",
    image: "/images/express-js.svg",
    invert: 1,
  },
  {
    id: 12,
    title: "Spring Boot",
    image: "/images/spring.svg",
    invert: 0,
  },
  {
    id: 13,
    title: "Maven",
    image: "/images/maven.svg",
    invert: 0,
  },
  {
    id: 14,
    title: "Juce",
    image: "/images/juce.svg",
    invert: 1,
  },
  {
    id: 15,
    title: "C",
    image: "/images/c-programming.svg",
    invert: 0,
  },
  {
    id: 16,
    title: "C++",
    image: "/images/c++.svg",
    invert: 0,
  },
  {
    id: 17,
    title: "Java",
    image: "/images/java.svg",
    invert: 0,
  },
  {
    id: 18,
    title: "Git",
    image: "/images/git.svg",
    invert: 0,
  },
  {
    id: 19,
    title: "MySQL",
    image: "/images/mysql.svg",
    invert: 0,
  },
  {
    id: 20,
    title: "DB2",
    image: "/images/db2.svg",
    invert: 1,
  },
  {
    id: 21,
    title: "C#",
    image: "/images/csharp.svg",
    invert: 0,
  },
  {
    id: 22,
    title: "RPG",
    image: "/images/IBM_RPG_logo.png",
    invert: 0,
  },
  {
    id: 23,
    title: "EDI",
    image: "/images/edi.avif",
    invert: 1,
  },
];

// music projects data image, url navigation link to project page, title
export const musicProjectData = [
  {
    id: 1,
    image: "/images/me_hat_and_st_pats_tie_150_200.jpg",
    url: "/music/solo",
    title: "Solo Electronic Music",
  },
  {
    id: 2,
    image: "/images/WOO_logo.png",
    url: "/music/woo",
    title: "Wrought of Obsidian",
  },
  {
    id: 3,
    image: "/images/album_cover_post_apocalyptic_time_travel_core.jpg",
    url: "/music/harry",
    title: "Harry Has a Head Like a Ping Pong Ball",
  },
  {
    id: 4,
    // could use better image for parallel realities but haven't located one yet
    image: "/images/mirrors.jpg",
    url: "/music/parallel",
    title: "Parallel Realities",
  },
];

// my contact details
export const contactData = {
  phone: "940-367-8925",
  email: "nathanrfenoglio@gmail.com",
  address: "Fort Worth, TX",
};