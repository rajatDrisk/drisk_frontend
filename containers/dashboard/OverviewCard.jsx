import Image from "next/image";
const OverviewCard = ({ icon }) => {
  return (
    <div className="overviewCard">
      <div className="overviewCard__info">
        <div className="overviewCard__info__data">
          <h2>17</h2>
          <p>exchanges linked</p>
        </div>
        <div className="overviewCard__info__icon">
          <Image src={icon} alt="" />
        </div>
      </div>
      <div className="overviewCard__figure">
        <p>~ $ 8760</p>
      </div>
    </div>
  );
};

export default OverviewCard;
