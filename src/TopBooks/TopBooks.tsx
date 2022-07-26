import React from 'react'
import {IState, IList, IBook} from '../Interfaces'
import BookCard from '../BookCard/BookCard'
import './TopBooks.css'

interface Props {
  genres: IState
}

const TopBooks = ({ genres }: Props) => {
  console.log(genres)



  const numberOneBooks = genres.bookLists.map((list) => {
   return (
    <BookCard key={list.list_id} book={list.books[0]}/>
   )
  })

  return (
    <section className='books-container'>
      {numberOneBooks}
    </section>
 
  )
}

export default TopBooks