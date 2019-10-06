import React, { Component } from "react";
import Landing from "./pages/Landing";
import Form from "./components/Form";
import { putData, putPastParking } from "./utils/storage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    currentParking: [],
    pastParking: []
  };
  newBooking = value => {
    const slotData = this.state.currentParking;
    var slotPresent = slotData.find(data => {
      return data.date === value.date && data.slot === value.slot;
    });
    // console.log(slotPresent);
    if (slotPresent === undefined) {
      this.setState(
        {
          currentParking: [...this.state.currentParking, { ...value }]
        },
        () => {
          putData(this.state.currentParking);
        }
      );
    } else {
      alert("slot not present");
    }
  };
  pastBooking = value => {
    // console.log(value);
    this.setState(
      {
        pastParking: [...this.state.pastParking, { ...value }]
      },
      () => {
        putPastParking(this.state.pastParking);
      }
    );
  };
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={props => (
            <Landing
              {...props}
              mainState={this.state}
              getpastBooking={this.pastBooking}
            />
          )}
        />

        <Route
          path="/form"
          render={props => (
            <Form
              {...props}
              passState={this.state}
              getNewBooking={this.newBooking}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;
