import React from 'react'
import { Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HeroSection from '../Main component/HostelHome';
 import Navbar from '../Main component/Navbar';
 import Footer from "../Main component/Footer";
import About from "../Main component/About"
import PGList from '../Main component/FindMyPG';
import PGDetailsPage from '../Main component/PGdetails';
import PGDetailorovia from '../Main component/PGdetailsorovia';
import PGGreenHouse from '../Main component/PGdetailsGreen';
import PGLotusHostel from '../Main component/PGdetailsLotus';
import PGDetailsmentro from '../Main component/PGdetailsmentro';
import PearlHostel from '../Main component/PGdetailsPearl';
import PGPramar from '../Main component/PGdetailspramar';
import PGRaga from '../Main component/PGdetailsraga';
import PGSunrise from '../Main component/PGdetailsSunrise';
import PGTeja from '../Main component/PGdetailsTeja';
import PGUniqueHouse from '../Main component/PGdetailsUnique';
import PGVrindavan from '../Main component/PGdetailsvrindavan';
import Login from '../Main component/Login';
import Signup from '../Main component/Signup';
// import ContactForm from '../Main component/ScheduleaDemo';
import BlogPage from '../Main component/Blogpage';
// import BlogList from '../Main component/BlogList';
import BlogManager from '../Main component/BlogList';
// import AdminDashboard from '../Main component/Adminpage';
import AdminPage from '../Main component/Adminpage';
import ContactForm from '../Main component/Connectwithwithstayese';


// import { ViewProductsection } from '../Main component/FindMyPG';
// import PGListing from '../Main component/FindMyPG';
// import PropertyList from '../Main component/FindMyPG';


const Routecomp = () => {
    return (
      <>
       <Navbar/> 
      <Routes>
         <Route path='/Login' element={<Login/>}/>
         <Route path='/AdminDashboard' element={<AdminPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {/* <Route path='/ContactForm' element={<ContactForm/>}/> */}
        <Route path='/ContactForm' element={<ContactForm/>}/>
        <Route path='/BlogPage' element={<BlogPage />}/>
        {/* <Route path='/BlogList' element={<BlogList />}/> */}
        <Route path='/BlogList' element={<BlogManager />}/>
      <Route path='/' element={< HeroSection/>}/>
      <Route path='/About' element={< About/>}/>
      <Route path='/pgList' element={<PGList/>}/>
      <Route path='/pgdetails/id' element={<PGDetailsPage/>}/>
      <Route path='/pgorovia/id' element={<PGDetailorovia/>}/>
      <Route path='/pgGreenHouse/id' element={<PGGreenHouse/>}/>
      <Route path='/pgLotusHostel/id' element={<PGLotusHostel/>}/>
      <Route path='/pgmentro/id' element={<PGDetailsmentro/>}/>
      <Route path='/pgPearl/id' element={<PearlHostel/>}/>
      <Route path='/pgPramar/id' element={<PGPramar />}/>
       <Route path='/pgRaga/id' element={<PGRaga/>}/>
       <Route path='/pgSunrise/id' element={<PGSunrise/>}/>
       <Route path='/PGTeja/id' element={<PGTeja/>}/>
       <Route path='/pgUniqueHouse/id' element={<PGUniqueHouse/>}/>
       <Route path='/pgVrindavan/id' element={<PGVrindavan/>}/>
       
                      
      </Routes>
      <Footer/>
      <ToastContainer/>
      </>
    )
  }
  
  export default Routecomp;