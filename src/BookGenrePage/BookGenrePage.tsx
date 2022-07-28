import React, { useState, useEffect } from 'react';
// import { IState, IList } from '../Interfaces'
import { fetchBooksByGenre } from '../api-calls'
import BookCard from '../BookCard/BookCard'
import './BookGenrePage.css'

interface Props {
  listName: string
}

const BookGenrePage = ({listName}: Props) => {

  const [ list, setList ] = useState({
    "list_name": "",
    "list_name_encoded": "",
    "bestsellers_date": "",
    "published_date": "",
    "published_date_description": "",
    "next_published_date": "",
    "previous_published_date": "",
    "display_name": "",
    "normal_list_ends_at": 0,
    "updated": "",
    "books": []
  })

  // const [ selectedList ] = useState(listName)

  const getListData = () => {
    fetchBooksByGenre(listName)
    .then((data) => { 
      setList(data.results)
    })
  }

  useEffect(() => {
      getListData()
      return clearEffect();
  }, [listName])

  const clearEffect = () => {
    setList({
      "list_name": "",
      "list_name_encoded": "",
      "bestsellers_date": "",
      "published_date": "",
      "published_date_description": "",
      "next_published_date": "",
      "previous_published_date": "",
      "display_name": "",
      "normal_list_ends_at": 0,
      "updated": "",
      "books": []
    })
  }

  const selecetedGenreBooks =  list.books.map((book) => {
    return (
      <BookCard key={book.isbns[1]} book={book}/>
    )
  })

  return (
    <section className='selected-genre-books'>
      {selecetedGenreBooks}
    </section>
  )
}

export default BookGenrePage;