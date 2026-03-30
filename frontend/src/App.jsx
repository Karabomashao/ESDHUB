import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import SideNavLayout from './components/SideNavLayout'
import Settings from './pages/SME/Settings'
import Compliance from './pages/SME/Compliance'
import Dashboard from './pages/SME/Dashboard'
import DiagnosticRoadmap from './pages/SME/DiagnosticRoadmap'
import LearningHub from './pages/SME/LearningHub'
import Funding from './pages/SME/Funding'
import Coaching from './pages/SME/Coaching'
import CoachLebo from './pages/SME/CoachLebo'
import Reporting from './pages/SME/Reporting'
import ProtectedLayout from './components/ProtectedLayout'
import { 
  RouterProvider, 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements 
} from "react-router-dom"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      {/* public route */}
      <Route path='/login' element={<Login/>}/>

      <Route element={<ProtectedLayout/>}>
          <Route path="/" element={<SideNavLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='compliance' element={<Compliance/>}/>
          <Route path='diagnosticRoadmap' element={<DiagnosticRoadmap/>}/>
          <Route path='learningHub' element={<LearningHub/>}/>
          <Route path='funding' element={<Funding/>}/>
          <Route path='coaching' element={<Coaching/>}/>
          <Route path='coachLebo' element={<CoachLebo/>}/>
          <Route path='reporting' element={<Reporting/>}/>
        </Route>
      </Route>
    </>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
