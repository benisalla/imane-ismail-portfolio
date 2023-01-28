import MotionHoc from "./MotionHoc";
import { TeamContent } from "./TeamContent";

const TeamComponent = () => {
  return <TeamContent />;
};

const Team = MotionHoc(TeamComponent);

export default Team;
