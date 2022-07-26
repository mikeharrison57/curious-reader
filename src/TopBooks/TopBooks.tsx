import React from 'react'
import {IState, IList, IBook} from '../Interfaces'
import BookCard from '../BookCard/BookCard'

interface Props {
  genres: IState
}

const TopBooks = ({ genres }: Props) => {
  console.log(genres)



  const numberOneBooks = genres.bookLists.map((list) => {
   return (
 
    <BookCard book={list.books[0]}
    />
   )
  })

  return (
    <div className='books-container'>
      {numberOneBooks}
    </div>
  )
}

export default TopBooks