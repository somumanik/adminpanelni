import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import $ from 'jquery';
import 'dropify/dist/js/dropify.min.js';
import 'dropify/dist/css/dropify.min.css';

import Dashboard from './Pages/Dashboard.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home.jsx'
import ViewUser from './Pages/ViewUser.jsx'
import Contactenquiry from './Pages/Contactenquiry.jsx'
import Newslatter from './Pages/Newslatter.jsx'
import Addcolor from './Pages/Addcolor.jsx'
import Viewcolor from './Pages/Viewcolor.jsx'
import Addmaterials from './Pages/Addmaterials.jsx'
import Viewmaterials from './Pages/Viewmaterials.jsx'
import Viewcategory from './Pages/Viewcategory.jsx'
import Views_sub_category from './Pages/Views_sub_category.jsx'
import ViewSubSubCategory from './Pages/ViewSubSubCategory.jsx'
import Addcategory from './Pages/Addcategory.jsx'
import AddSubCategory from './Pages/AddSubCategory.jsx'
import AddSubSubCategory from './Pages/AddSubSubCategory.jsx';
import AddProduct from './Pages/AddProduct.jsx';
import ViewProduct from './Pages/ViewProduct.jsx';
import AddWhyChhose from './Pages/AddWhyChhose.jsx';
import ViewWhyChoose from './Pages/ViewWhyChoose.jsx';
import Order from './Pages/Order.jsx';
import AddSlider from './Pages/AddSlider.jsx';
import ViewSlider from './Pages/ViewSlider.jsx';
import AddCounntry from './Pages/AddCounntry.jsx';
import ViewCountry from './Pages/ViewCountry.jsx';
import AddTestimonials from './Pages/AddTestimonials.jsx';
import ViewTestimonials from './Pages/ViewTestimonials.jsx';
import AddFaq from './Pages/AddFaq.jsx';
import ViewFaq from './Pages/ViewFaq.jsx';
import Profile from './Pages/Profile.jsx';
import Login from './Pages/Login.jsx';
import Error from './Pages/Error.jsx';




// git add public/_redirects
// git commit -m "Add redirects for Netlify"
// git push



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<Login />} />

      <Route path='/' element={<Home />}>
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/contact-enquiry' element={<Contactenquiry />} />
        <Route path='/viewuser' element={<ViewUser />} />
        <Route path='/newslatter' element={<Newslatter />} />
        <Route path='/addcolor' element={<Addcolor />} />
        <Route path='/viewcolor' element={<Viewcolor />} />
        <Route path='/addmaterial' element={<Addmaterials />} />
        <Route path='/viewmaterial' element={<Viewmaterials />} />
        <Route path='/addcategory' element={<Addcategory />} />
        <Route path='/viewcategory' element={<Viewcategory />} />
        <Route path='/addsubcategory' element={<AddSubCategory />} />
        <Route path='/viewsubcategory' element={<Views_sub_category />} />
        <Route path='/addsubsubcategory' element={<AddSubSubCategory />} />
        <Route path='/viewsubsubcategory' element={<ViewSubSubCategory />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/viewproduct' element={<ViewProduct />} />
        <Route path='/add-whychoose' element={<AddWhyChhose />} />
        <Route path='/view-whychoose' element={<ViewWhyChoose />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/Slider/add' element={<AddSlider />} />
        <Route path='/Slider/view' element={<ViewSlider />} />
        <Route path='/Country/add' element={<AddCounntry />} />
        <Route path='/Country/view' element={<ViewCountry />} />
        <Route path='/Testimonials/add' element={<AddTestimonials />} />
        <Route path='/Testimonials/view' element={<ViewTestimonials />} />
        <Route path='/Faq/add' element={<AddFaq />} />
        <Route path='/Faq/view' element={<ViewFaq />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/*' element={<Error/>} />
      </Route>

    </Routes>
  </BrowserRouter>
)
