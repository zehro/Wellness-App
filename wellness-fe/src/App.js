import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import UserListPage from "./components/UserListPage";

import './App.css';


class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <UserListPage />
            </Fragment>
        );
    }
}


export default App;
