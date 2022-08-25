// ! components and containers
import Image from "next/image";
import { useState } from "react";
import BtnToggle from "../../components/BtnToggle";

// ! images and icons
import mockup from "../../assets/landingPage/mockup.png";
const ProductUse = () => {
  const [clickToggle, setClickToggle] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  });
  return (
    <section className="productUse row">
      <div className="section__heading">
        <h2 className="heading--secondary">how to use drisk </h2>
        <h3 className="heading--sub">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </h3>
      </div>
      <div className="productUse__toggle">
        <BtnToggle />
      </div>
      <div className="productUse__content">
        <div className="productUse__content--text">
          {/* Containers */}
          <div
            className={clickToggle.item1 ? "container active" : "container"}
            onClick={() =>
              setClickToggle({
                item1: !clickToggle.item1,
                item2: false,
                item3: false,
                item4: false,
                item5: false,
              })
            }
          >
            <div className="label">Sign Up/ Download the app</div>
            <div className="content">
              Sign up on the browser or Download the app. Available on both
              Android and iOS.
            </div>
          </div>
          <div
            className={clickToggle.item2 ? "container active" : "container"}
            onClick={() =>
              setClickToggle({
                item1: false,
                item2: !clickToggle.item2,
                item3: false,
                item4: false,
                item5: false,
              })
            }
          >
            <div className="label">Import Trades</div>
            <div className="content">
              Sign up on the browser or Download the app. Available on both
              Android and iOS.
            </div>
          </div>
          <div
            className={clickToggle.item3 ? "container active" : "container"}
            onClick={() =>
              setClickToggle({
                item1: false,
                item2: false,
                item3: !clickToggle.item3,
                item4: false,
                item5: false,
              })
            }
          >
            <div className="label">Buy Cover</div>
            <div className="content">
              Sign up on the browser or Download the app. Available on both
              Android and iOS.
            </div>
          </div>
          <div
            className={clickToggle.item4 ? "container active" : "container"}
            onClick={() =>
              setClickToggle({
                item1: false,
                item2: false,
                item3: false,
                item4: !clickToggle.item4,
                item5: false,
              })
            }
          >
            <div className="label">Claim your losses</div>
            <div className="content">
              Sign up on the browser or Download the app. Available on both
              Android and iOS.
            </div>
          </div>
          <div
            className={clickToggle.item5 ? "container active" : "container"}
            onClick={() =>
              setClickToggle({
                item1: false,
                item2: false,
                item3: false,
                item4: false,
                item5: !clickToggle.item5,
              })
            }
          >
            <div className="label">Buy Cover from preferred exchange</div>
            <div className="content">
              Sign up on the browser or Download the app. Available on both
              Android and iOS.
            </div>
          </div>
        </div>
        <div className="productUse__content--image">
          <Image src={mockup} />
        </div>
      </div>
    </section>
  );
};

export default ProductUse;
