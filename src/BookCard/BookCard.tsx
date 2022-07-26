import React from 'react'
import { IBook } from '../Interfaces';
import './BookCard.css'

interface Props {
  book: IBook
}

const BookCard = ({ book }: Props) => {
  return (
    <section className='book-card'>
      <img src={book.book_image}></img>
      <section className='description-box'>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <p>{book.description}</p>
        <p>{book.publisher}</p>
        <p>{book.rank}</p>
      </section>
    </section>
  )
}

export default BookCard;