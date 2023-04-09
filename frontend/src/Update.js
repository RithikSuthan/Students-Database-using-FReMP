import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
class Update extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          rno:'',
          name: '',
          email: '',
          phone: '',
        };
      }
    
      handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        const { rno,name, email, phone } = this.state;
        const student = { name,email, phone };
        fetch(`http://localhost:5000/update_student/${rno}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(student),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
    
      render() {
        const { rno,name, email, phone } = this.state;
        return (
          <div className="container">
            <h1>Update Student</h1>
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label for="rno">Roll Number</Label>
                <Input
                  type="text"
                  name="rno"
                  id="rno"
                  value={rno}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={this.handleChange}
                />
              </FormGroup>

              <Button color="primary" type="submit">
                Update
              </Button>
            </Form>
          </div>
        );
      }
}

export default Update;