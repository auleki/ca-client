import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// import { toast, ToastContainer } from 'react-toastify'
import { HiOutlineArrowLeftOnRectangle } from 'react-icons/hi2'
import {
    QuizPage,
    QuizBox,
    StyleIcon,
    FButton
} from '../styles/components.styled'
import { questionList } from '../utils/constants'
import LoginView from '../components/auth/Login'
import RegisterView from '../components/auth/Register'
import QuizStats from '../components/quiz/QuizStats'
import DisplayQuestion from '../components/quiz/DisplayQuestion'
import ScoreView from '../components/quiz/ScoreView'

// import CircularProgress from '@material-ui/core/CircularProgress'
// import HelpIcon from '@material-ui/icons/Help';
// import EmailIcon from '@material-ui/icons/Email'
// import ExitToAppIcon from '@material-ui/icons/ExitToApp'
// import AccountBoxIcon from '@material-ui/icons/AccountBox'
// import { CodeSharp } from "@material-ui/icons";

const QuizHeader = ({ user, attempt, limit }) => {
    return (
        <div className='quiz-title'>
            <p>{user.firstName || 'Guest'}</p>
            <p className='bold'>
                {attempt}/{limit} Questions
            </p>
        </div>
    )
}

const RefreshIcon = () => {
    return (
        <StyleIcon>
            <h2>Hello</h2>
        </StyleIcon>
    )
}

const Quiz = () => {
    const [questions, setQuestions] = useState(questionList)
    // const [ questionsSet, setQuestionsSet ] = useState([]);
    // const randomNumber = Math.floor(Math.random() * questions.length)
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [showScore, setShowScore] = useState(false)
    const [limit] = useState(10)
    const [attempt, setAttempt] = useState(1)
    const [user, setUser] = useState({})
    const [oldUser, setOldUser] = useState(false)
    const [secondsLeft, setSecondsLeft] = useState(45)
    const [register, setRegister] = useState(true)
    // eslint-disable-next-line
    const [isActive, setIsActive] = useState(false)
    const [canPlay, setCanPlay] = useState(true)
    const [pauseTimer, setPauseTimer] = useState(true)
    // const [questionIndex, setQuestionIndex] = useState(0)
    // let timer = 30;

    const intervalRef = useRef()

    const shuffleQuestions = arr => {
        /* this array takes in another array
            shuffles it &       
            cuts out the first ten questions
         */
        for (let i = arr.length - 1; i > 0; i--) {
            let rand = Math.floor(Math.random() * (i + 1))
            let temp = arr[i]
            arr[i] = arr[rand]
            arr[rand] = temp
        }
        const currentQuestions = arr.splice(1, 11)
        setQuestions(currentQuestions)
        return currentQuestions
    }

    const decreaseSeconds = () => setSecondsLeft(prev => prev - 1)

    function nextQuestion() {
        if (limit > attempt) {
            setCurrentQuestion(currentQuestion + 1)
            setAttempt(attempt + 1)
            resetTimer()
        } else {
            setShowScore(true)
        }
    }

    function startTimer() {
        if (secondsLeft === 0 && !pauseTimer) {
            clearInterval(intervalRef.current)
            resetTimer()
        } else {
            intervalRef.current = setInterval(decreaseSeconds, 1000)
        }
    }

    useEffect(() => {
        if (secondsLeft === 0) nextQuestion()
        // eslint-disable-next-line
    }, [secondsLeft])

    function beginQuiz() {
        startTimer()
    }

    useEffect(() => {
        beginQuiz()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setPauseTimer(false)
    }, [])

    // const transitQuiz = () => {
    // 	setOldUser(false);
    // 	setRegister(false);
    // };

    useEffect(() => {
        shuffleQuestions(questionList)
        resetTimer()
    }, [])

    function loginOrRegister(mode) {
        if (mode === 'login') {
            setOldUser(true)
            setRegister(false)
        } else if (mode === 'register') {
            setOldUser(false)
            setRegister(true)
        }
    }

    // function toggle () {
    //   setIsActive(true)
    // }

    function resetTimer() {
        setSecondsLeft(30)
    }

    function optionHandler(isCorrect) {
        if (isCorrect) setScore(score + 1)
        nextQuestion()
    }

    function resetScore() {
        setShowScore(false)
        setScore(0)
        setAttempt(1)
        setCurrentQuestion(1)
        shuffleQuestions(questionList)
    }

    // let canPlay = true

    if (!canPlay) {
        return (
            <QuizPage>
                <QuizBox>
                    <div className='score-title center'>
                        {/* <Link to="/"> */}
                        {/* <FButton className="rotate-180">
						<HelpIcon />
					</FButton> */}
                        {/* </Link> */}
                        {/* <h3 center>
							{user.firstName || 'Guest'} {user.lastName}{' '}
						</h3> */}
                    </div>
                    <div className='score-display'>
                        <div className='text_box'>
                            {/* <h3>You have exhausted your tries for the day</h3> */}
                            <h3>{user.firstName} have exhausted your tries for the day</h3>
                            <p>Come back in 24 hours</p>
                        </div>
                        {/* <h3>{score || 9}</h3> */}
                        <Link to='/'>
                            <FButton>
                                <span className='span_icon rotate-180'>
                                    <HiOutlineArrowLeftOnRectangle />
                                </span>{' '}
                                <span className='span_text'>Exit Quiz</span>
                            </FButton>
                        </Link>
                    </div>
                </QuizBox>
            </QuizPage>
        )
    }

    return (
        <QuizPage>
            {showScore ? (
                <ScoreView
                    resetTimer={resetTimer}
                    user={user}
                    beginQuiz={beginQuiz}
                    score={score}
                    setIsActive={setIsActive}
                    restart={resetScore}
                />
            ) : oldUser ? (
                <LoginView
                    setRegister={setRegister}
                    user={user}
                    canPlay={canPlay}
                    setCanPlay={setCanPlay}
                    beginQuiz={beginQuiz}
                    loginOrRegister={loginOrRegister}
                    setOldUser={setOldUser}
                    setUser={setUser}
                />
            ) : register ? (
                <RegisterView
                    // transitQuiz={transitQuiz}
                    beginQuiz={beginQuiz}
                    user={user}
                    setUser={setUser}
                    setOldUser={setOldUser}
                    setRegister={setRegister}
                    loginOrRegister={loginOrRegister}
                />
            ) : (
                <QuizBox>
                    <QuizHeader user={user} attempt={attempt} limit={limit} />
                    <QuizStats score={score} secondsLeft={secondsLeft} />
                    <DisplayQuestion
                        optionHandler={optionHandler}
                        questions={questions}
                        setPauseTimer={setPauseTimer}
                        setCurrentQuestion={setCurrentQuestion}
                        currentQuestion={currentQuestion}
                    />
                </QuizBox>
            )}
        </QuizPage>
    )
}

export default Quiz
