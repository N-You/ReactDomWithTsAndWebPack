import React from 'react';
import './Navbar.sass';

const Navbar = (props: any) => {
  let { items, clearItems } = props;
  const btnClick = () => {
    clearItems();
  };

  return (
    <nav className="bg-black px-5 py-3 border-b-2 border-solid border-white">
      <div className="container">
        <a href="" className="navbar-brand text-white">
          React TodoList
        </a>
        {items.length > 0 ? (
          <button
            className="text-white rounded border-green-500 bg-black float-right"
            onClick={btnClick}
          >
            清除
          </button>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
};

export default Navbar;
