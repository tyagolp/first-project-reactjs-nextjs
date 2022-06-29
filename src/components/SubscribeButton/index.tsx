import { useSession, signIn } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
    priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {

    const { data: session } = useSession()

    async function handleSubscriber() {
        if (!session) {
            signIn('github')
            return;
        }

        try {
            const { data } = await api.post('/subscribe')
            const { sessionId } = data

            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({ sessionId })
        } catch (err) {
            alert(err.message)
        }


    }

    return (
        <button
            type="button"
            className={styles.subcribeButton}
            onClick={handleSubscriber}
        >
            Subscribe now
        </button>
    )
}