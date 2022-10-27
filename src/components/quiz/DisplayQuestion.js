import React, { useEffect } from "react"

const DisplayQuestion = ({
    questions,
    currentQuestion,
    setCurrentQuestion,
    optionHandler,
    setPauseTimer
}) => {
    useEffect(() => {
        if (currentQuestion === 10) setCurrentQuestion(0)
    }, [currentQuestion, setCurrentQuestion])

    useEffect(() => {
        setPauseTimer(true)
    }, [setPauseTimer])

    return (
        <>
            <div className='question'>
                <p>
                    {questions[currentQuestion] ? (
                        questions[currentQuestion].questionText
                    ) : (
                        // <RefreshIcon />
                        <h2>Refresh</h2>
                    )}
                </p>
            </div>

            <div className='options'>
                {questions[currentQuestion] ? (
                    questions[currentQuestion].answerOptions.map((option, i) => (
                        <button
                            key={i}
                            className='button'
                            onClick={() => optionHandler(option.isCorrect)}
                        >
                            {option.answerText}
                            {option.isCorrect ? '+' : ''}
                        </button>
                    ))
                ) : (
                    // <RefreshIcon />
                    <h2>Refresh</h2>
                )}
            </div>
        </>
    )
}

export default DisplayQuestion