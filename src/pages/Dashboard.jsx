import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import '../assets/styles/dashboard.css'

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);
  
  const [authors, setAuthors] = useState([]);
  const [authorToEdit, setAuthorToEdit] = useState(null);

  // Book handlers
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

  // Author handlers
  const handleAddOrEditAuthor = (author) => {
    if (authorToEdit) {
      setAuthors(
        authors.map((a) => (a.name === authorToEdit.name ? author : a))
      );
    } else {
      setAuthors([...authors, author]);
    }
    setAuthorToEdit(null);
  };

  const handleEditAuthor = (author) => {
    setAuthorToEdit(author);
  };

  const handleDeleteAuthor = (name) => {
    setAuthors(authors.filter((author) => author.name !== name));
  };

  return (
    <div className='dashboard'>
      <h1>Admin Dashboard</h1>

      <section className='books-section'>
        <h2>Manage Books</h2>
        <BookForm
          onSubmit={handleAddOrEditBook}
          initialValues={bookToEdit || { title: '', author: '', isbn: '', publicationDate: '' }}
          bookToEdit={bookToEdit}
        />
        <BookList
          books={books}
          onEdit={handleEditBook}
          onDelete={handleDeleteBook}
        />
      </section>

      <section className='authors-section'>
        <h2>Manage Authors</h2>
        <AuthorForm
          onSubmit={handleAddOrEditAuthor}
          initialValues={authorToEdit || { name: '', birthDate: '', biography: '' }}
          authorToEdit={authorToEdit}
        />
        <AuthorList
          authors={authors}
          onEdit={handleEditAuthor}
          onDelete={handleDeleteAuthor}
        />
      </section>
    </div>
  );
};

export default Dashboard;
