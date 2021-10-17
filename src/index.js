import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./Components/NotFound";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
 <Suspense fallback={<NotFound />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
