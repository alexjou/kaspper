import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export let fireAuth;
export let fireStore;
export let persistenceProvider;
export let EmailAuthProvider;

export let FieldValue;

export const setFirebaseVariables = (config) => {
  if (config.auth) {
    fireAuth = config.auth;
  }
  if (config.store) {
    fireStore = config.store;
  }
  if (config.FieldValue) {
    FieldValue = config.FieldValue;
  }
};

const firebaseConfig = {
  apiKey: "AIzaSyDoRDnVM36CGlCcRTIWQYNpIVVqavVv9ag",
  authDomain: "kaspper-e7822.firebaseapp.com",
  projectId: "kaspper-e7822",
  storageBucket: "kaspper-e7822.appspot.com",
  messagingSenderId: "546551586923",
  appId: "1:546551586923:web:30f3974475745a9d58512e"
};

export const initializeFirebase = async () => {
  try {
    if (!firebase?.apps?.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const auth = firebase.auth();
    const firestore = firebase.firestore();

    const firebaseVariables = {
      auth: firebase.auth(),
      store: firebase.firestore(),
      FieldValue: firestore.FieldValue,
    };
    setFirebaseVariables(firebaseVariables);

    persistenceProvider = auth.Auth;
    EmailAuthProvider = auth.EmailAuthProvider;
    return true;
  } catch (e) {
    console.warn("error: ", e.message); // eslint-disable-line
    return false;
  }
};

// TODO: solve firebase
