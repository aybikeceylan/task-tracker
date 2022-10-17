import React from 'react'
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Tasks = ({ index, item }) => {
    console.log('item', item);
    return (
        <div className="card mt-3">
            <Card key={index}>
                <Row>
                    <Col lg={9}>

                        {/* {item?.map((todo) => {
                            return <Card.Body>{todo}</Card.Body>
                        })} */}

                    </Col>
                    <Col lg={1}>  <CloseButton /></Col>

                </Row>

            </Card>
        </div>

    )
}

export default Tasks