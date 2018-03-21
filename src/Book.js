import React, { Component } from 'react'

class Book extends Component {    
    render(){
        const { book,moveBook } = this.props
        const shelf = book.shelf || "none"
        const authors = book.authors || []
        return (
            <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select value={shelf} onChange={(event) => moveBook(book,event.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              {authors.map(author =>
                <div className="book-authors" key={author}>{author}</div>
               )}              
            </div>
          </li>
        )
    }
}
export default Book