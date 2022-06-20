import styles from './styles.module.scss';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import { signIn, useSession } from 'next-auth/react';

export function SignInButton() {

    const [session] = useSession()

    return session ? (
        <button type='button' className={styles.signInButton}>
            <FaGithub color="#04d361" />
            Sign in with Github
            <FiX color="#737380" className={styles.closeIcon} />
        </ button>
    ) :
        (
            <button
                onClick={() => { signIn('github') }}
                type='button'
                className={styles.signInButton}>
                <FaGithub color="#eba417"
                />
                Sign in with Github
            </ button>

        )
}