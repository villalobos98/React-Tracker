import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import React, { useState } from "react";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/Login";
import Home from "./components/Home";

function App() {
  const [date] = useState(new Date());

  const expenses = [
    {
      id: 1,
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    },
    {
      id: 2,
      title: "New TV",
      amount: 799.49,
      date: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
    },
    {
      id: 3,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2),
    },
    {
      id: 4,
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 3),
    },
    {
      id: 5,
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 4),
    },
  ];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Nav />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/createExpense">
          <Nav />
          <NewExpense />
          <Footer />
        </Route>
        <Route exact path="/allExpenses">
          <Nav />
          <Expenses items={expenses} />
          <Footer />
        </Route>
        <Route exact path="/login">
          <Nav />
          <LoginForm />
          <Footer />
        </Route>
        <Route exact path="/signout"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
