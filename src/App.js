import Header from "./components/Header"

import Tasks from "./components/Tasks"
import Container from 'react-bootstrap/Container';

function App() {
  return (

    <div className="App">
      <Container className="bg-secondary b-1 w-25 h-75 ">
        <Header />
        <Tasks />
      </Container>

    </div>


  );
}

export default App;
