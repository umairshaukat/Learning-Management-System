import Home from './Home';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import CourseDetails from './CourseDetails';
import Login from './User/Login';
import Register from './User/Register';
import {Routes,Route} from 'react-router-dom';
import Dashboard from './User/Dashboard';
function Main() {
  return (
    <div className="home">
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about-us' element={<About/>} />
    <Route path='/details/:course_id' element={<CourseDetails/>} />
    <Route path='/user-login' element={<Login/>} />
    <Route path='/user-dashboard' element={<Dashboard/>} />
    <Route path='/user-register' element={<Register/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default Main;
