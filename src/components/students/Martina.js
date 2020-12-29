import React from 'react'
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTooltip,
    VictoryLine,
    VictoryGroup
} from "victory"

const Martina = (props) => {
    const martinaData = props.studentData.student[4];
    const assignmentMartina = martinaData.assignments
    const wincTheme = props.wincTheme.default

    const assignmentMartinaLine = assignmentMartina.map(avg => ({
        assignment: avg.name,
        difficultyRating: avg.difficultyRating,
        enjoymentRating: avg.funRating
    }));

    // Add label
    const assignmentRatingMartinaWithLabels = assignmentMartina.map(person => ({
        assignment: person.name,
        difficultyRating: person.difficultyRating,
        enjoymentRating: person.funRating,
        label: `Opdracht ${person.name}, 
            difficultyRating: ${person.difficultyRating},  
            enjoymentRating: ${person.funRating}`
    }))

    return (
        <div>
            <h1>Martina Churandy</h1>

            <VictoryChart domainPadding={15} theme={wincTheme}>
                <VictoryGroup offset={20}>
                    <VictoryBar
                        labelComponent={<VictoryTooltip />}
                        data={assignmentRatingMartinaWithLabels}
                        x="assignment"
                        y="difficultyRating"
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={assignmentRatingMartinaWithLabels.map(avg => avg.assignment)} />
                    <VictoryBar
                        labelComponent={<VictoryTooltip />}
                        data={assignmentRatingMartinaWithLabels}
                        x="assignment"
                        y="enjoymentRating"
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={assignmentRatingMartinaWithLabels.map(avg => avg.assignment)} />
                </VictoryGroup>
                <VictoryAxis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={assignmentRatingMartinaWithLabels.map(avg => avg.assignment)} />
                <VictoryAxis dependentAxis />
            </VictoryChart >

            <VictoryChart domainPadding={15} theme={wincTheme}>
                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={assignmentMartinaLine}
                    x="assignment"
                    y="difficultyRating" />
                <VictoryLine
                    style={{
                        data: { stroke: "#ff00ff" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={assignmentMartinaLine}
                    x="assignment"
                    y="enjoymentRating" />
                <VictoryAxis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={assignmentMartinaLine.map(avg => avg.assignment)} />
                <VictoryAxis dependentAxis />
            </VictoryChart>
        </div>
    )
}
export default Martina