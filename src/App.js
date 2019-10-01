import React from "react";
import Landing from "./components/Landing";
import Form from "./components/Form";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Landing />
      <Route path="/form" component={Form} />
    </Router>
  );
};

export default App;
