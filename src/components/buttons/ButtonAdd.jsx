
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const ButtonAdd = ({ handleClick, btnChng }) => {

    return (
        <Container className="text-center m-2">
            <Button style={{ backgroundColor: btnChng ? "rgb(41, 92, 71)" : "rgb(81, 208, 167)" }} size="sm" className="w-100 border border-success" onClick={handleClick}>
                {btnChng
                    ? <p>Show Add Task Bar</p>
                    : <p>Close Add Task Bar</p>
                }

            </Button>
        </Container>
    )
}

export default ButtonAdd