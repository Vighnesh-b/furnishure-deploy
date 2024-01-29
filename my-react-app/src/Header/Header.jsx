import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import './Header.css';
import '../styles/fonts.css';
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar.jsx';

function Header() {
  return (
    <>
    <header>
      <div className="navbar-top">
        <div className="logo">
          <Link to="/"><h3>FURNISHURE</h3></Link>
        </div>
        <SearchBar/>
        <div className="icons">
          <a href=""><IoPersonOutline size="1.5em"/></a>
          <a href=""><FaRegHeart size="1.5em"/></a>
          <a href=""><LuShoppingCart size="1.5em"/></a>
        </div>
      </div>
    </header>
    <nav>
      <ul>
        <li>
          <Link to="/Chairs">Chair</Link>
        </li>
        <li>
          <a href="">Sofas</a>
        </li>
        <li>
          <a href="">Bed</a>
        </li>
        <li>
          <a href="">Wardrobe</a>
        </li>
        <li>
          <a href="">Lamps & Lighting</a>
        </li>
        <li>
          <a href="">Dining Set</a>
        </li>
      </ul>
    </nav>
  </>  
    
  );
}

export default Header;