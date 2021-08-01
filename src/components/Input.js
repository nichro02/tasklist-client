import { Fragment, useState } from 'react'

const InputTodo = () => {

    //capture todo being entered in form in state
    const [description, setDescription] = useState('')

    //handle form submit
    const onSubmit = async e => {
        e.preventDefault()
        try {
            const body = {description}
            const response = await fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })

            //verify data sent to db
            console.log(response)
            //
            window.location='/'
        } catch (error) {
            console.error(error.message)
        }
    }

    return(
        <Fragment>
            <h1 className='text-center mt-5'>Input Todo</h1>
            <form 
                className='d-flex mt-5'
                onSubmit={onSubmit}
            >
                <input 
                    type='text' className='form-control'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    ) 
}

export default InputTodo