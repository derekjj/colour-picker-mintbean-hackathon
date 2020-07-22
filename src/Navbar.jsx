import React from "react";
import { Container, Row, Navbar, Nav, NavDropdown, Col } from "react-bootstrap";

export default function NavBar({
  changeHex,
  changeVariation,
  changeSetting,
  changeSettingValue,
  settingValue,
}) {
  const handleVariationChange = (variation) => {
    changeVariation(variation);
  };

  const changeSettings = (e) => {
    const setting = e.target.getAttribute("value");
    changeSetting(setting);
  };

  const handleSettingValueChange = (e) => {
    changeSettingValue(e);
  };

  return (
    <div>
      <Navbar expand="xl" bg="dark" variant="dark" className="text-white">
        <Navbar.Brand>Color Palette Generator</Navbar.Brand>
        <Nav className="ml-auto">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavDropdown
              onSelect={(e) => handleVariationChange(e)}
              title="Variation"
              id="variation"
            >
              <NavDropdown.Item eventKey="analogous">
                Analogous
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="monochromatic">
                Monochromatic
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="complement">
                Complement
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="splitcomplement">
                Split Complement
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="triad">Triad</NavDropdown.Item>
              <NavDropdown.Item eventKey="tetrad">Tetrad</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Divider />
            <Container>
              <Col>Brightness</Col>
              <Col>
                <Nav.Link value={"brighten"} onClick={(e) => changeSettings(e)} className="m-1">
                  +
                </Nav.Link>
                <Nav.Link value={"darken"} onClick={(e) => changeSettings(e)} className="m-1">
                  -
                </Nav.Link>
              </Col>
            </Container>
            <Container>
              <Col>Staturation</Col>
              <Col>
                <Nav.Link value={"saturate"} onClick={(e) => changeSettings(e)} className="m-1">
                  +
                </Nav.Link>
                <Nav.Link
                  value={"desaturate"}
                  onClick={(e) => changeSettings(e)}
                  className="m-1"
                >
                  -
                </Nav.Link>
              </Col>
            </Container>
            <Nav.Link value={"greyscale"} onClick={(e) => changeSettings(e)}>
              Greyscale
            </Nav.Link>
            <Nav.Link
              value={"lighten"}
              eventKey={"lighten"}
              onClick={(e) => changeSettings(e)}
            >
              Lighten
            </Nav.Link>
            <Container>
              <Col sm={6} className="text-right pt-2">
                {settingValue}
              </Col>
              <Col sm={6} className="text-left">
                <NavDropdown
                  onSelect={(e) => handleSettingValueChange(e)}
                  title="%"
                >
                  <NavDropdown.Item eventKey="10">10</NavDropdown.Item>
                  <NavDropdown.Item eventKey="20">20</NavDropdown.Item>
                  <NavDropdown.Item eventKey="30">30</NavDropdown.Item>
                  <NavDropdown.Item eventKey="40">40</NavDropdown.Item>
                  <NavDropdown.Item eventKey="50">50</NavDropdown.Item>
                  <NavDropdown.Item eventKey="60">60</NavDropdown.Item>
                  <NavDropdown.Item eventKey="70">70</NavDropdown.Item>
                  <NavDropdown.Item eventKey="80">80</NavDropdown.Item>
                  <NavDropdown.Item eventKey="90">90</NavDropdown.Item>
                  <NavDropdown.Item eventKey="100">100</NavDropdown.Item>
                </NavDropdown>
              </Col>
            </Container>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    </div>
  );
}
