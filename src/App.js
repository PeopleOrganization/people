
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
//<Route path="/product/*" element={<Product />}></Route>
import Menu from './components/menu';
import Blood from './pages/Blood';
import BloodHouse from './pages/BloodHouse';
import Post from './pages/Post';
import Site from './pages/Site';
import Login from './pages/Login';
import Register from './pages/Register';
import BloodChartTotal from './pages/BloodChartTotal';
import BloodChartMonth from './pages/BloodChartMonth';
import BloodChartLoc from './pages/BloodChartLoc';
import BloodChartAge from './pages/BloodChartAge';
import BloodChartBloodType from './pages/BloodChartBloodType';
import './menu.css';

function App() {
  return (
    <div>
      <BrowserRouter>
         <Menu />
			    <Routes>
					  <Route path="/" element={<Main />}></Route>
            <Route path="/Blood" element={<Blood />}></Route>
            <Route path="/BloodHouse" element={<BloodHouse />}></Route>
            <Route path="/Post" element={<Post />}></Route>
            <Route path="/Site" element={<Site />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/BloodChartTotal" element={<BloodChartTotal />}></Route>
            <Route path="/BloodChartLoc" element={<BloodChartLoc />}></Route>
            <Route path="/BloodChartMonth" element={<BloodChartMonth />}></Route>
            <Route path="/BloodChartAge" element={<BloodChartAge />}></Route>
            <Route path="/BloodChartBloodType" element={<BloodChartBloodType />}></Route>
				  </Routes>
			</BrowserRouter>
      
    </div>
  );
}

export default App;