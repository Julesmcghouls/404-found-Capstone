import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavbarHead() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{ backgroundColor: "gray" }}>
        <Navbar.Brand>
          <img
            alt=""
            src="/NavIcon.png"
            width="300"
            height="168"
            className="d-inline-block align-top"
          />{" "}
          <strong>404-Found: D&D Character Creator</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ textAlign: "center" }}>
            <Nav.Link style={{ color: "yellow" }} href="/">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "yellow" }} href="login">
              Login
            </Nav.Link>
            <Nav.Link style={{ color: "yellow" }} href="user-characters">
              Your Characters
            </Nav.Link>
            <Nav.Link style={{ color: "yellow" }} href="/character-creator">
              Character Creator
            </Nav.Link>
            <Nav.Link style={{ color: "yellow" }} href="/dice-roller">
              Dice Roller
            </Nav.Link>
            <Nav.Link style={{ color: "yellow" }} href="/spellbook">
              Spellbook
            </Nav.Link>
            <Nav.Link style={{ color: "yellow" }} href="/blog">
              Blog
            </Nav.Link>
            <Nav.Link style={{ color: "yellow" }} href="/contact-us">
              Contact Us
            </Nav.Link>
            <Nav.Link style={{ color: "yellow" }} href="/logout">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHead;
