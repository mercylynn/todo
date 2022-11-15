import React from 'react'

const AddTask = (props) => {

    let text;


    const handleSubmit = (e) => {
        e.preventDefault();
        let task = {
            task: text
        }
        props.addtask(task)

    }

    return (
        <div>


            <form onSubmit={handleSubmit}>
                <input className='input' type="text" value={text} onChange={(e) => text = (e.target.value)} />
                <button className='btn' type='submit'>AddTask</button>
            </form>

        </div>
    )
}

export default AddTask