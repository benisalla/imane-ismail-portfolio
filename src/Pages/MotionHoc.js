import { motion } from "framer-motion";

const MotionHoc = (Component) => {
  return function HOC() {
    return (
      <motion.div
        initial={{ y: 500 }}
        animate={{
          y: 0,
          transition: { duration: 0.5, type: "spring" },
        }}
        exit={{
          y: -500,
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
        style={{
          width: "90vw",
          height: "84vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: "5vh",
          left: "8vw",
          zIndex: 101,
          overflow: 'hidden',
          aspectRatio: 1.75,
          padding: "2em",
          borderRadius: "1em",
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
