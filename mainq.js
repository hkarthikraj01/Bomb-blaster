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
var TournamentSQUADRef = firebase.database().ref('TournamentSQUAD');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var match = getInputVal('match');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var tm1 = getInputVal('tm1');
  var tm2 = getInputVal('tm2');
  var tm3 = getInputVal('tm3');
  var tm4 = getInputVal('tm4');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, match, email, phone, tm1, tm2, tm3, tm4, message);

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
function saveMessage(name, match, email, phone, tm1, tm2, tm3, tm4, message){
  var newMessageRef = TournamentSQUADRef.push();
   newMessageRef.set({
    name: name,
    match:match,
    email:email,
    phone:phone,
    tm1:tm1,
    tm2:tm2,
    tm3:tm3,
    tm4:tm4,
    message:message
  });
}