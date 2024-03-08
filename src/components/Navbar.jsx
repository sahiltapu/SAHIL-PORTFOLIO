import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { navLinks } from "../constrants/constrants";
import { logo, menu, close } from "../assets";
// import LOGO from "../assets/LOGO.png";
import LOGO1 from "../assets/LOGO1.gif";
import { getRandomProfession } from "../utils/profession";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [currentProfession, setCurrentProfession] = useState(
    getRandomProfession()
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProfession(getRandomProfession());
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex item-center gap-1"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={LOGO1}
            alt="logo"
            className="w-[190px] h-[60px] object-cover bg-primary m-0 p-0 logo"
          />
          {/* <LogoVideo className="w-9 h-9 object-contain"  /> */}
          <p
            className="text-white text-[18] font-bold curor-pointer flex tracking-in-expand"
            style={{ alignItems: "center" }}
          >
            SAHIL MISHRA &nbsp;
            <span className="sm:block hidden tracking-in-expand">
              | &nbsp;{currentProfession}
            </span>
          </p>
        </Link>
        <ul className="list-non hidden lg:flex flex-row gap-6 tracking-in-expand">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-non flex justify-end item-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-popins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
