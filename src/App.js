import React from "react";
import Main from "./main/Main";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CreateTodo from "./Components/CreateTodo";
import NotFound from "./Components/NotFound";
import HomePage from "./Components/HomePage";
import styled from "./App.module.css";

function App() {
  return (
    <>
      <ul className={styled.main_header}>
        <li>
          <NavLink className={styled.header_link} to="/todos">
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink className={styled.header_link} to="/create-todos">
            Create Todo
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/todos" component={Main} />
        <Route exact path="/create-todos" component={CreateTodo} />
        <Route component={NotFound} />
      </Switch>
      {/* <Revies /> */}
    </>
  );
}

export default App;
