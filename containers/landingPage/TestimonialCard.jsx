// ! components and containers
import Image from "next/image";

const TestimonialCard = ({ image, name, handle, logo, tweet }) => {
  return (
    <div className="testimonialCard">
      <div className="testimonialCard__header">
        <div className="testimonialCard__header--logo">
          <Image src={image} />
        </div>
        <div className="testimonialCard__header--details">
          <h3 className="name">{name}</h3>
          <h4 className="handle">{handle}</h4>
        </div>
        <div className="testimonialCard__header--twitter">
          <Image src={logo} />
        </div>
      </div>
      <div className="testimonialCard__tweet">
        <p className="tweet">{tweet}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
