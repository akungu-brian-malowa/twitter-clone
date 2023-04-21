import { Route, Routes } from 'react-router-dom';
import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import Login from './components/Login';

import { AuthContextProvider } from './context/AuthContext';
import TwitterApp from './components/TwitterApp';
import Protected from './components/protected/Protected';

function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <Routes>
          <Route index path='/' element={<Login />}/>
          <Route path='/home' element={
          <Protected><TwitterApp/></Protected>} />

          
        </Routes>
    
    </AuthContextProvider>
    </div>
  );
}

export default App;
