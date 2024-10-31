import "./Color.css";
import RadioButton from "../../Components/RadioButton";
const Color = ({ handleColor }) => {
  return (
    <section className="side-container">
      <div>
        <h1 className="title">Colors</h1>
      </div>
      <div>
        <RadioButton
          handleChange={handleColor}
          id="all3"
          title="All"
          name="test3"
        />
        <RadioButton
          handleChange={handleColor}
          id="black"
          title="Black"
          name="test3"
          value="black"
          color="black"
        />
        <RadioButton
          handleChange={handleColor}
          id="blue"
          title="Blue"
          name="test3"
          value="blue"
          color="blue"
        />
        <RadioButton
          handleChange={handleColor}
          id="red"
          title="Red"
          name="test3"
          value="red"
          color="red"
        />
        <RadioButton
          handleChange={handleColor}
          id="green"
          title="Green"
          name="test3"
          value="green"
          color="green"
        />
        <RadioButton
          handleChange={handleColor}
          id="white"
          title="White"
          name="test3"
          value="white"
          color="lightgray"
        />
      </div>
    </section>
  );
};

export default Color;
