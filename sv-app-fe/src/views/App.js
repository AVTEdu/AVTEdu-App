
// import './views/App.scss';
import '../views/App.scss';
import { Login } from "../component/login";
import { LoginAdmin } from "../component/admin/LoginAdmin";
import { Dkhp } from '../component/Dkhp';
import { TrangChu } from '../component/Trangchu';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../component/Layout';
import RequireAuth from '../component/RequireAuth';
import Unauthorized from '../component/Unauthorized';

const ROLES = {
  'USER': 2001
}

function App() {
  return (
    // <div className="App">
    //   <Login />
    // </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="AdminLogin" element={<LoginAdmin />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
          <Route path="dkhp" element={<Dkhp />} />
        </Route> */}
        <Route path="dkhp" element={<Dkhp />} />


        {/* <Route path="*" element={<Missing />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
