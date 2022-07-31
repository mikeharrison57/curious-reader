import React from 'react';
import {IState, IList, IBook, Props} from '../Interfaces';
import BookCard from '../BookCard/BookCard';
import '../TopBooks/TopBooks.css'
import { listeners } from 'process';

const TopBooks = ({ genres }: Props) => {

  const numberOneBooks = genres.bookLists.map((list) => {
   return (
    <BookCard key={list.list_id} book={list.books[0]} listName={list.display_name}/>
   )
  });
  
  return (
    <section className='books-container'>
      {numberOneBooks}
    </section>
  )
};

export default TopBooks;