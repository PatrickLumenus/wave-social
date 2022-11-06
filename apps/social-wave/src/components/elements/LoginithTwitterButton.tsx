import type { Component } from 'solid-js';
import { redirectToTwitterLogin } from '../../vendors/firebase/browser/auth';

const LoginWithTwitterButton: Component = () => {
    return <button onClick={redirectToTwitterLogin}>
        Login with Twitter
    </button>
}

export default LoginWithTwitterButton;