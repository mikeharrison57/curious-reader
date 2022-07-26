import React from 'react';
import './BookGenrePage.css';
import { IState } from '../Interfaces'

interface Props {
  genres: IState
  listName: string
}

const BookGenrePage = ({ genres, listName }: Props) => {
  console.log('this is data from BookGenrePage', genres)
  return (
    <>
    {console.log('this is list name', listName)}
    <div>I am BookGenre Component</div>
    <div>{listName}</div>
    </>
  )
}

export default BookGenrePage;