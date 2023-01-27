import { AboutContent } from "./AboutContent";
import MotionHoc from "./MotionHoc";

const AboutComponent = () => {
  return <AboutContent />;
};

const About = MotionHoc(AboutComponent);

export default About;
