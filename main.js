// Initialize Firebase (ADD  YOUR OWN DATA)
  var firebaseConfig = {
    apiKey: "AIzaSyA-REIZa2l9qWOaHKXmRhHdnw4g3RYy-VQ",
    authDomain: "contact-form-73a33.firebaseapp.com",
    databaseURL: "https://contact-form-73a33.firebaseio.com",
    projectId: "contact-form-73a33",
    storageBucket: "contact-form-73a33.appspot.com",
    messagingSenderId: "560391989288",
    appId: "1:560391989288:web:5a8059fba3efd0c1c6ad1d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}
const list = document querySelector("#list");
db.collection("Contact form").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      list.innerHTML += "<p>"+ doc.data().name +"</p>" 
    });
});
