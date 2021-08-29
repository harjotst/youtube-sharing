import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-2">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
