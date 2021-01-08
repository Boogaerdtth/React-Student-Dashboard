import React from 'react'
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTooltip,
    VictoryLine,
    VictoryGroup
} from "victory"


function OverviewGraphs(props) {
    const wincTheme = props.wincTheme.default
    const newStudentData = props.studentData.student;
    const assignmentData = newStudentData.map(x => x.assignments)
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

    // Only difficultyrate
    const assignmentsDifficultyAverage = assignmentsAverage.map(avg => ({
        assignment: avg.name,
        difficultyRating: avg.difficultyRating,
        enjoymentRating: 0,
    }))
    // Add label
    const assignmentsDifficultyAverageWithLabels = assignmentsAverage.map(avg => ({
        assignment: avg.name,
        difficultyRating: avg.difficultyRating,
        enjoymentRating: 0,
        label: `Opdracht ${avg.name}, 
            Difficulty-rating: ${avg.difficultyRating}`
    }))


    // Only enjoymentrate
    const assignmentsEnjoymentAverage = assignmentsAverage.map(avg => ({
        assignment: avg.name,
        difficultyRating: 0,
        enjoymentRating: avg.funRating,
    }))
    // Add label
    const assignmentsEnjoymentAverageWithLabels = assignmentsAverage.map(avg => ({
        assignment: avg.name,
        difficultyRating: 0,
        enjoymentRating: avg.funRating,
        label: `Opdracht ${avg.name},  
            Enjoyment-rating: ${avg.funRating}`
    }))

    // Both difficultyrate + enjoymentrate
    const assignmentRatingAverage = assignmentsAverage.map(avg => ({
        assignment: avg.name,
        difficultyRating: avg.difficultyRating,
        enjoymentRating: avg.funRating
    }));
    // Add label
    const assignmentRatingAverageWithLabels = assignmentRatingAverage.map(avg => ({
        assignment: avg.assignment,
        difficultyRating: avg.difficultyRating,
        enjoymentRating: avg.enjoymentRating,
        label: `Opdracht ${avg.assignment}, 
            difficultyRating: ${avg.difficultyRating},  
            enjoymentRating: ${avg.enjoymentRating}`
    }))


    const displayAverageInBarGraph = () => {
        if (props.barRating.name === 'difficult-and-enjoyment') {
            return assignmentRatingAverageWithLabels
        } else if (props.barRating.name === 'difficult') {
            return assignmentsDifficultyAverageWithLabels
        } else if (props.barRating.name === 'enjoyment') {
            return assignmentsEnjoymentAverageWithLabels
        }
    }

    const displayAverageInLineGraph = () => {
        if (props.lineRating.name === 'difficult-and-enjoyment') {
            return assignmentRatingAverage
        } else if (props.lineRating.name === 'difficult') {
            return assignmentsDifficultyAverage
        } else if (props.lineRating.name === 'enjoyment') {
            return assignmentsEnjoymentAverage
        }
    }

    return (
        <div>
            <div className="radiobuttons-gemiddelde">
                <input
                    type="radio"
                    name='barRating'
                    value="difficult-and-enjoyment"
                    checked={props.barRating.name === "difficult-and-enjoyment"}
                    onChange={props.handleChangeBarRating}
                /> Moeilijkheidsgraad  +  Leukheidsgraad
                        <input
                    type="radio"
                    name='barRating'
                    value="difficult"
                    checked={props.barRating.name === "difficult"}
                    onChange={props.handleChangeBarRating}
                /> Moeilijkheidsgraad
                    <input
                    type="radio"
                    name='barRating'
                    value="enjoyment"
                    checked={props.barRating.name === "enjoyment"}
                    onChange={props.handleChangeBarRating}
                /> Leukheidsgraad
                </div>
            <hr />
            <>
                <VictoryChart domainPadding={15} theme={wincTheme}>
                    <VictoryGroup offset={20}>
                        <VictoryBar
                            labelComponent={<VictoryTooltip />}
                            data={displayAverageInBarGraph()}
                            x="assignment"
                            y="difficultyRating"
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={assignmentsAverage.map(avg => avg.name)} />
                        <VictoryBar
                            labelComponent={<VictoryTooltip />}
                            data={displayAverageInBarGraph()}
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
                <br />
                <div className="radiobuttons">
                    <input
                        type="radio"
                        name="lineRating"
                        value="difficult-and-enjoyment"
                        checked={props.lineRating.name === "difficult-and-enjoyment"}
                        onChange={props.handleChangeLineRating}
                    /> Moeilijkheidsgraad + Leukheidsgraad
                    <input
                        type="radio"
                        name="lineRating"
                        value="difficult"
                        checked={props.lineRating.name === "difficult"}
                        onChange={props.handleChangeLineRating}
                    /> Moeilijkheidsgraad
                    <input
                        type="radio"
                        name="lineRating"
                        value="enjoyment"
                        checked={props.lineRating.name === "enjoyment"}
                        onChange={props.handleChangeLineRating}
                    /> Leukheidsgraad
                </div>
                <hr />


                <VictoryChart domainPadding={15} theme={wincTheme}>
                    <VictoryLine
                        style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={displayAverageInLineGraph()}
                        x="assignment"
                        y="difficultyRating" />
                    <VictoryLine
                        style={{
                            data: { stroke: "#ff00ff" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={displayAverageInLineGraph()}
                        x="assignment"
                        y="enjoymentRating" />
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={assignmentsAverage.map(avg => avg.name)} />
                    <VictoryAxis dependentAxis />
                </VictoryChart>
            </>
            <hr />
        </div>
    )
}
export default OverviewGraphs