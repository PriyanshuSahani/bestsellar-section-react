import React from 'react';
import ReactDOM from 'react-dom/client';

import Book from './Book';

import './css/index.css';
import ExEvent from './ExEvent';
// const Greeting = () => {
//     return <h2>Hello World</h2>;
// };

const bookData = [
    {
        id: 1,
        img: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
        title: 'Atomic Habits',
        author: 'James Clear',
    },
    {
        id: 2,
        img: 'https://m.media-amazon.com/images/I/51k+lXZyJ6L._SX322_BO1,204,203,200_.jpg',
        title: 'Gentleman in Moscow, A',
        author: 'Amor Towles',
    },
    {
        id: 3,
        img: 'https://m.media-amazon.com/images/I/51HiMkA09VL._SX324_BO1,204,203,200_.jpg',
        title: 'All the Light we Cannot See',
        author: 'Anthony Doerr',
    },
];

const bookListElement = bookData.map((book) => {
    return <Book data={book} key={book.id} />;
});

const BookList = () => {
    return (
        <section className="book-list">
            {bookListElement}
            {/* <Book /> */}
        </section>
    );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(<Greeting />);
root.render(<BookList />);
root.render(<ExEvent />);
