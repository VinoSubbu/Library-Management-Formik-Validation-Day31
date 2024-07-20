import React from 'react';

const AuthorList = ({ authors, onEdit, onDelete }) => {
  return (
    <div className='author-table'>
      {authors.length === 0 ? (
        <p></p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Biography</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author, index) => (
              <tr key={index}>
                <td>{author.name}</td>
                <td>{author.birthDate}</td>
                <td>{author.biography}</td>
                <td>
                  <button onClick={() => onEdit(author)}>Edit</button>
                  <button className="delete" onClick={() => onDelete(author.name)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AuthorList;
