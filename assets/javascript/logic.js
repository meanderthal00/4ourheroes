// This is for the Parallax effect

$(document).ready(function(){

  // signout function
  $("#logOutBtn").on("click", function (event) {
    firebase.auth().signOut().then(function () {
        console.log("User has signed out");
    }).catch(function (error) {
        // An error happened.
    });
  
    // var userInput = //the actual interests of the user from the profile page. Used to search meetups
    // var userZip = //zipcode from profile page. used to search meetups
    //when user is created run this ajax request and store the latitude and longitude
var userLat=0;
var userLong=0;
var token="";
    $.ajax({
      url: "https://maps.googleapis.com/maps/api/geocode/json",
      method: 'GET',
      data:{
        address:"32812",
        key:"AIzaSyDbO-ivrJFAH2KzMeRPuVOemHCxDqL3guQ"
      }
    }).done(function(response){
    
      console.log(response.results[0].geometry.location.lat);
      console.log(response.results[0].geometry.location.lng)
      userLat=response.results[0].geometry.location.lat;
      userLong=response.results[0].geometry.location.lng;
      
    });

    $("button").on("click", function(){
      console.log("button pressed");
      window.location.replace("https://secure.meetup.com/oauth2/authorize?client_id=uslukvp5bbuco9nni5lgm900av&response_type=token&redirect_uri=https://meanderthal00.github.io/vetransConnect/");
      token = window.location.href.hash();
      console.log(token);
    });

  // ajax function call for landing page ... meet-ups
    $.ajax({
      url: "https://api.meetup.com/find/upcoming_events",
      method: 'GET',
      data:{
        // page: 5,
        // text:"jogging",
        // lat:userLat,
        // lon:userLong,
        access_token:`{${token}}`,
        key: "5a1b20747e54172335c4d412b296823",
        sign:"true"
      }
    }).done(function(response){
      console.log(response);
    });
  });
    //ajax function for usajobs

    //usajobs requires the use of a function 'require' but this is not in the usual jQuery library
    //I found it in something called RequireJS for loading files and modules
    //Am I on the right track? Do I need to add that as a link to my html?
//     var request = require('request');

//     request({
//       url:"https://data.usajobs.gov/api/search?JobCategoryCode=2210",
//       method: 'GET',
//       headers:{
//         Host:'data.usajobs.gov',
//         'User-Agent':'alexarobinson19@gmail.com',
//         'Authorization-Key':"hIa5Qx84CEfa6bI3BB2IVTBA30EYEYetV78R14xSuu4="

//         //parameters to search:
//         // Keyword:
//         //LocationName:
//         //DatePosted:30

//       }
//   }), function(error, response, body) {      
//     var data = JSON.parse(body);  
// }.done(function(response){
//       console.log(response);
//       console.log(response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionTitle);
//       console.log(response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionLocation[0].LocationName);
//       console.log(response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionFormattedDescription[0].Content);
//       console.log(response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionURI);
//       console.log(response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionRemuneration[0].MinimumRange);
//   });
  

//   });

//     $('.parallax').parallax();
  

// //get firebase crap all sorted out
// var config = {
//   apiKey: "AIzaSyD9zUxSiYvAJ5aS_EhGLIx_MWILBbJy4TY",
//   authDomain: "project-1-530e9.firebaseapp.com",
//   databaseURL: "https://project-1-530e9.firebaseio.com",
//   projectId: "project-1-530e9",
//   storageBucket: "project-1-530e9.appspot.com",
//   messagingSenderId: "441047690869"
// };
// //start firebase
// firebase.initializeApp(config);

// var database = firebase.database();

// //login a CURRENT user
// $("#login-btn").on("click", function (event) {
//    event.preventDefault();
//    console.log("LOGIN button clicked");


//    var email = $("#email-input").val();
//    var password = $("#password-input").val();
//    var auth = firebase.auth();

//    var provider = new firebase.auth.GoogleAuthProvider();
//    firebase.auth().signInWithRedirect(provider);

  
// });

// firebase.auth().getRedirectResult().then(function(result) {
//   if (result.credential) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = result.credential.accessToken;
//     // ...
//   }
//   // The signed-in user info.
//   var user = result.user;
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });






