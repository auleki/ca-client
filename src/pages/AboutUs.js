import React from 'react' // useState // useLayoutEffect, // forwardRef, // useEffect, // useRef,
import {
    Container,
    // Paragraph,
    // SubTitle,
    Title
    // Button,
    // Input,
    // RowLayout
} from '../styles/components.styled'
import { fonts } from '../utils/constants'
import { motion } from 'framer-motion'
// import MissionIcon from '../../src/assets/target.png'
// import BalanceIcon from '../../src/assets/balance.png'
// import CultureIcon from '../../src/assets/culture-icon.png'
// import CustomerCareIcon from '../../src/assets/support.png'

// const CountdownTimer = () => {
//   const [num, setNum] = useState(100)
//   const [pause, setPause] = useState(false)

//   const intervalRef = useRef()

//   const decreaseNum = () => setNum(prev => prev - 1)

//   function handleClick () {
//     if (!pause) {
//       clearInterval(intervalRef.current)
//     } else {
//       intervalRef.current = setInterval(decreaseNum, 1000)
//     }
//     setPause(prev => !prev)
//   }

//   useEffect(() => {
//     setPause(false)
//     intervalRef.current = setInterval(decreaseNum, 1000)
//     return () => clearInterval(intervalRef.current)
//   }, [])

//   return (
//     <div>
//       <h2>{num}</h2>
//       <button primary onClick={handleClick}>
//         {pause ? 'Run' : 'Pause'}
//       </button>
//     </div>
//   )
// }

const AboutUs = () => {
    // CHECK ADIGS IS UNDERPINNED BY THREE PRINCIPLES

    return (
        <Container>
            <div className='header'>
                <Title bold textFont={fonts.main} uppercase size={4}>
                    About Us
                </Title>
            </div>

            <div className='aboutUs'>
                <motion.div
                    className='content'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className='title'>
                        <img
                            className='titleIcon'
                            src={"https://res.cloudinary.com/dyj6pqx6d/image/upload/v1666798885/checkadigs/target_g8lanv.png"} alt='icon' />
                        <h2>OUR MISSION</h2>
                        {/* <h2>FROM THE EVERYDAY TO THE EXTRAORDINARY, WE BELIEVE IN DESIGNING THE FINEST CLOTHES TO EQUIP YOUR JOURNEY.</h2> */}
                    </div>

                    <p>
                        Welcome to Check Adigs, your number one source for purchasing
                        quality clothes online. We are dedicated to giving you the very best
                        and what shall last bundled with exceptional customer service and
                        uniqueness. Founded in 2020 by Adigun Kehinde and his founding
                        member Omoya Oluwatimilehin. Check Adigs has come a long way from
                        it’s humble beginnings in Lagos, Nigeria. When Kehinde and
                        Oluwatimilehin started out, their passion for creativity led to
                        designs that created bonds between them and their customers.
                    </p>
                    <p>
                        At Check Adigs we give you a sense of total package with highly
                        rated quality, superior and excellent products. We now serve
                        customers around the world, continuing to make our customers feel
                        confident, attractive and futuristic. Join the future, place your
                        order today!
                    </p>
                </motion.div>
                <motion.section
                    className='more'
                    initial={{ y: '100vh' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className='title'>
                        <img className='titleIcon' src={"https://res.cloudinary.com/dyj6pqx6d/image/upload/v1666798809/checkadigs/culture-icon_dyxgq2.png"} alt='' />
                        <h2>PRODUCTS AND CULTURES</h2>
                    </div>
                    <p>
                        Check Adigs offers a <span className='special'>unisex</span>{' '}
                        clothing line that is exquisite and sophisticated, as well as
                        practical and wearable. We offer a full range collection where each
                        piece is special individually and provides chic and effortless
                        style. We create inimitable pieces that can be worn for years,
                        combined with basics or trends. Our primary concern is ensuring our
                        customers are happy with the style and fit of their purchase. We
                        provide products tailored to all shapes and styles. Every piece in
                        our collection is made to serve as your trusted companion through a
                        lifetime of experience.
                    </p>
                </motion.section>
                {/* NEW INFO  */}
                <motion.section
                    className='more'
                    initial={{ y: '100vh' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className='title'>
                        <img className='titleIcon' src={"https://res.cloudinary.com/dyj6pqx6d/image/upload/v1666798785/checkadigs/balance_oniebr.png"} alt='' />
                        <h2>CHECK ADIGS IS UNDERPINNED BY THREE PRINCIPLES</h2>
                    </div>
                    <p>
                        <strong>Styles</strong>: As we recognise the need for styles that
                        are always available, we offer a large variety of styles that are
                        standard and continually available. We cater for clients who require
                        a customized option designed for their corporate identity
                        requirement.
                    </p>
                    <p>
                        <strong>Fabrics</strong>: Our fabrics are of premium blends which
                        are durable and appropriate for everyday use. We use beautifully
                        coloured natural fabrics with wrinkle resistant qualities. They are
                        machine washable and easy to care for.
                    </p>
                </motion.section>
                <motion.section
                    className='more'
                    initial={{ y: '100vh' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className='title'>
                        <img className='titleIcon' src={"https://res.cloudinary.com/dyj6pqx6d/image/upload/v1666798816/checkadigs/support_wizt1r.png"} alt='' />
                        <h2>CUSTOMER RELATIONSHIP</h2>
                    </div>

                    <p>
                        Check Adigs put customers first, we have a team that monitors latest
                        designs, trends and activities we put these occurrence together to
                        give you the best trends and outfit, our customer care center is one
                        of the best handling customer complaints are our first priority, in
                        as much as we try to avoid complaints when we get them we act on
                        them swiftly to make our relationships the best.
                    </p>
                </motion.section>
            </div>
        </Container>
    )
}

export default AboutUs
