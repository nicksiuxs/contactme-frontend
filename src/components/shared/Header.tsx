import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800">
      <img src="/" />
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
