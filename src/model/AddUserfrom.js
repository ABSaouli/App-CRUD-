import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: "",
      surname: ""
    };
    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //handleNameChange = event => this.setState({ name: event.target.value });
  //handleSurameChange = event => this.setState({ surname: event.target.value });

  submitForm = () => {
    console.log(this.state);
    if (this.state.name && this.state.surname) {
      this.props.Adduser(this.state);
    }
    this.setState(this.initialState);
  };

  render() {
    const { name, surname } = this.state;

    return (
      <form>
        <ul>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="surname"
              value={surname}
              onChange={this.handleChange}
            />
          </div>
          <input
            type="button"
            className="btn btn-primary"
            value="Submit"
            onClick={this.submitForm}
          />
        </ul>
      </form>
    );
  }
}

export default AddUser;
