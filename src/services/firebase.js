// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getDocs,
  getFirestore,
  collection,
  query,
  orderBy,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSENGER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize collection data fetching
export const fetchCollectionData = async (collectionName) => {
  try {
    let docsQuery;

    if (collectionName === "Experiences") {
      docsQuery = query(collection(db, collectionName), orderBy("order"));
    } else {
      docsQuery = collection(db, collectionName);
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
    const querySnapshot = await getDocs(docsQuery);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data from Firestore", error);
    throw error;
  }
};