// // var database = firebase.database();
// // var currentUser;

// // //login a CURRENT user
// // $("#login-btn").on("click", function (event) {
// //   event.preventDefault();
// //   console.log("LOGIN button clicked");


// //   var email = $("#email-input").val();
// //   var password = $("#password-input").val();
// //   var auth = firebase.auth();


// //   //firebase CURRENT user method
// //   firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {

// //       var errorCode = error.code;
// //       var errorMessage = error.message;
// //       var auth = firebase.auth();
// //       console.log(error.code);
// //       console.log(error.message);
// //       alert(error.code + " " + error.message);


// //   });

// // });

// // //signup a NEW user
// // $("#signup-btn").on("click", function (event) {
// //   event.preventDefault();
// //   console.log("SIGNUP button clicked");


// //   var email = $("#email-input").val();
// //   var password = $("#password-input").val();
// //   var auth = firebase.auth();

// //   //firebase NEW user method
// //   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
// //       // Handle Errors here.
// //       var errorCode = error.code;
// //       var errorMessage = error.message;

// //       console.log(error.code);
// //       console.log(error.message);
// //       alert(error.code + " " + error.message);
// //   });

// // });

// // //signout button
// // $("#logout-btn").on("click", function (event) {
// //   event.preventDefault();
// //   console.log("LOGOUT button was clicked");
// //   alert("You have logged out");

// //   firebase.auth().signOut().then(function () {
// //       console.log("Logged out!")
// //   }, function (error) {
// //       console.log(error.code);
// //       console.log(error.message);
// //   });

// // });



// // firebase.auth().onAuthStateChanged(function (user) {
// //   if (user) {
// //       currentUser = user;
// //       console.log(user.displayName + "user is currently signed in");
// //       //NOT SURE IF I NEED THESE
// //       var displayName = user.displayName;
// //       var email = user.email;
// //       var emailVerified = user.emailVerified;
// //       var photoURL = user.photoURL;
// //       var isAnonymous = user.isAnonymous;
// //       var uid = user.uid;
// //       var providerData = user.providerData;
// //       // ...
// //   } else {
// //       console.log("No users are signed in");
// //       // ...
// //   }
// // });

// // //updating profile info to firebase
// // $("#update-btn").on("click", function (event) {
// //   event.preventDefault();

// //   var firstName = $("#fn-input").val();
// //   var lastName = $("#ln-input").val();
// //   var branch = $("#branch-input").val();
// //   var rank = $("#rank-input").val();
// //   var zip = $("#zipcode-input").val();
// //   var hobbies = $("#hobbies-input").val();

// //   //create a temp object to pass to database
// //   var newProfile = {
// //       firstname: firstName,
// //       lastname: lastName,
// //       branch: branch,
// //       rank: rank,
// //       zipcode: zip,
// //       hobbies: hobbies,
// //       uid: currentUser.uid
// //   };

// //   database.ref("/userProfiles").push(newProfile);

// // });

// // database.ref("/userProfiles").on("child_added", function (childSnapshot, prevChildKey) {
// //   if (childSnapshot.val().uid === currentUser.uid) {
// //       console.log(childSnapshot.val());
// //   }


// //   // Store everything into a variable.
// //   var firstName = childSnapshot.val().firstname;
// //   var lastName = childSnapshot.val().lastname;
// //   var branch = childSnapshot.val().branch;
// //   var rank = childSnapshot.val().rank;
// //   var zip = childSnapshot.val().zipcode;
// //   var hobbies = childSnapshot.val().hobbies;

// // });


// // var name, email, photoUrl, uid, emailVerified;

// // if (user != null) {
// //   name = user.displayName;
// //   email = user.email;
// //   photoUrl = user.photoURL;
// //   emailVerified = user.emailVerified;
// //   uid = user.uid; 
// // }


// // });

// if (user != null) {
//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
//   uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
// }


