import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header/Header';
import TodoContainer from './components/Sections/TodoContainer/TodoContainer';

function App() {
  return (
    <main className="main">
      <div className='container'>
        <Header />
        <TodoContainer />
      </div>
    </main>
  );
}

export default App;
