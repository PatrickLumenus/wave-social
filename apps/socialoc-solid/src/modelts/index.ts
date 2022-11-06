import { DateTime } from '@swindle/core';


export interface User {
    id: string;
    name: string;
    image?: URL;
}

export interface AuthenticatedUser extends User {}

export interface WaveDetails {
    opened: DateTime;
    closed: DateTime,
    initiator: {
        user: User;
        message?: string
    },
    target: User,
    response?: {
        message: string;
    }
}
