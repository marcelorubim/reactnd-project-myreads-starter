import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import BookGrid from './BookGrid'

function Search(props) {
    const { booksQuery, searchBooks, moveBook,isLoading } = props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">

            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" placeholder="Search by title or author" onChange={(event) => searchBooks(event.target.value)} />

          </div>
        </div>
        <div className="search-books-results">
          <BookGrid books={booksQuery} moveBook={moveBook} isLoading={isLoading} />        
        </div>
      </div>
    )
}
export default Search

Search.propTypes = {
  booksQuery:  PropTypes.array, 
  searchBooks:  PropTypes.func.isRequired, 
  moveBook: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};