
// import './views/App.scss';
import '../views/App.scss';
import { Login } from "../component/Login";
import { LoginAdmin } from "../admin_component/Login";
import { Dkhp } from '../component/Dkhp';
import { TrangChu } from '../component/Trangchu';

function App() {
  return (
    <div className="App">
      <Dkhp />
    </div>
  );
}

export default App;
