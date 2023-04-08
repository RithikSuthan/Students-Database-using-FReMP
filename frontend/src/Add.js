import React from 'react';
class Add extends React.Component {

    addStudent = (student) => {
        fetch('http://localhost:5000/students', {
          method: 'POST',
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
        return (
          <form onSubmit={(event) => {
            event.preventDefault();
            const student = {
              name: this.refs.name.value,
              email: this.refs.email.value,
              phone: this.refs.phone.value
            };
            this.addStudent(student);
          }}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control" ref="name" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" className="form-control" ref="email" />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input type="tel" className="form-control" ref="phone" />
            </div>
            <button type="submit" className="btn btn-primary">Add Student</button>
          </form>
        );
      }
    }

export default Add;