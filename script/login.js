import { getAuth, GoogleAuthProvider, signInWithPopup,  doc, setDoc, db } from "../firebase.js"

const auth = getAuth();
const googleLogin = async ()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async(result) => {
        const user = result.user;
        console.log("user signin", user.uid, user);
        console.log(user.displayName, user.email, user.photoURL);
        
        await setDoc(doc(db, "users", user.uid), {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        });
        location.pathname = "./index.html"
        console.log("data added to firestore");
      
      }).catch((error) => {
        console.log("error.code",error.code);
      });
} 
document.getElementById('googleLogin').addEventListener("click", googleLogin)