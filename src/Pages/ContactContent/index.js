import IMANE from "../../Components/Logos/IMANE";
import ISMAIL from "../../Components/Logos/ISMAIL";
import SocialLink from "../../Components/SocialLink/SocialLink";
import "./Contact.css"
import { PageLayout } from "../../Components/PageLayout";
import ReactCurvedText from 'react-curved-text';

const ContactContent = () => {


  return (
    <PageLayout>

      <div className="home">
        <div className="imanePart">
          <IMANE className="imane" />

          <div className="desc shape">
            <h3>
              <ReactCurvedText
                width={370}
                height={300}
                cx="160"
                cy="97"
                rx={164}
                ry={80}
                startOffset={50}
                reversed={true}
                tspanProps={{ dy: '10' }}
                textProps={{ style: { fontSize: '16' } }}
                text="hi, these are my social media accounts."
              />
            </h3>
            <div className="icons">
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
          <ISMAIL className="ismail" />

          <div className="desc shape">
            <h3>
              <ReactCurvedText
                width={370}
                height={300}
                cx="160"
                cy="97"
                rx={164}
                ry={80}
                startOffset={50}
                reversed={true}
                tspanProps={{ dy: '10' }}
                textProps={{ style: { fontSize: '16' } }}
                text="hello, these are my social media accounts."
              />
            </h3>

            <div className="icons">
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
    </PageLayout>
  );
};

export default ContactContent;
