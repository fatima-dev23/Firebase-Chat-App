import {db, collection, query, where, onSnapshot, addDoc,getAuth, serverTimestamp, onAuthStateChanged  } from "../firebase.js"

const auth = getAuth()
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in:", user);
  } else {
    console.log("No user is logged in");
  }
});
console.log( "auth.currentUser", auth.uid);

window.sendMessage = async function(uid) {
  let userMessage = document.getElementById('userMessage').value;
  const user = auth.currentUser; // Get the current user inside the function
  
  if (!user) {
    console.log("User not authenticated, cannot send message.");
    return;
  }

  const docRef = await addDoc(collection(db, "message"), {
    message: userMessage,
    serverTimeStamp: serverTimestamp(),
    senderId: user.uid, // Using user.uid instead of auth.currentUser.uid
    receiver: uid,
  });

  console.log("Message sent with ID:", docRef.id);
};



// messages
window.messages = function(name, uid) {
    console.log("User name:", name, uid);
    let chatScreen = document.getElementById("chatScreen")
    console.log("chatScreen", chatScreen);
    chatScreen.innerHTML = `<div class='chat-screen'>
     <div class="relative h-screen p-4 w-full">
        <div>${name}</div>
        <div class="absolute flex bottom-0 w-96 p-5">
          <input id="userMessage" type="text" class="border border-2 w-full p-1 rounded-lg border-black placeholder:text-black" placeholder="Enter your message"/>
          <button onclick="sendMessage('${uid}')" class="p-2 text-white w-full rounded-xl bg-black">Send Message</button>
        </div>
     </div>
    </div>`
    
};
const usersSidebar = () =>{
   let usersSidebar = document.getElementById('usersSidebar')

    const q = collection(db, "users");
    onSnapshot(q, (querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data().name);
        //   usersSidebar.innerHTML+=`<h1 class="text-white">Chats</h1>`;
          usersSidebar.innerHTML += `<ul class="text-center"><li class="text-white px-5 w-full h-full border-t-2 border-b-2 border-zinc-700 py-4 hover:bg-zinc-800 cursor-pointer" onclick="messages('${doc.data().name}',' ${doc.data().userUid}')">${doc.data().name}</li></ul>`
      });
    });
}


usersSidebar()

