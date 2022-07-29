const fetchBookData = () => {
  return fetch('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj')
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw Error(response.statusText)
    })
}

const fetchBooksByGenre = (genre) => {
  return fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${genre}.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw Error(response.statusText)
    })
}

export { fetchBookData, fetchBooksByGenre}