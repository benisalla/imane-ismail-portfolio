import IMANE from "../../Components/Logos/IMANE";
import ISMAIL from "../../Components/Logos/ISMAIL";
import SocialLink from "../../Components/SocialLink/SocialLink";
import "./Contact.css"
import { PageLayout } from "../../Components/PageLayout";
import ReactCurvedText from 'react-curved-text';

const ContactContent = () => {


  return (
    <PageLayout isAnim={false}>

      <div className="home">
        <div className="part">
          <IMANE className="logo" />

          <div className="desc shape">
            <h3>
              <ReactCurvedText
                width={300}
                height={300}
                cx="150"
                cy="145"
                rx={140}
                ry={135}
                startOffset={50}
                reversed={true}
                tspanProps={{ dy: '10' }}
                textPathProps={{"fill": "#647BFF"}}
                textProps={{ style: { fontSize: '16'} }}
                text="hi, these are my social media accounts🥰"

              />
            </h3>
            <div className="icons">
              <SocialLink
                linkedin="https://www.linkedin.com/in/imane-mouatassem-3aa79a200/"
                github="https://github.com/ImaneMouatassem"
                gmail="mailTo:imane12mouatassem@gmail.com"
                twitter="https://twitter.com/ImaneMouatassem?t=7xkA4m0O70HTZaqtXXkBTg&s=09"
              />
            </div>
          </div>
        </div>

        <div className="part">
          <ISMAIL className="logo" />

          <div className="desc shape">
            <h3
            >
              <ReactCurvedText
                width={300}
                height={300}
                cx="150"
                cy="145"
                rx={140}
                ry={135}
                startOffset={50}
                reversed={true}
                tspanProps={{ dy: '10' }}
                textPathProps={{"fill": "#647BFF"}}
                textProps={{ style: { fontSize: '16' } }}
                text="hello, these are my social media accounts😁"
              />
            </h3>

            <div className="icons"
              sx={{ marginTop: "100" }}  >
              <SocialLink
                linkedin="https://www.linkedin.com/in/ismail-ben-alla-7144b5221/"
                github="https://github.com/benisalla"
                gmail="mailTo:ismailbenalla52@gmail.com"
                twitter="https://twitter.com/ismail_ben_alla"
              />
            </div>
          </div>


        </div>
      </div>
    </PageLayout>
  );
};

export default ContactContent;
