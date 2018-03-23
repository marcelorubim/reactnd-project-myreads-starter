import React from 'react'
import Loading from './Loading'
import Book from './Book'

function BookGrid(props) {
  const { isLoading, books,moveBook } = props
  return <div><Loading isLoading={isLoading} />
    <ol className="books-grid">
      {books && books.map(book =>
        <Book key={book.id} book={book} moveBook={moveBook} />
      )}
    </ol></div>
}

export default BookGrid