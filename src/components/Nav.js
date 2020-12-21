import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
    return (
        <div>
            <nav>

                <h1>Student Dashboard</h1>
                <ul className="nav-links">
                    <li className="nav-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/chartexample/chartexample"> ChartExample</Link>
                    </li>
                    {/* <li>
                        <Link to="/day">Day view</Link>
                    </li> */}
                </ul>
            </nav>
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