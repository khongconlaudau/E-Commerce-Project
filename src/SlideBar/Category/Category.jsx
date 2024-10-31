import "./Category.css";
import RadioButton from "../../Components/RadioButton";
const Category = ({ handleChange }) => {
  return (
    <section className="side-container">
      <div>
        <h2 className="title">Category</h2>
      </div>

      <div>
        <RadioButton
          handleChange={handleChange}
          id="all"
          title="All"
          name="test"
        />
        <RadioButton
          handleChange={handleChange}
          id="sneakers"
          title="Sneakers"
          name="test"
          value="sneakers"
        />
        <RadioButton
          handleChange={handleChange}
          id="flats"
          title="Flats"
          name="test"
          value="flats"
        />
        <RadioButton
          handleChange={handleChange}
          id="sandals"
          title="Sandals"
          name="test"
          value="sandals"
        />
        <RadioButton
          handleChange={handleChange}
          id="heels"
          title="Heels"
          name="test"
          value="heels"
        />
      </div>
    </section>
  );
};

export default Category;
