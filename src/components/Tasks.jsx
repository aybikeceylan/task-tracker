import React from 'react'
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Tasks = () => {
    return (
        <div className="card mt-3">        <Card>
            <Row>
                <Col lg={10}>
                    <Card.Body>This is some text within a card body.</Card.Body>
                    {/* <Card.Body>This is some text within a card body.</Card.Body> */}
                </Col>
                <Col lg={1}>  <CloseButton /></Col>

            </Row>

        </Card>
        </div>

    )
}

export default Tasks