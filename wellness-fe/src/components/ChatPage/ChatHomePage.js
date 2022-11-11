import React, { Component, Fragment } from "react";
import axios from "axios";

// Component imports
import PageAnimFragment from "../PageAnimFragment";
import ChatListFragment from "./ChatListFragment";
import ChatRoomFragment from "./ChatRoomFragment";

// Library imports
import $ from 'jquery';

// Static imports
import { API_URL } from "../../constants";
import '../PageAnimFragment.scss';


/* 
 * Component to return.
 */
class ChatHomePage extends Component {
    // Base constructor
    constructor(props) {
        super(props);

        this.state = {
            // isLoggedIn: false,
            // messages: [],
            // value: '',
            // name: '',
            users: [],
            room: '',
        }
    }

    componentDidMount() {
        // Play animation via class toggle
        $('.page').addClass('animate-fade-in').one("animationend",
            function()
            {
                // Remove animation class after final animation
                $('.page').removeClass('animate-fade-in');
            });

        // Get users
        this.getFriends();
    }

    getFriends = () => {
        axios.get(API_URL).then(res => this.setState({ users: res.data }));
    }

    enterRoom = (e, room_name) => {
        // Stop propagation of anchor
        e.preventDefault();
        console.log( room_name );

        this.setState({ room: room_name });
    }

    exitRoom = (e) => {
        // Stop propagation of anchor
        e.preventDefault();

        this.setState({ room: '' });
    }
    
    render() {
        return (
            <Fragment>
                <PageAnimFragment />

                <div className="page">
                    {this.state.room === '' ?
                        <ChatListFragment
                            users={this.state.users}
                            enterRoom={this.enterRoom} />
                    :
                        <ChatRoomFragment
                            room={this.state.room}
                            exitRoom={this.exitRoom} />
                    }
                </div>
            </Fragment>
        );
    }
}

export default ChatHomePage;