import React, {Component} from 'react'
import Book from './Book'

class Bookshelf extends Component {
    render(){
      const { bookshelf,bookshelfs,addBook } = this.props;      
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{bookshelf.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {bookshelf.books.map(book => 
                <Book key={book.id} book={book} bookshelfs={bookshelfs} addBook={addBook}/>
              )} 
              </ol>
            </div>
          </div>
        )
    }
}
export default Bookshelf