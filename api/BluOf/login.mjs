import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.apiFirebaseKey,
  authDomain: process.env.firebaseAuthDomain,
  projectId: process.env.projectIdFirebase,
  storageBucket: process.env.sbFirebase,
  messagingSenderId: process.env.msiFB,
  appId: process.env.appIdFB
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
