import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Tasks = ({ index, item }) => {
    const [show, setShow] = useState(true)
    const [isDone, setIsDone] = useState(false);
    console.log('item', item);
    const handleShow = () => {
        setShow(!show)
    }
    const handleClick = () => {

        setIsDone(!isDone)
    }
    return (


        <div>
            {show
                ? <div className="card mt-3" onClick={handleClick} style={{
                    textDecoration: isDone ? 'line-through' : '',
                }}>
                    <Card  >
                        <Row>
                            <Col lg={11} xs={10} >
                                <ul className="task" >
                                    {Object.values(item).map((todo) => {
                                        console.log(todo)
                                        console.log(index)
                                        index++
                                        return <li key={index}>{todo}</li>

                                    })
                                    }

                                </ul>

                            </Col>
                            <Col lg={1} xs={2}>  <CloseButton onClick={handleShow} /></Col>
                        </Row>
                    </Card>
                </div>



                : <div></div>
            }
        </div >


    )
}

export default Tasks