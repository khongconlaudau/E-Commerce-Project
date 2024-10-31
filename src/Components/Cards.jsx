import { BsFillBagFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
const Cards = ({img, title, reviews, prePrice, newPrice, }) => {
  return (
    <div className="card" >
      <img src={img} className="img" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="card-reviews">
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <span className="total-reviews">{reviews}</span>
        </div>
        <div className="detail-price">
          <div className="price">
            <del>{prePrice}</del>
            {newPrice}
          </div>
          <BsFillBagFill className="bag-icon" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
