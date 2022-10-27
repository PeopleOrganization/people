
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
//<Route path="/product/*" element={<Product />}></Route>
import Menu from './components/menu';
import Footer from './components/footer';
import Facilities from './pages/Facilities';
import Board from './pages/Board';
import BoardView from './pages/BoardView';
import BoardWrite from './pages/BoardWrite';
import Site from './pages/Site';
import Login from './pages/Login';
import LogOut from './pages/LogOut';
import Register from './pages/Register';
import BloodChartTotal from './pages/BloodChartTotal';
import BloodChartMonth from './pages/BloodChartMonth';
import BloodChartLoc from './pages/BloodChartLoc';
import BloodChartAge from './pages/BloodChartAge';
import BloodChartBloodType from './pages/BloodChartBloodType';
import BoardBloodType from './pages/BoardBloodType';
import BoardLoc from './pages/BoardLoc';
import QnADesignated from './pages/QnADesignated';
import QnAKnowledge from './pages/QnAKnowledge';
import QnAQuestion from './pages/QnAQuestion';
import MyPage from './pages/MyPage';
import ScrollToTop from "./components/ScrollToTop";
import MyPage2 from './pages/MyPage2';
import MyPage3 from './pages/MyPage3';

import './menu.css';

function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Menu />
        <div id="center"></div>
        <Routes>
          <Route path="/MyPage2" element={<MyPage2 />}></Route>
          <Route path="/MyPage3" element={<MyPage3 />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="MyPage" element={<MyPage />}></Route>
          <Route path="/Facilities" element={<Facilities />}></Route>
          <Route path="/Board" element={<Board />}></Route>
          <Route path='/BoardView:postkey' element={<BoardView />}  />
          <Route path='/BoardWrite' element={<BoardWrite />}  />
          <Route path="/BoardBloodType" element={<BoardBloodType />}></Route>
          <Route path="/BoardLoc" element={<BoardLoc />}></Route>
          <Route path="/Site" element={<Site />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/LogOut" element={<LogOut />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/BloodChartTotal" element={<BloodChartTotal />}></Route>
          <Route path="/BloodChartLoc" element={<BloodChartLoc />}></Route>
          <Route path="/BloodChartMonth" element={<BloodChartMonth />}></Route>
          <Route path="/BloodChartAge" element={<BloodChartAge />}></Route>
          <Route
            path="/BloodChartBloodType"
            element={<BloodChartBloodType />}
          ></Route>
          <Route path="/QnADesignated" element={<QnADesignated />}></Route>
          <Route path="/QnAKnowledge" element={<QnAKnowledge />}></Route>
          <Route path="/QnAQuestion" element={<QnAQuestion />}></Route>
        </Routes>
        <ScrollToTop />
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;