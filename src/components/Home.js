import {Link} from 'react-router-dom';
import StudentsTestimonial from './StudentsTesti';
import AllCourses from './AllCourses';
import {useEffect} from "react";
function Home() {
  useEffect(()=>{
    document.title='LMS | Home Pages';
  });
  return (
  
<div className="container mt-4"> 
{/*latest course start*/}
<h3 className="pb-1 mb-4" style={{textAlign:'left'}}>Latest Courses<Link to='/all-courses' className='float-end'>See All</Link></h3>
<div className="row">
<div className="col-md-3">
<div className="card">
  <img src={'logo512.png'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><Link to="details/1" >Card title</Link></h5>
  </div>
</div>

</div>
<div className="col-md-3">
<div className="card">
  <img src={'logo512.png'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><Link to="details/1" >Card title</Link></h5>
  </div>
</div>

</div>
<div className="col-md-3">
<div className="card">
  <img src={'logo512.png'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><Link to="details/1" >Card title</Link></h5>
  </div>
</div>

</div>
<div className="col-md-3">
<div className="card">
  <img src={'logo512.png'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><Link to="details/1" >Card title</Link></h5>
  </div>
</div>

</div>
</div>
{/*latest course end*/}

{/*popular courses start*/}

<h3 className="pb-1 mb-4 mt-5" style={{textAlign:'left'}}>Populer Courses<Link to='/popular-courses' className='float-end'>See All</Link></h3>
<div className="row">
<div className="col-md-3">
<div className="card">
  <img src={'logo512.png'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><Link to="/teacher/detail/1" >Teacher Name</Link></h5>
  </div>
</div>
<div className='card-footer'>
    <div className='title'>
      <span >Rating: 4/5</span>
      <span className='float-end'>Views: 7899</span>
    </div>
  </div>
</div>
</div>
                                  {/*popular courses end*/}
                                  {/*popular teacher start*/}

<h3 className="pb-1 mb-4 mt-5" style={{textAlign:'left'}}>Populer  Teacher<Link to='/popular-teacher' className='float-end'>See All</Link></h3>
<div className="row">
<div className="col-md-3">
<div className="card">
  <img src={'logo512.png'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><Link to="#" >Teacher Name</Link></h5>
  </div>
</div>
</div>
</div>
                              {/*popular teacher end*/}


<h3 className="pb-1 mb-4 mt-5" style={{textAlign:'left'}}>Students Testimonial</h3>
<div className="row">
<StudentsTestimonial/>
</div>

</div>



  );
}

export default Home;
