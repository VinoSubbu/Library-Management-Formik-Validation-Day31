import React, { useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [authorToEdit, setAuthorToEdit] = useState(null);

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
    <div>
      <h1 className='author-heading'>Authors</h1>
      <AuthorForm
        onSubmit={handleAddOrEditAuthor}
        initialValues={authorToEdit || { name: '', birthDate: '', biography: '' }}
        authorToEdit={authorToEdit}
      />
      <AuthorList authors={authors} onEdit={handleEditAuthor} onDelete={handleDeleteAuthor} />
    </div>
  );
};

export default Authors;
