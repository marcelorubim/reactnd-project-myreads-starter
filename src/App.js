import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'
import { Route,Link } from 'react-router-dom'


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
        name: 'Read',
      },
    ]
  }
  searchBooks = (query) => {
    BooksAPI.search(query).then(booksQuery => this.setState({ booksQuery }))
  }
  moveBook = (book,shelf) => {
    BooksAPI.update(book,shelf).then(() => this.getAllBooks())
  }
  componentDidMount() {
    this.getAllBooks();
  }
  getAllBooks(){
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }
  render() {
    return (
      <div className="app">
       <Route path="/search" render={() => (
          <Search books={this.state.booksQuery} searchBooks={this.searchBooks} bookshelfs={this.state.bookshelfs} moveBook={this.moveBook} />
        )}/>
        <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {this.state.bookshelfs.map(b => <Bookshelf bookshelf={b} key={b.id} bookshelfs={this.state.bookshelfs} books={this.state.books}  moveBook={this.moveBook}/>)}
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>                
              </div>
            </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
