import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import UserList from "./UserList";
import UserCreateEditModal from "./UserCreateEditModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        this.resetState();
    }

    getUsers = () => {
        axios.get(API_URL).then(res => this.setState({ users: res.data }));
    };

    resetState = () => {
        this.getUsers();
    };

    render() {
        return (
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col>
                        <UserList
                            users={this.state.users}
                            resetState={this.resetState}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <UserCreateEditModal create={true} resetState={this.resetState} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;