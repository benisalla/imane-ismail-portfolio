import { motion } from "framer-motion";

const MotionHoc = (Component) => {
  return function HOC() {
    return (
      <motion.div
        initial={{ y: 900 }}
        animate={{
          y: 0,
          transition: { duration: 0.4, type: "spring" },
        }}
        exit={{
          y: -1500,
          transition: { duration: 0.4, type: "spring", ease: "easeInOut" },
        }}
        style={{
          width: "94vw",
          height: "86vh",
          position: "fixed",
          top: "4vh",
          bottom: "3vh",
          left: "3vw",
          zIndex: 1,
          overflow: 'hidden',
          aspectRatio: 1.75,
          padding: "0.5em",
          borderRadius: "1em",
          // background: "#647bff",
          background: "linearGradient(155deg, rgba(255, 255, 255, 0.15), transparent)",
          backdropFilter: "blur(3px)",
          boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.1), inset 0 0 0 2px rgba(255, 255, 255, 0.1)",
        }
        }
      >
        <Component />
      </motion.div >
    );
  };
};

export default MotionHoc;
