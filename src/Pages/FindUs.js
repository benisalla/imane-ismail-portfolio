import { FindUsContent } from "./FindUsContent";
import MotionHoc from "./MotionHoc";

const FindUsComponent = () => {
  return <FindUsContent />;
};

const FindUs = MotionHoc(FindUsComponent);

export default FindUs;
