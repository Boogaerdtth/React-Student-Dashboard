import React from 'react'
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTooltip,
    VictoryLine,
    VictoryGroup
} from "victory"

const allStudents = (props) => {
    const displaySingleStudent = () => {
        let match = props.studentData.student.find(student => {
            return student.name === props.eachStudentData.name
        })
        return match
    }

    const assignmentStudents = displaySingleStudent().assignments
    const wincTheme = props.wincTheme.default

    const assignmentStudentsLine = assignmentStudents.map(avg => ({
        assignment: avg.name,
        difficultyRating: avg.difficultyRating,
        enjoymentRating: avg.funRating
    }));

    const assignmentRatingStudentsWithLabels = assignmentStudents.map(person => ({
        assignment: person.name,
        difficultyRating: person.difficultyRating,
        enjoymentRating: person.funRating,
        label: `Opdracht ${person.name}, 
            difficultyRating: ${person.difficultyRating},  
            enjoymentRating: ${person.funRating}`
    }))

    return (
        <div>
            <div className="radiobuttons">
                <input
                    type="radio"
                    name='eachstudentdata'
                    value="Evelyn"
                    checked={props.eachStudentData.name === "Evelyn"}
                    onChange={props.handleStudentChange}
                /> Evelyn
                        <input
                    type="radio"
                    name='eachstudentdata'
                    value="Aranka"
                    checked={props.eachStudentData.name === "Aranka"}
                    onChange={props.handleStudentChange}
                /> Aranka
                    <input
                    type="radio"
                    name='eachstudentdata'
                    value="Floris"
                    checked={props.eachStudentData.name === "Floris"}
                    onChange={props.handleStudentChange}
                /> Floris
                <input
                    type="radio"
                    name='eachstudentdata'
                    value="Hector"
                    checked={props.eachStudentData.name === "Hector"}
                    onChange={props.handleStudentChange}
                /> Hector
                        <input
                    type="radio"
                    name='eachstudentdata'
                    value="Martina"
                    checked={props.eachStudentData.name === "Martina"}
                    onChange={props.handleStudentChange}
                /> Martina
                    <input
                    type="radio"
                    name='eachstudentdata'
                    value="Maurits"
                    checked={props.eachStudentData.name === "Maurits"}
                    onChange={props.handleStudentChange}
                /> Maurits
                <input
                    type="radio"
                    name='eachstudentdata'
                    value="Rahima"
                    checked={props.eachStudentData.name === "Rahima"}
                    onChange={props.handleStudentChange}
                /> Rahima
                        <input
                    type="radio"
                    name='eachstudentdata'
                    value="Sandra"
                    checked={props.eachStudentData.name === "Sandra"}
                    onChange={props.handleStudentChange}
                /> Sandra
                    <input
                    type="radio"
                    name='eachstudentdata'
                    value="Wietske"
                    checked={props.eachStudentData.name === "Wietske"}
                    onChange={props.handleStudentChange}
                /> Wietske
                    <input
                    type="radio"
                    name='eachstudentdata'
                    value="Storm"
                    checked={props.eachStudentData.name === "Storm"}
                    onChange={props.handleStudentChange}
                /> Storm
                </div>
            <VictoryChart domainPadding={15} theme={wincTheme}>
                <VictoryGroup offset={20}>
                    <VictoryBar
                        labelComponent={<VictoryTooltip />}
                        data={assignmentRatingStudentsWithLabels}
                        x="assignment"
                        y="difficultyRating"
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={assignmentRatingStudentsWithLabels.map(avg => avg.assignment)} />
                    <VictoryBar
                        labelComponent={<VictoryTooltip />}
                        data={assignmentRatingStudentsWithLabels}
                        x="assignment"
                        y="enjoymentRating"
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={assignmentRatingStudentsWithLabels.map(avg => avg.assignment)} />
                </VictoryGroup>
                <VictoryAxis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={assignmentRatingStudentsWithLabels.map(avg => avg.assignment)} />
                <VictoryAxis dependentAxis />
            </VictoryChart >
            <h1>{props.eachStudentData.name}</h1>

            <hr />
            <VictoryChart domainPadding={15} theme={wincTheme}>
                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={assignmentStudentsLine}
                    x="assignment"
                    y="difficultyRating" />
                <VictoryLine
                    style={{
                        data: { stroke: "#ff00ff" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={assignmentStudentsLine}
                    x="assignment"
                    y="enjoymentRating" />
                <VictoryAxis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={assignmentStudentsLine.map(avg => avg.assignment)} />
                <VictoryAxis dependentAxis />
            </VictoryChart>
        </div>
    )
}
export default allStudents