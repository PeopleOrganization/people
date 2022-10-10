
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
//<Route path="/product/*" element={<Product />}></Route>
import Menu from './components/menu';
import BloodHouse from './pages/BloodHouse';
import BloodChart from './pages/BloodChart';
import Post from './pages/Post';
import Site from './pages/Site';
import Login from './pages/Login';
import Register from './pages/Register';
import './SubDrop.css';

function App() {
  return (
    <div>
      <BrowserRouter>
         <Menu></Menu>
			    <Routes>
					  <Route path="/" element={<Main />}></Route>
            <Route path="/BloodChart" element={<BloodChart />}></Route>
            <Route path="/BloodHouse" element={<BloodHouse />}></Route>
            <Route path="/Post" element={<Post />}></Route>
            <Route path="/Site" element={<Site />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
				  </Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;