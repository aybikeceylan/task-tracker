import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Tasks from './Tasks';



const AddTask = () => {
    const [todo, setTodo] = useState({ task: "", date: "" })
    const { task, date } = todo
    const [data, setData] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted");
        setData([...data, { todos: todo }])
        setTodo({ task: "", date: "" })
        console.log(data)

    }
    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.id]: e.target.value })
    }


    return (

        <Container className="">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="task">
                    <Form.Label>Task</Form.Label>
                    <Form.Control type="text" placeholder="AddTask" value={task} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Day&Time</Form.Label>
                    <Form.Control type="datetime-local" placeholder="Add Day & Time" value={date} onChange={handleChange} />
                </Form.Group>
                <Button variant="info" type="submit" className="w-100">
                    Save Task
                </Button>
            </Form>
            {data.map((item, index) => {
                console.log(item);
                return <Tasks key={index} item={item} />
            })}

        </Container>
    )
}

export default AddTask