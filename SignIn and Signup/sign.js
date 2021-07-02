const auth = firebase.auth();

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click',() => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click',() => {
	container.classList.remove("right-panel-active");
});

//signing up and signing in
const signUpBtn=document.getElementById("signUpBtn");
const signInBtn=document.getElementById("signInBtn");
const signOutBtn=document.getElementById("signOutBtn");

(function(){
    signInBtn.addEventListener('click',e=>{
        var signInEmail= document.getElementById("signInEmail");
        var signInPassword= document.getElementById("signInPassword");
        const promise =auth.signInWithEmailAndPassword(signInEmail.value,signInPassword.value);
        promise
        .then((userCredential)=>{
            console.log(userCredential.user);
        })
        .catch(e=> alert(e.message));
        alert(`Signed In ${signInEmail.value}`);
    });
    
    signUpBtn.addEventListener("click",e=>{
        var email= document.getElementById("email");
    var password= document.getElementById("password");
    var name= document.getElementById("name");
    const promise =auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e=> alert(e.message));
    alert(`signed up ${name.value} with ${email.value}`);
    });



})();

function signOut(){
    auth.signOut();
    alert("signed out");
    window.open('./sign.html','_self');
}

auth.onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
        window.open('/SignIn and Signup/signfront.html','_self');
        alert("Logged In "+firebaseUser.email);
}
else
{    
    alert("Logged Out");
 }
});