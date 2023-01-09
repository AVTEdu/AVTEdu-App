
// import './views/App.scss';
import '../views/App.scss';
import { Login } from "../component/Login";
import { LoginAdmin } from "../admin_component/Login";
import { Dkhp } from '../component/Dkhp';
import { TrangChu } from '../component/Trangchu';
import AuthContextProvider from '../services/contexts/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../component/Landing';
import Auth from '../component/Auth';
import ProtectedRoute from '../services/routing/ProtectedRoute'

function App() {
  return (
    // <div className="App">
    //   <Dkhp />
    // </div>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route
            path='/login'
            element={<Auth />}
          />
          <Route path='/dang-ky-hoc-phan' element={
            <ProtectedRoute>
              <Dkhp />
            </ProtectedRoute>

          } />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
