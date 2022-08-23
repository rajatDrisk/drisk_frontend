// ! components and containers

// ! images and icons
import logoWhite from "../../assets/logoWhite.png";
import Image from "next/image";
import Link from "next/link";
const NavBar = ({ navActive, setNavActive }) => {
  return (
    <nav className="navBar row">
      <div className="navBar__logo">
        <Image src={logoWhite} className="nav-logo" />
      </div>
      <div className="navBar__menu">
        <ul>
          <li
            className={navActive.home ? "active" : ""}
            onClick={() => {
              setNavActive({
                home: true,
                blog: false,
                login: false,
              });
            }}
            onMouseEnter={() => {
              setNavActive({
                home: true,
                blog: false,
                login: false,
              });
            }}
          >
            <Link href="#">Home</Link>
          </li>
          <li
            className={navActive.blog ? "active" : ""}
            onClick={() => {
              setNavActive({
                home: false,
                blog: true,
                login: false,
              });
            }}
            onMouseEnter={() => {
              setNavActive({
                home: false,
                blog: true,
                login: false,
              });
            }}
          >
            <Link href="#">Blog</Link>
          </li>
          <li
            className={navActive.login ? "active" : ""}
            onClick={() => {
              setNavActive({
                home: false,
                blog: false,
                login: true,
              });
            }}
            onMouseEnter={() => {
              setNavActive({
                home: false,
                blog: false,
                login: true,
              });
            }}
          >
            <Link href="#">Login</Link>
          </li>
          <li>
            <Link href="#">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
