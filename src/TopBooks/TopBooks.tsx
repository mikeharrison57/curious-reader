import React from 'react';
import { Props } from '../Interfaces';
import BookCard from '../BookCard/BookCard';
import '../TopBooks/TopBooks.css'
import loadingIcon from '../assets/orange-loading.gif';


const TopBooks = ({ genres }: Props) => {

  const numberOneBooks = genres.map((list) => {
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