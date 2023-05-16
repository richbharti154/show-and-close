import React, { useState } from "react";
import styles from "./Popup.module.css";

 export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.popup}>
      <button onClick={togglePopup}>Show Popup</button>
      {isOpen && (
        <div className={styles.popupContent}>
          <div className={styles.popupBlur} onClick={togglePopup} />
          <div className={styles.popupInner}>
            <h2>Popup Title</h2>
            <p>Popup content goes here...</p>
            <button onClick={togglePopup}>Close Popup</button>
          </div>
        </div>
      )}
    </div>
  );
};

