import React from "react";
//adding components
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Routers from "./Routers";

const App = () => {
  return (
    <div className="App ">
      <Header />

      <main className="py-4 px-3">
        <Routers />
      </main>
      <Footer />
    </div>
  );
}

export default App;
