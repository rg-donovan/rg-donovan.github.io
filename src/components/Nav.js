import InfoIcon from "../images/InfoIcon.jsx";
import links from "../links";
import { useState } from "react";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="fixed top-20 right-8 overflow-hidden flex flex-col items-center z-50"
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      <div className="fixed top-8 z-50 rounded-lg mb-4 w-16 h-16 cursor-pointer">
        <InfoIcon fill={isVisible ? "#6366F1" : "#1f232b"} />
      </div>
      <nav className={`relative z-0 mt-8 flex flex-col items-center gap-4 transform transition duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-96"}`}>
        {links.map(({ label, href, icon, external, navClass }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(external && { target: "_blank", rel: "noreferrer" })}
            className={`hover:bg-indigo-500 bg-gray-800 w-14 rounded-full ${navClass}`}
          >
            <img src={icon} alt="" />
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
