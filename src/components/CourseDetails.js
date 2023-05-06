import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = () => {
  let {course_id}=useParams();
    return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-4'>
        <img src={'../logo512.png'} className="img-thumbnail" alt="..."/>
          </div>
        <div className='col-md-8 pl-4' style={{textAlign:'left',paddingTop:'20px',paddingLeft:'100px'}} >
          <h3>Course Title</h3>
          <p style={{paddingTop:'20px'}}>Course Descriptions</p>
          <p className='fw-bold'>Course by:<Link to="">Teacher Name</Link></p>
          <p className='fw-bold'>Durations: 3 hours 30 Minutes</p>
          <p className='fw-bold'>Enrolled: 450 Students</p>
          <p className='fw-bold'>Rating: 4/5</p>
        </div>
      </div>
      <div className='card mt-3' style={{textAlign:'left'}}>
      <div className="card-header">
        <b>Featured</b>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Introductions <span className='float-end'><span className='me-3'>1 Hour 30 Minutes</span><button className='btn btn-md btn-danger float-end'><i className='bi-youtube'></i></button></span></li>
        <li className="list-group-item">Introductions <span className='float-end'><span className='me-3'>1 Hour 30 Minutes</span><button className='btn btn-md btn-danger float-end'><i className='bi-youtube'></i></button></span></li>
        <li className="list-group-item">Introductions <span className='float-end'><span className='me-3'>1 Hour 30 Minutes</span><button className='btn btn-md btn-danger float-end'><i className='bi-youtube'></i></button></span></li>
        <li className="list-group-item">Introductions <span className='float-end'><span className='me-3'>1 Hour 30 Minutes</span><button className='btn btn-md btn-danger float-end'><i className='bi-youtube'></i></button></span></li>
        <li className="list-group-item">Introductions <span className='float-end'><span className='me-3'>1 Hour 30 Minutes</span><button className='btn btn-md btn-danger float-end'><i className='bi-youtube'></i></button></span></li>
      </ul>
      </div>
      
        <h3 className="pb-1 mt-5 mb-3" style={{textAlign:'left'}}>Related Courses</h3>
        <div className="row">
        <div className="col-md-3">
        <div className="card">
          <img src={'../logo512.png'} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"><Link to="details/1" >Card title</Link></h5>
          </div>
        </div>
        </div>
        <div className="col-md-3">
        <div className="card">
          <img src={'../logo512.png'} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"><Link to="details/1" >Card title</Link></h5>
          </div>
        </div>
        </div>
        <div className="col-md-3">
        <div className="card">
          <img src={'../logo512.png'} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"><Link to="details/1" >Card title</Link></h5>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default CourseDetails
