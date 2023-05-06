import {Link} from 'react-router-dom';
import StudentsTestimonial from './StudentsTesti';
function Home() {
  return (
<div className="container mt-4">
<h3 className="pb-1 mb-4" style={{textAlign:'left'}}>Latest Courses</h3>
<div className="row">
<div className="col-md-3">
<div className="card">
  <img src={'logo512.png'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><Link to="details/1" >Card title</Link></h5>
  </div>
</div>
</div>
</div>


<h3 className="pb-1 mb-4 mt-5" style={{textAlign:'left'}}>Populer Courses</h3>
<div className="row">
<div className="col-md-3">
<div className="card">
  <img src={'logo512.png'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><Link to="#" >Card title</Link></h5>
  </div>
</div>
</div>
</div>

<h3 className="pb-1 mb-4 mt-5" style={{textAlign:'left'}}>Populer Courses</h3>
<div className="row">
<div className="col-md-3">
<div className="card">
  <img src={'logo512.png'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><Link to="#" >Card title</Link></h5>
  </div>
</div>
</div>
</div>



<h3 className="pb-1 mb-4 mt-5" style={{textAlign:'left'}}>Students Testimonial</h3>
<div className="row">
<StudentsTestimonial/>
</div>

</div>



  );
}

export default Home;
