import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Layouts/Home/Home';
import { Form } from './components/Layouts/Form/Form';
import { Login } from './components/Layouts/FormL/Login';
import { Navigator } from './components/Layouts/Header/Nav/Navigator';
import { List } from './components/Layouts/List/List';


function App() {
  return (
    <div>
      <Navigator/>
      <Routes>
        <Route path='/Registro' element={<Form/>} />
        <Route path='/' element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path='/Lista' element={<List/>} />
      </Routes>
    </div>
  );
}

export default App;
