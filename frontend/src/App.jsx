import { useState } from 'react'
import './App.css'
import SignUp from './pages/SignUP'
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
import TopNav from './components/TopNav'
import { 
  RouterProvider, 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements 
} from "react-router-dom"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<SideNavLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='settings' element={<Settings/>}/>
        <Route path='compliance' element={<Compliance/>}/>
        <Route path='diagnosticRoadmap' element={<DiagnosticRoadmap/>}/>
        <Route path='learningHub' element={<LearningHub/>}/>
        <Route path='funding' element={<Funding/>}/>
        <Route path='coaching' element={<Coaching/>}/>
        <Route path='coachLebo' element={<CoachLebo/>}/>\
        <Route path='Reporting' element={<Reporting/>}/>
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
