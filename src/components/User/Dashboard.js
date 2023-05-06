import React from 'react'
import {Link} from 'react-router-dom';
const Dashboard = () => {
  return (
    <div className='container mt-5' style={{textAlign:'left'}}>
    <div className='row'>
        <aside className="col-md-3">
        <div className="card">
        <h3 className='card-header'>Dashboard</h3>
        <div class="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action" to="user-login" aria-current="true">My Course</Link>
        <Link className="list-group-item list-group-item-action" to="user-login" aria-current="true">Favourite Course</Link>
        <Link className="list-group-item list-group-item-action" to="user-login" aria-current="true">Recommanded Course</Link>
        <Link className="list-group-item list-group-item-action" to="user-login" aria-current="true">Profile Setting</Link>
        <Link className="list-group-item list-group-item-action" to="user-login" aria-current="true">Change Password</Link>
        <Link className="list-group-item list-group-item-action text-danger" to="user-login">Logout</Link>
        </div>
        </div>
        </aside>
        <section className="col-md-9">
            
        <div className="card">
        <h3 className='card-header'>Dashboard</h3>
        <div className="card-body">
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Created By</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <td>Mechine Learning</td>
                <td>Rana Sufyan</td>
                <td><button className='btn-sm btn-danger'>Delete</button></td>
            </tbody>
        </table>
        </div>
        </div>
        </section>
    </div>
    </div>
  )
}

export default Dashboard
