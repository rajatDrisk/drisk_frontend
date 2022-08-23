// ! containers and components
import ServiceCard from "./ServiceCard";

// ! icons and images
import dollar from "../../assets/icons/dollar.svg";
const Services = () => {
  return (
    <section className="services row">
      <div className="services__heading">
        <h2 className="heading--secondary">our services</h2>
        <h3 className="heading--sub">
          We Secure Your Trades For A Optimally Priced Premium, Backed By
          Science and Data
        </h3>
      </div>
      <div className="services__cardWrapper">
        <ServiceCard icon={dollar} />
        <ServiceCard icon={dollar} />
        <ServiceCard icon={dollar} />
        <ServiceCard icon={dollar} />
      </div>
    </section>
  );
};

export default Services;
