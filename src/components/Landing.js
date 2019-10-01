import React, { Fragment, Component } from "react";
import Heading from "./Heading";
import Button from "./Button";
import CurrentBooked from "./CurrentBooked";
// import db from "./Dexie";

import { Link } from "react-router-dom";

class Landing extends Component {
  state = {
    currentParking: [],
    pastParking: []
  };

  /* showCurrentBookings = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };
 */
  render() {
    return (
      <Fragment>
        <Heading />
        <Link to="/form">
          <Button text="BOOK" />
        </Link>
        <Button text="CURRENT BOOKINGS" onClick={this.showCurrentBookings} />
        {/* {this.state.showPopup ? <CurrentBooked /> : null} */}
      </Fragment>
    );
  }
}
export default Landing;
