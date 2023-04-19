import React from 'react';
import NavBar from './components/Navbar';
import Form from './components/Form';
import List from './components/List';

function App() {
  return (
    <>
      <div className="h-screen bg-black text-white">
        <NavBar></NavBar>
        <div className="container text-xl px-5 box-border">
          <div className="mx-auto rounded px-5 mt-4 border border-solid border-light">
            <Form></Form>
            <List></List>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
