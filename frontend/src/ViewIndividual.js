import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";

const ViewIndividual = () => {
    {
        const [name, setName] = useState("");
        const [student, setStudent] = useState({});
      
        const handleSubmit = (e) => {
          e.preventDefault();
          fetch(`http://localhost:5000/students/${name}`)
            .then((response) => response.json())
            .then((data) => {
              setStudent(data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        };
      
        return (
          <div className="container">
            <h1 className="mt-4 mb-4">Get Student Details</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter student name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            {Object.keys(student).length !== 0 && (
              <div className="mt-4">
                <h2>{student.name}'s Details</h2>
                <p>Name: {student.name}</p>
                <p>Email: {student.email}</p>
                <p>Phone: {student.phone}</p>
              </div>
            )}
          </div>
        );
    }
};
export default ViewIndividual;
