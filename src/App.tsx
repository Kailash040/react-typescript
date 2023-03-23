import React ,{ useState}from 'react';
import './App.css';
import Blog from './Blog'
import { Todo } from './Model'
interface Nullprops {
  nullstate :null
}
function App() {
 const [todo,setTodo] =useState<string>("")
 const [nullState, setNullState]=  useState<null>(null)
//  its a array of type  and interface
 const [list ,setList]=useState<Todo[]>([])
 const handleAdd =(e: React.FormEvent)=>{
e.preventDefault()
 }
  return (
  <div className="App">
 <Blog  todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
 {nullState}
    </div>
  );
}

export default App;