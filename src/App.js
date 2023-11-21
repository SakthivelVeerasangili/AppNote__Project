import './App.css';
import { Routes,Route } from 'react-router-dom';
import AddNote from './addnote/addnote'
import Header from './header/header'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<AddNote/>}/>

    </Routes>

    

    </>
  );
}

export default App;
