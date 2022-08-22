import icn_menu from "../assets/icons/menu.svg";
import icn_link from "../assets/icons/link.svg";
import icn_umbrella from "../assets/icons/umbrella.svg";
import icn_file from "../assets/icons/file.svg";
import icn_dollar from "../assets/icons/dollar.svg";
import icn_leftArrow from "../assets/icons/left.svg";
import { useState, useRef } from "react";
import Image from "next/image";

const SideNav = () => {
  const [toggle, setToggle] = useState(false);
  const sideNavRef = useRef();
  console.log(sideNavRef);
  return (
    <>
      <div
        className={toggle ? "sideNav sideNav--hide" : "sideNav"}
        ref={sideNavRef}
      >
        <ul className="sideNav__menu">
          <li className="sideNav__menu__item">
            <Image src={icn_menu} alt="menu-icon" />
            <p className="item">dashboard</p>
          </li>
          <li className="sideNav__menu__item">
            <Image src={icn_link} alt="link-icon" />
            <p className="item">link exchange</p>
          </li>
          <li className="sideNav__menu__item">
            <Image src={icn_umbrella} alt="umbrella-icon" />
            <p className="item">buy cover</p>
          </li>
          <li className="sideNav__menu__item">
            <Image src={icn_file} alt="receipt-icon" />
            <p className="item">all covers</p>
          </li>
          <li className="sideNav__menu__item">
            <Image src={icn_dollar} alt="dollar-icon" />
            <p className="item">all claims</p>
          </li>
        </ul>
        <div
          className="sideNav__toggle"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <Image src={icn_leftArrow} alt="arrow" />
        </div>
      </div>
    </>
  );
};

export default SideNav;
