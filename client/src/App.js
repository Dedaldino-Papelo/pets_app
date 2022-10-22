import './global/style.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Homepage from './Pages/Homepage';
import PostModal from './Pages/PostModal';
import Profile from './Pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>

          <Route path='/' element={<Homepage />} >
            <Route path='/posts/:id' element={<PostModal />} /> 
          </Route>

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user/profile' element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
