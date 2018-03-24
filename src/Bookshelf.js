import React from 'react'
import BookGrid from './BookGrid'
import PropTypes from 'prop-types';


function Bookshelf(props) {
    const { bookshelf, moveBook, books, isLoading } = props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelf.name}</h2>
        <div className="bookshelf-books">
          <BookGrid books={books} moveBook={moveBook} isLoading={isLoading} />
        </div>
      </div>
    )
}
export default Bookshelf
Bookshelf.propTypes = {
  bookshelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}