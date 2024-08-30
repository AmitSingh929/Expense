// import './App.css';
import styled from 'styled-components';
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from "./Components/Orb/Orb";
import Navigation from './Components/Navigation/Navigation';
import { act, useMemo, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Incomes from './Components/Incomes/Incomes';
import Expenses from './Components/Expenses/Expenses';
import History from './Components/History/History';
// import { InnerLayout } from './styles/Layouts';


function App() {
  const [activeComponent, setActiveComponent] = useState(1);
  // const global = useGlobalContext();
  // console.log(global);

  const displayComponent = function(){
    switch(activeComponent){
      case 1:
        return <Dashboard />
      case 2:
        return <History />
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
  }
}

  // To prevent start the background animation from start on changing Component
  const orbMemo = useMemo(function(){
    return <Orb />
  },[])

  return (
    // <h2>Hello There</h2>
    <AppStyled bg = {bg} className='App'>
    {orbMemo}
    <MainLayout>
      <Navigation active ={activeComponent} setActive= {setActiveComponent} />
      <main>
        {displayComponent()}
      </main>
    </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height : 100vh;
  background-img : url(${props => props.bg});
  position : relative; 
  main{
    ${'' /* Fill the Remaining Space */}
    flex: 1; 
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`

export default App;

