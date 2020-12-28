import React from "react";
import img from "../../Img/messenger.png";
import styles from "./Messenger.css";

const Messenger = () => {
  return (
    <div className="messenger">
      <a href="#!">
        <img src={img} alt="messenger" />
      </a>
    </div>
  );
};

export default Messenger;
