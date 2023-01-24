import About from "./about/About";
import MotionHoc from "./MotionHoc";

const ProjectsComponent = () => {
  return <About />;
};

const Projects = MotionHoc(ProjectsComponent);

export default Projects;
