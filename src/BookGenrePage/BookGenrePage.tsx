import React, { useState, useEffect } from 'react';
import { IState, IList } from '../Interfaces'
import { fetchBooksByGenre } from '../api-calls'
import BookCard from '../BookCard/BookCard'
import './BookGenrePage.css'

interface Props {
  // genres?: IState
  listName: string
}

const BookGenrePage = ({listName}: Props) => {

  const [ list, setList ] = useState({})

  const getListData = () => {
    fetchBooksByGenre(listName)
    .then((data) => { 
      console.log(data)
      setList(data.results)
    })
  }

  useEffect(() => {
    getListData()
  }, [listName])
  
  return (
    <section className='selected-genre-books'>
      {/* {selectedGenreBooks} */}
    </section>
  )
}

export default BookGenrePage;

  // } extends Component<{}, IState> {
  //   constructor(props: Props) {
  //     super(props)
  //     this.state = {
  //       genreList: []
  //     }