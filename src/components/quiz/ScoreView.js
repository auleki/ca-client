import React, { useEffect } from 'react'
import { HiOutlineArrowLeftOnRectangle } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { saveQuizWinner, updateUser } from '../../services/api'
import { FButton, QuizBox } from '../../styles/components.styled'

const ScoreView = ({ score, restart, user, resetTimer, setIsActive }) => {
    useEffect(() => {
        // console.log('Loaded User: ', user);

        const saveScore = async () => {
            if (score === 10) {
                await saveQuizWinner(user)
            }
            // console.table(`User is being updated with ${score}...`)
            const scoreData = {
                updateData: { scores: score },
                action: 'UPDATE_SCORE'
            }
            const response = await updateUser(scoreData, user.username)
            console.table('Response', response)
        }

        saveScore()

        // setIsActive(false)

        // resetTimer();
        // eslint-disable-next-line
    }, [])

    return (
        <QuizBox>
            {/* add a wheel that spins upon hover  */}
            <div className='score-title'>
                {/* <FButton className="rotate-180">
					<HelpIcon />
				</FButton> */}
                <div className='user-info'>
                    {/* <EmailIcon /> */}
                    <p>{user.email || 'feedthenation@gmail.com'}</p>
                </div>
                <div className='user-info'>
                    {/* <AccountBoxIcon /> */}
                    <p>
                        {user.firstName || 'Olusegun'} {user.lastName || 'Obasanjo'}
                    </p>
                </div>
            </div>
            <div className='score-display'>
                <div className='display-info'>
                    <h2>Score</h2>
                    <h3>{score || 9}</h3>
                    <Link to='/'>
                        <FButton>
                            <span className='span_icon rotate-180'>
                                <HiOutlineArrowLeftOnRectangle />
                            </span>
                            <span className='span_text'>Exit Quiz</span>
                        </FButton>
                    </Link>
                </div>
            </div>
        </QuizBox>
    )
}

export default ScoreView