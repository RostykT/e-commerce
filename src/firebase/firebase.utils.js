import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyBhbvDo49TX2yebqlVXxW_MXkqmhNF3AFc",
	authDomain: "e-commerce-3347f.firebaseapp.com",
	projectId: "e-commerce-3347f",
	storageBucket: "e-commerce-3347f.appspot.com",
	messagingSenderId: "398472440920",
	appId: "1:398472440920:web:a95be2ea16c49b07c3ae2d",
	measurementId: "G-DPZQ8KT7WD",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
