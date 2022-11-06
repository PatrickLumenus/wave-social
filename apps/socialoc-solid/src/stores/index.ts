import { createStore } from 'solid-js/store';
import { AuthenticatedUser, WaveDetails } from '../modelts';

export const [ authStore, setAuthStore] = createStore({
    user: null as AuthenticatedUser | null,
    openWaveRequests: [] as WaveDetails[],

    get isAuthenticated(): boolean {
        return this.user !== null;
    },

    get hasWaveRequests(): boolean {
        return this.openWaveRequests.length > 0;
    }
});

export const [geolocation, setGeolocation ] = createStore({
    long: 0,
    lat: 0,
    valid: true
})