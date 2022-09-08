import emailIcon from "../../assets/email-icon.svg";
import "./EmailLink.css";

function EmailLink() {
  return (
    <a href="mailto:tristan.varewijck@gmail.com" className="email-link">
      <img src={emailIcon} alt="email-icon" />
      <p>Email</p>
    </a>
  );
}

export default EmailLink;
