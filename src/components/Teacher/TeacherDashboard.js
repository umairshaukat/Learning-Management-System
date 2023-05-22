import React from 'react'
import {Link} from 'react-router-dom';

import TeacherSidebar from './TeacherSidebar';


const TeacherDashboard = () => {
  return (  
    <div className='container mt-5' style={{textAlign:'left'}}>
    <div className='row'>
        <aside className="col-md-3">
       <TeacherSidebar />
        </aside>
        <section className="col-md-9">
            
      Dashboard
        </section>
    </div>
    </div>
  )
}

export default TeacherDashboard;
