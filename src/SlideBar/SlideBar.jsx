import Category from "./Category/Category";
import Color from "./Color/Color";
import Price from "./Price/Price";
import "./SlideBar.css";
const SlideBar = ({handleChange, handleColor, handlePrice}) => {
  return (
    <section className="slidebar-container">
      <section className="logo-container">
        <h1 className="logo">🛒</h1>
      </section>

      <Category handleChange={handleChange} />
      <Price handlePrice={handlePrice}/>
      <Color handleColor={handleColor}/>
    </section>
  );
};

export default SlideBar;
