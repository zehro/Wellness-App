import React, { Component, Fragment } from "react";

// Component imports
import PageAnimFragment from "../PageAnimFragment";

// Library imports
import $ from 'jquery';

// Static imports
import '../PageAnimFragment.scss';


/* 
 * Component to return.
 */
class ExploreHomePage extends Component {

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

                <div className="page" />
            </Fragment>
        );
    }
}

export default ExploreHomePage;