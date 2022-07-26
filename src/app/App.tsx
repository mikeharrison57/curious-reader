import React, { Component } from 'react';
import './App.css';
import { fetchBookData } from '../api-calls'
import Sidebar from '../Sidebar/Sidebar'
import {IState, IList, IBook} from '../Interfaces'
import TopBooks from '../TopBooks/TopBooks'

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
        <div className='nav'>
          <h1 className='App'>Curious Reader</h1>
          <Sidebar genres={this.state} />
        </div>
        <section className='top-books-container'>
          <TopBooks genres={this.state}/>
        </section>
      </main>
    )
  }
}
export default App;
