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
    <div id="Menu3">
      <Navbar bg="light" variant="red">
        <Container>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Brand href="/">지정헌혈사이트</Navbar.Brand>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav className="dropDown">
            <NavDropdown className="dropDownMenu"
             title = "헌혈통계">
                <NavDropdown.Item href="BloodChart">헌혈자 수 통계</NavDropdown.Item>
                <NavDropdown.Item href="BloodChart">월 별 통계</NavDropdown.Item>
                <NavDropdown.Item href="BloodChart">연령별 통계</NavDropdown.Item>
                <NavDropdown.Item href="BloodChart">지역별 통계</NavDropdown.Item>
                <NavDropdown.Item href="BloodChart">혈액형 별 통계</NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href="BloodHouse">헌혈의집</Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="Post">게시판</Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="Site">관련사이트 링크</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="Login">로그인</Nav.Link>&nbsp;
            <Nav.Link href="Register">회원가입</Nav.Link>&nbsp;
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default Menu;