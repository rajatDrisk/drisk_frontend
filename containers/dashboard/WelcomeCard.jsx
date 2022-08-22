import welcomeAvatar from "../../assets/welcomeAvatar.png";
import Image from "next/image";
const WelcomeCard = () => {
  return (
    <div className="welcomeCard">
      <div className="welcomeCard__content">
        <h2>Hello Alia</h2>
        <p>
          We are glad to have you back on dRisk. Ready to link exchanges, buy
          covers and claim losses with us?
        </p>
      </div>
      <div className="welcomeCard__img">
        <Image src={welcomeAvatar} alt="animated-avatar" />
      </div>
    </div>
  );
};

export default WelcomeCard;
