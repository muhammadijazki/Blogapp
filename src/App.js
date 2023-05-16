import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Homepage></Homepage> */}
      {/* <Form></Form> */}
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
