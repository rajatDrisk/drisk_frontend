const BtnToggle = () => {
  return (
    <div className="btnToggle">
      <div className="switches-container">
        <input
          type="radio"
          id="switchMonthly"
          name="switchPlan"
          value="Monthly"
          defaultChecked="checked"
        />
        <input
          type="radio"
          id="switchYearly"
          name="switchPlan"
          value="Yearly"
        />
        <label htmlFor="switchMonthly">For Mobile</label>
        <label htmlFor="switchYearly">For Website</label>
        <div className="switch-wrapper">
          <div className="switch">
            <div>For Mobile</div>
            <div>For Website</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BtnToggle;
