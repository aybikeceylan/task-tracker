import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Tasks from './Tasks';



const AddTask = ({ addTask }) => {
    const [validated, setValidated] = useState(false);
    const [todo, setTodo] = useState({ task: "", date: "" })
    const { task, date } = todo
    const [data, setData] = useState([])




    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        console.log(items);
        if (items) {
            setData(items);
        }
    }
        , [])


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(todo)

        setData([...data, todo])
        localStorage.setItem('items', JSON.stringify([...data, todo]));
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
            setTodo({
                ...todo,
                [e.target.id]: e.target.value,
                id: new Date().getTime(),

            })
    }


    return (

        <Container className="form">
            {addTask
                ? <Form onSubmit={handleSubmit} validated={validated} >
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

                : ''}



            {data.length

                ? data.map((item, index) => {
                    console.log(item);
                    return <Tasks index={index} item={item} data={data} setData={setData} />
                })

                : <p>No Task to Show</p>}


        </Container>
    )
}

export default AddTask