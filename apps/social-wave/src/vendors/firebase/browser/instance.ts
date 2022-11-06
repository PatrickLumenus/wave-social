import { initializeApp, FirebaseApp } from 'firebase/app';

let app: FirebaseApp|null = null;

const firebaseConfig = {
    apiKey: "AIzaSyAm-KtVfMFl50DhYg4oBcqqD716GGfMrxk",
    authDomain: "socialoc-e18cf.firebaseapp.com",
    projectId: "socialoc-e18cf",
    storageBucket: "socialoc-e18cf.appspot.com",
    messagingSenderId: "19752099412",
    appId: "1:19752099412:web:fd83796dd818a05c2a57c1",
    measurementId: "G-T4BVGWTGL5"
  };
  
export const getAppInstance = (): FirebaseApp => {
    if (!app) {
        app = initializeApp(firebaseConfig);
    }

    return app;
}