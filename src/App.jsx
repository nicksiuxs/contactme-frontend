import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/shared/Header";

const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;
