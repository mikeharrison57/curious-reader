import React, { Component } from 'react';
import './App.css';
import { fetchBookData } from '../api-calls'
import Sidebar from '../Sidebar/Sidebar'
import {IState, IList, IBook} from '../Interfaces'

// type State = {
//   bookLists: List[]
// }

// type List = {
//   list_id: number
//   list_name: string
//   books: Book[]
// }

// type Book = {
//   author: string
//   book_image: string
//   description: string
//   primary_isbn13: string
//   publisher: string
//   rank: number
//   title: string
// }

class App extends React.Component<{}, IState> {
    state: IState = {
      bookLists: []
    }

  componentDidMount = () => {
    fetchBookData()
    .then((data) => { 
        // console.log(data.results.lists)
        this.setState({ bookLists: data.results.lists })
        console.log(this.state.bookLists)
      })
  }
  
  render = () => {
    return (
      <main>
        <article>
          <h1 className='App'>Curious Reader</h1>
        </article>
        <Sidebar genres={this.state} />
      </main>
    )
  }
}
export default App;
