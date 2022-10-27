import React, { useEffect, useState } from "react"
import { addSubscriber, saveQuizUser } from "../../services/api"
import { AuthPage, FButton, Input, SubTitle } from "../../styles/components.styled"
import { toast, ToastContainer } from 'react-toastify'
import { Link } from "react-router-dom"

const RegisterView = ({
    beginQuiz,
    setUser,
    user,
    loginOrRegister,
    setOldUser,
    setRegister
}) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [joinMailingList, setJoinMailingList] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onEmailInput = e => {
        setEmail(e.target.value)
    }

    const onUsernameInput = e => {
        setUsername(e.target.value)
    }

    const onLastName = e => {
        setLastName(e.target.value)
    }

    const onFirstName = e => {
        setFirstName(e.target.value)
    }

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

    const saveUser = async e => {
        e.preventDefault()
        setLoading(true)
        try {
            // console.log(`User of email: ${email} saved 🎉`);
            const quizUser = {
                firstName,
                lastName,
                username,
                email,
                toSubscribe: joinMailingList,
                scores: []
            }

            if (quizUser.toSubscribe) {
                const subscriber = { firstName, lastName, email }
                // eslint-disable-next-line
                const savedSubscriber = await addSubscriber(subscriber)
                // console.log('IS SAVING SUBSCRIBER:', savedSubscriber);
            }

            //! Check if email exists
            // const emailExists = await fetchUser(email)
            // // console.log("Value of emailExists:", emailExists)
            // if (emailExists) {
            //   throw new Error("Email already exists, try a new one")
            // }

            console.table(quizUser)
            const savedUser = await saveQuizUser(quizUser)
            console.table('SAVED USER:', savedUser)
            if (savedUser.name === 'MongoError' && savedUser.code === 11000) {
                throw new Error('Email or Username already exists, try to login')
            }

            setUser(quizUser)
            setOldUser(false)
            setRegister(false)

            // beginQuiz();
            // setOldUser(false)
            // setRegister(false)
        } catch (error) {
            // console.info('thrown into error block', error)

            // figure out why toast is not working
            // errorAlert(error, "error")
            alert(error)
            setOldUser(true)
            setRegister(false)
        }
    }

    const handleMailingList = e => setJoinMailingList(!joinMailingList)

    return (
        // <QuizPage>
        //   <QuizBox>
        <AuthPage>
            <ToastContainer position='bottom-center' />
            <div className='start-game register'>
                <div className='form_header'>
                    <SubTitle size={2} bold>
                        We need to know you,
                    </SubTitle>
                    <SubTitle fontColor='#999999'>
                        Fill the form to start the quiz
                    </SubTitle>
                </div>
                <form onSubmit={saveUser}>
                    <Input
                        autoFocus
                        type='text'
                        placeholder='First Name'
                        onChange={onFirstName}
                        value={firstName}
                        autoComplete='false'
                        required
                    />
                    <Input
                        type='text'
                        autoComplete='false'
                        placeholder='Last Name'
                        onChange={onLastName}
                        value={lastName}
                        required
                    />
                    <Input
                        type='text'
                        autoComplete='off'
                        placeholder='Username'
                        onChange={onUsernameInput}
                        value={username}
                        required
                    />
                    <Input
                        type='text'
                        autoComplete='off'
                        placeholder='Email'
                        onChange={onEmailInput}
                        value={email}
                        required
                    />
                    <div className='quiz_actions'>
                        {/* <label>Join Our Mailing List</label>
                        <Checkbox
                            checked={joinMailingList}
                            name='mailingList'
                            onChange={handleMailingList}
                        />
                        <span>Checkbox</span> */}
                        <Link
                            to='#'
                            className='link'
                            onClick={() => loginOrRegister('login')}
                        >
                            You played before? Login
                        </Link>
                    </div>

                    <FButton primary type='submit'>
                        {loading ? (
                            // <CircularProgress size={23} color='inherit' />
                            <p>loading...</p>
                        ) : (
                            'Start Quiz'
                        )}
                    </FButton>

                    {/* <FButton primary>
          Start Quiz
        </FButton> */}
                </form>
            </div>
        </AuthPage>
    )
}

export default RegisterView