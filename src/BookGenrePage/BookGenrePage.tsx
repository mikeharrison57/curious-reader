import React, { useState, useEffect } from 'react';
import { fetchBooksByGenre } from '../api-calls';
import BookCard from '../BookCard/BookCard';
import '../BookGenrePage/BookGenrePage.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import loadingIcon from '../assets/orange-loading.gif';
import { IState, IList } from '../Interfaces';


interface Props {
  listName: string
  error: boolean
  genres: IState
};

let defaultList = {
  "list_name": "",
  "list_name_encoded": "",
  "bestsellers_date": "",
  "published_date": "",
  "published_date_description": "",
  "next_published_date": "",
  "previous_published_date": "",
  "display_name": "",
  "normal_list_ends_at": 0,
  "updated": "",
  "books": []
}

const BookGenrePage = ({listName, genres, error}: Props) => {

  const [ list, setList ] = useState(defaultList);

  const [genreError, setGenreError] = useState(error);

  const getListData = () => {
    console.log( 'list name', listName)
      const selectedGenre: IList = genres.bookLists.find(genre => genre.list_name === listName)
      setList(selectedGenre)
  };

  useEffect(() => {
    console.log('list', list)
      getListData()
      // return clearEffect();
  }, [genres]);

  // const clearEffect = () => {
  //   setList({
  //     "list_name": "",
  //     "list_name_encoded": "",
  //     "bestsellers_date": "",
  //     "published_date": "",
  //     "published_date_description": "",
  //     "next_published_date": "",
  //     "previous_published_date": "",
  //     "display_name": "",
  //     "normal_list_ends_at": 0,
  //     "updated": "",
  //     "books": []
  //   });
  // };

    const returnBooksArray = () => {
      return list.books.map(book => {
        return (
          <BookCard key={Math.random()} book={book} listName={listName}/>
        )
      })
    }
  // console.log('this is selectedGenre.books', selectedGenre.books)

  // const selectedGenreBooks =  list.books.map((book) => {
  //   return (
  //     <BookCard key={Math.random()} book={book} listName={listName}/>
  //   );
  // });
  console.log('this is list', list)

  return (
    <>
    {list && 
    <section className='books-container'>
      {genreError ? <ErrorMessage /> : !list.books.length ? <img src={loadingIcon} className='loading-icon'/> : returnBooksArray()}
      {/* <selectedGenreBooks /> */}
    </section>
     }
     </>
     
     );
};

export default BookGenrePage;