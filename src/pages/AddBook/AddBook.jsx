import React, { useState } from 'react';
import "./AddBook.css"
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../../Contex/BookSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
const dispatch = useDispatch()
const navigate = useNavigate()
   
  
    const handleSubmit = (e) => {
        e.preventDefault();
       const book ={id:uuidv4(),title,author};
       dispatch(addBook(book))
       navigate("/show-books", {replace: true})
      };
    return (
        <div className="book-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value = {title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    );
};

export default AddBook;