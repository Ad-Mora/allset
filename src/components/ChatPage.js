import React from 'react';
require('../css/chatpage.scss');

export default class ChatPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    sendData() {
        var $inputVal = $('.text-input').val();
        $.post('/message', {message: $inputVal}, function(data, status) {
            console.log('Sent message');
        })

    }

    render() {
        return (
            <div className="chatpage-container">
                <h1 className="app-header">Enter your input below:</h1>
                <input type="text" className="text-input"/>
                <button onClick={this.sendData} className="submit-button btn btn-primary">Send!</button>
            </div>
        )
    }

}