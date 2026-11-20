export type Category = "Software" | "Marketing" | "Design";

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  category: Category;
  image?: string;
  link?: string;
  skills?: string[];
};

export const certificates: Certificate[] = [
 {
  title: "Python Crash Course",
  issuer: "Coursera",
  date: "2026",
  category: "Software",
  image: "/crash.png",
  link: "https://www.coursera.org/account/accomplishments/verify/JQA835FIEAB1",
  skills: ["Python", "Variables", "Data Types", "Functions", "OOP"],
},
{
  title: "Software Engineering",
  issuer: "Coursera",
  date: "2026",
  category: "Software",
  image: "/software.png",
  link: "https://www.coursera.org/account/accomplishments/verify/XP2WPIPBSH8X",
  skills: ["Software Development", "Agile Methodologies", "Version Control", "Testing"],
},
{
  title: "DevOps",
  issuer: "Coursera",
  date: "2026",
  category: "Software",
  image: "/devops.png",
  link: "https://www.coursera.org/account/accomplishments/certificate/5HKLP8F2FH8U",
  skills: ["DevOps", "Continuous Integration", "Continuous Deployment", "Infrastructure as Code"],
},
  {
    title: "Product Design",
    issuer: "Uxcel Design",
    date: "2026",
    category: "Design",
    image: "/Product.png",
    link: "https://app.uxcel.com/certificates/BF7Q1XS0NMGX",
    skills: ["User Interface", "User Experience", "Design Principles"],
  },
  {
    title: "Accessibility and Inclusive Design",
    issuer: "Uxcel Design",
    date: "2026",
    category: "Design",
    image: "/accessibility.png",
    link: "https://app.uxcel.com/certificates/SRYKAA4VQBGM",
    skills: ["Accessibility", "Inclusive Design", "WCAG"],
  },
  {
    title: "UX Design Foundation",
    issuer: "Uxcel Design",
    date: "2026",
    category: "Design",
    image: "/ux.png",
    link: "https://app.uxcel.com/certificates/AOWRQNMKXK2W",
    skills: ["User Experience", "User Research", "Design Principles"],
  },
];