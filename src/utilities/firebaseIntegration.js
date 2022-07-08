import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, deleteDoc, collection, getDocs, getDoc, updateDoc, setDoc, doc } from "firebase/firestore";
const app = initializeApp({
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
	measurementId: import.meta.env.VITE_MEASUREMENT_ID
});
const auth = getAuth(app);
const db = getFirestore(app);

const logout = () => {
	signOut(auth);
};

const addDocument = async (bike) => {
	const newBike = await setDoc(doc(db, "bikes"), bike);
	return newBike;
}

const deleteDocument = async (index) => {
	await deleteDoc(doc(db, "bikes", index));
}

const updateDocument = async (id, data) => {
	const bikeRef = doc(db, "bikes", id);
	await updateDoc(bikeRef, { ...data });
}

const listDocuments = async () => {
	const snapshot = await getDocs(collection(db, "bikes"));
	return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

const getDocument = async (id) => {
	const docRef = doc(db, "bikes", id);
	const docSnap = await getDoc(docRef);
	if (!docSnap.exists()) {
		return null;
	}
	return docSnap.data();
}


export { auth, db, addDocument, deleteDoc, listDocuments, updateDocument, getDocument, deleteDocument, logout };