import React from 'react';
import { Button, Form } from 'react-bootstrap';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm_password: '',
      success_message: '',
      error_message: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, confirm_password } = this.state;

    if (password !== confirm_password) {
      this.setState({ error_message: 'Passwords do not match.' });
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password })
    };

    fetch('http://localhost:5000/register_user', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          this.setState({
            success_message: 'Registration successful. Please login to continue.',
            error_message: '',
            username: '',
            password: '',
            confirm_password: ''
          });
        } else {
          this.setState({ error_message: data.message });
        }
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div className="container mt-3">
        <h3>Register</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter username" required />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" required />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleChange} placeholder="Confirm password" required />
          </Form.Group>
          {this.state.success_message && <div className="alert alert-success">{this.state.success_message}</div>}
          {this.state.error_message && <div className="alert alert-danger">{this.state.error_message}</div>}
          <Button variant="primary" type="submit">Register</Button>
        </Form>
      </div>
    );
  }
}

export default Register;
