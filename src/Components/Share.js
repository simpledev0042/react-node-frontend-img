import BookmarkIcon from "../assets/bookmark.svg";

import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import "./Share.css";

const fbRedirect = () => {
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=#",
    "_blank"
  );
};

const twitterRedirect = () => {
  window.open(
    "https://twitter.com/intent/tweet?url=#",
    "_black"
  );
};

const linkedinRedirect = () => {
  window.open(
    "https://www.linkedin.com/sharing/share-offsite/?url=#",
    "_blank"
  );
};

const Share = () => {
  return (
    <div className="share-container">
      <div className="bookmark">
        <h3>PRESS CTRL / CMD + D TO BOOKMARK</h3>
        <img alt="Bookmark" src={BookmarkIcon} />
      </div>

      <div className="sharecontainer-line"></div>

      <div className="share-links">
        <h3>SHARE ON</h3>
        <div className="share-buttons">
          <i className="facebook" onClick={fbRedirect} style={{ fontSize: "40px" }}>
            <FaFacebookSquare />
          </i>
          <i
            className="twitter"
            onClick={twitterRedirect}
            style={{ fontSize: "40px" }}
          ><FaTwitterSquare /></i>
          <i
            className="linkedin"
            onClick={linkedinRedirect}
            style={{ fontSize: "40px" }}
          ><FaLinkedin /></i>
        </div>
      </div>
    </div>
  );
};

export default Share;
