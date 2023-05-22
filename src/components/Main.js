import Home from './Home';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import CourseDetails from './CourseDetails';
import TeacherDetail from './TeacherDetail';



//user
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourse from './User/MyCourse';
import FavoriteCourses from './User/FavoriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileSetting  from './User/ProfileSetting';
import ChangePassword  from './User/ChangePassword';
//teacher
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashborad from './Teacher/TeacherDashboard';
import TeacherCourse from './Teacher/TeacherCourse';
import TeacherFavoriteCourses from './Teacher/TeacherFavoriteCourses';
import TeacherProfileSetting from './Teacher/TeacherProfileSetting';
import TeacherChangePassword from './Teacher/TeacherChangePassword';

// list pages
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import PopularTeacher from './PopularTeacher';
import CategoryCourses from './CategoryCourses';







import {Routes,Route} from 'react-router-dom';

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
    <Route path='/my-course' element={<MyCourse/>} />
    <Route path='/favorite-courses' element={<FavoriteCourses/>} />
    <Route path='/recommended-courses' element={<RecommendedCourses/>} />
    <Route path='/Profile-setting' element={<ProfileSetting/>} />
    <Route path='/change-password' element={<ChangePassword/>} />
    <Route path='/teacher-login' element={<TeacherLogin/>} />
    <Route path='/teacher-register' element={<TeacherRegister/>} />
    <Route path='/teacher-dashboard' element={<TeacherDashborad/>} />
    <Route path='/teacher-course' element={<TeacherCourse/>} />
    <Route path='/teacher-favorite-courses' element={<TeacherFavoriteCourses/>} />
    <Route path='/teacher-profile-setting' element={<TeacherProfileSetting/>} />
    <Route path='/teacher-change-password' element={<TeacherChangePassword/>} />



    <Route path='/teacher-detail/:teacher_id' element={<TeacherDetail/>} />
    <Route path='/all-courses' element={<AllCourses/>} />
    <Route path='/popular-courses' element={<PopularCourses/>} />
    <Route path='/popular-teacher' element={<PopularTeacher/>} />
    <Route path='/category/category slug' element={<CategoryCourses/>} />
    

    </Routes>
    <Footer/>
    </div>
  );
}

export default Main;
