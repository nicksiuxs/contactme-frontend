import React from "react";
import Logo from "../../assets/contacme-logo.png"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 flex items-center sm : justify-center p-3">
      <div >
        <Link to="/" className="flex items-center">
          <img src={Logo} />
          <h1 className="text-white ml-2">ContactMe</h1>
        </Link>
      </div>
      <nav className="sm : hidden">
        <a href="#">Publicaciones</a>
        <a href="#">Mensajes</a>
      </nav>
      <div className="sm : hidden">
        <p>User</p>
      </div>
    </header>
  );
};

export default Header;
