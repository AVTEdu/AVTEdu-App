
// import './views/App.scss';
import '../views/App.scss';
import { Login } from "../component/login";
//import { LoginAdmin } from "../admin_component/Login";
import { Dkhp } from '../component/Dkhp';
import { TrangChu } from '../component/Trangchu';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
    // <AuthContextProvider>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<Landing />} />
    //       <Route
    //         path='/login'
    //         element={<Auth />}
    //       />
    //       <Route path='/dang-ky-hoc-phan' element={
    //         <ProtectedRoute>
    //           <Dkhp />
    //         </ProtectedRoute>

    //       } />
    //     </Routes>
    //   </BrowserRouter>
    // </AuthContextProvider>
  );
}

export default App;
