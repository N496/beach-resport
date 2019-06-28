import React, { Component } from 'react';
import { RoomContext } from '../context';
export default class FeatureRooms extends Component {
    static contextType = RoomContext;
    consol
    render() {
        const value = this.context;
        return (
            <div>Hello from featured rooms {value}</div>
        )
    }
}
