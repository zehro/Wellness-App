import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';

// Library imports
import $ from 'jquery';


/* 
 * Function to render a .cover-option Object with a unique
 * identifier.
 */
function HomeButtonTab(props) {
    return (
        <div className="cover-option">
            <div className="cover-option-triangle" />
            <Link className="cover-option-text" to={props.name} onClick={props.onclick}>{props.name}</Link>
        </div>
    )
}

/* 
 * Constant that defines the tab names. It is used to
 * automatically generate the appropriate number of
 * 'tabs' the home page should have.
 */
const homeButtonTabs = [
    {name: 'journal'},
    {name: 'explore'},
    {name: 'chat'}
];

/* 
 * Fragment component to return.
 */
class HomeButtonFragment extends Component {
    // Base constructor
    constructor(props) {
        super(props);
    
        // Event bindings
        this.handleClick = this.handleClick.bind(this);
    }
    
    // Event handler for the click event
    handleClick = (e, hash) => {
        // Stop propagation of anchor
        e.preventDefault();

        // Play animation via class toggle
        $('.book').addClass('animate-open');
        $('.book').removeClass('closed');

        // Redirect to hash URL after final animation
        $('.cover').last().one("animationend",
            function()
            {
                // Toggle animation class
                $('.book').removeClass('animate-open');
                $('.book').addClass('opened');

                // Change window/hash
                window.location.hash = "/" + hash;

                // Show navbar buttons via class
                $('.navbar-spine').addClass('visible');
                $('.navbar-spine .navbar-btn').addClass('animate-fade-in');
                $('.navbar-spine .navbar-btn').last().one("animationend",
                    function()
                    {
                        $('.navbar-spine .navbar-btn').removeClass('animate-fade-in');
                    });
            });
    }

    render() {
        return (
            <Fragment>
                {/*
                    Map iterator for Tab render function, passing in the
                    tabs variable to feed each name into the function's
                    props parameter.
                */}
                {homeButtonTabs.map((tab, i) =>
                    <HomeButtonTab key={i} name={tab.name} onclick={(e) => this.handleClick(e, tab.name)}/>)}
            </Fragment>
        );
    }
}

export default HomeButtonFragment;