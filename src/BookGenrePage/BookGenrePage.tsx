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

const BookGenrePage = ({listName, genres, error}: Props) => {

  const [ list, setList ] = useState({
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
  });

  const [genreError, setGenreError] = useState(error);

  const getListData = () => {
    const selectedGenre: IList = genres.bookLists.find(genre => genre.list_name === listName)
   return setList(selectedGenre)
  };

  useEffect(() => {
      getListData()
      // return clearEffect();
  }, [listName]);

  const clearEffect = () => {
    setList({
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
    });
  };

 
  // console.log('this is selectedGenre.books', selectedGenre.books)
  const selectedGenreBooks = list.books.map(book => {
    return (
      <BookCard key={Math.random()} book={book} listName={listName}/>
    )
  })

  // const selectedGenreBooks =  list.books.map((book) => {
  //   return (
  //     <BookCard key={Math.random()} book={book} listName={listName}/>
  //   );
  // });

  return (
    <section className='books-container'>
      {/* {genreError ? <ErrorMessage /> : !list.books.length ? <img src={loadingIcon} className='loading-icon'/> : selectedGenreBooks} */}
      <selectedGenreBooks />
    </section>
  );
};

export default BookGenrePage;