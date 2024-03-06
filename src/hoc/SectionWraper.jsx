import { styles } from "../styles";
import { motion } from "framer-motion";

const SectionWraper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWraper;
// import React, { useState } from "react";
// import { styles } from "../styles";

// const StarWrapper = (Component, idName) => {
//   const HOC = () => {
//     const [isLoading, setIsLoading] = useState(false);

//     const handleClick = () => {
//       setIsLoading(true);

//       // Perform any async operations here (e.g., fetching data, etc.)
//       // Once the operation is complete, you can set isLoading to false.

//       // Example:
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 2000); // Simulating a 2-second loading time, replace this with your actual loading logic
//     };

//     return (
//       <section
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.25 }}
//         className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
//       >
//         <span className="hash-span" id={idName} onClick={handleClick}>
//           &nbsp;
//         </span>

//         {isLoading ? (
//           <p>Loading...</p>
//         ) : (
//           <Component />
//         )}
//       </section>
//     );
//   };

//   return HOC;
// };

// export default StarWrapper;

