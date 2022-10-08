import React, { Component } from "react";
import { Table } from "reactstrap";
import UserCreateEditModal from "./UserCreateEditModal";
import UserDeleteModal from "./UserDeleteModal";

class UserList extends Component {
    render() {
        const users = this.props.users;
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Registration</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {!users || users.length <= 0 ? (
                    <tr>
                        <td colSpan="6" align="center">
                            <b>Oops, no one exists here yet</b>
                        </td>
                    </tr>
                ) : (
                    users.map(user => (
                    <tr key={user.pk}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.registrationDate}</td>
                        <td align="center">
                            <UserCreateEditModal
                                create={false}
                                user={user}
                                resetState={this.props.resetState}
                            />
                            &nbsp;&nbsp;
                            <UserDeleteModal
                                pk={user.pk}
                                resetState={this.props.resetState}
                            />
                        </td>
                    </tr>
                    ))
                )}
                </tbody>
            </Table>
        );
    }
}

export default UserList;