import React from 'react';
class View extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          students: [],
        };
      }
    
      componentDidMount() {
        fetch('http://localhost:5000/view_all')
          .then((response) => response.json())
          .then((data) => {
            this.setState({ students: data });
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }


    render()
    {
        return (
            <div className="container">
              <h2 className="mt-5 mb-3">Student Details</h2>
              <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Roll No</th>
                    <th>Student ID</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.rno}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
    }

}

export default View;