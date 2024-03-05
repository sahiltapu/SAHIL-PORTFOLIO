import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import { styles } from "../styles";
import { services } from "../constrants/constrants";
// import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";

const ServiceCard = ({ index, title, icon, alt }) => (
  <>
    <CardContainer>
      <CardBody className="bg-gray-50 relative flex justify-evenly items-center flex-row gap-5 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white py-4"
        >
          {title}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-2">
          <img
            src={icon}
            height="1000"
            width="1000"
            // src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-60 h-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt={alt}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  </>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-x-4 gap-y-0">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
