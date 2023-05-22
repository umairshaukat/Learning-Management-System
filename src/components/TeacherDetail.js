import { Link } from 'react-router-dom';
function TeacherDetail() {
  return (
    <div className='container mt-3'>
    <div className='row'>
      <div className='col-md-4'>
      <img src={'../logo512.png'} className="img-thumbnail" alt="Teacher "/>
        </div>
      <div className='col-md-8 pl-4' style={{textAlign:'left',paddingTop:'20px',paddingLeft:'100px'}} >
        <h3>jhon doe</h3>
        <p style={{paddingTop:'20px'}}>Illumina sequencing and array technologies fuel advancements in life science research, translational and consumer genomics, and molecular diagnostics</p>
        <p className='fw-bold'>Skills:<Link to="/category/category slug" >Php</Link>,
        <Link to="/category/category slug" >Python</Link>,
        <Link to="/category/category slug" >javascript</Link></p>
         <p className='fw-bold'>Recent course:<Link to="/category/category slug" >Reactjs Course</Link></p>
        <p className='fw-bold'>Rating: 4/5</p>
      </div>
    </div>
    <div className='card mt-3' style={{textAlign:'left'}}>
    <div className="card-header">
      <b>Course List</b>
    </div>
    <div className="list-group list-group-flush">
      <Link to='/details/1' className="list-group-item list-group-item-action">Php Course 1</Link>
      <Link to='/details/1' className="list-group-item list-group-item-action">Php Course 2</Link>
      <Link to='/details/1' className="list-group-item list-group-item-action">Python Course 1</Link>
      <Link to='/details/1' className="list-group-item list-group-item-action">Python Course 2</Link>
      <Link to='/details/1' className="list-group-item list-group-item-action">javascript Course 1</Link>
      <Link to='/details/1' className="list-group-item list-group-item-action">javascript Course 2</Link>
      
      
      
    </div>
    </div>
    
      
  </div>
  )
}

export default TeacherDetail;