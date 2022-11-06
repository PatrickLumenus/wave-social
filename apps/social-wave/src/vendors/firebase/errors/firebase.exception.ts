

export class FirebaseException extends Error {
    constructor(message: string = "Firebase Exception") {
        super(message);
    }
}