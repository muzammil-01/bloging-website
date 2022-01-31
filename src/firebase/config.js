import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAmtQ-cnZB4up2pwU8s2xbQio2nv-HtX6c",
  authDomain: "blogwebsite-5f3a1.firebaseapp.com",
  projectId: "blogwebsite-5f3a1",
  storageBucket: "blogwebsite-5f3a1.appspot.com",
  messagingSenderId: "1101932506",
  appId: "1:1101932506:web:cae2e11299bd15ecd8c2e3"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()


// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth,projectStorage ,timestamp }