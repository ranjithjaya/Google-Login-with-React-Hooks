import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import PrivatePage from "./PrivatePage";
import PublicPage from "./PublicPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={PublicPage} />
        <Route path="/private" component={PrivatePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
