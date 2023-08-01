import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./showBooks.css";
import { deleteBook } from "../../Contex/BookSlice";
const ShowBooks = () => {
  const books = useSelector((state) => state.booksReducer.books);
  
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="book-table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            const { id, title, author } = book;

            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{author}</td>
                <td>
                  <Link
                    style={{ marginRight: "10px" }}
                    to="/update-book"
                    state={{id,title,author}}
                  >
                    <button>Edit</button>
                  </Link>
                  <button
                    onClick={() => {
                      handleDeleteBook(id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBooks;
