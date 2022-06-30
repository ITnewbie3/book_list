import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';
import { BookProvider } from './context/BookContext';

const ContainerDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    // context로 선언한내용을 제일 윗단으로 감싸줌(모든 자식객체에 사용가능)
    <BookProvider>
    <div className="App">
        <ContainerDiv>
          <Header />
          <Content />
        </ContainerDiv>
    </div>
    </BookProvider>
  );
}

export default App;

