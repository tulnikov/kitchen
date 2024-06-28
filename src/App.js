import React from "react";
import Header from "./compontns/Layout/Header";
import Meals from "./compontns/Meals/Meals";

function App() {
  return (
    <React.Fragment>
        <Header />
        <main>
            <Meals />
        </main>
    </React.Fragment>
  );
}

export default App;
