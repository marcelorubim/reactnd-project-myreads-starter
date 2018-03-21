import React, { Component } from 'react'
import Book from './Book'
import ReactLoading from 'react-loading';

class Bookshelf extends Component {
  render() {
    const { bookshelf, moveBook, books,isLoading } = this.props;
    return (
      <div className="bookshelf">        
        <h2 className="bookshelf-title">{bookshelf.name}</h2>
        {isLoading &&
        <ReactLoading type='spin' color='green' height='50' width='50' delay='100' />}
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.filter(book => book.shelf === bookshelf.id).map(book =>
              <Book key={book.id} book={book}  moveBook={moveBook} />
            )}
          </ol>
        </div>
      </div>
    )
  }
}
export default Bookshelf