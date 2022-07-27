import React, {useEffect, useState, Component} from 'react';
import './BookGenrePage.css';
import { IState, IList, IBook } from '../Interfaces'
import BookCard from '../BookCard/BookCard'
import './BookGenrePage.css'
import { isConstructorDeclaration } from 'typescript';
import {fetchBookData} from '../api-calls'

interface Props {
  listName: string
}
// const [lists, setLists] = useState<IState>()
// const fetchGenreData = () => {
//   fetchBookData()
//   .then((data) => { 
//     // console.log(data.results.lists)
//     setLists(data.results.lists)
//   })
// }

// useEffect (() => {
//   fetchGenreData()
// }, [listName])

// class App extends React.Component<{}, IState> {
//   state: IState = {
//     bookLists: []
//   }

class BookGenrePage extends Component<{}, IState> {
  constructor(props: Props) {
    super(props) 
    this.state = {
      bookLists: []
    }
  }

  componentDidMount = () => {
    fetchBookData()
    .then((data) => { 
        // console.log(data.results.lists)
        this.setState({ bookLists: data.results.lists })
        console.log(this.state.bookLists)
      })
  }

  
  
  const selectedGenre: IList = this.state.bookLists.find(genre => genre.list_name === this.props.listName)
  console.log('this is selectedGenre.books', selectedGenre.books)
  const selectedGenreBooks = selectedGenre.books.map(book => {
    return (
      <BookCard key={book.primary_isbn13} book={book}/>
      )
    })
  
  render() {
    return (
    <>
    <div className='selected-genre-books'>
      {selectedGenreBooks}
    </div>
    </>
    )
  }
} 
  


export default BookGenrePage;