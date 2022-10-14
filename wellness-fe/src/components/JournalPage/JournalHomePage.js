import React, { Component, Fragment } from "react";

// Component imports
import PageAnimFragment from "../PageAnimFragment";
// import UserListPage from "../UserListPage";

// Library imports
import $ from 'jquery';

// Static imports
import '../PageAnimFragment.scss';


/* 
 * Component to return.
 */
class JournalHomePage extends Component {
    // Base constructor
    constructor(props) {
        super(props);

        // State variables
        this.state = {
            curDT : new Date().toLocaleString(),
        };
    }

    componentDidMount() {
        // Play animation via class toggle
        $('.page').addClass('animate-fade-in').one("animationend",
            function()
            {
                // Remove animation class after final animation
                $('.page').removeClass('animate-fade-in');
            });;
    }
    
    render() {
        return (
            <Fragment>
                <PageAnimFragment />

                <div className="page">
                    {/* <h2>Current Date And Time : {this.state.curDT}</h2>
                    <UserListPage /> */}
                </div>
            </Fragment>
        );
    }
}

export default JournalHomePage;