import React, { useState, useEffect } from 'react';
// import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  
  useEffect( () => {
    fetch('http://localhost:3000/getBooks')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setBooks(data)
    }) 
    .catch(error => console.log('Error bringing the books ', error));

  }, []);

  return (
    <>
      <div className='container justify-content-center'>
        <h1 className='text-center'>Books</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          {books.map(book => (
            <tbody>
              <tr>
                <td key={book.id}>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.description}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  )
}

export default App;
