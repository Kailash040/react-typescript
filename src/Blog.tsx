import React from 'react'
interface Props {
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd : ( e: React.FormEvent ) => void
}
const Blog: React.FC<Props> = ({todo,setTodo, handleAdd}) => {
  return (
    <div>
      <form  onSubmit={handleAdd} >
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <div className="div">
<label htmlFor="submit"></label>
        <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Blog
