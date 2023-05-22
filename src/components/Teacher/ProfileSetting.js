import React from 'react'
import {Link} from 'react-router-dom';

import Sidebar from './Sidebar';


const ProfileSetting = () => {
  return (  
    <div className='container mt-5' style={{textAlign:'left'}}>
    <div className='row'>
        <aside className="col-md-3">
       <Sidebar />
        </aside>
        <section className="col-md-9">
          <div className='card'>
            <h3 className='card-header'>Profile Setting</h3>
            <div className='card-body'>
                <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Full Name</label>
    <div class="col-sm-10">
      <input type="text"  class="form-control" id="staticEmail"/>
    </div>
  </div>
        <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text"  class="form-control" id="staticEmail" value="email@example.com"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Profile Photo</label>
    <div class="col-sm-10">
      <input type="file" class="form-control" id="inputPassword"/>
    </div>
    </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword"/>
    </div>
    </div>
    <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Interest</label>
    <div class="col-sm-10">
      <input type="text"  class="form-control" id="staticEmail"/>
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

export default ProfileSetting;
