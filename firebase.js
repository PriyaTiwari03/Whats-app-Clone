import firebase from 'firebase';
const firebaseConfig = {
 apiKey: "AIzaSyCkZuVwaQ_OJ_qXPTPcVXqIi8mjheVZRuE",
 authDomain: "whatsapp-demo-6dcc7.firebaseapp.com",
 projectId: "whatsapp-demo-6dcc7",
 storageBucket: "whatsapp-demo-6dcc7.appspot.com",
 messagingSenderId: "380294411703",
 appId: "1:380294411703:web:4c0d70382c8f5f8ce76432"
};

// cheach app is already initialized or not
const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
