import "./StyleNav.css"
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { TbUserPlus } from "react-icons/tb";

const Nav = ({handleInputChange, query}) => {
    return (
      <nav className="nav-container">
        <section className="input-container">
          <input type="text" placeholder="Enter you search shoes..." value={query} onChange={handleInputChange} />
        </section>
        <section className="profile-container">
            <a href="#"><FaRegHeart className="nav-icon"/></a>
            <a href="#"><BsCart3 className="nav-icon"/></a>
            <a href="#"><TbUserPlus className="nav-icon"/></a>
        </section>
      </nav>
    );
}

export default Nav