import twitterIcon from "../../assets/twitter-icon.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="social-items">
        <li>
          <img src={twitterIcon} alt="twitter icon" />
        </li>
        <li>
          <img src={facebookIcon} alt="facebook icon" />
        </li>
        <li>
          <img src={instagramIcon} alt="instagram icon" />
        </li>
        <li>
          <img src={linkedinIcon} alt="linkedin icon" />
        </li>
        <li>
          <img src={githubIcon} alt="github icon" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
