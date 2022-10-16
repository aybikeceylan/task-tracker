import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Tasks from './Tasks';



const AddTask = () => {
    const [task, setTask] = useState("")
    const [date, setDate] = useState("")
    const [sbmt, setSbmt] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault()
        setTask("")
        setDate("")
        setSbmt(!sbmt)
    }
    const handleTask = (e) => {
        setTask(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)

    }

    return (

        <Container className="">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Task">
                    <Form.Label>Task</Form.Label>
                    <Form.Control type="text" placeholder="AddTask" value={task} onChange={handleTask} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Day">
                    <Form.Label>Day&Time</Form.Label>
                    <Form.Control type="datetime-local" placeholder="Add Day & Time" value={date} onChange={handleDate} />
                </Form.Group>
                <Button variant="info" type="submit" className="w-100">
                    Save Task
                </Button>
            </Form>
            {sbmt
                ? ""
                : <Tasks task={task} date={date} />}

        </Container>
    )
}

export default AddTask