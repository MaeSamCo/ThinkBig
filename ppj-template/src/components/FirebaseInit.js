import * as firebase from 'firebase'

let database;

let config = {
    apiKey: "AIzaSyBi2-5mgnHKpYqU_Tn3GaqRwq-NTkYWC00",
    authDomain: "maesamco.firebaseapp.com",
    databaseURL: "https://maesamco.firebaseio.com",
    projectId: "maesamco",
    storageBucket: "maesamco.appspot.com",
    messagingSenderId: "384193579415"
}

export const fire = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
 	database = firebase.database()
}

export const getFireDB = (path) => {
    return firebase.database().ref(path);
} 