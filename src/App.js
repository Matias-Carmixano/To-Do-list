import styled from 'styled-components';
import './App.css';
import { ToDoList } from './Components/ToDoList';

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #2b2d42;
    height: 80vh;
    width: 20%;
    margin: 0 auto;
    margin-top:50px;
    gap: 10px;
`




function App() {
  return (
    <>
      <Box>
     <ToDoList/>
      </Box>     

    </>
  );
}

export default App;
