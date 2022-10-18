import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import ButtonAdd from "./buttons/ButtonAdd"
import AddTask from "./AddTask"


const Header = () => {
    const [addTask, setAddTask] = useState(false)
    const [btnChng, setBtnChng] = useState(true)

    const handleClick = (e) => {
        setAddTask(!addTask)
        setBtnChng(!btnChng)

    }
    return (
        <Container className='head' >
            <h1 className="text-center m-2">Task Tracker</h1>
            <ButtonAdd handleClick={handleClick} btnChng={btnChng} />
            <Container className="text-center m-2">
                <AddTask addTask={addTask} />
            </Container>
        </Container>




    )
}

export default Header