

$(document).ready(function(){
// Parallax functionality
$('.parallax').parallax();
  // signout function
  $("#logOutBtn").on("click", function (event) {
    firebase.auth().signOut().then(function () {
        console.log("User has signed out");
    }).catch(function (error) {
        // An error happened.
    });
  });
  
    // var userInput = //the actual interests of the user from the profile page. Used to search meetups
    // var userZip = //zipcode from profile page. used to search meetups
    //when user is created run this ajax request and store the latitude and longitude
    // var userLat=0;
    // var userLong=0;
    // var tokenWebsite="";
    // var token = "";
    // tokenWebsite = window.location.href;
    // console.log("tokenWebsite:", tokenWebsite);

    
    //     $.ajax({
    //       url: "https://maps.googleapis.com/maps/api/geocode/json",
    //       method: 'GET',
    //       data:{
    //         address:"32812",
    //         key:"AIzaSyDbO-ivrJFAH2KzMeRPuVOemHCxDqL3guQ"
    //       }
    //     }).done(function(response){
        
    //       console.log(response.results[0].geometry.location.lat);
    //       console.log(response.results[0].geometry.location.lng)
    //       userLat=response.results[0].geometry.location.lat;
    //       userLong=response.results[0].geometry.location.lng;
          
    //     });
    
    //     $("#meetBtn").on("click", function(){
    //       console.log("button pressed");
    //       window.location.replace("https://secure.meetup.com/oauth2/authorize?client_id=uslukvp5bbuco9nni5lgm900av&response_type=token&redirect_uri=https://meanderthal00.github.io/vetransConnect/landing.html");
          
    //     });
    

    //       var token = new URL(tokenWebsite).hash.split('&').filter(function(el) { if(el.match('access_token') !== null) return true; });
    //       console.log("token:", token);
    //       var accessToken = token[0].split("=")[1];
    //       console.log("accessToken:", accessToken);
          
     
    
    //   // ajax function call for landing page ... meet-ups
    //     $.ajax({
    //       url: "https://api.meetup.com/find/upcoming_events",
    //       method: 'GET',
    //       data:{
    //         // page: 5,
    //         // text:"jogging",
    //         // lat:userLat,
    //         // lon:userLong,
    //         access_token:accessToken,
    //         key: "5a1b20747e54172335c4d412b296823",
    //         sign:"true"
    //       }
    //     }).done(function(response){
    //       console.log(response);
    //     });
      

        //ajax function for usajobs
    

    //usajobs requires the use of a function 'require' but this is not in the usual jQuery library
    //I found it in something called RequireJS for loading files and modules
    //Am I on the right track? Do I need to add that as a link to my html?
//     
      $.ajax({
      url:"https://data.usajobs.gov/api/search?JobCategoryCode=2210",
      method: 'GET',
      headers:{
        'Authorization-Key':"hIa5Qx84CEfa6bI3BB2IVTBA30EYEYetV78R14xSuu4="

        //parameters to search:
        // Keyword:
        //LocationName:
        //DatePosted:30
      }
  }).done(function(response){
      console.log(response);
      console.log(response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionTitle);
      console.log(response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionLocation[0].LocationName);
      console.log(response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionFormattedDescription[0].Content);
      console.log(response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionURI);
      console.log(response.SearchResult.SearchResultItems[0].MatchedObjectDescriptor.PositionRemuneration[0].MinimumRange);
  }), function(error, response, body) {      
    var data = JSON.parse(body);
  };
  
});






  
  

