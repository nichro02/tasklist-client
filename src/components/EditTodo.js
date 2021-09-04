import { Fragment, useState } from 'react'

const EditTodo = ({ todo }) => {
    //verify todo prop has been passed
    console.log(todo)
    //use state to track edit being entered
    const [description, setDescription] = useState(todo.description)
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

            <div className='modal' id={`id${todo.todo_id}`}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4 className='modal-title'>Edit Todo</h4>
                            <button 
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                            </button>
                            
                        </div>

                        <div className='modal-body'>
                            <input 
                                type='text'
                                className='form-control'
                                value={description}
                            />
                        </div>

                        <div className='modal-footer'>
                        <button
                                type='button'
                                className= 'btn btn-warning'
                                data-dismiss='modal'
                            >
                                Edit
                            </button>
                            <button
                                type='button'
                                className= 'btn btn-danger'
                                data-dismiss='modal'
                                data-bs-dismiss='modal'
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