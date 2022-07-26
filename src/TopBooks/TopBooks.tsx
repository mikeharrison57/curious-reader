import React from 'react'
import {IState, IList, IBook} from '../Interfaces'

interface Props {
  genres: IState
}

const TopBooks = ({ genres }: Props) => {
  console.log(genres)



  const getNumOneBook = genres.bookLists.map((list) => {
   return list.books[0]
  })

  console.log('books', getNumOneBook)
  return (
    <div>

    </div>
  )
}

export default TopBooks