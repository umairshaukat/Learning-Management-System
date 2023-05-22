import React from 'react';
import { Link } from 'react-router-dom';

function PopularCourses() {
  return (
    <div className='container mt-3'>
      
    <h3 className="pb-1 mb-4" style={{textAlign:'left'}}>Populer Courses</h3>
    <div className="row">
    <div className="col-md-3 mb-4">
    <div className="card">
      <img src={'python.jpeg'} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><Link to="/details/1" >Card title</Link></h5>
      </div>
      <div className='card-footer'>
    <div className='title'>
      <span >Rating: 4/5</span>
      <span className='float-end'>Views: 7899</span>
    </div>
  </div>
    </div>
    
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
      <img src={'python.jpeg'} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><Link to="/details/1" >Card title</Link></h5>
      </div>
      <div className='card-footer'>
    <div className='title'>
      <span >Rating: 4/5</span>
      <span className='float-end'>Views: 7899</span>
    </div>
  </div>
    </div>
    
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
      <img src={'python.jpeg'} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><Link to="/details/1" >Card title</Link></h5>
      </div>
      <div className='card-footer'>
    <div className='title'>
      <span >Rating: 4/5</span>
      <span className='float-end'>Views: 7899</span>
    </div>
  </div>
    </div>
    
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
      <img src={'python.jpeg'} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><Link to="/details/1" >Card title</Link></h5>
      </div>
      <div className='card-footer'>
    <div className='title'>
      <span >Rating: 4/5</span>
      <span className='float-end'>Views: 7899</span>
    </div>
  </div>
    </div>
    
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
      <img src={'python.jpeg'} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><Link to="/details/1" >Card title</Link></h5>
      </div>
      <div className='card-footer'>
    <div className='title'>
      <span >Rating: 4/5</span>
      <span className='float-end'>Views: 7899</span>
    </div>
  </div>
    </div>
    
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
      <img src={'python.jpeg'} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><Link to="/details/1" >Card title</Link></h5>
      </div>
      <div className='card-footer'>
    <div className='title'>
      <span >Rating: 4/5</span>
      <span className='float-end'>Views: 7899</span>
    </div>
  </div>
    </div>
    
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
      <img src={'python.jpeg'} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><Link to="/details/1" >Card title</Link></h5>
      </div>
      <div className='card-footer'>
    <div className='title'>
      <span >Rating: 4/5</span>
      <span className='float-end'>Views: 7899</span>
    </div>
  </div>
    </div>
    
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
      <img src={'python.jpeg'} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><Link to="/details/1" >Card title</Link></h5>
      </div>
      <div className='card-footer'>
    <div className='title'>
      <span >Rating: 4/5</span>
      <span className='float-end'>Views: 7899</span>
    </div>
  </div>
    </div>
    
    </div>
    </div>
    {/*pagination start*/}


    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>


    {/*pagination end*/}
    
    </div>
    
  )
}

export default PopularCourses;