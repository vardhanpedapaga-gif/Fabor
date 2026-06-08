alert("APPJS LOADED");
const firebaseConfig = {
  apiKey: "AIzaSyClKgfxNaBxpu5GH7PBe0sRTy5HKuN84Lk",
  authDomain: "fabor-1503.firebaseapp.com",
  projectId: "fabor-1503",
  storageBucket: "fabor-1503.firebasestorage.app",
  messagingSenderId: "398403185616",
  appId: "1:398403185616:web:bcf1d7e8ddb767cfd6a7d5"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {

if(user){

alert("Welcome " + user.displayName);

}

});

function login() {

  const provider =
  new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithRedirect(provider);

}
