import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';
import Tasks from './Tasks';



const AddTask = () => {
    const [validated, setValidated] = useState(false);
    const [todo, setTodo] = useState({ task: "", date: "" })
    const { task, date } = todo
    const [data, setData] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(todo)

        setData([...data, todo])
        setTodo({ task: "", date: "" })

        console.log(data)
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);

    }
    const handleChange = (e) => {
        e.target.value !== "" &&
            setTodo({ ...todo, [e.target.id]: e.target.value })

    }


    return (

        <Container className="form">
            <Form onSubmit={handleSubmit} validated={validated} >
                <Form.Group className="mb-3" controlId="task">
                    <Form.Label>Task</Form.Label>
                    <Form.Control required type="text" placeholder="AddTask" value={task} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Day&Time</Form.Label>
                    <Form.Control required type="datetime-local" placeholder="Add Day & Time" value={date} onChange={handleChange} />
                </Form.Group>
                <Button variant="danger" type="submit" className="w-100">
                    Save Task
                </Button>
            </Form>
            {data.map((item, index) => {
                console.log(item);
                return <Tasks index={index} item={item} />
            })}

        </Container>
    )
}

export default AddTask