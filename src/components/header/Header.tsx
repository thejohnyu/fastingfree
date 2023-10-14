import "@aws-amplify/ui-react/styles.css";
import reactLogo from "../../assets/react.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header-parent">
      <img src={reactLogo}></img>
      <h4>Fasting Free</h4>
      <div>Profile Icon</div>
    </div>
  )
}

export default Header;
