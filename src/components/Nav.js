import React from 'react'
import { Link } from "react-router-dom"
import WincLogo from './Winc-logo.png'


function Nav() {
    return (
        <div>
            <nav>
                <img src={WincLogo} alt="Winc Logo" height="150px" />
                <h1>Student Dashboard</h1>
                <ul className="nav-links">
                    <li className="li"> <Link to="/home">Home</Link></li>
                    <li className="li"><Link to='/students/Allstudents'> Individuele beoordelingen</Link></li>
                    <li className="li"><Link to="/OverviewGraphs">Gemiddelden beoordelingen</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav