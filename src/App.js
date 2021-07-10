import './App.css';
import ToDoList from './components/ToDoList/ToDoList.jsx';
import React from 'react';

function App() {
  return (
    <div className="App">
      <ToDoList></ToDoList>
      <div className="iconsInfo">Icons made by 
        <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from 
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
      <div className="iconsInfo">Icons made by 
        <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">phatplus</a> from 
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
      <div className="iconsInfo">Icons made by 
        <a href="https://www.freepik.com" title="Freepik">Freepik</a> from 
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </div>
  );
}

export default App;
