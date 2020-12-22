import React from 'react'
import { Link } from "react-router-dom"
// import Evelyn from './students/Evelyn'

function Nav() {
    return (
        <div>
            <nav>

                <h1>Student Dashboard</h1>
                <ul className="nav-links">
                    <li> <Link to="/home">Home</Link></li>
                    <li><Link to="/chartexample"> ChartExample</Link></li>
                    <li><Link to="/bargraph">Bargraph</Link></li>

                </ul>
            </nav>
            <ul className="student-links">
                <li><Link to='/students/Evelyn'> Evelyn</Link></li>
                <li><Link to="/students/Aranka"> Aranka</Link></li>
                <li><Link to="/students/Floris"> Floris</Link></li>
                <li><Link to="/students/Hector"> Hector</Link></li>
                <li><Link to="/students/Martina"> Martina</Link></li>
                <li><Link to="/students/Maurits"> Maurits</Link></li>
                <li><Link to="/students/Rahima"> Rahima</Link></li>
                <li><Link to="/students/Sandra"> Sandra</Link></li>
                <li><Link to="/students/Wietske"> Wietske</Link></li>
                <li><Link to="/students/Storm"> Storm</Link></li>
            </ul>
        </div>
    )
}

// export default Nav


// function Nav() {
//     return (
//         <div className="header">
//             <h1 className="title">hallo</h1>
//             <nav>
//                 <ul>
//                     <li className="nav-link">
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li className="nav-link">
//                         <Link to="/About">About</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }

export default Nav