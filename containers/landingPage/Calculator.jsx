// ! components and containers
import { useRef } from "react";
const Calculator = () => {
  // ! js to handle the slider component
  const sliderRef = useRef();
  const inputSliderRef = useRef();
  //   let output = sliderRef.current;
  //   const sliderHandler = () => {
  //     output.innerHTML = inputSliderRef.current.value;
  //   };

  return (
    <section className="calculator row">
      <div className="section__heading">
        <h2 className="heading--secondary">Let’s do some Calculations! </h2>
        <h3 className="heading--sub">
          Select your trading amount, loss coverage percent and Validity to know
          about the Payable Cover Premium
        </h3>
      </div>

      <div className="calculator__wrapper">
        <div className="calculator__wrapper--calculations">
          <div className="inputField">
            <label htmlFor="">Enter total trade amount</label>
            <input type="number" />
          </div>
          <div className="inputField">
            <label htmlFor="">Select loss coverage</label>
            <div className="btn__wrapper">
              <button>50%</button>
              <button>75%</button>
              <button>100%</button>
            </div>
          </div>
          <div className="inputField">
            <label htmlFor="">Validity (in months)</label>
            <input
              id="slider1"
              type="range"
              min="0"
              max="10"
              step="2"
              ref={inputSliderRef}
              className="sliderInput"
              //   onChange={sliderHandler}
            />
            <output id="output" ref={sliderRef}>
              <p>50</p>
            </output>
          </div>
        </div>
        <div className="calculator__wrapper--display">
          <div className="display">
            <label htmlFor="">Total Trade Amount</label>
            <p>10,000 $</p>
          </div>
          <div className="display">
            <label htmlFor="">Payable Cover Premium</label>
            <p>20,000 $</p>
          </div>
          <button className="btn btn-primary btn-large">buy cover now</button>
          <p className="note">
            dRisk Covers are not available in all locations. Check your dRisk
            mobile/web app to see if you live in an area where such covers are
            offered. Additional limits may apply in certain jurisdictions.
            <br />
            <br /> Cover payments are made on a chosen validity basis, principal
            trade amount covered at the end of the cover term. Cover prices vary
            depending on your choice of cover validity. Minimum coverage term is
            1 month. dRisk’s Terms of Use apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
