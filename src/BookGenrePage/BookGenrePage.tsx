import React from 'react';
import './BookGenrePage.css';
import { IState, IList } from '../Interfaces'
import BookCard from '../BookCard/BookCard'
import './BookGenrePage.css'

interface Props {
  genres: IState
  listName: string
}



const BookGenrePage = ({ genres, listName }: Props) => {
  const selectedGenre: IList = genres.bookLists.find(genre => genre.list_name === listName)
  console.log('this is selectedGenre.books', selectedGenre.books)
  const selectedGenreBooks = selectedGenre.books.map(book => {
    return (
      <BookCard key={book.primary_isbn13} book={book}/>
    )
  })

  return (
    <section className='selected-genre-books'>
      {selectedGenreBooks}
    </section>
    
  )
}

export default BookGenrePage;