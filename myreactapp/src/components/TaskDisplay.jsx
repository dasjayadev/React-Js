import React, { useState } from 'react'
import EditModal from './EditModal'
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";


function TaskDisplay({ tasks, dispatch }) {

    const [isModel, setIsModel] = useState(false)
    const [editTask, setEditTask] = useState({})

    const editHandler = (task, index) => {
        setIsModel(true);
        setEditTask({task, index});
    }
    const closeModal = () => {
        setIsModel(false);
    }

    return (
        <>
            <div className="container">
                {
                    tasks.map((task, index) => {
                        return (
                            <div className="card">
                                <h3>{task}</h3>
                                <div className='buttons'>
                                    <button onClick={ () => dispatch({type:"delete",payload:index})}>
                                        <MdDelete/>
                                    </button>
                                    <button onClick={() => editHandler(task, index)}>
                                    <MdEditSquare/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {isModel && <EditModal closeModal={closeModal} editTask={editTask}  dispatch={dispatch} />}
            </div>
        </>
    )
}

export default TaskDisplay