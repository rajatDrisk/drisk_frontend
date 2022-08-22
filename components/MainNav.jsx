// ! icons
import logoMain from "../assets/mainLogo.png";
import icn_headphone from "../assets/icons/headphone.svg";
import avatar from "../assets/avatar.png";
import icn_downArrow from "../assets/icons/down.svg";
import Image from "next/image";

// ! third party components
// import { Dropdown, Menu } from "antd";
// import "antd/dist/antd.css";

const MainNav = () => {
  // const menu = (
  //   <Menu
  //     className="titleList"
  //     items={[
  //       {
  //         label: "Personal Info",
  //         key: "1",
  //       },
  //       {
  //         label: "Security",
  //         key: "2",
  //       },
  //       {
  //         label: "Preferences",
  //         key: "3",
  //       },
  //       {
  //         label: "Payments",
  //         key: "4",
  //       },
  //       {
  //         type: "divider",
  //       },
  //       {
  //         label: "Sign Out",
  //         key: "5",
  //       },
  //     ]}
  //   />
  // );
  return (
    <>
      <nav className="mainNav">
        <div className="mainNav__logo">
          <Image src={logoMain} alt="logo" />
        </div>
        <div className="mainNav__menu">
          <div className="mainNav__menu__item mainNav__menu__item--headphone">
            <Image src={icn_headphone} alt="" />
          </div>
          <div className="mainNav__menu__item mainNav__menu__item--user">
            <Image src={avatar} alt="user-profile" />
          </div>
          <div className="mainNav__menu__item mainNav__menu__item--down">
            {/* <Dropdown overlay={menu} trigger={["click"]}>
              <img
                onClick={(e) => e.preventDefault()}
                src={icn_downArrow}
                alt="downarrow"
              />
            </Dropdown> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
