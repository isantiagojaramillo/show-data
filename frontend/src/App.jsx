import React, { useState, useEffect } from 'react';
// import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  
  useEffect( () => {
    fetch('http://localhost:5000/getBooks')
    .then(response => response.json())
    .then(data => setBooks(data))
    .catch(error => console.log('Error bringing the books ' + error));

  }, []);

  return (
    <>
      <div>
        <h1>Books</h1>

        <ul>
          {books.map(book => (
            <li>
              {book.id} - {book.title} - {book.author} - {book.description}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;
