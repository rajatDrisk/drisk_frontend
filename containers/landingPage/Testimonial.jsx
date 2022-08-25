// ! containers and components
import TestimonialCard from "./TestimonialCard";

// ! icons and images
import avatar from "../../assets/avatar.png";
import twitter from "../../assets/icons/twitter.svg";

const Testimonial = () => {
  return (
    <section className="testimonial vc row">
      <div className="section__heading">
        <h2 className="heading--secondary testimonial__heading">
          Cryptoheads love us. Do you?
        </h2>
        <h3 className="heading--sub">
          Incase you want to know something about us from someone else
        </h3>
      </div>
      <div className="vc__wrapper">
        <TestimonialCard
          image={avatar}
          name="Hamdan Sayed"
          handle="@HamdanSayed4"
          logo={twitter}
          tweet="The way I am promoting @drisk_cover. I won't be surprised if I am mistaken as their business development executive. Impressive product, indeed! Keep up the great work you are doing.
          #tech #Cryptocurency #drisk"
        />
        <TestimonialCard
          image={avatar}
          name="Hamdan Sayed"
          handle="@HamdanSayed4"
          logo={twitter}
          tweet="The way I am promoting @drisk_cover. I won't be surprised if I am mistaken as their business development executive. Impressive product, indeed! Keep up the great work you are doing.
          #tech #Cryptocurency #drisk"
        />
        <TestimonialCard
          image={avatar}
          name="Hamdan Sayed"
          handle="@HamdanSayed4"
          logo={twitter}
          tweet="The way I am promoting @drisk_cover. I won't be surprised if I am mistaken as their business development executive. Impressive product, indeed! Keep up the great work you are doing.
          #tech #Cryptocurency #drisk"
        />
      </div>
      <div className="vc__btn">
        <button className="btn btn-round">&larr;</button>
        <button className="btn btn-round btn-round--active"> &rarr;</button>
      </div>
    </section>
  );
};

export default Testimonial;
