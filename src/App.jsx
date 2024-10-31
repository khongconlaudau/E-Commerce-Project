import { useState } from "react";
import Cards from "./Components/Cards";
import Nav from "./Navigation/Nav";
import Product from "./Product/Product";
import Recommend from "./Recommend/Recommend";
import SlideBar from "./SlideBar/SlideBar";
import data from "./db/data";
import "./style.css";
const App = () => {
  const [query, setQuery] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [color, setColor] = useState(null);

  // Input Filter
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filterItems = data.filter((i) =>
    i.title.toLowerCase().includes(query.toLowerCase())
  );

  // Button Filter
  const handleClick = (e) => {
    setCompany(e.target.value);
  };

  // Radio Filter
  // Category
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  // Price
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  // Color
  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const filterAllData = () => {
    let products = data;

    if (query) {
      products = filterItems;
    }

    // Radio Filter for Each section
    if (category) products = products.filter((item) => item.category === category);

    if (color) products = products.filter((item) => item.color === color);

    if (price) products = products.filter((item) => item.newPrice === price);

    // Recommend Filter (Company)
    if (company) products = products.filter((item) => item.company === company);

    return products.map(({ img, title, reviews, prevPrice, newPrice }) => (
      <Cards
        img={img}
        title={title}
        reviews={reviews}
        prePrice={prevPrice}
        newPrice={newPrice}
        key={Math.random()}
      />
    ));
  };

  // call getData to get the array
  const result = filterAllData();

  return (
    <div>
      <Nav handleInputChange={handleInputChange} value={query} />
      <Recommend handleClick={handleClick} />
      <SlideBar
        handleChange={handleChange}
        handleColor={handleColor}
        handlePrice={handlePrice}
      />
      <Product result={result} />
    </div>
  );
};

export default App;
