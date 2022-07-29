import React, { Component } from 'react';
import './App.css';
import { fetchBookData } from '../api-calls'
import Sidebar from '../Sidebar/Sidebar'
import {IState, IList, IBook} from '../Interfaces'
import TopBooks from '../TopBooks/TopBooks'
import BookGenrePage from '../BookGenrePage/BookGenrePage';
import { NavLink, Route } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

class App extends React.Component<{}, IState> {
    state: IState = {
      bookLists: [],
      error: false
    }

  componentDidMount = () => {
    fetchBookData()
    .then((data) => { 
        this.setState({ bookLists: data.results.lists })
      })
    .catch((error) => {
      console.log(error)
      this.setState({error: true})
    })
  }
  
  render = () => {
    return (
      <>
      {this.state.error ? <div><ErrorMessage /></div> :
        <>
          <nav>
          <NavLink to={'/'}>
            <h1>Curious Reader</h1>
          </NavLink>
          <Sidebar genres={this.state} />
        </nav>
        <Route exact path='/' render={() =>
          <main>
            <TopBooks genres={this.state}/>
          </main>
       }
       />

       <Route exact path='/:list_name' render={({match}) => {
        {console.log('this is match', match.params.list_name)}
        return (
          <section className='book-genre-page'>
            <BookGenrePage listName={match.params.list_name} />
          </section>
        )
        }}
        />
        </>
        }
      </>
    )
  }
}
export default App;
