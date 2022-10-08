import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import UserCreateEditForm from "./UserCreateEditForm";

class UserCreateEditModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        const create = this.props.create;

        var title = "Editing User";
        var button = <Button onClick={this.toggle}>Edit</Button>;
        if (create) {
            title = "Creating New User";

            button = (
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                    style={{ minWidth: "200px" }}
                >
                    Create New
                </Button>
            );
        }

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                <ModalBody>
                    <UserCreateEditForm
                        resetState={this.props.resetState}
                        toggle={this.toggle}
                        user={this.props.user}
                    />
                </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default UserCreateEditModal;