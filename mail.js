const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyBM8_IQpbiXAaOpMQNV0S1H40yMIqjUQfM",
  authDomain: "review-form-8733a.firebaseapp.com",
  databaseURL: "https://review-form-8733a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "review-form-8733a",
  storageBucket: "review-form-8733a.appspot.com",
  messagingSenderId: "98529512397",
  appId: "1:98529512397:web:fb87f737e676a7018e5284"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("reviewForm");

document.getElementById("reviewForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("reviewForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
