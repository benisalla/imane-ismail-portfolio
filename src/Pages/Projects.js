import MotionHoc from "./MotionHoc";
import { ProjectsContent } from "./ProjectsContent";

const ProjectsComponent = () => {
  return <ProjectsContent />;
};

const Projects = MotionHoc(ProjectsComponent);

export default Projects;
