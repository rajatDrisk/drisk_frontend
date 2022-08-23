// ! components and containers
import Image from "next/image";

const ServiceCard = ({ icon }) => {
  return (
    <div className="serviceCard">
      <div className="serviceCard__header">
        <h3>Incredible Pricing</h3>
        <div className="serviceCard__header--icon">
          <div className="icon__wrapper">
            <Image src={icon} />
          </div>
        </div>
      </div>
      <div className="serviceCard__content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
