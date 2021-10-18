import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NotFound from "./Components/NotFound";
import styled from "./App.module.css";
const Homepage = lazy(() => import("./Components/HomePage"));
const Main = lazy(() => import("./main/Main"));
const CreateTodo = lazy(() => import("./Components/CreateTodo"));

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
        <Route exact path="/" component={Homepage} />
        <Route exact path="/todos" component={Main} />
        <Route exact path="/create-todos" component={CreateTodo} />
        <Route component={NotFound} />
      </Switch>
      {/* <Revies /> */}
    </>
  );
}

export default App;
