import { BaseException } from "@swindle/core";

export class FirebaseException extends BaseException {
    constructor(message = "Firebase Error") {
        super(message);
    }
}

export class FirebaseAuthException extends FirebaseException {
    constructor(message = "Authentication Error") {
        super(message)
    }
}