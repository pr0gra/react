import styles from "./Header.module.css";
import React from "react";
import mainLogo from '../../assets/images/logo.svg'
import lightIcon from '../../assets/icons/light.svg'
import menuIcon from '../../assets/icons/menu.svg'


export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["logo"]}>
        <img src={mainLogo} alt="" />
      </div>

      <div className={styles["light"]}><img src={lightIcon} alt="" /></div>

      <div className={styles["menu"]}> <img src={menuIcon} alt="" /></div>
    </header>
  );
}






