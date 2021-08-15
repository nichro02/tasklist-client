import { Fragment, useEffect, useState } from 'react'

const ListTodos = () => {
  //use state to map over fetched data
  const [todos, setTodos] = useState([])
  //fetch todos
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos')
      const jsonData = await response.json()

      console.log(jsonData)
      //setTodos to fetched data
      setTodos(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }
  
  useEffect(() => {
    getTodos()
  })
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
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
        </Fragment>
    )
}

export default ListTodos