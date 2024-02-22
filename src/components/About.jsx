import React from "react";
// import motion from "framer-motion";
// import tilt from "react-tilt";
import { styles } from "../styles";
import { services } from "../constrants/constrants.js";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </div>
    </>
  );
};

export default About;
