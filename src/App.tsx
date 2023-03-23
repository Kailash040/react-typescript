import React, { useState } from 'react';
import './App.css';
import Blog from './Blog'
import { Todo } from './Model'

function App() {
  const [todo, setTodo] = useState<string>("")


  const [list, setList] = useState<Todo[]>([])
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setList([...list ,{id : Date.now(), todo,isDone: false}])
      setTodo(" ")
    }
  }
  console.log(todo)
  return (
    <div className="App">
      <Blog todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;