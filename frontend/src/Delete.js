import React from 'react';
import { Button, Form } from 'react-bootstrap';
class Delete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          rno: '',
        };
      }
    
      handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        const { rno } = this.state;
    
        fetch(`http://localhost:5000/delete/${rno}`, {
          method: 'DELETE'
        })
          .then(response => response.json())
          .then(data => console.log('Success:', data))
          .catch(error => console.error('Error:', error));
    
        this.setState({ rno: '' });
      }
    
      render() {
        return (
          <div className="container mt-3">
            <h3>Delete Student</h3>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Student Roll No</Form.Label>
                <Form.Control type="text" name="rno" value={this.state.rno} onChange={this.handleChange} placeholder="Enter student roll no" required />
              </Form.Group>
              <Button variant="danger" type="submit">Delete</Button>
            </Form>
          </div>
        );
      }

}

export default Delete;