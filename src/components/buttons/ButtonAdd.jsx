import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const ButtonAdd = ({ handleClick, btnChng }) => {

    return (
        <Container className="text-center m-2">
            <Button style={{ backgroundColor: btnChng ? "chocolate" : "salmon" }} size="sm" className="w-75" onClick={handleClick}>
                {btnChng
                    ? <p>Show Add Task Bar</p>
                    : <p>Close Add Task Bar</p>
                }

            </Button>
        </Container>
    )
}

export default ButtonAdd