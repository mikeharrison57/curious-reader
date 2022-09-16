import React from 'react';
import { IBook } from '../Interfaces';
import './BookCard.css';

interface Props {
  book: IBook
  listName: string
};

const BookCard = ({ book, listName }: Props) => {
  return (
    <section>
      <article className='book-card'>
        <div className='book-image-container'>
          <img tabIndex="0" className='book-image' src={book.book_image}></img>
        </div>
        <div className='description-box'>
          <p className='title' tabIndex="0">{book.title}</p>
          <p className='author' tabIndex="0">{book.author}</p>
          <p className='current-rank' tabIndex="0">NY Times Current Rank: {book.rank}</p>
          <p className='description' tabIndex="0">{book.description}</p>
          <p className='info-publishing' tabIndex="0">Publisher {book.publisher}</p>
        </div>
      </article>
      <article className='book-flag'>
        <p className='flag-text' tabIndex="0">#{book.rank} in {listName}</p>
      </article>
    </section>

  );
};

export default BookCard;
