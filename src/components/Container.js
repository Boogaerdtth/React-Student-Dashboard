import React from 'react'
import { Switch, Route } from "react-router-dom"
import ChartExample from "./ChartExample/ChartExample";
import Home from "./Home";

const Container = () => {
    return (
        <main className="main">
            <Switch>
                <Route path="/chartexample/chartexample">
                    <ChartExample />



                </Route>
                {/* <Route path="/day">
                        <Day  />
                    </Route> */}
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </main >
    )
}

export default Container