"use client";

import { useState } from "react";
import styles from "./_theme.module.scss";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";

const ThemeToggle = () => {
  const [isOn, setIsOn] = useState<Boolean>(false);

  console.log(isOn ? `dark` : `light`);
  return (
    <div className={styles.container}>
      {isOn ? (
        <FaToggleOn onClick={() => setIsOn(false)} />
      ) : (
        <FaToggleOff onClick={() => setIsOn(true)} />
      )}
    </div>
  );
};

export default ThemeToggle;
