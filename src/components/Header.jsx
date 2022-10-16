import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import ButtonAdd from "./buttons/ButtonAdd"
import AddTask from "./AddTask"

const Header = () => {
    const [addTask, setAddTask] = useState(true)
    const handleClick = () => {
        setAddTask(!addTask)
    }
    return (
        <Container className="text-center m-2">
            <h1>Task Tracker</h1>
            <ButtonAdd click={handleClick} />

            {addTask
                ? <p>No Tasks to Show</p>
                : <AddTask />}
        </Container>




    )
}

export default Header