import React, { Component, Fragment } from "react";

// Library imports
import $ from 'jquery';

// Component imports
import HomeAnimFragment from "./HomeAnimFragment";
import HomeButtonFragment from "./HomeButtonFragment";

// Static imports
import './HomePage.scss';


/* 
 * Component to return.
 */
class HomePage extends Component {
    // Base constructor
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $('.cover-section').addClass('animate-fade-in').one("animationend",
            function()
            {
                $('.cover-section').removeClass('animate-fade-in');
            });;
    }

    render() {
        return (
            <Fragment>
                <HomeAnimFragment />

                <div className="cover">
                    <section className="cover-section title">
                        <h1 className="cover-title">LifeXP</h1>
                    </section>

                    <section className="cover-section options">
                        <HomeButtonFragment />
                    </section>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;