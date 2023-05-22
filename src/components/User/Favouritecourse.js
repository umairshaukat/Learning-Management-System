import {Link} from 'react-router-dom';

function Favouritecourse() {
  return (
    <div className="card">
    <h3 className='card-header'>Favourite course</h3>
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
            <td><button className='btn btn-danger btn-sm active'>Delete</button></td>
        </tbody>
    </table>
    </div>
    </div>
  )
}

export default Favouritecourse;