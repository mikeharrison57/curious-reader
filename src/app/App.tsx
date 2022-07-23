import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchBookData } from '../api-calls'

type State = {
  booksLists: Lists[]
}

type Lists = {
  list_id: number
  list_name: string
  books: Book[]
}

type Book = {
  author: string
  book_image: string
  description: string
  primary_isbn13: string
  publisher: string
  rank: number
  title: string
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookLists: []
    }
  }

  componentDidMount() {
    fetchBookData()
      .then((data) => { 
        this.setState({ bookLists: data.results.lists })
      })
  }
  
  render() {
    return (
     <main>
       <h1>Hello</h1>
    </main>
  )
  }
}

export default App;
