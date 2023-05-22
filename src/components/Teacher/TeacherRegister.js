import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect,useState} from "react";

const TeacherRegister = () => {
  useEffect(()=>{
    document.title='Teacher Register';
  });
  return (

    <div className='container mt-5' style={{textAlign:'left'}}>
    <div className='row'>
      <div className='col-md-4 m-auto'>
        <div className='card'>
      <h3 className='card-header'>Teacher Register</h3>
      <div className='card-body'>
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">User Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Qualification</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Mobile Number</label>
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">skills</label>
                <textarea className="form-control"></textarea>
                <div id="emailHelp" className='form-text'>php, javascript, python, etc</div>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default TeacherRegister
