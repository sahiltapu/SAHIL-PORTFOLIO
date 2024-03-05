import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";
import { getRandomProfession } from "../utils/profession";

const Hero = () => {
  const [currentProfession , setCurrentProfession] = useState(getRandomProfession())
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProfession(getRandomProfession());
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] swing-in-top-fwd" />
          <div className="w-1 sm:h-80 h-40 violet-gradient swing-in-top-fwd" />
        </div>

        <div className="tracking-in-expand">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF] cursor-pointer">Sahil</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 flex gap-2`}>
            a <span className="sm:flex text-[#915EFF]" > {currentProfession} </span>
          </p>
        </div>
      </div>

      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center swing-in-top-fwd'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
