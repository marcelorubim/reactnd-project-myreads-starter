import React, { Component } from 'react'

class Book extends Component {    
    render(){
        const { book,bookshelfs,addBook } = this.props
        return (
            <li>
            {JSON.stringify(bookshelfs)}
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading" onClick={addBook(book,'')}>Currently Reading</option>
                    <option value="wantToRead" onClick={addBook(book,'')}>Want to Read</option>
                    <option value="read" onClick={addBook(book,'read')}>Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              {book.authors && book.authors.map(author =>
                <div className="book-authors" key={author}>{author}</div>
               )}              
            </div>
          </li>
        )
    }
}
export default Book