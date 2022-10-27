import React from "react"

const QuizStats = ({ score, secondsLeft }) => {
    return (
        <>
            <div className='row'>
                <p>
                    SCORE: <span className='bold'>{score}</span>
                </p>
                {/* <p>6 ANSWERS LEFT</p> */}
                <p className='bold'>{secondsLeft}s Remaining</p>
            </div>
        </>
    )
}

export default QuizStats