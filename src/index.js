import React from 'react';
import ReactDOM from 'react-dom/client';

import Book from './Book';

import './css/index.css';
import books from './books';
// const Greeting = () => {
//     return <h2>Hello World</h2>;
// };

const bookListElement = books.map((book) => {
    return <Book data={book} key={book.id} />;
});

const BookList = () => {
    return (
        <article className="bestsellars">
            <h1>BestSellars</h1>

            <ul className="book-list">{bookListElement}</ul>
        </article>
    );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(<Greeting />);
root.render(<BookList />);
// root.render(<ExEvent />);
