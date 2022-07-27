export interface IState {
  bookLists: IList[]
}

export interface IList {
  list_id: number
  list_name: string
  books: IBook[]
}


export interface IBook {
  author: string
  book_image: string
  description: string
  primary_isbn13: string
  publisher: string
  rank: number
  title: string
}