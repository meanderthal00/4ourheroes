// This is for the Parallax effect
$(document).ready(function(){
    // $('.parallax').parallax();
 
    // var userInput = //the actual interests of the user from the profile page. Used to search meetups
    // var userZip = //zipcode from profile page. used to search meetups
    //when user is created run this ajax request and store the latitude and longitude
var userLat=0;
var userLong=0;
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

  

  // ajax function call for landing page ... meet-ups
    $.ajax({
      url: "https://api.meetup.com/find/upcoming_events",
      method: 'GET',
      data:{
        // page: 5,
        // text:"jogging",
        // lat:userLat,
        // lon:userLong,
        key: "5a1b20747e54172335c4d412b296823",
        sign:"true"
      }
    }).done(function(response){
      console.log(response);
    });

  });