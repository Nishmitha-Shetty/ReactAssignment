import React, { Fragment, Component } from "react";
import InputField from "./InputField";
import Button from "./Button";
import "../style/Form.css";

import ShowFreeSlots from "./ShowFreeSlots";
class Form extends Component {
  state = {
    UserName: "",
    make: "",
    model: "",
    date: "",
    time: "",
    showSlotPopUp: false
  };

  addData = event => {
    event.preventDefault();
    const taskObj = {};

    taskObj.userName = this.state.UserName;
    taskObj.make = this.state.make;
    taskObj.model = this.state.model;
    taskObj.date = this.state.date;
    taskObj.time = this.state.time;

    console.log(taskObj);
    localStorage.setItem("details", JSON.stringify(taskObj));
    //event.resset()
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <form className="formContainer" onSubmit={this.addData}>
        <InputField
          className="textField"
          type="text"
          placeholder="Name"
          name="UserName"
          value={this.state.UserName}
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
        />
        <br />
        <InputField
          className="textField"
          type="time"
          placeholder="time"
          name="time"
          value={this.state.time}
          onChange={this.handleChange}
        />
        <br />
        {/* <Button text="select slot" /> */}
        {/* {this.state.showSlotPopUp ? <ShowFreeSlots /> : null} */}
        <Button text="Submit" />
      </form>
    );
  }
}

export default Form;
