import RadioButton from "../../Components/RadioButton";
const Price = ({ handlePrice }) => {
  return (
    <section className="side-container">
      <div>
        <h1 className="title">Price</h1>
      </div>
      <div>
        <RadioButton
          handleChange={handlePrice}
          id="all2"
          title="All"
          name="test2"
        />
        <RadioButton
          handleChange={handlePrice}
          id="50"
          title="$0 - 50"
          name="test2"
          value="50"
        />
        <RadioButton
          handleChange={handlePrice}
          id="100"
          title="$50 - 100"
          name="test2"
          value="100"
        />
        <RadioButton
          handleChange={handlePrice}
          id="150"
          title="$100 - 150"
          name="test2"
          value={150}
        />
        <RadioButton
          handleChange={handlePrice}
          id="200"
          title="$150 - 200"
          name="test2"
          value="200"
        />
      </div>
    </section>
  );
};

export default Price;
