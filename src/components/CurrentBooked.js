import React from "react";
import "../style/CurrentBooked.css";

import ModalContent from "../components/ModalContent";

import { getdata } from "../utils/storage";

class CurrentBooked extends React.Component {
  state = {
    bookedData: []
  };

  componentDidMount() {
    const alreadyBooked = getdata();

    this.setState({ bookedData: alreadyBooked });
  }

  render() {
    const showHideClassName = this.props.modalState
      ? "modal display-block"
      : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <button onClick={this.props.close}>X</button>
          <p className="currentBooking">CURRENT BOOKINGS</p>
          {this.state.bookedData.map(slot => (
            <ModalContent
              slotData={slot}
              key={Math.random()
                .toString(36)
                .substring(7)}
              getPastParking={this.props.showPastbooking}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default CurrentBooked;
