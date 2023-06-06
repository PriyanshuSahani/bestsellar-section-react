import React from 'react';

const Book = ({ data: { img, title, author } }) => {
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

export default Book;
