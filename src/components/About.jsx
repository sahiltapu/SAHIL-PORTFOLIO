import React from "react";
import { motion } from "framer-motion";
// import { BackgroundGradient } from "./ui/BackgroundGradient";
import { styles } from "../styles";
import { services } from "../constrants/constrants";
// import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
// import { MovingBorder } from "./ui/MovingBorder";
import { sahilmishra } from "../assets";
import SectionWraper from "../hoc";

const ServiceCard = ({ index, title, icon, alt }) => (
  <>
    <CardContainer className="inter-var tracking-in-expand">
      <CardBody
        // variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="bg-[#1D1836] relative flex flex-row-reverse justify-evenly gap-5 items-center dark:hover:shadow-2xl dark:hover:shadow-emerald-300/[0.5] dark:bg-[#1D1836] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-5 oveview-card"
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-fuchsia-100 dark:text-white py-4"
        >
          {title}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-2 ">
          <img
            src={icon}
            height="1000"
            width="1000"
            // src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-60 h-60 object-cover rounded-xl group-hover/card:shadow-xl oveview-image tracking-in-expand"
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
      <div>
        <p className={`${styles.sectionSubText} swing-in-top-fwd`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} swing-in-top-fwd`}>
          Overview.
        </h2>
      </div>
      <div className="flex flex-row align-middle relative gap-11 swing-in-top-fwd">
        <div className="flex justify-center align-middle w-[30rem] mt-10 about-paragraph-div">
          <p className="text-secondary text-[17px] leading-[30px] about-paragraph">
            As a skilled software developer with expertise in React.js, Python,
            and a strong background in Web Development and Machine Learning, I
            excel at creating efficient, scalable, and user-friendly solutions
            to tackle real-world challenges. I am a quick learner and am eager
            to collaborate with you to breathe life into your ideas. Let's work
            together to bring your vision to fruition!
          </p>
        </div>
        <div className="sahil-image-div fancy-border-radius" />
        <img
            src={sahilmishra}
            title="Sahil Mishra"
            alt="sahil-mishra-image"
            className="sahil-image bounce-top cursor-pointer"
          />
      </div>
      <div className={`mt-20 flex flex-wrap justify-center gap-x-4 gap-y-0`}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWraper(About, "about");
