import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import UserDetails from './pages/UserDetails';

function App() {
  return (
   <>
   <Routes>
    <Route path = "/" element={<Homepage/>}/>
    <Route path = "/userDetails/:id" element={<UserDetails/>}/>
   </Routes>
  
   </>
  );
}

export default App;
