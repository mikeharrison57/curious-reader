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
    <aside>
      {bookGenres}
    </aside>
  )
}

export default Sidebar;

