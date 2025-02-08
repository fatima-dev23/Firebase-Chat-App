import { getAuth, GoogleAuthProvider, signInWithPopup,  doc, setDoc, db } from "../firebase.js"

const auth = getAuth();
const googleLogin = async ()=>{
  console.log("button working");
  
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async(result) => {
        const user = result.user;
        console.log("user uid", user.uid);
        console.log(user.displayName, user.email, user.photoURL);
        
        await setDoc(doc(db, "users", user.uid), {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            userUid: user.uid
        });
        location.pathname = "./index.html"
        console.log("data added to firestore");
      
      }).catch((error) => {
        console.log("error.code",error.code);
      });
} 
document.getElementById('googleLogin').addEventListener("click", googleLogin)