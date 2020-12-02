import React, { useState, Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from './logo.svg';
import './App.css';
import { useHistory, Redirect } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function validateForm() {
    if (email.length === 0 && password.length < 8) {
      return false
    }
    if (checkBadPassword(password)) {
      return false
    }
    return true
  }

  function checkBadPassword(passwordVal) {
      fetch('./badpasswords.txt').then((r) => r.text()).then(text => {
        if (text.indexOf(passwordVal)) {
          return true
        }
      })

  }



  function handleSubmit(event) {
    event.preventDefault();
    if (email.length === 0 || password.length < 8 || checkBadPassword(password)){
      alert("Please check email and password")
    } else {
        history.push('home')
    }

  }
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );


}

// export default App;
