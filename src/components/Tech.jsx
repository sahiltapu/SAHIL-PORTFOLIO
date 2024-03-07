import React from "react";
import { BallCanvas } from "./canvas";
import SectionWraper from "../hoc";
import { technologies } from "../constrants/constrants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center gap-10">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Tech I have worked with
        </p>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SectionWraper(Tech, "");
