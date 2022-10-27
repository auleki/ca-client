import React, { useEffect, useState } from "react"
import { toast, ToastContainer } from 'react-toastify'
import { fetchUser, updateUser } from "../../services/api"
import { AuthPage, FButton, Input, SubTitle } from "../../styles/components.styled"
import { Link } from 'react-router-dom'

const LoginView = ({
    loginOrRegister,
    setUser,
    setOldUser,
    setRegister,
    user,
    setCanPlay,
    canPlay
}) => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const onUserInput = e => setEmail(e.target.value)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const errorAlert = (msg, type) => {
        switch (type) {
            case 'info':
                return toast.info(msg)
            case 'error':
                return toast.error(msg)
            default:
                return toast.done(msg)
        }
    }

    const findDayDifference = date => {
        let currentDate = new Date()
        // console.log('Current Date: ', typeof currentDate.getTime(), currentDate);
        // let lastPlayed = Number(date);
        // let lastPlayed = Number(date);
        let lastPlayed = new Date(date)
        // console.log('Last Date: ', typeof lastPlayed, lastPlayed);
        let differenceInTime = currentDate.getTime() - Number(lastPlayed)
        let differenceInDays = differenceInTime / (1000 * 3600 * 24)
        // console.log('DAY DIFFERENCE: ', differenceInDays);
        if (differenceInDays < 1) {
            return false
        }
        return true
    }

    const loginUser = async e => {
        try {
            e.preventDefault()
            setLoading(true)
            const fetchedUser = await fetchUser(email)
            // console.log('FETCHED USER:', fetchedUser);
            setUser(fetchedUser)
            const userCanPlay = findDayDifference(fetchedUser.lastPlayed)
            // let userCanPlay = true

            if (userCanPlay) {
                // console.log('Updating last saved')
                setCanPlay(true)
                const lastPlayedUpdate = {
                    updateData: { lastPlayed: new Date() },
                    action: 'UPDATE_LASTPLAYED'
                }
                // eslint-disable-next-line
                const lastPlayedResponse = await updateUser(
                    lastPlayedUpdate,
                    fetchedUser.username
                )
                setOldUser(false)
                setRegister(false)
                // console.log('LAST PLAYED RESPONSE', lastPlayedResponse);
            } else {
                setCanPlay(false)
            }
            //! CAUSED A MEMORY LEAK
            // setLoading(false);
        } catch (error) {
            errorAlert(`${email} is not registered with us`, 'error')
            setLoading(false)
        }
    }

    return (
        <AuthPage>
            <div className='start-game login'>
                <ToastContainer position='bottom-center' />
                <form onSubmit={loginUser}>
                    <div className='form_header'>
                        <SubTitle size={2}>Welcome back,</SubTitle>
                        <SubTitle fontColor='#999999'>
                            Enter your username to start the quiz
                        </SubTitle>
                    </div>

                    {/* padding added in css !styled-comp */}
                    <div className='mobile_raise'>
                        <Input
                            autoFocus
                            type='text'
                            placeholder='@'
                            onChange={onUserInput}
                            value={email}
                            required
                        />
                        <div className='quiz_actions'>
                            <Link
                                className='link'
                                onClick={() => loginOrRegister('register')}
                            >
                                First time playing? Register
                            </Link>
                        </div>
                        <FButton primary>
                            {loading ? (
                                // <CircularProgress size={23} color='inherit' />
                                <span>Loading...</span>
                            ) : (
                                'Start Quiz'
                            )}
                        </FButton>
                    </div>
                </form>
            </div>
        </AuthPage>
    )
}

export default LoginView