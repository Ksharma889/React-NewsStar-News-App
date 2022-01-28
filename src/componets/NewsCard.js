import React, { Component } from 'react';

export class NewsCard extends Component {
    render() {
        let { title, content, image, url} = this.props;
        return (
            <div className="card" style={{ width: "100%", height: "100%" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{title.split("", 46).join('')}...</h5>
                    <p className="card-text">{content.split("", 119).join('')}...</p>
                    <a href={url} target="_blank" className="btn btn-dark">Read More &raquo;</a>
                </div>
            </div>
        );
    }
}

export default NewsCard;
