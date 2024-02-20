import { Container, Navbar, Nav } from "react-bootstrap";

function NavbarHead() {
  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Login", href: "/login" },
    { text: "Your Characters", href: "/user-characters" },
    { text: "Character Creator", href: "/character-creator" },
    { text: "Dice Roller", href: "/dice-roller" },
    { text: "Spellbook", href: "/spellbook" },
    { text: "Blog", href: "/blog" },
    { text: "Contact Us", href: "/contact-us" },
    { text: "Logout", href: "/logout" }
  ];

  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid style={{ backgroundColor: "#343a40" }}>
        <Navbar.Brand style={{ color: "#fff" }}>
          <img
            alt=""
            src="/NavIcon.png"
            width="50"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ textAlign: "center" }}>
            {navLinks.map((link, index) => (
              <Nav.Link key={index} style={{ color: "#fff" }} href={link.href}>
                {link.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHead;
