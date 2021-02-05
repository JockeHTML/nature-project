import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import styles from './App.css';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import ProductContent from "./Components/Products/ProductContent";
import Menu from "./Components/Menu/Menu";

function App() {

  const [ click, setClick ] = useState(false);

  return (
  <div>
    <Router>
      <Menu setClick={setClick} click={click} />
        <div className={styles.App}>
          <Switch>
            <Route path="/about">
              <About click={click} setClick={setClick} />
            </Route>
            <Route path="/contact">
              <Contact click={click} setClick={setClick} />
            </Route>
            <Route path="/products">
              <ProductContent click={click} setClick={setClick} />
            </Route>
            <Route path="/">
              <Home click={click} setClick={setClick} />
            </Route>
            <Route path="/home">
              <Home click={click} setClick={setClick} />
            </Route>
          </Switch>
        </div>
    </Router>      
  </div>
  );
}

export default App;
