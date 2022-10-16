import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AddTask = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="Task">
                <Form.Label>Task</Form.Label>
                <Form.Control type="text" placeholder="AddTask" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Day">
                <Form.Label>Day&Time</Form.Label>
                <Form.Control type="datetime-local" placeholder="Add Day & Time" />
            </Form.Group>
            <Button variant="info" type="submit" className="w-100">
                Save Task
            </Button>
        </Form>
    )
}

export default AddTask