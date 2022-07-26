import React from 'react';
import './BookGenrePage.css';
import { IState, IList, IBooks } from '../Interfaces'
import BookCard from '../BookCard/BookCard'

interface Props {
  genres: IState
  listName: string
  // books: IBooks
}



const BookGenrePage = ({ genres, listName }: Props) => {
  const selectedGenre: IList = genres.bookLists.find(genre => genre.list_name === listName)
  console.log('this is selectedGenre.books', selectedGenre)
  // const selectedGenreBooks = selectedGenre.books.map(book => {
  //   return (
  //     <BookCard book={book}/>
    // )
  // })

  return (
    <>
    {/* {{selectedGenreBooks} } */}
    {console.log('this is list name', listName)}
    {/* {console.log('this is selectedGenre', selectedGenre)} */}
    <div>I am BookGenre Component</div>
    <div>{listName}</div>
    </>
  )
}

export default BookGenrePage;