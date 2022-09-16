import { useState, useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import '../BookGenrePage/BookGenrePage.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import loadingIcon from '../assets/orange-loading.gif';
import { IList } from '../Interfaces';

interface Props {
  listName: string
  error: boolean
  genres: any[]
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

const BookGenrePage = ({ listName, genres, error }: Props) => {
  const [list, setList] = useState(defaultList);

  const [genreError] = useState(error);

  const getListData = () => {
    const selectedGenre: IList = genres.find((genre: { list_name: string; }) => genre.list_name === listName)
    setList(selectedGenre)
  };

  useEffect(() => {
    getListData()
  }, [genres, listName]);

  const returnBooksArray = () => {
    return list.books.map(book => {
      return (
        <BookCard key={Math.random()} book={book} listName={listName} />
      )
    })
  }

  return (
    <>
      {list &&
        <section className='books-container'>
          {genreError ? <ErrorMessage /> : !list.books.length ? <img src={loadingIcon} className='loading-icon' /> : returnBooksArray()}
        </section>
      }
    </>
  );
};

export default BookGenrePage;