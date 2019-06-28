import React, { Component } from 'react'

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state = { 
        test: 'hello'
    };
    render() {
        return (
            <RoomContext.Provider value={this.state}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;
console.log(RoomConsumer)

export {RoomProvider, RoomConsumer, RoomContext}