import icn_whatsapp from "../assets/icons/whatsapp.svg";
import Image from "next/image";
const WhatsappFeedback = () => {
  return (
    <div className="whatsappFeedback">
      <Image src={icn_whatsapp} alt="whatsapp-icon" />
      <p>Drop your feedback</p>
    </div>
  );
};

export default WhatsappFeedback;
