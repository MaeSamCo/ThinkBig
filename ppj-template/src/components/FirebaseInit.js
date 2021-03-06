import * as firebase from 'firebase'

let database

let config = {
  apiKey: '',
  authDomain: 'maesamco.firebaseapp.com',
  databaseURL: 'https://maesamco.firebaseio.com',
  projectId: 'maesamco',
  storageBucket: 'maesamco.appspot.com',
  messagingSenderId: ''
}

export const fire = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
 	database = firebase.database()
}

export const getFireDB = (path) => {
  return firebase.database().ref(path)
}

export function putPlacetoDB (path, name, c, mp, dc, rt, lo,s) {
  return firebase.database().ref(path).set({
    placename: name,
    classify: c,
    maxpeople: mp,
    description: dc,
    recommendtime: rt,
    location: lo,
    star: s
  })
}
