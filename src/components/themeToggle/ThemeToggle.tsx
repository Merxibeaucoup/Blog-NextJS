"use client";

import { useState } from "react";
import styles from "./_theme.module.scss";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";

/**
 * @description sets a state variable `isOn` to control the display of either a light
 * or dark theme indicator icon using the `FaToggleOn` and `FaToggleOff` components.
 * 
 * @returns { boolean } a button with a light or dark theme based on the current state
 * of the `isOn` variable.
 */
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
