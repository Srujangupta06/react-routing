import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-400 py-2 px-8 shadow-lg shadow-blue-300">
      <Link to='/'>
        <div id="logoContainer">
          <h3 className="font-semibold text-xl">Logo</h3>
        </div>
      </Link>
      <ul className="flex justify-evenly w-[50%] items-center">
        <Link to="/">
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link to="/about">
          <li className="cursor-pointer">About</li>
        </Link>
        <Link to="/contact">
          <li className="cursor-pointer">Contact</li>
        </Link>
        <button className="bg-black text-white px-3 py-1 rounded-md cursor-pointer">
          Login
        </button>
      </ul>
    </nav>
  );
};

export default Header;
