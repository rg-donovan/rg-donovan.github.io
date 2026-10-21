import email from "./images/email.svg";
import linkedIn from "./images/linkedin.svg";
import github from "./images/github.svg";
import resume from "./images/resume.svg";
import resumeDoc from "./Regina_Resume.pdf";

// Contact links shared by the floating Nav and the Let's Connect section.
const links = [
  { label: "Email", href: "mailto:rg.serrano.03@gmail.com", icon: email, external: false, navClass: "px-3 py-4", iconClass: "w-8 mr-2" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rg-donovan/", icon: linkedIn, external: true, navClass: "p-1", iconClass: "w-10 mr-1" },
  { label: "Resume", href: resumeDoc, icon: resume, external: true, navClass: "p-1", iconClass: "w-10 mr-2" },
  { label: "Github", href: "https://github.com/rg-donovan", icon: github, external: true, navClass: "p-1", iconClass: "w-10" },
];

export default links;
