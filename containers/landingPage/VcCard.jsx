import Image from "next/image";

const vcCard = ({ logo, name, desig, desp }) => {
  return (
    <div className="vcCard">
      <div className="vcCard__logo">
        <Image src={logo} />
      </div>
      <div className="vcCard__text">
        <h3 className="name">{name}</h3>
        <h4 className="desig">{desig}</h4>
        <p className="desp">{desp}</p>
      </div>
    </div>
  );
};

export default vcCard;
