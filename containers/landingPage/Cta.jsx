// ! containers and components
import Image from "next/image";
// ! images and icons
import sampleMockup from "../../assets/landingPage/sampleMock.png";
import playStore from "../../assets/landingPage/playStore.png";
import appStore from "../../assets/landingPage/appStore.png";
const Cta = () => {
  return (
    <section className="cta">
      <div className="cta__text">
        <div className="cta__text--heading">
          <h2>Start taking our cover and save big!</h2>
          <h3>
            You can easily download our app from google play or app store and
            start saving!
          </h3>
        </div>
        <div className="cta__text--btn">
          <div className="cta__text--btn--logo">
            <Image src={playStore} />
          </div>
          <div className="cta__text--btn--logo">
            <Image src={appStore} />
          </div>
        </div>
      </div>
      <div className="cta__image">
        <Image src={sampleMockup} />
      </div>
    </section>
  );
};

export default Cta;
