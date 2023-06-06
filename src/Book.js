import React from 'react';

const Book = ({ data: { id, img, title, author } }) => {
    return (
        <li className="book">
            <div className="rank">#{id}</div>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </li>
    );
};

export default Book;
