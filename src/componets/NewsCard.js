import React from 'react';

const NewsCard = (props) => {
    let { title, content, image, url, author, date } = props;
    return (
        <div className="card" style={{ width: "100%", height: "100%" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-between">
                <p className="card-text m-0"><small className="text-muted">By {author} on {new Date(date).toGMTString()} </small></p>
                <h5 className="card-title">{title.split("", 46).join('')}...</h5>
                <p className="card-text">{content.split("", 119).join('')}...</p>
                <a href={url} rel="noreferrer" target="_blank" className="btn btn-dark">Read More &raquo;</a>
            </div>
        </div>
    );
}

export default NewsCard;
