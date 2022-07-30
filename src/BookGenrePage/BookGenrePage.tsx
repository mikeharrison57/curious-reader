import React, { useState, useEffect } from 'react';
import { fetchBooksByGenre } from '../api-calls';
import BookCard from '../BookCard/BookCard';
import '../BookGenrePage/BookGenrePage.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface Props {
  listName: string
  error: boolean
};

const BookGenrePage = ({listName, error}: Props) => {

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
    fetchBooksByGenre(listName)
    .then((data) => { 
      setList(data.results)
    })
    .catch((err) => {
      console.log(err)
      setGenreError(true)
    })
  };

  useEffect(() => {
      getListData()
      return clearEffect();
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

  const selectedGenreBooks =  list.books.map((book) => {
    return (
      <BookCard key={book.isbns[1]} book={book} listName={listName}/>
    );
  });

  return (
    <section className='books-container'>
      {genreError ? <ErrorMessage /> : selectedGenreBooks}
    </section>
  );
};

export default BookGenrePage;