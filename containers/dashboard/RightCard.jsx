import icn_recent from "../../assets/icons/recent.svg";
import { PieChart } from "react-minimal-pie-chart";
import WhatsappFeedback from "../../components/WhatsappFeedback";
import Image from "next/image";
const RightCard = () => {
  const labels = [
    ["08", "#A5DEDA"],
    ["05", "#588094"],
  ];
  return (
    <div className="rightCard">
      <div className="rightCard__allCovers">
        <h2>all covers</h2>
        <PieChart
          data={[
            { title: "One", value: 10, color: "#A5DEDA" },
            { title: "Two", value: 15, color: "#588094" },
          ]}
          lineWidth={20}
          label={() => 8}
          labelPosition={50}
          className="rightCard__allCovers--pieChart"
        />
        <div className="rightCard__allCovers--labels">
          <div className="rightCard__allCovers--labels--label">
            <span style={{ backgroundColor: "#a5deda" }}></span>btc
          </div>
          <div className="rightCard__allCovers--labels--label">
            <span style={{ backgroundColor: "#588094" }}></span>eth
          </div>
        </div>
      </div>
      <div className="rightCard__recentCovers">
        <h2>recent covers</h2>
        <div className="rightCard__recentCovers__cover">
          <Image src={icn_recent} alt="icn-recent" />
          0.002 BTC ≈ 210.7616 INR
        </div>
        <div className="rightCard__recentCovers__cover">
          <Image src={icn_recent} alt="icn-recent" />
          0.002 BTC ≈ 210.7616 INR
        </div>
      </div>
      <WhatsappFeedback />
    </div>
  );
};

export default RightCard;
