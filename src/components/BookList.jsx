import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className='book-table'>
      {books.length === 0 ? (
        <p></p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Publication Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.publicationDate}</td>
                <td>
                  <button onClick={() => onEdit(book)}>Edit</button>
                  <button className="delete" onClick={() => onDelete(book.isbn)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookList;
