import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';
const NavBarComponent = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">M3D Diseños</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Qué Ofrecemos</Nav.Link>
            <Nav.Link href="#link">Galería</Nav.Link>
            <NavDropdown title="Accesos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Productos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Que es la impresión 3d
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Que es el grabado láser</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
    )
}

export default NavBarComponent
