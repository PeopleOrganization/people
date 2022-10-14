import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import title from '../imgs/title_icon.png';

// 헌혈자 수
// 월별
// 연령별
// 지역별
// 혈액형 별
function Menu() {

  return (
    <div id ="nav">
      <Navbar bg="white" variant="light">
        <Container>
          <Navbar.Brand id='title' href="/"><img src={title} alt="title" width="300"></img></Navbar.Brand>
          <Nav>   
          <NavDropdown
             title = "헌혈지식" id = "dropDown" >
              <div>
                <NavDropdown.Item id="dropList" href="BloodChart">헌혈의 필요성</NavDropdown.Item>
                <NavDropdown.Item id="dropList" href="BloodChart">헌혈 종류</NavDropdown.Item>
                <NavDropdown.Item id="dropList" href="BloodChart">오해와 진실</NavDropdown.Item>
                </div>
              </NavDropdown>

            <NavDropdown
             title = "헌혈통계" id = "dropDown" >
              <div>
                <NavDropdown.Item id="dropList" href="BloodChartTotal">헌혈자 수 통계</NavDropdown.Item>
                <NavDropdown.Item id="dropList" href="BloodChartMonth">월 별 통계</NavDropdown.Item>
                <NavDropdown.Item id="dropList" href="BloodChartAge">연령별 통계</NavDropdown.Item>
                <NavDropdown.Item id="dropList" href="BloodChartLoc">지역별 통계</NavDropdown.Item>
                <NavDropdown.Item id="dropList" href="BloodChartBloodType">혈액형 별 통계</NavDropdown.Item>
                </div>
              </NavDropdown>
              
            <Nav.Link id = "home" href="BloodHouse">헌혈의집</Nav.Link>
            <Nav.Link id = "home" href="Post">게시판</Nav.Link>
            <NavDropdown 
             title = "관련사이트 링크" id = "dropDown">
              <div>
                <NavDropdown.Item id="dropList" href="https://redcross.or.kr/main/main.do" target="_blank">대한적십자사</NavDropdown.Item>
                <NavDropdown.Item id="dropList" href="https://www.vms.or.kr/main.do" target="_blank">봉사활동</NavDropdown.Item>
                <NavDropdown.Item id="dropList" href="https://www.bloodinfo.net/emi2/login.do?_ga=2.39216416.228213102.1665420166-706548427.1664875489" target="_blank">전자문진</NavDropdown.Item>
                </div>
              </NavDropdown>
            <Nav.Link id = "home" href="Login">로그인</Nav.Link>
            <Nav.Link id = "home" href="Register">회원가입</Nav.Link>
          </Nav>
        </Container>
        <div id="wall"></div>
      </Navbar>
      
      <hr />
    </div>
  );
}

export default Menu;