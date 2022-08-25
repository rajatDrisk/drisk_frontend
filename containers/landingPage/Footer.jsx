// ! components and containers
import Image from "next/image";
import Link from "next/link";
//! images and icons
import logoWhite from "../../assets/logoWhite.png";
import twitter from "../../assets/icons/twitter.svg";
import email from "../../assets/icons/email.svg";
import phone from "../../assets/icons/phone.svg";

const Footer = () => {
  return (
    <footer className="footer row">
      <div className="footer__upper">
        <div className="footer__upper--wrapper">
          <div className="logo__wrap">
            <Image src={logoWhite} />
          </div>
          <div className="subheading__wrap">
            <p>Digital Crypto Insurance India based Company.</p>
          </div>
          <div className="social__wrap">
            <Image src={twitter} />
          </div>
        </div>
        <div className="footer__upper--wrapper">
          <ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Login</Link>
            </li>
            <li>
              <Link href="#">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="footer__upper--wrapper">
          <ul>
            <li>
              <div className="img__wrapper">
                <Image src={phone} />
              </div>
              <p>(+91) 9319 844 752</p>
            </li>
            <li>
              <div className="img__wrapper">
                <Image src={email} />
              </div>
              <p>hello@drisk.io</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="bottom__wrapper">
          <div className="text__wrapper">Privacy Policy</div>
          <div className="text__wrapper">Terms & Conditions</div>
          <div className="text__wrapper">Cookie Policy</div>
        </div>
        <div className="bottom__wrapper">
          <p>© dRisk 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
