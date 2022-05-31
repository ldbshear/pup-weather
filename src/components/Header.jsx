import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Weather Pup</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
