import React from 'react'
import { Switch, Route } from "react-router-dom"
import ChartExample from "./ChartExample/ChartExample";
import Bargraph from './graphs/Bargraph';
import Home from "./Home";

const Container = () => {
    return (
        <main className="main">
            <Switch>
                <Route path="/chartexample/chartexample">
                    <ChartExample />



                </Route>
                <Route path="/graphs/Bargraph">
                    <Bargraph />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </main >
    )
}

export default Container