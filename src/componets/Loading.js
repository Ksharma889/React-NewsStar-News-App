import React, { Component } from 'react';

export class Loading extends Component {
    render() {
        return (
            <div className="loading-container">
                <div className="loading">
                    <div className="large">
                        <div className="medium">
                            <div className="small">
                                <div className="dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;
