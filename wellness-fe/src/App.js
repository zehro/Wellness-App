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

    render() {
        return (
            <HashRouter basename="/">
                <div className="book closed">
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