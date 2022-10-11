import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// 헌혈자 수
// 월별
// 연령별
// 지역별
// 혈액형 별
function Menu() {
  return (
    <div id="dropMenu">
      <Navbar bg="light" variant="red">
        <Container>
          <Navbar.Brand href="/" >지정헌혈사이트</Navbar.Brand>
          <Nav>

            <NavDropdown 
             title = "헌혈통계" className = "dropDown" >
              <div className = "dropDownMenu">
                <NavDropdown.Item href="BloodChart">헌혈자 수 통계</NavDropdown.Item>
                <NavDropdown.Item href="BloodChart">월 별 통계</NavDropdown.Item>
                <NavDropdown.Item href="BloodChart">연령별 통계</NavDropdown.Item>
                <NavDropdown.Item href="BloodChart">지역별 통계</NavDropdown.Item>
                <NavDropdown.Item href="BloodChart">혈액형 별 통계</NavDropdown.Item>
                </div>
              </NavDropdown>
              
            <Nav.Link href="BloodHouse">헌혈의집</Nav.Link>
            <Nav.Link href="Post">게시판</Nav.Link>
            <NavDropdown 
             title = "관련사이트 링크" className = "dropDown">
              <div className = "dropDownMenu">
                <NavDropdown.Item href="https://redcross.or.kr/main/main.do" target="_blank">대한적십자사</NavDropdown.Item>
                <NavDropdown.Item href="https://www.vms.or.kr/main.do" target="_blank">봉사활동</NavDropdown.Item>
                <NavDropdown.Item href="https://www.bloodinfo.net/emi2/login.do?_ga=2.39216416.228213102.1665420166-706548427.1664875489" target="_blank">전자문진</NavDropdown.Item>
                </div>
              </NavDropdown>
            <Nav.Link href="Login">로그인</Nav.Link>
            <Nav.Link href="Register">회원가입</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default Menu;