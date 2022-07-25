import React, { Component } from 'react';
import './App.css';
import { fetchBookData } from '../api-calls'
import Sidebar from '../Sidebar/Sidebar'

type State = {
  booksLists: List[]
}

type List = {
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
        console.log(data.results.lists)
        this.setState({ bookLists: data.results.lists })
      })
  }
  
  render() {
    return (
      <main>
        <article>
          <h1 className='App'>Curious Reader</h1>
        </article>
        <Sidebar />
      </main>
  )
  }
}

export default App;
