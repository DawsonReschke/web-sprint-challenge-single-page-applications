import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import PizzaForm from "./MVP/PizzaForm"
// MVP:


const App = () => {
  return (
    <Switch>
      <Route path="/pizza">
        <PizzaForm id="pizza-form"/>
      </Route>
      <Route path="/">
        <h1 id="123">BloomTech Eats</h1>
        <br/>
        <Link to="/pizza" id="order-pizza">Order Now</Link>
      </Route>
    </Switch>
  );
};
export default App;
