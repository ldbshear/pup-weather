import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <h1>Testing</h1>
      <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <h1 className="header">Welcome To React-Bootstrap</h1>
          <div>
            We now have Toasts
            <span role="img" aria-label="tada">
              🎉
            </span>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default App;
