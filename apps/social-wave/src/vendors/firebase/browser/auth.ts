import { 
    getAuth,
    getRedirectResult,
    signInWithRedirect,
    TwitterAuthProvider
} from 'firebase/auth';
import type { UserInfo } from '../../../models';
import { FirebaseAuthException } from '../errors';
import { getAppInstance } from './instance';

/**
 * redirectToTwitterLogin()
 * 
 * initiates the Twitter Login process.
 */

export const redirectToTwitterLogin = () => {
    console.log('Executing redirectToTwitterLogin()')
    const twitterProvider = new TwitterAuthProvider();
    twitterProvider.setCustomParameters({
        'lang': 'es'
    });
    const auth = getAuth(getAppInstance());
    signInWithRedirect(auth, twitterProvider);
}

/**
 * getAuthenticatedUser()
 * 
 * Gets the authenticated user.
 * @returns The UserInfo of the authenticated user.
 * @throws FirebaseAuthException when we cannot get the user, probably because they are not authenticated.
 */

export const getAuthenticatedUser = async (): Promise<UserInfo> => {
    console.log('Executing getAuthenticatedUser()')
    const auth = getAuth(getAppInstance());

    try {
        const user = await getRedirectResult(auth);
        return {
            id: user!.user.uid,
            name: user!.user.displayName!,
            photo: new URL(user!.user.photoURL!)
        };
    }
    catch(e) {
        // not authorized.
        throw new FirebaseAuthException();
    }
}