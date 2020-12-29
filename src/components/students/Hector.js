import React from 'react'
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTooltip,
    VictoryLine,
    VictoryGroup
} from "victory"

const Hector = (props) => {
    const hectorData = props.studentData.student[3];
    const assignmentHector = hectorData.assignments
    const wincTheme = props.wincTheme.default

    const assignmentHectorLine = assignmentHector.map(avg => ({
        assignment: avg.name,
        difficultyRating: avg.difficultyRating,
        enjoymentRating: avg.funRating
    }));

    // Add label
    const assignmentRatingHectorWithLabels = assignmentHector.map(person => ({
        assignment: person.name,
        difficultyRating: person.difficultyRating,
        enjoymentRating: person.funRating,
        label: `Opdracht ${person.name}, 
            difficultyRating: ${person.difficultyRating},  
            enjoymentRating: ${person.funRating}`
    }))

    return (
        <div>
            <h1>Hector van der Horst</h1>

            <VictoryChart domainPadding={15} theme={wincTheme}>
                <VictoryGroup offset={20}>
                    <VictoryBar
                        labelComponent={<VictoryTooltip />}
                        data={assignmentRatingHectorWithLabels}
                        x="assignment"
                        y="difficultyRating"
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={assignmentRatingHectorWithLabels.map(avg => avg.assignment)} />
                    <VictoryBar
                        labelComponent={<VictoryTooltip />}
                        data={assignmentRatingHectorWithLabels}
                        x="assignment"
                        y="enjoymentRating"
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={assignmentRatingHectorWithLabels.map(avg => avg.assignment)} />
                </VictoryGroup>
                <VictoryAxis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={assignmentRatingHectorWithLabels.map(avg => avg.assignment)} />
                <VictoryAxis dependentAxis />
            </VictoryChart >

            <VictoryChart domainPadding={15} theme={wincTheme}>
                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={assignmentHectorLine}
                    x="assignment"
                    y="difficultyRating" />
                <VictoryLine
                    style={{
                        data: { stroke: "#ff00ff" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={assignmentHectorLine}
                    x="assignment"
                    y="enjoymentRating" />
                <VictoryAxis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={assignmentHectorLine.map(avg => avg.assignment)} />
                <VictoryAxis dependentAxis />
            </VictoryChart>
        </div>
    )
}
export default Hector