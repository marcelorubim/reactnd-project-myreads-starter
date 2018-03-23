import React from 'react'
import BookGrid from './BookGrid'

function Bookshelf(props) {
    const { bookshelf, moveBook, books, isLoading } = props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelf.name}</h2>
        <div className="bookshelf-books">
          <BookGrid books={books.filter(book => book.shelf === bookshelf.id)} moveBook={moveBook} isLoading={isLoading} />
        </div>
      </div>
    )
}
export default Bookshelf