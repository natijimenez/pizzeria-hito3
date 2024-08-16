/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = ({ token }) => {

  const total = 25000

  return (
    <>
      <Navbar expand="lg" className="navigation-bar sticky-top" bg="dark" data-bs-theme="dark" >
        <Container fluid>
          <Navbar.Brand href="#">Pizzería Mamma Mía</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <a href="#action1" className='nav-btn'>🍕 Home </a>
              {token ? (
                <>
                  <a href="#action2" className='nav-btn'>🔓 Profile</a>
                  <a href="#action3" className='nav-btn'>🔓 Logout</a>
                </>
              ) : (
                <>
                  <a href="#action4" className='nav-btn'>🔐 Login</a>
                  <a href="#action5" className='nav-btn'>🔐 Register</a>
                </>
              )}
            </Nav>
            <Form className="d-flex">
              <a href="#action6" className='nav-btn-total'>🛒 Total: ${total.toLocaleString()}</a>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation