import React from 'react';
import './Navbar.sass';

const Navbar = () => {
  const btnClick = () => {
    alert('btn');
  };

  return (
    <nav className="bg-black px-5 py-3 border-b-2 border-solid border-white">
      <div className="container">
        <a href="" className="navbar-brand text-white">
          React TodoList
        </a>
        <button
          className="text-white rounded border-green-500 bg-black float-right"
          onClick={btnClick}
        >
          清除
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
