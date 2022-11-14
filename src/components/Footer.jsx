import twitterIcon from "../assets/twitterIcon.png"
import facebookIcon from "../assets/facebookIcon.png"
import instagramIcon from "../assets/instagramIcon.png"
import githubIcon from "../assets/githubIcon.png"

const Footer = () => (
  <footer className="footer">
    <a href="https://twitter.com/">
      <img src={twitterIcon} alt="Twitter Icon"/>
    </a>
    <a href="https://facebook.com">
      <img src={facebookIcon} alt="Facebook Icon"/>
    </a>
    <a href="https://instagram.com">
      <img src={instagramIcon} alt="Instagram Icon"/>
    </a>
    <a href="https://github.com">
      <img src={githubIcon} alt="GitHub Icon"/>
    </a>
  </footer>
);

export default Footer; 