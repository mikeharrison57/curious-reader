import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchBookData } from '../api-calls'

type State = {
  books: book[]
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
      books: []
    }
  }

  componentDidMount() {
    fetchBookData()
      .then(data => console.log(data.results.lists[0].books))
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
