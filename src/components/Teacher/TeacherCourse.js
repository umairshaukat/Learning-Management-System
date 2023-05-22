import {} from 'react-router-dom';
import React from 'react';
import TeacherSidebar from './TeacherSidebar';

function TeacherCourse() {
  return (
    <div className='container mt-5' style={{textAlign:'left'}}>
    <div className='row'>
        <aside className="col-md-3">
       <TeacherSidebar />
        </aside>
        <section className="col-md-9">
            
    
    <div className="card">
    <h3 className='card-header'>My Course</h3>
    <div className="card-body">
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Created By</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <td>Mechine Learning</td>
            <td>Pakistan</td>
            <td><button className='btn btn-danger btn-sm active'>Delete</button></td>
        </tbody>
    </table>
    
    </div>
    </div>
    </section>
    </div>
  
    </div>
  )
}

export default TeacherCourse;