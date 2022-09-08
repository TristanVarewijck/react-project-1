import "./Info.css";

// components
import EmailLink from "../EmailLink";
import About from "../About";
import Interests from "../Interests";

function Info() {
  return (
    <div className="info">
      <div className="info-container">
        <h1>Laura Smith</h1>
        <h4>Frontend Developer</h4>
        <small>laurasmith.website</small>
      </div>
      <EmailLink />
      <About />
      <Interests />
    </div>
  );
}

export default Info;
