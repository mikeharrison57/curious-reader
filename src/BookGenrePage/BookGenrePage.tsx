import React from 'react';
import './BookGenrePage.css';
import { IState } from '../Interfaces'

interface Props {
  genres: IState
}

const BookGenrePage = ({ genres }: Props) => {
  console.log('this is data from BookGenrePage', genres)
  return (
    <div>I am BookGenre Component</div>
  )
}

export default BookGenrePage;