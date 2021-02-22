//reference to auth. gives us access to auth methods
const auth = firebase.auth();

//firebase auth google provider instance
const provider = new firebase.auth.GoogleAuthProvider();

//triggers sign in/out
//will show google auth pop up
signInBtn.onlick = () => auth.signInWithPopup(provider);
signOutBtn.onlick = () => auth.signout();


//tracks any changes in auth state - sign out/in
//makes changes to the UI
auth.onAuthStateChanged(user => {
  if (user) {
    //signed in
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `Hello ${user.displayName}! UserID: ${user.id}`
  } else {
    //not signed in
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetail.innerHTML = "";
  }
});




firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log('signed in');
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });