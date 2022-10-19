import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Tasks = ({ index, item, data, setData }) => {
    const [isDone, setIsDone] = useState(false);
    console.log('item', item);
    const handleShow = (e) => {
        console.log(e.target.id);
        console.log(id);

        data = data.filter((item) => {
            return (
                item.id !== Number(e.target.id)
            )
        })

        setData(data);
        localStorage.setItem('items', JSON.stringify(data));

    }
    const handleClick = () => {

        setIsDone(!isDone)
    }
    console.log(data);

    const { id, task, date } = item

    return (


        <div>
            <div className="card mt-3" onClick={handleClick} style={{
                    textDecoration: isDone ? 'line-through' : ''
                }}>
                    <Card key={index} >
                        <Row>
                            <Col lg={11} xs={10} >

                                <ul className="task" >

                                    <li >{task}</li>
                                    <li >{date}</li>
                                </ul>

                            </Col>
                            <Col lg={1} xs={2}>  <CloseButton onClick={handleShow} id={id} /></Col>
                        </Row>
                    </Card>
                </div>
        </div >


    )
}

export default Tasks
