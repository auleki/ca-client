import { useState } from "react"
import SubscribeForm from "./SubscribeForm"
import SubscribeSuccess from "./SubscribeSuccess"

const Subscribe = () => {
    const [subscribed, setSubscribed] = useState(false)
    return (
        <>
            {subscribed ? (
                <SubscribeSuccess />
            ) : (
                <SubscribeForm setSubscribed={setSubscribed} subscribed={subscribed} />
            )}
        </>
    )
}
export default Subscribe
