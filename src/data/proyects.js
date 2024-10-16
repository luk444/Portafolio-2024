import baxinova from "../assets/WebCalderas.png";
import Proyect from "../assets/3dProyect.png";
import TradeCripto from "../assets/TradeCripto.png";
import translator from "../assets/translator.png";
import furniture from "../assets/Forniture-Ecomerce.png";
import Classyclub from "../assets/ClassyClub.png";
import Autopart from "../assets/Ecomerce-Automanicaos.png";
import idelete from "../assets/idelete.png";


const proyects = [
  {
    title: "Development of Auto Parts Ecommerce Platform",
    date: "Jun 2024",
    description:
      "I developed a complete ecommerce platform, managing both the front-end and the back-end. The app uses Firebase Auth for authentication, offering separate panels for administrators and end users. Implemented detailed metrics such as order tracking and inventory management, making it easy for administrators to add, edit, and delete products efficiently. The responsive design ensures a consistent user experience across devices, while the integration of payment methods and shipping options ensures secure and efficient transactions.",
    tecnologies: ["Javascript", "React JS", "Redux", "Tailwind", "Node JS", "Express", "Firebase", "FirebaseAuth"],
    deploy: "https://automaniacos.netlify.app/",
    repo: "https://github.com/luk444/Ecomerce-AutoManiacos",
    img: Autopart,
    rol:"Full Stack Developer"
  },
  {
    title: "Website development for heating company",
    date: "Dec 2022",
    description:
      "I have worked on the Frontend development of web pages for heating contractor companies. My main role has been to create interfaces that allow the company to publish its services on Google and facilitate the coordination of visits with clients through phone calls after they view the relevant information on the website. This job has allowed me to apply my web design and user experience skills to ensure navigation is intuitive and key information about heating services is clearly accessible to site visitors.",
    tecnologies: ["React", "JavaScript", "Node JS", "Firebase" , "Css"],
    deploy: "https://baxinova.netlify.app/#",
    repo: "https://github.com/luk444/Web-Empresa-Calderas",
    img: baxinova,
    rol: "FrontEnd"
  },
  {
    "title": "E-commerce 3D Simulator",
    "date": "Sep 2024",
    "description": 
      "This project is an innovative idea for e-commerce, designed to allow users to preview how products (such as armchairs or furniture) would look in their homes before purchasing them. Sellers can upload scanned 3D models of the products in compatible formats so that customers can interact with them in an immersive way. The interface is developed with React and offers support for augmented reality (AR), providing a more informed and engaging shopping experience",
    "tecnologies": ["Javascript", "Tailwind", "AR", "ModelViewer", "React"],
    "deploy": "https://3d-simulator.vercel.app/",
    "repo": "https://github.com/luk444/3d-simulator",
    "img": Proyect
  },
  {
    title: "LadingPage: Beauty salon",
    date: "May 2023",
    description:
      "I developed the frontend of a landing page for a beauty salon, allowing clients to select a monthly plan and contact directly through WhatsApp to contract the service. I designed the page to be intuitive and attractive, making it easy to choose the desired plan. I implemented functionalities that automatically redirect to WhatsApp, ensuring quick and direct communication with the salon advisors. This project highlighted my ability to create effective interfaces that improve conversion and user experience.",
    tecnologies: ["Javascript", "React", "Tailwind"],
    deploy: "https://beauty-salon-sandy.vercel.app/",
    repo: "https://github.com/luk444/Beauty-salon",
    img: Classyclub,
  },
  {
    "title": "iDeleteCloud - Simulator",
    "date": "June 2022",
    "description": "Web simulation for accessing lost devices, featuring Firebase-based login/registration and a real-time support chat. Includes a cryptocurrency credit loading simulation and a panel for device serial number registration, simulating server interaction to access devices.",
    "tecnologies": ["React", "Firebase Auth", "Firestore", "Tailwind CSS", "TypeScript"],
    "deploy": "https://i-delete.vercel.app/",
    "repo": "https://github.com/luk444/iDelete",
    "img": idelete
  },  
  {
    title: "Trade-Cripto Simulator (Simulator CriptoCost)",
    date: "March 2022",
    description:
      "The project consists of a web application designed to calculate the cost of cryptocurrencies and simulate the exchange of cryptocurrencies for local currency using a CoinGecko API to obtain the updated value of cryptocurrencies.",
    tecnologies: ["Javascript", "React JS", "Tailwind", "API"],
    deploy: "https://trade-cripto.vercel.app/trade",
    repo: "hhttps://github.com/luk444/TradeCripto",
    img: TradeCripto,
    rol:"Full Stack Developer"
  },
  {
    title: "Development.of Furniture Ecommerce",
    date: "Sep 2022",
    description:
      "I developed a furniture ecommerce using ReactJS as a final project. I was responsible for both front-end and back-end, ensuring a smooth user experience and robust functionalities such as inventory management and order processing. This project represented my ability to apply ReactJS in creating interactive and efficient interfaces, demonstrating proficiency in complete web application development from planning to implementation.",
    tecnologies: ["React", "JavaScript", "Node JS", "Firebase" , "Css"],
    deploy: "https://bejewelled-begonia-49bed3.netlify.app/",
    repo: "https://github.com/luk444/ReactJs-final",
    img: furniture,
    rol: "Full Stack Developer"
  },
  {
    title: "Lucc Translator [not working because of expired api key]",
    date: "July 2022",
    description:
      "Development of a SPA alike Google Translator using React for the Front-end for a University exam, where the user can enter any phrase in any language and it will be translated to any other language that is selected.  It consumes data and functionality from an API.",
    tecnologies: ["Javascript", "React JS", "Bootstrap", "Axios"],
    deploy: "https://traductor.netlify.app/",
    repo: "https://github.com/luk444/Traductor-ReactJS",
    img: translator,
  }
  
];

export default proyects;
