import React from 'react'
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTooltip,
    VictoryLine,
    VictoryGroup
} from "victory"


function Bargraph(props) {
    const wincTheme = props.wincTheme.default
    const newStudentData = props.studentData.student;
    const assignmentData = newStudentData.map(x => x.assignments)
    console.log(props.barRating.name)

    const flattenArray = assignmentData.flat()
    const uniqueAssignmentNames = assignmentData[0].map(x => x.name)
    let sortedAssignments = [];
    uniqueAssignmentNames.forEach(assignment => {
        let groupedAssignments = flattenArray.filter(x => x.name === assignment)
        sortedAssignments.push(groupedAssignments)
    });
    let assignmentsTotal = [];
    sortedAssignments.forEach(assignmentSet => {
        const reducer = assignmentSet.reduce((total, current) => {
            return { name: current.name, difficultyRating: total.difficultyRating + current.difficultyRating, funRating: total.funRating + current.funRating }
        });
        assignmentsTotal.push(reducer)
    })
    const assignmentsAverage = assignmentsTotal.map((current) => {
        return { name: current.name, difficultyRating: (current.difficultyRating / newStudentData.length), funRating: (current.funRating / newStudentData.length) }
    });

    // onderstaand moet alleen de difficultyrate uitvoeren!!
    const assignmentsDifficultyAverage = assignmentsAverage.map(avg => ({
        assignment: avg.name,
        difficultyRating: avg.difficultyRating,
        enjoymentRating: '',
        label: `Opdracht ${avg.name}, 
            difficultyRating: ${avg.difficultyRating},  
            enjoymentRating: ${avg.funRating}`
    }))

    // onderstaand moet alleen de enjoymentrate uitvoeren!!
    const assignmentsEnjoymentAverage = assignmentsAverage.map(avg => ({
        assignment: avg.name,
        difficultyRating: '',
        enjoymentRating: avg.funRating,
        label: `Opdracht ${avg.name}, 
            difficultyRating: ${avg.difficultyRating},  
            enjoymentRating: ${avg.funRating}`
    }))

    const assignmentRatingAverage = assignmentsAverage.map(avg => ({
        assignment: avg.name,
        difficultyRating: avg.difficultyRating,
        enjoymentRating: avg.funRating
    }));

    // // Add label
    const assignmentRatingAverageWithLabels = assignmentRatingAverage.map(avg => ({
        assignment: avg.assignment,
        difficultyRating: avg.difficultyRating,
        enjoymentRating: avg.enjoymentRating,
        label: `Opdracht ${avg.assignment}, 
            difficultyRating: ${avg.difficultyRating},  
            enjoymentRating: ${avg.enjoymentRating}`
    }))

    // dat als de state wordt veranderd, dat er dan een andere const (bovenstaande)
    // wordt uitgevoerd

    // props.barRating moet de state zijn die doorgegeven moet worden aan de data van de grafiek


    const displayAverageInGraph = () => {
        if (props.barRating.name === 'difficult-and-enjoyment') {
            return assignmentRatingAverageWithLabels
            // console.log(assignmentRatingAverageWithLabels)
        } else if (props.barRating.name === 'difficult') {
            return assignmentsDifficultyAverage
            // console.log(assignmentsDifficultyAverage)
        } else if (props.barRating.name === 'enjoyment') {
            return assignmentsEnjoymentAverage
            // console.log(assignmentsEnjoymentAverage)
        }
    }
    displayAverageInGraph()



    return (
        <div>
            <>
                <VictoryChart domainPadding={15} theme={wincTheme}>
                    <VictoryGroup offset={20}>
                        <VictoryBar
                            labelComponent={<VictoryTooltip />}
                            data={displayAverageInGraph()}
                            x="assignment"
                            y="difficultyRating"
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={assignmentsAverage.map(avg => avg.name)} />
                        <VictoryBar
                            labelComponent={<VictoryTooltip />}
                            data={displayAverageInGraph()}
                            x="assignment"
                            y="enjoymentRating"
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={assignmentsAverage.map(avg => avg.name)} />
                    </VictoryGroup>
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={assignmentsAverage.map(avg => avg.name)} />
                    <VictoryAxis dependentAxis />
                </VictoryChart >

                <br />

                <div className="radiobuttons">
                    <input
                        type="radio"
                        name='barRating'
                        value="difficult-and-enjoyment"
                        checked={props.barRating.name === "difficult-and-enjoyment"}
                        onChange={props.handleChangeBarRating}
                    /> Difficulty-rating  +  Enjoyment-rating
                        <input
                        type="radio"
                        name='barRating'
                        value="difficult"
                        checked={props.barRating.name === "difficult"}
                        onChange={props.handleChangeBarRating}
                    /> Difficulty-rating
                    <input
                        type="radio"
                        name='barRating'
                        value="enjoyment"
                        checked={props.barRating.name === "enjoyment"}
                        onChange={props.handleChangeBarRating}
                    /> Enjoyment-rating
                </div>
                <hr />


                <VictoryChart domainPadding={15} theme={wincTheme}>
                    <VictoryLine
                        style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={assignmentRatingAverage}
                        x="assignment"
                        y="difficultyRating" />
                    <VictoryLine
                        style={{
                            data: { stroke: "#ff00ff" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={assignmentRatingAverage}
                        x="assignment"
                        y="enjoymentRating" />
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={assignmentRatingAverage.map(avg => avg.assignment)} />
                    <VictoryAxis dependentAxis />
                </VictoryChart>


            </>
            <br />
            <div className="radiobuttons">
                <input
                    type="radio"
                    name="lineRating"
                    value="difficult-and-enjoyment"
                    checked={props.lineRating === "difficult-and-enjoyment"}
                    onChange={props.handleChangeLineRating}
                /> Difficulty-rating + Enjoyment-rating
                    <input
                    type="radio"
                    name="lineRating"
                    value="difficult"
                    checked={props.lineRating === "difficult"}
                    onChange={props.handleChangeLineRating}
                /> Difficulty-rating
                    <input
                    type="radio"
                    name="lineRating"
                    value="enjoyment"
                    checked={props.lineRating === "enjoyment"}
                    onChange={props.handleChangeLineRating}
                /> Enjoyment-rating
                </div>
            <hr />
            <hr />
        </div>
    )
}
export default Bargraph