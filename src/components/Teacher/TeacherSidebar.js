import React from 'react'
import {Link} from 'react-router-dom';

function TeacherSidebar() {
  return (
    <div className="card">
        <h3 className='card-header'>Teacher Dashboard</h3>
        <div class="list-group list-group-flush">
        <Link to='/teacher-dashboard'className="list-group-item list-group-item-action" >Dashboard</Link>
        <Link to='/teacher-course'className="list-group-item list-group-item-action" >My Course</Link>
        <Link to='/teacher-favorite-courses'className="list-group-item list-group-item-action" >Add Course</Link>
        <Link to='/my-users' className="list-group-item list-group-item-action" >My users</Link>
        <Link to='/teacher-profile-setting' className="list-group-item list-group-item-action" >Profile Setting</Link>
        <Link to='/teacher-change-password'className="list-group-item list-group-item-action">Change Password</Link>
        <Link to='/logout' className="list-group-item list-group-item-action text-danger" >Logout</Link>
        </div>
        </div>
  )
}

export default TeacherSidebar;