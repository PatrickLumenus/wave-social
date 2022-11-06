import { FirebaseException } from './firebase.exception';

export class FirebaseAuthException extends FirebaseException {

    constructor(message: string = "Auth Exception") {
        super(message);
    }
}