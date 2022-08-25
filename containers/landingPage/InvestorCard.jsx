// ! components and containers
import Image from "next/image";

const InvestorCard = ({ profile, name, desp }) => {
  return (
    <div className="investorCard">
      <div className="investorCard__imgWrapper">
        <Image src={profile} />
      </div>
      <div className="investorCard__text">
        <h4 className="name">{name}</h4>
        <p className="desp">{desp}</p>
      </div>
    </div>
  );
};

export default InvestorCard;
