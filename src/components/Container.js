import React from 'react'
import { Switch, Route } from "react-router-dom"

import ChartExample from "./ChartExample/ChartExample"
import Bargraph from './graphs/Bargraph'
import Home from "./Home"

import Evelyn from './students/Evelyn'
import Aranka from './students/Aranka'

const studentData = require('./Studentdata.json')
const wincTheme = require('./graphs/WincTheme')


const Container = () => {
    return (
        <main className="main">
            <Switch>
                <Route path="/chartexample">
                    <ChartExample />
                </Route>
                <Route path="/bargraph">
                    <Bargraph
                        studentData={studentData}
                        wincTheme={wincTheme}

                    />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/students/evelyn">
                    <Evelyn
                        studentData={studentData}
                        wincTheme={wincTheme}
                    />
                </Route>
                <Route path="/students/aranka">
                    <Aranka
                        studentData={studentData}
                        wincTheme={wincTheme} />
                </Route>
            </Switch>
        </main >
    )
}

export default Container