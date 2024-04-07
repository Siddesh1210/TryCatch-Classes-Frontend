import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ClassCount from '../components/ClassCount'
import WhyChooseUS from '../components/WhyChooseUS'
import OurCourses from '../components/OurCourses'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ClassCount/>
      <WhyChooseUS/>
      <OurCourses/>
      <Footer/>
    </>
  )
}

export default HomePage