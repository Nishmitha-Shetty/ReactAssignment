import React, { Fragment, Component } from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";
import CurrentBooked from "../components/CurrentBooked";

import { Link } from "react-router-dom";

class Landing extends Component {
  state = {
    showBookingsModal: false
  };
  showCurrentBookings = () => {
    this.setState({ showBookingsModal: !this.state.showBookingsModal });
  };
  render() {
    // console.log(alreadyBooked);
    return (
      <Fragment>
        <Heading />
        <Link to="/form">
          <Button text="BOOK" classname="btn" />
        </Link>
        <Button
          text="CURRENT BOOKINGS"
          onClick={this.showCurrentBookings}
          classname="btn"
        />
        {this.state.showBookingsModal ? (
          <CurrentBooked
            modalState={this.state.showBookingsModal}
            close={this.showCurrentBookings}
            showAlreadyBooked={this.alreadyBooked}
            showPastbooking={this.props.getpastBooking}
          />
        ) : null}
      </Fragment>
    );
  }
}
export default Landing;
