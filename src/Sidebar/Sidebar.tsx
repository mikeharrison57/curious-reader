import React, { FC } from 'react';
import {IState, IList, IBook} from '../Interfaces'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

interface Props {
  genres: IState
}

const Sidebar = ({ genres }: Props)  => {
  const bookGenres = genres.bookLists.map((list) => {
    return (  
      <NavLink key={list.list_id} to={`/${list.list_name}`}>
    <p>{list.list_name}</p>
      </NavLink>
    )
  })
  
  return (
    <section className='genres-container'>
      {bookGenres}
    </section>
  )
}

export default Sidebar;

