import React from "react";

const Header = (): JSX.Element => {
  return (
    <header>
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
