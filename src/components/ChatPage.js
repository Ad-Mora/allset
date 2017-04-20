import React from 'react';
require('../css/chatpage.scss');

export default class ChatPage extends React.Component {

    render() {
        return (
            <div className="chatpage-container">
                <h1 className="app-header">Enter your input below:</h1>
                <input type="text" className="text-input"/>
                <button className="submit-button btn btn-primary">Send!</button>
            </div>
        )
    }

}