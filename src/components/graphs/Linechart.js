import React from 'react'


const LineChart = (props) => {

    return (
        <div>
            <VictoryChart domainPadding={15} theme={wincTheme}>
                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={assignmentRatingAverage}
                    x="assignment"
                    y="difficultyRating"
                />
                <VictoryLine
                    style={{
                        data: { stroke: "#ff00ff" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={assignmentRatingAverage}
                    x="assignment"
                    y="enjoymentRating"
                />
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={assignmentRatingAverage.map(avg => avg.assignment)}
                />
                <VictoryAxis dependentAxis />
            </VictoryChart>


        </div>
    )
}

export default LineChart