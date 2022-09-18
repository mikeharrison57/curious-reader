import React, { Component } from 'react';
import './App.css';
import { fetchBookData } from '../api-calls';
import Sidebar from '../Sidebar/Sidebar';
import {IState} from '../Interfaces';
import TopBooks from '../TopBooks/TopBooks';
import BookGenrePage from '../BookGenrePage/BookGenrePage';
import { NavLink, Route } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import BookIcon from '../assets/book.png';

class App extends Component<{}, IState> {
  state: IState = {
    bookLists: [],
    error: false
  };

  componentDidMount = () => {
    fetchBookData()
    .then((data) => { 
        this.setState({ bookLists: data.results.lists })
      })
    .catch((error) => {
      console.log(error)
      this.setState({error: true})
    })
  };
  
  render = () => {
    return (
    <>
      {this.state.error ? <div><ErrorMessage /></div> :
        <>
          <nav>
            <NavLink to={'/'} style={{ textDecoration: 'none' }}>
              <article className='header-container'>
                <img src={BookIcon} className='book-icon'/>
                <h1>Curious Reader</h1>
              </article>
            </NavLink>
            <Sidebar genres={this.state} />
          </nav>
        <Route exact path='/' render={() =>
          <TopBooks genres={this.state}/> 
          }/>
      
        <Route exact path='/:list_name' render={({match}) => {
          return (
          <BookGenrePage listName={match.params.list_name} genres={this.state} error={this.state.error}/>
          )
          }}/>
        </>
        }
    </>
    )
  };
};
export default App;
