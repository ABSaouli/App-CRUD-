import React, { Component } from "react";

class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.initialState = this.props.useractif;
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

  submitUpdatForm = () => {
    const userUpdating = this.state;
    if (userUpdating.name && userUpdating.surname) {
      const battata = this.initialState;
      this.props.Edituser(battata, userUpdating);
    }
  };

  submitCancelForm = () => {
    this.props.editRow(1);
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
            value="Update User"
            onClick={this.submitUpdatForm}
          />
          <input
            type="button"
            className="btn btn-primary"
            value="Cancel"
            onClick={this.submitCancelForm}
          />
        </ul>
      </form>
    );
  }
}

export default UpdateUser;
