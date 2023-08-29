
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavContact from './Components/NavContact';
import Home from './Components/Home';
import ListContact from './Components/ListContact';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';

function App() {
  return (
    <div className="App">
      <NavContact/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ListContact' element={<ListContact/>}/>
        <Route path='/AddContact' element={<AddContact/>}/>
        <Route path='/EditContact/:id' element={<EditContact/>}/>
      </Routes>
    </div>
  );
}

export default App;
