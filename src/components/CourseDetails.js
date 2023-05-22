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
          <p className='fw-bold'>Course by:<Link to="/teacher-detail/1" >Teacher1</Link></p>
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
        <li className="list-group-item">Introductions <span className='float-end'><span className='me-3'>1 Hour 30 Minutes</span><button className='btn btn-md btn-danger'   data-bs-toggle="modal" data-bs-target="#videoModal1"><i className='bi-youtube'></i></button></span>
       
       {/*video modal start*/}
<div className="modal fade" id="videoModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog 	modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">video 1</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
      </div>
     
    </div>
  </div>
</div>
{/*video modal end*/}
</li>
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
