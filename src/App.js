
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { UserList } from './component/UserList';
import { UserProfile } from './component/UserProfile';
import { CartList } from './component/CartList';

function App() {
  return (
    <div className="App">
    <CartList />    
    <Router>
        <Routes>
          <Route path={'/'} element={<UserList /> } />
            <Route path={'/user'} element={<UserProfile />} />

        </Routes>
    </Router>
     
    </div>
  );
}

export default App;
