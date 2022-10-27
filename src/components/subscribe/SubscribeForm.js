import { useState } from "react"
import { addSubscriber } from "../../services/api"
import { ToastContainer } from 'react-toastify'
import { HiEnvelope, HiPaperAirplane } from 'react-icons/hi2'

const SubscribeForm = ({ setSubscribed, subscribed }) => {
    const [email, setEmail] = useState('')

    const saveSubscriber = async e => {
        e.preventDefault()
        try {
            const subscriberInfo = {
                source: 'homepageForm',
                email
            }
            const savedSubscriber = await addSubscriber(subscriberInfo)
            console.log('User to be added: ', savedSubscriber)
            setSubscribed(!subscribed)
        } catch (error) { }
    }

    const handleInput = e => setEmail(e.target.value)

    return (
        <div className='newsletter wow fadeInRightBig'>
            <ToastContainer position='bottom-center' />
            <div className='subscribe_title'>
                <h3 className='light'>Subscribe to our mailing list</h3>
            </div>
            <div className='subscribe'>
                <form id='subscribeForm' onSubmit={saveSubscriber}>
                    <div className='form_group'>
                        <span className='placeholder'>
                            <HiEnvelope />
                        </span>
                        <input
                            type='email'
                            value={email}
                            onChange={handleInput}
                            required
                            placeholder='type in your email address'
                            autoComplete='off'
                        />
                        <button type='submit' id='subscribeBtn' className='send'>
                            {/* <ion-icon name="enter-outline" /> */}
                            <HiPaperAirplane />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SubscribeForm