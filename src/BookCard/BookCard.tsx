import React from 'react';
import { IBook } from '../Interfaces';
import './BookCard.css';

interface Props {
  book: IBook
};

const BookCard = ({ book }: Props) => {
  return (
    <article className='book-card'>
      <div className='book-image-container'>
        <img className='book-image' src={book.book_image}></img>
      </div>
      <div className='description-box'>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <p>{book.description}</p>
        <p>{book.publisher}</p>
        <p>{book.rank}</p>
      </div>
    </article>
  );
};

export default BookCard;