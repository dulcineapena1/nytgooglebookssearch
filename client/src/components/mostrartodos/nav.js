import React from "react";
import "./mostrartodos.css";


export const Nav = () => {
  return (
    <div>
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link" href="/">Search</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/saved">Saved Books</a>
            </li> 
        </ul>
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">
                <img src="https://cms-assets.tutsplus.com/uploads/users/523/posts/27345/preview_image/search-icon-large.png" width="40" height="30" className="d-inline-block align-top" />
                React Google Books Search
            </a>
        </nav>
    </div>
  );
}
