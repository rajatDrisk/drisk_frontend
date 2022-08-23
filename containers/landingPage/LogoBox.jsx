// ! components and containers
import Image from "next/image";
// ! icons and images
import forbes from "../../assets/landingPage/forbes.svg";
import fortune from "../../assets/landingPage/fortune.svg";
import liveMint from "../../assets/landingPage/liveMint.svg";
import moneyControl from "../../assets/landingPage/moneyControl.svg";
import economicsTimes from "../../assets/landingPage/economicsTimes.svg";
import cnbc from "../../assets/landingPage/cnbc.svg";

export const LogoBox = () => {
  return (
    <div className="logoBox">
      <h2 className="logoBox__heading">Trusted By</h2>
      <div className="logoBox__box">
        <div className="logo">
          <Image src={forbes} />
        </div>
        <div className="logo">
          <Image src={fortune} />
        </div>
        <div className="logo">
          <Image src={liveMint} />
        </div>
        <div className="logo">
          <Image src={moneyControl} />
        </div>
        <div className="logo">
          <Image src={economicsTimes} />
        </div>
        <div className="logo">
          <Image src={cnbc} />
        </div>
      </div>
    </div>
  );
};
