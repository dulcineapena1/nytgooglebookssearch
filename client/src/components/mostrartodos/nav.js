import React from "react";
import "./mostrartodos.css";


export const Nav = () => {
  return (
    <div className="divnav">
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link" href="/">Search</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/saved">Saved Books</a>
            </li> 
        </ul>
        <nav className="navbar">
            <a className="navbar-brand" href="/">
                <img src="https://cms-assets.tutsplus.com/uploads/users/523/posts/27345/preview_image/search-icon-large.png" width="40" height="30" className="d-inline-block align-top" alt="react book search"/>
                React Google Books Search
            </a>
        </nav>
    </div>
  );
}
