import { useState } from 'react'
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodos] = useState("")

  function addTodo() {
    setTodos([...todos, newTodo])
    setNewTodos("") //clear the text in the box
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <>
      <div className="m-3">
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodos(event.target.value)}
        />

        <Button variant="primary" className='ms-3' onClick={addTodo}>Add</Button>
        <div>
          <ul>
            {todos.map((newTodo, index) => (
              <li key={index}>{newTodo}</li>
            ))}
            <Button variant="danger" className='ms-3' onClick={deleteTodo}>Delete</Button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
