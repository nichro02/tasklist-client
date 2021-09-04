import { Fragment, useState } from 'react'

const EditTodo = ({ todo }) => {
    //verify todo prop has been passed
    console.log(todo)
    //use state to track edit being entered
    const [description, setDescription] = useState(todo.description)
    //send edit to database
    const updateDescription = async e => {
        e.preventDefault()
        try {
           const body = { description}
           const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
               method: 'PUT',
               headers: { 'Content-Type': 'application/json' },
               body:JSON.stringify(body)
            })

            //check that everything is working
            console.log(response)
            window.location ='/'
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <Fragment>
            <button
                type='button'
                className='btn btn-warning'
                data-bs-toggle='modal'
                data-bs-target={`#id${todo.todo_id}`}
            >
                Edit
            </button>

            <div className='modal' id={`id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4 className='modal-title'>Edit Todo</h4>
                            <button 
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setDescription(todo.description)}
                            >
                            </button>
                            
                        </div>

                        <div className='modal-body'>
                            <input 
                                type='text'
                                className='form-control'
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>

                        <div className='modal-footer'>
                        <button
                                type='button'
                                className= 'btn btn-warning'
                                data-dismiss='modal'
                                onClick = {e => updateDescription(e)}
                            >
                                Edit
                            </button>
                            <button
                                type='button'
                                className= 'btn btn-danger'
                                data-dismiss='modal'
                                data-bs-dismiss='modal'
                                onClick={() => setDescription(todo.description)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditTodo