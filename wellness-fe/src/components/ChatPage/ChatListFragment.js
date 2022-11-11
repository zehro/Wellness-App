import React, { Component, Fragment } from "react";


/* 
 * Component to return.
 */
class ChatListFragment extends Component {

    render() {
        const users = this.props.users;
    
        return (
            <Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {!users || users.length <= 0 ? (
                        <tr>
                            <td colSpan="3" align="center">
                                <b>Oops, no one exists here yet</b>
                            </td>
                        </tr>
                    ) : (
                        users.map(user => (
                        <tr key={user.pk}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td align="center">
                                <button className="" onClick={(e) => this.props.enterRoom(e, user.pk)}>
                                    Chat
                                </button>
                            </td>
                        </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default ChatListFragment;