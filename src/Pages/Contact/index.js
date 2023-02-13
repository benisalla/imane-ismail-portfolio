import IMANE from "../../Components/Logos/IMANE";
import ISMAIL from "../../Components/Logos/ISMAIL";
import MotionHoc from "../MotionHoc";
import SocialLink from "../../Components/SocialLink/SocialLink";
import "./Contact.css"
const ContactComponent = () => {


  return (
    <div className="home">
       <div className="imanePart">
          <IMANE className="imane"/>

          <div className="desc right">
            <h3> I am Mouatassem Imane</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, magnam, voluptatibus corrupti assumenda quo numquam fuga eaque doloribus amet perferendis fugiat consequuntur quod, voluptate sit exercitationem a eveniet repellendus blanditiis.</p>
            <div   className="iconsRight">
          <SocialLink
              linkedin="https://www.linkedin.com/in/imane-mouatassem-3aa79a200/"
              github="https://github.com/ImaneMouatassem"
              gmail=""
              slack=""
        />
          </div>
      
          </div>
          
      </div>
  
      <div className="ismailPart">
        <ISMAIL className="ismail"/>

        <div className="desc left">
          <h3> I am Ben alla Ismail</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam quaerat praesentium? Harum, iusto. Nihil, placeat. Itaque repellendus odio, expedita possimus rerum laborum pariatur nam sed vero libero necessitatibus eligendi!</p>
          <div className="iconsLeft">
        <SocialLink 
          linkedin=""
          github="https://github.com/benisalla"
          gmail=""
          slack=""
        />
        </div> 
        </div>
       
       
      </div>
    </div>
  );
};

const Contact = MotionHoc(ContactComponent);

export default Contact;
