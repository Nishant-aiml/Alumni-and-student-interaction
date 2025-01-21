import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAzIL67LNf1D2uSuUVV1t6aQYqGl0Kzr8s",
  authDomain: "hackathon-9fd26.firebaseapp.com",
  projectId: "hackathon-9fd26",
  storageBucket: "hackathon-9fd26.firebasestorage.app",
  messagingSenderId: "337657873016",
  appId: "1:337657873016:web:30b5325345fb141604a38d",
  measurementId: "G-VKZJ50D0XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Enable emulators in development
if (import.meta.env.DEV) {
  // Uncomment these lines to use Firebase emulators
  // connectAuthEmulator(auth, 'http://localhost:9099');
  // connectFirestoreEmulator(db, 'localhost', 8080);
}

export default app;
