import firebase from 'firebase';

// const config = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DB_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
// };

// Initialize Firebase
const config = {
    apiKey: "AIzaSyA_8ns8vBQdpI3qpfXz4JHZX-JI_ICl_wc",
    authDomain: "vue-firebase-007.firebaseapp.com",
    databaseURL: "https://vue-firebase-007.firebaseio.com",
    projectId: "vue-firebase-007",
    storageBucket: "vue-firebase-007.appspot.com",
    messagingSenderId: "74691629876"
};

firebase.initializeApp(config);