import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyBi2-5mgnHKpYqU_Tn3GaqRwq-NTkYWC00',
  authDomain: 'maesamco.firebaseapp.com',
  databaseURL: 'https://maesamco.firebaseio.com',
  projectId: 'maesamco',
  storageBucket: 'maesamco.appspot.com',
  messagingSenderId: '384193579415'
}
firebase.initializeApp(config)
export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export default firebase
