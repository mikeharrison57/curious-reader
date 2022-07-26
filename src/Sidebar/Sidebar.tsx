import React, { FC } from 'react';
import {IState, IList, IBook} from '../Interfaces'
import './Sidebar.css'

interface Props {
  genres: IState
}

const Sidebar = ({ genres }: Props)  => {
  const bookGenres = genres.bookLists.map((list) => {
    return (   
    <p key={list.list_id}>{list.list_name}</p>
    )
  })
  
  return (
    <section className='genres-container'>
      {bookGenres}
    </section>
  )
}

export default Sidebar;

