import React from 'react';

class Episode extends React.Component {
    render() {
        return (
            <div>
                <p>Date: {this.props.date}  <a className="App-link" href={this.props.link} target="_blank" rel="noopener noreferrer">Link</a></p>
            </div>
        );
    }
}

export default Episode;
