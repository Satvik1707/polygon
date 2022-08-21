import React, { Fragment, useReducer } from "react";
import Routes from "./components";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";
import "./App.css";

function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
  return (
    // <div className="App">
      <Fragment>
        <LayoutContext.Provider value={{ data, dispatch }}>
          <Routes />
        </LayoutContext.Provider>
      </Fragment>
    // </div>
  );
}

export default App;
