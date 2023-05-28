import React from "react";
import Logo from "../../assets/contacme-logo.png"

const Header = () => {
  return (
    <header className="bg-gray-800 flex items-center justify-between">
      <img src={Logo} />
      <nav>
        <a href="#">Publicaciones</a>
        <a href="#">Mensajes</a>
      </nav>
      <div>
        <p>User</p>
      </div>
    </header>
  );
};

export default Header;
