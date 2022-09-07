import React, { Component } from "react";
import Users from "./Users";

class ListUsers extends Component {
  state = {
    usersList: [],
  };

  componentDidMount() {
    fetch("/api/users")
      .then((r) => r.json())
      .then((respuesta) => {
        this.setState({ usersList: respuesta.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="box-list-users">
        <h3 className="h3-list">listado de usuarios</h3>
        <div className="table table-users">
          <table className="width-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.usersList.map((user, index) => {
                return <Users {...user} key={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListUsers;
