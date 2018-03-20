import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    booksQuery: [],
    bookshelfs: [
      {
        id: 'currentlyReading',
        name: 'Currently Reading',
      },
      {
        id: 'wantToRead',
        name: 'Want to Read',
      },
      {
        id: 'read',
        name: 'Reead',
      },
    ]
  }
  searchBooks = (query) => {
    BooksAPI.search(query).then(booksQuery => this.setState({ booksQuery }))
  }
  addBook = (book,idBookshelf) => {
    const bookshelfs = this.state.bookshelfs;
    for(const b of bookshelfs){
      if(b.id === idBookshelf){
        b.books.push([book]);
      }
    }
    this.setState({ bookshelfs });    
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search books={this.state.booksQuery} searchBooks={this.searchBooks} bookshelfs={this.state.bookshelfs} addBook={this.addBook} />
        ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {this.state.bookshelfs.map(b => <Bookshelf bookshelf={b} key={b.id} bookshelfs={this.state.bookshelfs} addBook={this.addBook} books={this.state.books} />)}
                </div>
              </div>
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default BooksApp
