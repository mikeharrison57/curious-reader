import React, { Component, useState, useEffect } from 'react';
import './App.css';
import { fetchBookData } from '../api-calls';
import Sidebar from '../Sidebar/Sidebar';
import {IState} from '../Interfaces';
import TopBooks from '../TopBooks/TopBooks';
import BookGenrePage from '../BookGenrePage/BookGenrePage';
import { NavLink, Route } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import BookIcon from '../assets/book.png';
import Dropdown from '../Dropdown/Dropdown';

// class App extends Component<{}, IState> {
//   state: IState = {
//     bookLists: [],
//     error: false
//   };

//   componentDidMount = () => {
//     fetchBookData()
//     .then((data) => { 
//         this.setState({ bookLists: data.results.lists })
//       })
//     .catch((error) => {
//       console.log(error)
//       this.setState({error: true})
//     })
//   };
  
//   render = () => {
//     return (
//     <>
//       {this.state.error ? <div><ErrorMessage /></div> :
//         <>
//           <nav>
//             <NavLink to={'/'} style={{ textDecoration: 'none' }}>
//               <article className='header-container'>
//                 <h1 tabIndex="0">Curious Reader</h1>
//                 <img tabIndex="0" src={BookIcon} className='book-icon'/>
//               </article>
//             </NavLink>
//             <Sidebar genres={this.state} />
//             <Dropdown genres={this.state}/>
//           </nav>
//         <Route exact path='/' render={() =>
//           <TopBooks genres={this.state}/> 
//           }/>
      
//         <Route exact path='/:list_name' render={({match}) => {
//           return (
//           <BookGenrePage listName={match.params.list_name} genres={this.state} error={this.state.error}/>
//           )
//           }}/>
//         </>
//         }
//     </>
//     )
//   };
// };
// export default App;

const App = () => {
  // state: IState = {
  //   bookLists: [],
  //   error: false
  // };

  const [bookLists, setBookLists] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchBookData()
    .then((data) => {
      console.log(data)
      return setBookLists(data.results.lists)
    })
  .catch((err) => setError(true))
  }, [])
  
    return (
    <>
      {error ? <div><ErrorMessage /></div> :
      bookLists.length &&
        <>
          <nav>
            <NavLink to={'/'} style={{ textDecoration: 'none' }}>
              <article className='header-container'>
                <h1 tabIndex="0">Curious Reader</h1>
                <img tabIndex="0" src={BookIcon} className='book-icon'/>
                <Sidebar genres={bookLists} />
              </article>
            </NavLink>
            <Dropdown genres={bookLists}/>
          </nav>
        <Route exact path='/' render={() =>
          <TopBooks genres={bookLists}/> 
          }/>
      
        <Route exact path='/:list_name' render={({match}) => {
          return (
          <BookGenrePage listName={match.params.list_name} genres={bookLists} error={error}/>
          )
          }}/>
        </>
        }
    </>
    )
};
export default App;
