import React from "react";

import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <>
      <Navbar bg="light" className="mb-5">
        <Navbar.Brand className="mx-auto">
          <h1>Weather Pup</h1>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}
