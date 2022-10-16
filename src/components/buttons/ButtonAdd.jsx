import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const ButtonAdd = ({ click }) => {
    return (
        <Container>
            <Button variant="danger" size="sm" onClick={click}>
                Show Add Task Bar
            </Button>
        </Container>
    )
}

export default ButtonAdd