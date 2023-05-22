import React from 'react'
import {Link} from 'react-router-dom';

import TeacherSidebar from './TeacherSidebar';


const TeacherChangePassword = () => {
  return (  
    <div className='container mt-5' style={{textAlign:'left'}}>
    <div className='row'>
        <aside className="col-md-3">
       <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className='card'>
            <h3 className='card-header'>Change Password</h3>
            <div className='card-body'>
                
    
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Change Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword"/>
    </div>
    </div>
    <hr />
    <button className='btn btn-primary '>Update</button>
    </div>
  </div>
      
        </section>
    </div>
    </div>
  )
}

export default TeacherChangePassword;
