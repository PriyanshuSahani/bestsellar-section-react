import React from 'react';
import ReactDOM from 'react-dom/client';

import Book from './Book';

import './css/index.css';
// const Greeting = () => {
//     return <h2>Hello World</h2>;
// };

const book1 = {
    img: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Atomic Habits',
    author: 'James Clear',
};

const book2 = {
    img: 'https://m.media-amazon.com/images/I/51k+lXZyJ6L._SX322_BO1,204,203,200_.jpg',
    title: 'Gentleman in Moscow, A',
    author: 'Amor Towles',
};

const book3 = {
    img: 'https://m.media-amazon.com/images/I/51HiMkA09VL._SX324_BO1,204,203,200_.jpg',
    title: 'All the Light we Cannot See',
    author: 'Anthony Doerr',
};

const BookList = () => {
    return (
        <section className="book-list">
            <Book data={book1} />
            <Book data={book2} />
            <Book data={book3} />
            {/* <Book /> */}
        </section>
    );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(<Greeting />);
root.render(<BookList />);
