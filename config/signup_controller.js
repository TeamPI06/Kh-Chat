/**
 * Created by sarthyrith on 6/21/17.
 */
function signupwithemail() {
    var email = $("#email").val();
    var password = $("#password").val();
    var user = null;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(response) {
            sendEmailVerification();
//                createUser(response);
        }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error " + errorCode + " : " + errorMessage);
        ifSuccess = false;
    });
}

function signinwithgoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
//            createUser(user);
//            alert("My id is " + user.uid);
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });

}

function signinwithemail() {
    var email = $("#email").val();
    var password = $("#password").val();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error " + errorCode + " : " + errorMessage);
    });

}

function sendEmailVerification() {
    firebase.auth().currentUser.sendEmailVerification().then(function() {
        alert('Email Verification Sent!');
    }, function(error) {
        // An error happened.
    });
}

function sendPasswordReset() {
    var email = $("#email").val();
    firebase.auth().sendPasswordResetEmail(email).then(function() {
        alert('Password Reset Email Sent!');
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error " + errorCode + " : " + errorMessage);
    });
}