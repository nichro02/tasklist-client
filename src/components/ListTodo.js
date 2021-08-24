import { Fragment, useEffect, useState } from 'react'

const ListTodos = () => {
  //use state to map over fetched data
  const [todos, setTodos] = useState([])
  //fetch todos
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos')
      const jsonData = await response.json()

      //console.log(jsonData)
      //setTodos to fetched data
      setTodos(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }
  
  useEffect(() => {
    getTodos()
  }, [])

  //console.log(todos)
  return(
        <Fragment>
            <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* 
        <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      */}
      {todos.map(todo => (
        <tr key={todo.todo_id}>
          <td>{todo.description}</td>
          <td>Edit</td>
          <td>
            <button className='btn btn-danger'>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
        </Fragment>
    )
}

export default ListTodos