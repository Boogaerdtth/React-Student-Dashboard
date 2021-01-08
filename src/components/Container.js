import React, { useState } from 'react'
import { Switch, Route } from "react-router-dom"

import OverviewGraphs from './graphs/OverviewGraphs'
import Home from "./Home"

import AllStudents from './students/AllStudents'

const studentData = require('./Studentdata.json')
const wincTheme = require('./graphs/WincTheme')

const Container = () => {
    const [barRating, setBarRating] = useState({ name: "difficult-and-enjoyment" })
    const [lineRating, setLineRating] = useState({ name: "difficult-and-enjoyment" })
    const [eachStudentData, setEachStudentData] = useState({ name: "Evelyn" })

    const handleStudentChange = e => {
        const { value } = e.target
        setEachStudentData({ name: value })
    }

    const handleChangeBarRating = e => {
        const { value } = e.target
        setBarRating({ name: value })
    }
    const handleChangeLineRating = e => {
        const { value } = e.target
        setLineRating({ name: value })
    }

    return (
        <main className="main">
            <Switch>
                <Route path="/OverviewGraphs">
                    <OverviewGraphs
                        studentData={studentData}
                        wincTheme={wincTheme}
                        barRating={barRating}
                        lineRating={lineRating}
                        handleChangeBarRating={handleChangeBarRating}
                        handleChangeLineRating={handleChangeLineRating} />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/students/allstudents">
                    <AllStudents
                        studentData={studentData}
                        wincTheme={wincTheme}
                        handleStudentChange={handleStudentChange}
                        eachStudentData={eachStudentData} />
                </Route>
            </Switch>
        </main >
    )
}

export default Container