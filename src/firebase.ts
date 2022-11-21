import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDeTcNQZ0jYJdoQXBUeTTr-m1DDethEp6M",
  authDomain: "netflix-clone-8caaa.firebaseapp.com",
  projectId: "netflix-clone-8caaa",
  storageBucket: "netflix-clone-8caaa.appspot.com",
  messagingSenderId: "899697805091",
  appId: "1:899697805091:web:d647edb3c1d5828f68ee96"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
