// ! containers and components
import Image from "next/image";

// ! images and icons
import binance from "../../assets/landingPage/binance.png";
import wazirX from "../../assets/landingPage/wazirX.png";
import random from "../../assets/landingPage/random.png";
import playStore from "../../assets/landingPage/playStore.png";
import appStore from "../../assets/landingPage/appStore.png";
import { LogoBox } from "./LogoBox";

// ! third party library
import ReactTooltip from "react-tooltip";

const Header = () => {
  return (
    <div className="header row">
      <div className="header__content">
        <div className="header__content--heading">
          <h1 className="heading--primary">
            Forget everything you heard
            <br /> about crypto trade losses
          </h1>
        </div>
        <div className="header__content--subheading">
          <h3 className="heading--sub">
            Supported with the world’s largest exchanges
          </h3>
          <div className="exchangeBox">
            <div className="exchangeBox--logoContainer">
              <div className="logo" data-tip="Binance">
                <Image src={binance} />
              </div>
              <ReactTooltip place="top" type="dark" effect="float" />
              <div className="logo">
                <Image data-tip="WazirX" src={wazirX} />
              </div>
              <div className="logo">
                <Image data-tip="CoinDCX" src={random} />
              </div>
            </div>
            <p className="exchangeBox--text">+10 more</p>
          </div>
        </div>
        <div className="storesLogo">
          <div className="storesLogo--logo">
            <Image src={playStore} />
          </div>
          <div className="storesLogo--logo">
            <Image src={appStore} />
          </div>
        </div>
      </div>

      <div className="header__logoBox__wrapper">
        <LogoBox />
      </div>
    </div>
  );
};

export default Header;
