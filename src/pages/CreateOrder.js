import React, { useEffect } from 'react'
import axios from 'axios'
import { useField } from '../hooks/useField'
import { useHistory } from 'react-router-dom'
import { generateId } from '../utils/idGen'
import { useSelector } from 'react-redux'
import { saveOrder } from '../services/api'
import {
    Form,
    RowLayout,
    SubTitle,
    Paragraph,
    Title,
    Input,
    Button,
    SummaryHeader,
    SummaryCard,
    FormContainer,
    FormCard,
    OrderPage
} from '../styles/components.styled'
import { styleColors } from '../utils/constants'
import { formatToComma } from '../api/operationsAPI'

const CreateOrder = () => {
    const firstName = useField('text')
    const lastName = useField('text')
    const email = useField('email')
    const phone = useField('number')
    const location = useField('text')
    const history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { cartItems, price, items } = useSelector(state => state)

    // eslint-disable-next-line
    // function openNewTab (url) {
    //   const win = window.open(url, '_blank')
    //   win.focus()
    // }

    function saveUrlToStorage(load, key) {
        if (localStorage.getItem(key)) {
            localStorage.removeItem(key)
            localStorage.setItem(key, JSON.stringify(load))
        } else {
            JSON.stringify(load)
            localStorage.setItem(key, JSON.stringify(load))
        }
    }

    const GOLDEN = process.env.REACT_APP_PS_SK

    const vuid = generateId().toUpperCase()

    const dbLoad = {
        products: cartItems,
        userInfo: {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            location: location.value
        },
        discountCode: null,
        orderNumber: `${vuid}CA`,
        price
    }

    const returnToken = token => `Bearer ${token}`

    /**
    // speak to paystack API
    const makeOrder = async e => {
        e.preventDefault()
        let tRef, paymentUrl
        // let baseUrl = process.env.REACT_APP_PS_INIT

        //TODO ADJUST PAYSTACK LOAD IN PRODUCTION
        const padPrice = parseInt(`${price}00`)
        const paystackLoad = {
            amount: padPrice,
            email: email.value.toLowerCase()
        }

        const currentToken = returnToken(GOLDEN)

        try {
            const config = {
                headers: { Authorization: currentToken }
            }
            const result = await axios.post(baseUrl, paystackLoad, config)
            paymentUrl = result.data.data.authorization_url
            tRef = result.data.data.reference
            const payInfo = { paymentUrl, tRef, orderNumber: dbLoad.orderNumber }
            if (result.status === 200) {
                // save to database
                saveOrder(dbLoad)
                    .then(data => data)
                    .catch(e => console.log(e))
                saveUrlToStorage(payInfo, 'payInfo')
                history.push('/payment')
            } else {
                console.log(
                    'Transaction failed ' + firstName.value + ' please try again'
                )
            }
        } catch (error) {
            console.log('WE HAVE A PROBLEM')
            console.log(error.message)
            console.log('-------------------')
        }
        // if transaction successful, then we save new order to database
        //else we tell user transaction failed and have them try again
        // verify transaction
    }
         */

    return (
        <OrderPage>
            <FormContainer>
                <div className='form-title'>
                    <SummaryHeader>
                        <Title color={styleColors.orange} className=''>
                            Confirm order and pay
                        </Title>
                        <Paragraph>
                            Delivery is free within Lagos, outside Lagos we handle 50% of the
                            your fee
                        </Paragraph>
                    </SummaryHeader>
                </div>
                <FormCard>
                    <Form onSubmit={() => { }}>
                        <SubTitle uppercase>PAYMENT INFO</SubTitle>
                        <RowLayout>
                            <Input
                                placeholder='First Name'
                                onChange={firstName.onChange}
                                value={firstName.value}
                                required
                            />
                            <Input
                                placeholder='Last Name'
                                onChange={lastName.onChange}
                                value={lastName.value}
                                required
                            />
                        </RowLayout>

                        <Input
                            placeholder='Email'
                            onChange={email.onChange}
                            value={email.value}
                            required
                        />

                        <Input
                            placeholder='Phone Number'
                            onChange={phone.onChange}
                            value={phone.value}
                            required
                        />

                        <Input
                            placeholder='Location'
                            onChange={location.onChange}
                            value={location.value}
                            required
                        />

                        {/* <div> */}
                        <Button primary>Pay for order</Button>
                        {/* </div> */}
                    </Form>

                    <SummaryCard>
                        <h3>You are to pay</h3>
                        <p className='totalPrice'>
                            <span>N</span>
                            {formatToComma(price)}
                        </p>
                        <p className='info'>You have selected {items} product(s)</p>
                    </SummaryCard>
                </FormCard>
            </FormContainer>
        </OrderPage>
    )
}

export default CreateOrder
