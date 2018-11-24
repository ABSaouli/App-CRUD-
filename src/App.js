import React, { Component, Fragment } from "react";
import UserTable from "./TableUser/tabUsers";
import AddUserTab from "./model/AddUserfrom";
import TableofUser from "./model/EditUser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "saouli",
          surname: "abdel"
        },
        {
          name: "nadhir",
          surname: "chocho"
        },
        {
          name: "islam",
          surname: "boudrbala"
        }
      ],
      editing: true,
      useractif: ""
    };
    //this.Adduser = this.Adduser.bind(this) "si on utilise pas le row function"
  }
  //La partie CRUD de mon application

  // Create Methode
  Adduser = user => {
    this.setState({
      users: [...this.state.users, user]
    });
  };

  // Read Methode
  editRow = index => {
    const useractif = this.state.users[index];
    this.setState({ editing: !this.state.editing, useractif: useractif });
  };

  // Update Methode
  Edituser = (useractif, userUpdating) => {
    const indeof = this.state.users.indexOf(useractif);
    const { users } = this.state;
    this.setState({
      users: users.map((user, i) => {
        if (i === indeof) {
          return { name: userUpdating.name, surname: userUpdating.surname };
        } else {
          return user;
        }
      }),
      editing: !this.state.editing
    });
  };

  // Delete methode
  deleteUser = index => {
    const { users } = this.state;
    this.setState({
      users: users.filter((user, i) => {
        return i !== index;
      })
    });
  };

  render() {
    //Destructuring  (ES6)
    const { users, editing, useractif } = this.state;
    return (
      <div>
        <div className="jumbotron text-center">
          <h2>welcome in your App CRUD with ReactJS !</h2>
          <p>cette application est effectueé avec React js et bootstrap!</p>
        </div>
        <div className="fragment">
          {editing ? (
            <Fragment>
              <h3>Add user</h3>
              <AddUserTab Adduser={this.Adduser} />
            </Fragment>
          ) : (
            <Fragment>
              <div>
                <h3>Edit User</h3>
                <TableofUser
                  useractif={useractif}
                  Edituser={this.Edituser}
                  editRow={this.editRow}
                />
              </div>
            </Fragment>
          )}
        </div>
        <div>
          <h3>View USERS</h3>
          <UserTable
            users={users}
            deleteUser={this.deleteUser}
            editRow={this.editRow}
          />
        </div>
      </div>
    );
  }
}

export default App;
