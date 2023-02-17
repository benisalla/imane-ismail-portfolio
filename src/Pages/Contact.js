import ContactContent from "./ContactContent";
import MotionHoc from "./MotionHoc";

const ContactComponent = () => {
  return <ContactContent />
};

const Contact = MotionHoc(ContactComponent);

export default Contact;
