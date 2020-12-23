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
    // console.log(props.handleChange)

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
        difficultyRating: avg.difficultyRating
    }))

    // onderstaand moet alleen de enjoymentrate uitvoeren!!
    const assignmentsEnjoymentAverage = assignmentsAverage.map(avg => ({
        assignment: avg.name,
        enjoymentRating: avg.funRating
    }))

    // moet iknog de labels per optie ook opnieuw uitschrijven?
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

    return (
        <div>
            <>
                <VictoryChart domainPadding={15} theme={wincTheme}>
                    <VictoryGroup offset={20}>
                        <VictoryBar
                            labelComponent={<VictoryTooltip />}
                            data={assignmentRatingAverageWithLabels}
                            x="assignment"
                            y="difficultyRating"
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={assignmentRatingAverageWithLabels.map(avg => avg.assignment)} />
                        <VictoryBar
                            labelComponent={<VictoryTooltip />}
                            data={assignmentRatingAverageWithLabels}
                            x="assignment"
                            y="enjoymentRating"
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={assignmentRatingAverageWithLabels.map(avg => avg.assignment)} />
                    </VictoryGroup>
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={assignmentRatingAverageWithLabels.map(avg => avg.assignment)} />
                    <VictoryAxis dependentAxis />
                </VictoryChart >

                <br />

                <div className="radiobuttons">
                    <input
                        type="radio"
                        name="barRating"
                        value="difficult-and-enjoyment"
                        checked={props.barRating === "difficult-and-enjoyment"}
                        onChange={props.handleChange}
                    /> Difficulty-rating  +  Enjoyment-rating
                        <input
                        type="radio"
                        name="barRating"
                        value="difficult"
                        checked={props.barRating === "difficult"}
                        onChange={props.handleChange}
                    /> Difficulty-rating
                    <input
                        type="radio"
                        name="barRating"
                        value="enjoyment"
                        checked={props.barRating === "enjoyment"}
                        onChange={props.handleChange}
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
                    onChange={props.handleChange}
                /> Difficulty-rating + Enjoyment-rating
                    <input
                    type="radio"
                    name="lineRating"
                    value="difficult"
                    checked={props.lineRating === "difficult"}
                    onChange={props.handleChange}
                /> Difficulty-rating
                    <input
                    type="radio"
                    name="lineRating"
                    value="enjoyment"
                    checked={props.lineRating === "enjoyment"}
                    onChange={props.handleChange}
                /> Enjoyment-rating
                </div>
            <hr />
            <hr />
        </div>
    )
}
export default Bargraph