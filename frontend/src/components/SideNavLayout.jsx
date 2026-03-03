import { Link, Outlet } from "react-router-dom"

export default function SideNav(){
    return(
        <>
            <h1>This is the side Nav</h1>
            <Link to='/'>Dashboard</Link>
            <Link to='/diagnosticRoadmap'>Diagnostic & Roadmap</Link>
            <Link to='/learningHub'>Learning Hub</Link>
            <Link to='/funding'>Funding</Link>
            <Link to='/coaching'>Coaching</Link>
            <Link to='/coachLebo'>AI Coach Lebo</Link>
            <Link to='/reporting'>Reporting</Link>
            <Link to='/compliance'>Compliance</Link>
            <Link to='/settings'>Settings</Link>
            <Outlet/>
        </>
    )
}