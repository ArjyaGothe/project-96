
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCOEEOv39NWv01WFOIRRGYXBHqoDNAxYkQ",
    authDomain: "project-94-dac71.firebaseapp.com",
    projectId: "project-94-dac71",
    storageBucket: "project-94-dac71.appspot.com",
    messagingSenderId: "719921732350",
    appId: "1:719921732350:web:f6409738be2c17d09d23af",
    measurementId: "G-9MN8DELS68"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   room_name = localStorage.getItem("Roomname");
   user_name = localStorage.getItem("Username");

   console.log("room name "+room_name);
   console.log("user name "+user_name);

   function logout() {
         localStorage.removeItem("Roomname");
         localStorage.removeItem("Username");
         window.location.replace("index.html");
   }
   function send() {
         msg = document.getElementById("msg").value;
         console.log("Message "+msg);
         firebase.database().ref(room_name).push({
               name:user_name,
               message:msg,
               like:0,
               dislike:0
         });
         document.getElementById("msg").value = "";
   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
//Start code
     
//End code
     } });  }); }
getData();