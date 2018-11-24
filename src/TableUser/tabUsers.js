import React from "react";

class TableofUser extends React.Component {
  render() {
    return (
      <ul>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.length > 0 ? (
              this.props.users.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.surname}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.editRow(index);
                      }}
                      className="btn btn-outline-secondary"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => this.props.deleteUser(index)}
                      className="btn btn-outline-secondary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No users</td>
              </tr>
            )}
          </tbody>
        </table>
      </ul>
    );
  }
}

export default TableofUser;
