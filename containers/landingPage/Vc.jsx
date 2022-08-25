// ! components and containers
import VcCard from "./VcCard";
// ! images, icons and logos
import vcLogo from "../../assets/sama.svg";
const Vc = () => {
  return (
    <section className="vc row">
      <div className="section__heading">
        <h2 className="heading--secondary">We are backed by </h2>
      </div>
      <div className="vc__wrapper">
        <VcCard
          logo={vcLogo}
          name="sama capital"
          desig="investor"
          desp="Investor of Paytm, Swiggy
& many More"
        />
        <VcCard
          logo={vcLogo}
          name="sama capital"
          desig="investor"
          desp="Investor of Paytm, Swiggy
& many More"
        />
        <VcCard
          logo={vcLogo}
          name="sama capital"
          desig="investor"
          desp="Investor of Paytm, Swiggy
& many More"
        />
      </div>
      <div className="vc__btn">
        <button className="btn btn-round">&larr;</button>
        <button className="btn btn-round btn-round--active"> &rarr;</button>
      </div>
    </section>
  );
};

export default Vc;
