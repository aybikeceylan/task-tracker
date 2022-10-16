import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const ButtonClose = ({ click }) => {
    return (
        <Container>
            <Button variant="info" size="sm" onClick={click}>
                Close Add Task Bar
            </Button>
        </Container>
    )
}

export default ButtonClose