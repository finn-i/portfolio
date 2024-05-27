import { Blocks, Camera, Code, Fish, GraduationCap, Library, Map } from "lucide-react";

export const projects = [
  {
    title: "Digital Library Developer",
    description: "Software engineer expanding the Greenstone Digital Library Suite.",
    github: "https://github.com/ateaspace/te-reo-autocomplete",
    img: "./src/assets/gsdl.png",
    icon: <Library />,
    stack: ["react", "python", "java", "perl"]
  },
  {
    title: "Web Developer",
    description: "Site maintenance for Newstead Country Preschool updating content and plugins.",
    link: "https://newsteadcountrypreschool.co.nz/",
    img: "./src/assets/ncp.png",
    icon: <Blocks />,
    stack: ["wordpress"]
  },
  {
    title: "Fly Recipe Index",
    description: "Allows fly tiers to explore a collection of patterns used for fly fishing.",
    link: "https://flyrecipeindex.com",
    img: "./src/assets/fri.png",
    icon: <Fish />,
    stack: ["react", "typescript", "mui", "aws"]
  },
  {
    title: "NZ Outdoor Maps",
    description: "Web app using ARCGIS layers to visualise geographical features.",
    link: "https://tramping-maps.vercel.app",
    github: "https://github.com/finn-i/tramping-maps",
    img: "./src/assets/doc.png",
    icon: <Map />,
    stack: ["react", "mui", "leaflet", "arcgis"]
  },
  {
    title: "MSc, Computer Science",
    description: "Thesis investigating the retention of edits in diarisation output combination.",
    github: "https://github.com/finn-i/dover-lock",
    img: "./src/assets/uow.png",
    icon: <GraduationCap />,
    stack: ["LaTeX"]
  },
  {
    title: "Dip, Digital Photography",
    description: "Developed practical and professional photography skills at SIT.",
    img: "./src/assets/sit.png",
    icon: <Camera />,
    stack: ["adobe suite"]
  },
  {
    title: "This Website",
    description: "Personal portfolio website.",
    github: "https://github.com/finn-i/portfolio",
    img: "./src/assets/sit.png",
    icon: <Code />,
    stack: ["react", "typescript", "three.js", "framer-motion", "aws"]
  },

]

export const theme = {
  primary: "#0C1817",
  secondary: "#F0EDCC",
  accent: "#00ADB5"
}