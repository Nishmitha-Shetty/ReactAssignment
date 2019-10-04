import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import Button from "./Button";
import Select from "./Select";
import "../style/Form.css";

class Form extends Component {
  state = {
    slotOptions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    newBooking: {
      userName: "",
      make: "",
      model: "",
      date: "",
      slot: "",
      vehicleNo: ""
    }
  };

  addData = e => {
    e.preventDefault();

    this.props.getNewBooking(this.state.newBooking);
  };
  handleOnClick = e => {
    const slotValue = e.target.value;

    const booking = { ...this.state.newBooking };
    booking.slot = slotValue;
    this.setState({ newBooking: booking });
  };

  handleChange = e => {
    let newBooking = Object.assign({}, this.state.newBooking);
    newBooking[e.target.name] = e.target.value;
    this.setState({ newBooking });
  };

  render() {
    // const mainState = this.props.passState;
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const minDate = yyyy + "-" + mm + "-" + dd;

    return (
      <div className="mainContainer">
        <form className="formContainer" onSubmit={this.addData}>
          <h3 className="book">BOOK A SLOT</h3>
          <InputField
            className="textField"
            type="text"
            placeholder="Name"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <br />
          <InputField
            type="text"
            className="textField"
            placeholder="Make"
            name="make"
            value={this.state.make}
            onChange={this.handleChange}
            required
          />
          <br />
          <InputField
            type="text"
            className="textField"
            placeholder="Vehicle No"
            name="vehicleNo"
            value={this.state.vehicleNo}
            onChange={this.handleChange}
            required
          />
          <br />
          <InputField
            type="text"
            className="textField"
            placeholder="Model"
            name="model"
            value={this.state.model}
            onChange={this.handleChange}
            required
          />
          <br />
          <InputField
            type="Date"
            className="textField"
            placeholder="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
            mindate={minDate}
          />

          <br />

          <Select
            name={"selectSlot"}
            options={this.state.slotOptions}
            classname={"selectSlot"}
            placeholder={"select slot"}
            onClick={this.handleOnClick}
          />
          <Button text="Submit" classname="submitBtn" />
          <Link to="/">
            <Button text="Back" classname="submitBtn" />
          </Link>
        </form>
      </div>
    );
  }
}

export default Form;
