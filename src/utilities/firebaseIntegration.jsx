import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig.json";
import {getAuth,signOut} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logout = () => {
	signOut(auth);
};

export {auth,db,logout};