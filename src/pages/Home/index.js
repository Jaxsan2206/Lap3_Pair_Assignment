import React from 'react'
import { Outlet } from 'react-router-dom'
import Form from '../../components/Form'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

function Home() {
  return (
    <>
        <Header/>
        <Form/>
        <Footer/>
    </>
  )
}

export default Home