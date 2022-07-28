import React, { Component } from 'react';
import './BookGenrePage.css';
import { IState, IList } from '../Interfaces'
import BookCard from '../BookCard/BookCard'
import './BookGenrePage.css'

interface Props {
  // genres?: IState
  listName: string
}

class BookGenrePage extends Component<{}, IState> {
  constructor({listName}: Props) {
    super(listName)
    this.state = {
      genreList: []
    }
  }

  render() {
    return (
    <section className='selected-genre-books'>
      {/* {selectedGenreBooks} */}
    </section>
    )
  }
}

export default BookGenrePage;