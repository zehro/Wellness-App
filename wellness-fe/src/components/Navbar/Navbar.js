import React, { Component } from "react";
import { Link } from 'react-router-dom';

// Library imports
import $ from 'jquery';

// Static imports
import './Navbar.scss';
import { ReactComponent as IconHome } from '../../images/app-back.svg';
import { ReactComponent as IconJournal } from '../../images/app-journal.svg';
import { ReactComponent as IconHabit } from '../../images/logo.svg';


/* 
 * Component to return.
 */
class Navbar extends Component {
    // Base constructor
    constructor(props) {
        super(props);
    
        // Event bindings
        this.handleReturnHome = this.handleReturnHome.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // Event handler for the home button
    handleReturnHome(e) {
        // Stop propagation of anchor
        e.preventDefault();

        // Fade out the navbar via class
        $('.navbar-spine').addClass('animate-fade-out').one("animationend",
            function()
            {
                // Remove animation class after final animation
                $('.navbar-spine').removeClass('visible animate-fade-out');
            });

        // Fade out the page content via class
        $('.page').addClass('animate-fade-out');

        // Animate book close via class
        $('.book').removeClass('opened');
        $('.book').addClass('animate-close');

        // Redirect to hash URL after final animation
        $('.anim-page').last().one("animationend",
            function()
            {
                // Toggle animation class
                $('.book').removeClass('animate-close');
                $('.book').addClass('closed');

                // Change window/hash
                window.location.hash = "/";
            });
    }

    // Event handler for the navbar items
    handleClick(e, hash) {
        // Stop propagation of anchor
        e.preventDefault();

        // Change window/hash
        window.location.hash = "/" + hash;
    }

    render() {
        return (
            // Sean's HW: optimize code into an iterator
            <nav className="navbar-spine">
                <Link className="navbar-btn" to="" onClick={(e) => this.handleReturnHome(e)}>
                    <IconHome />
                    <div className="navbar-btn-text">Home</div>
                </Link>
                <Link className="navbar-btn" to="/journal" onClick={(e) => this.handleClick(e, "journal")}>
                    <IconJournal />
                    <div className="navbar-btn-text">Journal</div>
                </Link>
                <Link className="navbar-btn" to="/habits" onClick={(e) => this.handleClick(e, "habits")}>
                    <IconHabit />
                    <div className="navbar-btn-text">Habits</div>
                </Link>
                {/* <Link className="navbar-btn" to="/calendar" onClick={(e) => this.handleClick(e, "calendar")}></Link> */}
                {/* <Link className="navbar-btn" to="/stats" onClick={(e) => this.handleClick(e, "stats")}></Link> */}
            </nav>
        );
    }
}

export default Navbar;