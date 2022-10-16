import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import ButtonAdd from "./buttons/ButtonAdd"
import AddTask from "./AddTask"

const Header = () => {
    const [addTask, setAddTask] = useState(true)
    const [btnChng, setBtnChng] = useState(true)

    const handleClick = (e) => {
        setAddTask(!addTask)
        setBtnChng(!btnChng)

    }
    return (
        <Container>
            <h1 className="text-center m-2">Task Tracker</h1>
            <ButtonAdd handleClick={handleClick} btnChng={btnChng} />
            <Container>
                {addTask
                    ? <p>No Tasks to Show</p>
                    : <AddTask />}
            </Container>
        </Container>




    )
}

export default Header