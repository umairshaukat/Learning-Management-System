import React from 'react'
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <div className="card">
        <h3 className='card-header'>Dashboard</h3>
        <div class="list-group list-group-flush">
        <Link to='/user-dashboard'className="list-group-item list-group-item-action" >Dashboard</Link>
        <Link to='/my-course'className="list-group-item list-group-item-action" >My Course</Link>
        <Link to='/favorite-courses'className="list-group-item list-group-item-action" >Favourite Courses</Link>
        <Link to='/recommended-courses' className="list-group-item list-group-item-action" >Recommended Courses</Link>
        <Link to='/profile-setting' className="list-group-item list-group-item-action" >Profile Setting</Link>
        <Link to='/change-password'className="list-group-item list-group-item-action">Change Password</Link>
        <Link to='/logout' className="list-group-item list-group-item-action text-danger" >Logout</Link>
        </div>
        </div>
  )
}

export default Sidebar;