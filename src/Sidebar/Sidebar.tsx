import React from 'react';
import {IState, IList, IBook, Props} from '../Interfaces';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ genres }: Props)  => {
  const bookGenres = genres.bookLists.map((list) => {
    return (  
      <NavLink key={list.list_id} to={`/${list.list_name}`} style={{ textDecoration: 'none' }}>
        <p className='genre-links'>{list.list_name}</p>
      </NavLink>
    )
  });
  
  return (
    <section className='genres-container'>
      {bookGenres}
    </section>
  )
};

export default Sidebar;

