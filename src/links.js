import email from "./images/email.svg";
import linkedIn from "./images/linkedin.svg";
import github from "./images/github.svg";
import resume from "./images/resume.svg";
import resumeDoc from "./Regina_Resume.pdf";

// Contact links shared by the floating Nav and the Let's Connect section.
const links = [
  { label: "Email", href: "mailto:rg.serrano.03@gmail.com", icon: email, external: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rg-serrano/", icon: linkedIn, external: true },
  { label: "Resume", href: resumeDoc, icon: resume, external: true },
  { label: "Github", href: "https://github.com/rgserrano", icon: github, external: true },
];

export default links;
