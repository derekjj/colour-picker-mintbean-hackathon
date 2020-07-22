import React from "react";
import { Row, Navbar, Nav, FormControl, Col } from "react-bootstrap";

const tinycolor = require("tinycolor2");

export default function NavBar({ hex, changeHex }) {
  if (hex.charAt(0) === "#") hex = hex.substr(1);

  const handleHexChange = (e) => {
    var val = e.target.value;
    var numChar = val.length;

    if (val.charAt(0) === "#") {
      val.substr(1);
      numChar--;
    }

    if (numChar === 3 || numChar === 6) changeHex(val);
  };

  const setRandom = () => {
    const randomColor = tinycolor.random().toHexString();
    changeHex(randomColor);
  };

  return (
    <div>
      <Navbar
        expand="xl"
        bg="dark"
        variant="dark"
        className="text-white"
        sticky="bottom"
      >
        <Nav className="m-auto text-center px-2">
          <Nav.Link id="random" onClick={() => setRandom()}>
            Randomize
          </Nav.Link>
          <Row className="mt-3 px-4">
            <Col xs={1} className="px-0">
              #
            </Col>
            <Col className="px-0">
              <FormControl
                onChange={(e) => handleHexChange(e)}
                type="text"
                placeholder={hex}
                className="mr-sm-2 ml-1"
              />
            </Col>
          </Row>
        </Nav>
      </Navbar>
    </div>
  );
}
