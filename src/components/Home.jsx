import React from 'react';
import '../assets/styles/home.css'; 

function Home() {
  return (
    <div className="home-container">
      <h1 style={{paddingBottom:'1rem'}}>Welcome to the Library Management System</h1>
      <p>
        This application allows administrators to manage books and authors efficiently. 
        You can add, edit, and delete book and author entries through the admin dashboard.
      </p>
      
      <section className="features">
        <h2>Features</h2>
        <p>
          Add , View , Update and Delete book and author details
        </p>
      </section>
      
      <section className="instructions">
        <h2>Getting Started</h2>
        <p>
          To get started, navigate to the admin-dashboard where you can manage books and authors.
          Use the forms provided to add or update entries. You can also view the lists of books
          and authors and perform actions such as editing or deleting them.
        </p>
      </section>
    </div>
  );
}

export default Home;
