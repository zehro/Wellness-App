import React, { Component } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom'

// Component imports
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import JournalHomePage from "./components/JournalPage/JournalHomePage";
import ExploreHomePage from "./components/ExplorePage/ExploreHomePage";
import ChatHomePage from "./components/ChatPage/ChatHomePage";


/*
 * Component to return.
 */
class App extends Component {
    // Base constructor
    constructor(props) {
        super(props);

        // Event bindings
        this.setIsOpened = this.setIsOpened.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        // State variables
        this.state = {
            isOpened      : false,
            isLoggedIn    : false,
        };
    }

    // Event handler for setting the book state
    setIsOpened( val ) {
        this.setState({isOpened: val});
    }

    // Event handler for login
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    // Event handler for logout
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const bookClasses = `book ${this.state.isOpened ? 'opened' : 'closed'}`

        return (
            <HashRouter>
                <div className={bookClasses}>
                    <Navbar />

                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/journal" element={<JournalHomePage />} />
                            <Route path="/explore" element={<ExploreHomePage />} />
                            <Route path="/chat" element={<ChatHomePage />} />
                        </Routes>
                    </main>
                </div>
            </HashRouter>
        );
    }
}

export default App;