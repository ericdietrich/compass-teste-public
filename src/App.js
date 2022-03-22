import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header';
import '../src/styles/global.css';
import '../src/styles/grid.css';
import { UserContext, UserStorage } from './UserContext';
import Home from './Components/Home';
import Lobby from './Components/Lobby/Lobby';
import User from './Components/User/User';
import { useContext } from 'react';

function App() {

  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/user/callback/*'  element={<Lobby />}/>
        {user && <Route path={`/user/profile/${user.login}`}  element={<User />}/>}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
