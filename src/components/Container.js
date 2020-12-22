import React from 'react'
import { Switch, Route } from "react-router-dom"
import ChartExample from "./ChartExample/ChartExample"
import Bargraph from './graphs/Bargraph'
import Home from "./Home"
import Evelyn from './students/Evelyn'
import Aranka from './students/Aranka'
const studentData = require('./Studentdata.json')

// const handleChange = event => {
//     const { name, value } = event.target
//     this.setState({ [name]: value })
// }
const Container = () => {

    // console.log(studentData.student[0].assignments[0])
    return (
        <main className="main">
            <Switch>
                <Route path="/chartexample">
                    <ChartExample />
                </Route>
                <Route path="/bargraph">
                    <Bargraph studentData={studentData} />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/students/evelyn">
                    <Evelyn />
                </Route>
                <Route path="/students/aranka">
                    <Aranka />
                </Route>
            </Switch>
        </main >
    )
}

export default Container