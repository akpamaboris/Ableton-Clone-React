//I IMPORT THE IMAGES I NEED FOR THE HEADER
import logHor from "../ressources/images/header-logo-hor.png";
import logVert from "../ressources/images/header-logo-vert.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoRow">
        <img
          src={logVert}
          alt="logo vertical of ableton"
          className="logoHeader"
        />
        <img
          src={logHor}
          alt="logo horizontal of ableton"
          className="logoHeader"
        />
      </div>
      <div className="headerSec1">
        <span className="spHeSec1F">Live </span>
        <span className="spHeSec1">Push </span>
        <span className="spHeSec1">Link </span>
        <span className="spHeSec1">Shop </span>
        <span className="spHeSec1">Packs </span>
        <span className="spHeSec1">Help </span>
        <span className="spHeSec1 spHeSec1Pink">More + </span>
      </div>
      {/*DUMMY DIV TO ADJUST THE JUSTIFY CONTENT SPACE BETWEEN */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      {/*DUMMY DIV TO ADJUST THE JUSTIFY CONTENT SPACE BETWEEN */}
      <div className="headerSec2">
        <div></div>
        <div></div>
        <span className="spHeSec2F">Try Live for free </span>
        <span className="spHeSec2L">Log in or register </span>
      </div>
      {/*DUMMY DIV TO ADJUST THE JUSTIFY CONTENT SPACE BETWEEN */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      {/*DUMMY DIV TO ADJUST THE JUSTIFY CONTENT SPACE BETWEEN */}
    </div>
  );
};

export default Header;
