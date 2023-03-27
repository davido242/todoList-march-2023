import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import React, { useState } from 'react'

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header />  
        </div>
        <div>
          <Form 
          input={input}
          setInput={setInput}
          todo={todo}
          setTodo={setTodo}
          />  
        </div>
      </div>
    </div>
  );
}

export default App;
