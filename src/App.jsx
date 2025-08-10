import React from 'react'
import Layout from './Layout/Layout'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const App = () => {


  return (
    <div>
      <ToastContainer theme='dark'/>
      <Layout/>
      
    </div>
  )
}

export default App
