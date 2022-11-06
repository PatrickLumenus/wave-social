import { 
    getAuth,
    signInWithRedirect,
    TwitterAuthProvider
} from 'firebase/auth';
import { AuthenticatedUser } from '../../modelts';
import { getAppInstance } from './app';

/**
 * redirectToTwitterLogin()
 * 
 * initiates the Twitter Login process.
 */

export const loginWithTwitter = () => {
    console.log('Executing redirectToTwitterLogin()')
    const twitterProvider = new TwitterAuthProvider();
    twitterProvider.setCustomParameters({
        'lang': 'es'
    });
    const auth = getAuth(getAppInstance());
    signInWithRedirect(auth, twitterProvider);
}

export const onAuthStateChange = (listener: (user: AuthenticatedUser|null) => void) => {
    const auth = getAuth(getAppInstance());
    auth.onAuthStateChanged(result => {
        const update = result ? {
            id: result.uid,
            name: result.displayName,
            image: result.photoURL ? new URL(result.photoURL) : null
        } as AuthenticatedUser : null;
        listener(update);
    })
}