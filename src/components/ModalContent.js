import React, { Component } from "react";
import "../style/modal.css";
import { getdata, updateCurentParking } from "../utils/storage";

class ModelContent extends Component {
  cancelSlot = (removeSlot, removeDate) => {
    const currentParking = getdata();
    // const pastParking=putPastParking();
    const slotIndex = currentParking.findIndex(val => {
      return val.slot === removeSlot && val.date === removeDate;
    });
    const cancel = currentParking.splice(slotIndex, 1);
    this.props.getPastParking(cancel);
    updateCurentParking(currentParking);
  };
  render() {
    const bookingData = this.props.slotData;

    return (
      <div className="cardContainer">
        <div>
          <p>SLOT NO: {bookingData.slot}</p>

          <span>DATE {bookingData.date}</span>
          <button
            onClick={() => this.cancelSlot(bookingData.slot, bookingData.date)}
            className="close"
          >
            End
          </button>
        </div>
      </div>
    );
  }
}
export default ModelContent;
