import styled from 'styled-components';

// Components
import Header from './components/Header';
import TodoList from './components/TodoList';

const Wrapper = styled.div`
  background-color: #181818;
  min-height: 100vh;
  min-width: 100vw;
  color: #fff;
`;

const Main = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
  
const TodoContent = styled.div`
  max-width: 750px;
  width: 100%;
`;

const Title = styled.div`
  margin: 45px 0;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.35px;
`;

const Greeting = styled.div`
  margin-bottom: 25px;
  font-size: 36px;
  font-weight: 800;
  letter-spacing: 0.85px;
`;

function App() {
  
  return (
    <Wrapper>
      <Header />

      <Main>
        <MainContent>
          <TodoContent>
            <Title>Dashboard</Title>
            <Greeting>Good Day, Joe!</Greeting>
            <TodoList />
          </TodoContent>
        </MainContent>
      </Main>
    </Wrapper>
  );
}

export default App;
