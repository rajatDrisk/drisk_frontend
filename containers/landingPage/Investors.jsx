// ! containers and components
import InvestorCard from "../landingPage/InvestorCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ! images and icons
import avatar from "../../assets/investor.png";

const Investors = () => {
  // ! moving slider
  const settings = {
    dots: false,
    arrows: false,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    autoplay: true,
    speed: 19999,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="investors row">
      <div className="section__heading">
        <h2 className="heading--secondary">
          Along with some Amazing Belivers :)
        </h2>
      </div>
      <div className="investors__wrapper">
        {/* <Slider {...settings}> */}
        <div className="investors__wrapper--wrapper">
          <InvestorCard
            profile={avatar}
            name="Sumit Gupta"
            desp="
Founder, CoinDCX"
            className="investor__card"
          />
          <InvestorCard
            profile={avatar}
            name="Sumit Gupta"
            desp="
Founder, CoinDCX"
            className="investor__card"
          />
        </div>
        <div className="investors__wrapper--wrapper">
          <InvestorCard
            profile={avatar}
            name="Sumit Gupta"
            desp="
Founder, CoinDCX"
            className="investor__card"
          />
          <InvestorCard
            profile={avatar}
            name="Sumit Gupta"
            desp="
Founder, CoinDCX"
            className="investor__card"
          />
        </div>
        <div className="investors__wrapper--wrapper">
          <InvestorCard
            profile={avatar}
            name="Sumit Gupta"
            desp="
Founder, CoinDCX"
            className="investor__card"
          />
          <InvestorCard
            profile={avatar}
            name="Sumit Gupta"
            desp="
Founder, CoinDCX"
            className="investor__card"
          />
        </div>
        <div className="investors__wrapper--wrapper">
          <InvestorCard
            profile={avatar}
            name="Sumit Gupta"
            desp="
Founder, CoinDCX"
            className="investor__card"
          />
          <InvestorCard
            profile={avatar}
            name="Sumit Gupta"
            desp="
Founder, CoinDCX"
            className="investor__card"
          />
        </div>
        {/* </Slider> */}
      </div>
    </section>
  );
};

export default Investors;
