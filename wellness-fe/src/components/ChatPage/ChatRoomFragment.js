import React, { Component, Fragment } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

// Library imports
import $ from 'jquery';

// Static imports
import { WSC_URL } from "../../constants";


//////////////////////////////////////////

///////////////////////////////////////////


/*
 * Function to render a .cover-option Object with a unique
 * identifier.
 */
function MessageBlock(props) {
    return (
        <div style={{
            display: 'flex',
        }}>
            <div className="avatar" title={props.message.name} style={{
                height: '40px',
                width: '40px',
            }}>
                R
            </div>
            <div className="content">
                <span>{props.message.msg}</span>
            </div>
        </div>
    )
}

/* 
 * Component to return.
 */
class ChatRoomFragment extends Component {
    // Base constructor
    constructor(props) {
        super(props);

        this.state = {
            ws: null,
            status: 'CLOSED',
            messages: [],
            value: '',
            name: '',
        }
    }

    // Initial timeout duration as a class variable
    timeout = 250;
    
    /**
     * @function connect
     * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
     */
    connect = () => {
        var ws = new W3CWebSocket(WSC_URL + this.props.room + '/');
        let that = this;
        var connectInterval;

        // websocket onopen event listener
        ws.onopen = () => {
            console.log('WebSocket Client Connected');

            this.setState({
                ws: ws,
                status: 'ACTIVE',
            });

            that.timeout = 250; // reset timer to 250 on open of websocket connection 
            clearTimeout(connectInterval); // clear Interval on open of websocket connection
        };

        // websocket onmessage event listener
        ws.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            console.log('got reply! ', dataFromServer.type);

            if (dataFromServer) {
                this.setState((state) =>
                    ({
                        messages: [...state.messages,
                        {
                            msg: dataFromServer.message,
                            name: dataFromServer.name,
                        }]
                    })
                );
            }
        };

        // websocket onclose event listener
        ws.onclose = e => {
            if(this.state.status === 'CLOSED')
            {
                console.log(`WebSocket Client Disconnected`);
            }
            else
            {
                console.log(
                    `Socket is closed. Reconnect will be attempted in ${Math.min(
                        10000 / 1000,
                        (that.timeout + that.timeout) / 1000
                    )} second.`,
                    e.reason
                );
    
                that.timeout = that.timeout + that.timeout; //increment retry interval
                connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
            }
        };

        // websocket onerror event listener
        ws.onerror = err => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );

            ws.close();
        };
    }

    /**
     * utilited by the @function connect to check if the connection is closed, if so attempts to reconnect
     */
     check = () => {
        const { ws } = this.state;

        //check if websocket instance is closed, if so call `connect` function.
        if (!ws || ws.readyState == WebSocket.CLOSED) this.connect();
    };

    disconnect = () => {
        console.log('test');
        this.setState({
            status: 'CLOSED',
        }, () => console.log(this.state.status));
    }

    onButtonClicked = (e) => {
        e.preventDefault();

        this.state.ws.send(JSON.stringify({
            type: "message",
            message: this.state.value,
            name: this.state.name
        }));
        this.setState({ value: '' })
    }

    componentDidMount() {
        this.connect();
    }

    componentWillUnmount() {
        this.disconnect();
        this.state.ws.close();
    }

    render() {
        return (
            <div>
                <span>Room Name: {this.props.room}</span>

                <div style={{
                    height: 500,
                    maxHeight: 500,
                    overflow: 'auto',
                    boxShadow: 'none',
                    background: 'white',
                }}>
                    {this.state.messages.map((message, i) => <MessageBlock key={i} message={message} />)}
                </div>

                <form className="" noValidate onSubmit={this.onButtonClicked}>
                    <input
                        id="outlined-helperText"
                        label="Make a comment"
                        value={this.state.value}
                        onChange={e => {
                            this.setState({ value: e.target.value });
                            this.value = this.state.value;
                        }}
                    />
                    <button
                        type="submit"
                        className=""
                    >
                        Send
                    </button>
                </form>
            </div>
        )
    }
}

// export default ChatRoomFragment;
export default ChatRoomFragment;