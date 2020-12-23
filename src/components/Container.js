import React from 'react'
import { Switch, Route } from "react-router-dom"
import ChartExample from "./ChartExample/ChartExample"
import Bargraph from './graphs/Bargraph'
import Home from "./Home"
import Evelyn from './students/Evelyn'
import Aranka from './students/Aranka'

const studentData = require('./Studentdata.json')


const assignmentRatingAverage = [
    { assignment: "SCRUM" },
    { assignment: "W1D1-1" },
    { assignment: "W1D2-1" },
    { assignment: "W1D2-2" },
    { assignment: "W1D2-3" },
    { assignment: "W1D2-4" },
    { assignment: "W1D2-5" },
    { assignment: "W1D3-1" },
    { assignment: "W1D3-2" },
    { assignment: "W1D3-4" },
    { assignment: "W1D3-5" },
    { assignment: "W1D3 - Project - Guess the number" },
    { assignment: "W1D4-1" },
    { assignment: "W1D4 - Project - Kleurentoggle" },
    { assignment: "W1D5 - Project - Galgje" },
    { assignment: "W2D1-1" },
    { assignment: "W2D1-2" },
    { assignment: "W2D2-1" },
    { assignment: "W2D2-2" },
    { assignment: "W2D2-3" },
    { assignment: "W2D3-1" },
    { assignment: "W2D3-2" },
    { assignment: "W2D3-3" },
    { assignment: "W2D4-1" },
    { assignment: "W2D4-2" },
    { assignment: "W2D4-3" },
    { assignment: "W2D5 - Project - Filmzoeker" },
    { assignment: "W3D1-1" },
    { assignment: "W3D1-2" },
    { assignment: "W3D1-3" },
    { assignment: "W3D1-4" },
    { assignment: "W3D2-1" },
    { assignment: "W3D2-2" },
    { assignment: "W3D2-3" },
    { assignment: "W3D3-1" },
    { assignment: "W3D3-2" },
    { assignment: "W3D3-3" },
    { assignment: "W3D3-4" },
    { assignment: "W3D4-1" },
    { assignment: "W3D4-2" },
    { assignment: "W3D5 - Project - Todo-list" },
    { assignment: "W4D2-1" },
    { assignment: "W4D2-2" },
    { assignment: "W4D2-3" },
    { assignment: "W4D2-4" },
    { assignment: "W4D3-1" },
    { assignment: "W4D3-2" },
    { assignment: "W4D3-3" },
    { assignment: "W4D3-4" },
    { assignment: "W4D3-5" },
    { assignment: "W4D3 - Project - Next-level CSS" },
    { assignment: "W5D4-1" },
    { assignment: "W5D5 - Project - Lil_Playlist" },
    { assignment: "W6D1-1" },
    { assignment: "W6D2-1" },
    { assignment: "W6D2 - Project - Eindopdracht" },
];

const Container = () => {

    // console.log(studentData.student[0].assignments[0])
    return (
        <main className="main">
            <Switch>
                <Route path="/chartexample">
                    <ChartExample />
                </Route>
                <Route path="/bargraph">
                    <Bargraph
                        studentData={studentData}
                        assignmentRatingAverage={assignmentRatingAverage}
                    />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/students/evelyn">
                    <Evelyn
                        studentData={studentData}
                        assignmentRatingAverage={assignmentRatingAverage}
                    />
                </Route>
                <Route path="/students/aranka">
                    <Aranka
                        assignmentRatingAverage={assignmentRatingAverage}
                    />
                </Route>
            </Switch>
        </main >
    )
}

export default Container