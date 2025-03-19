import Proyect from "../assets/3dProyect.png";
import classyclub from "../assets/ClassyClub.png";
import idelete from "../assets/idelete.png";
import calderasweb from "../assets/calderasweb.png";
import tradeCripto from "../assets/TradeCripto.png";
import translator from "../assets/translator.png";
import mueblesweb from "../assets/mueblesweb.png";
import autopartsweb from "../assets/autopartsweb.png";
import cursoweb from "../assets/cursoweb.png";
import webservicedev from "../assets/webservicedev.png";
import detailscreen from "../assets/detailscreen.png";


const proyects = [
  {
    title: "Development SwapORkick (En desarrollo)",
    date: "Feb 2025",
    description:
      "Develop a p2p exchange platform for CS2 items, in which users can register, link their Steam and Metamask accounts to buy and sell items in our market, charging a minimal commission and also providing excellent service by avoiding scams and making the community a safer place to buy and sell items.",
    tecnologies: ["Javascript", "React JS", "Tailwind", "Node JS", "Mongodb"],
    deploy: "https://developer-web-service.netlify.app",
    repo: "https://github.com/luk444/webservicedev",
    img: detailscreen,
    rol:"Full Stack Developer"
  },
  {
    title: "Development service web",
    date: "Feb 2025",
    description:
      "I developed a complete website to promote web development services to entrepreneurs who want to create their website and various development plans.",
    tecnologies: ["Javascript", "React JS", "Tailwind"],
    deploy: "https://developer-web-service.netlify.app",
    repo: "https://github.com/luk444/webservicedev",
    img: webservicedev,
    rol:"Full Stack Developer"
  },
  {
    title: "Development of Courses publish Platform",
    date: "Feb 2025",
    description:
      "I developed a comprehensive website to publish courses/trainings and allow users to purchase them. I included an admin panel and dashboard to manage the courses. Login/Register.",
    tecnologies: ["Javascript", "React JS", "Redux", "Tailwind", "Node JS", "Firebase", "FirebaseAuth"],
    deploy: "https://webcourseonlinee.netlify.app/",
    repo: "https://github.com/luk444/webcourseonlinee",
    img: cursoweb,
    rol:"Full Stack Developer"
  },
  {
    title: "Development of Auto Parts Ecommerce Platform",
    date: "Jun 2024",
    description:
      "I developed a complete e-commerce website for an automotive parts retailer. It includes a dashboard and admin panel to manage products, purchase status, and many other features.",
    tecnologies: ["Javascript", "React JS", "Tailwind", "Node JS", "Firebase", "FirebaseAuth"],
    deploy: "https://autopartesalfa.netlify.app",
    repo: "https://github.com/luk444/Ecomerce-AutoManiacos",
    img: autopartsweb,
    rol:"Full Stack Developer"
  },
  {
    title: "Development of Web Calderas Service",
    date: "Jun 2024",
    description:
      "I developed a website for a boilermaking company specializing in heating. This was to promote its services and allow potential customers to more easily manage a query online and then be directed to a contact source to complete a technician's visit.",
    tecnologies: [ "React JS", "tailwind", "Tailwind", "Node JS" ],
    deploy: "https://svsrmxzzy4moteyu.vercel.app/",
    repo: "https://github.com/luk444/Calderas-web",
    img: calderasweb,
    rol:"Full Stack Developer"
  },
  {
    title: "Development.of Furniture Ecommerce",
    date: "Sep 2022 - update Feb-2025",
    description:
      "I developed a complete e-commerce website for an upholstery and furniture business. It includes: login/register, a dashboard and admin panel to manage products, purchase/shipping status, and many other features.",
    tecnologies: ["React", "JavaScript", "Node JS", "Firebase" , "FirebaseAuth", "tailwind"],
    deploy: "https://hogar-muebles.netlify.app",
    repo: "https://github.com/luk444/ReactJs-final",
    img: mueblesweb,
    rol: "Full Stack Developer"
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
    img: classyclub,
  },
  {
    title: "Trade-Cripto Simulator (Simulator CriptoCost)",
    date: "March 2022",
    description:
      "The project consists of a web application designed to calculate the cost of cryptocurrencies and simulate the exchange of cryptocurrencies for local currency using a CoinGecko API to obtain the updated value of cryptocurrencies.",
    tecnologies: ["Javascript", "React JS", "Tailwind", "API"],
    deploy: "https://trade-cripto.vercel.app/trade",
    repo: "hhttps://github.com/luk444/TradeCripto",
    img: tradeCripto,
    rol:"Full Stack Developer"
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
