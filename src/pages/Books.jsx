import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  const handleAddOrEditBook = (book) => {
    if (bookToEdit) {
      setBooks(
        books.map((b) => (b.isbn === bookToEdit.isbn ? book : b))
      );
    } else {
      setBooks([...books, book]);
    }
    setBookToEdit(null);
  };

  const handleEditBook = (book) => {
    setBookToEdit(book);
  };

  const handleDeleteBook = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  return (
    <div>
      <h1 className='book-heading'>Books</h1>
      <BookForm
        onSubmit={handleAddOrEditBook}
        initialValues={bookToEdit || { title: '', author: '', isbn: '', publicationDate: '' }}
        bookToEdit={bookToEdit}
      />
      <BookList books={books} onEdit={handleEditBook} onDelete={handleDeleteBook} />
    </div>
  );
};

export default Books;
