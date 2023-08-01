import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/show-books">Show Books</Link>
          </li>
          <li>
            <Link to="/add-book">Add Book</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
