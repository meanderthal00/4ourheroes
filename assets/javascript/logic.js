//when the 
$(document).ready(function () {
  // Parallax functionality
  $('.parallax').parallax();
  // signout function
  $("#logOutBtn").on("click", function (event) {
    firebase.auth().signOut().then(function () {
      console.log("User has signed out");
    }).catch(function (error) {
      // An error happened.
      console.log("signout error");
    });
  });

  //declaring token website to cature url
  //for retrieving the Meet Up access token
  var tokenWebsite = window.location.href;
  console.log("tokenWebsite:", tokenWebsite);


  // $.ajax({
  //   url: "https://maps.googleapis.com/maps/api/geocode/json",
  //   method: 'GET',
  //   data: {
  //     address: "32812",
  //     key: "AIzaSyDbO-ivrJFAH2KzMeRPuVOemHCxDqL3guQ"
  //   }
  // }).done(function (response) {

  //   console.log(response.results[0].geometry.location.lat);
  //   console.log(response.results[0].geometry.location.lng)
  //   userLat = response.results[0].geometry.location.lat;
  //   userLong = response.results[0].geometry.location.lng;

  // });

  //button for signing into Meet Up and getting access token
  $("#meetBtn").on("click", function () {
    console.log("button pressed");
    //using oauth consumer key, send user to meet up
    //so that we can get authorization to their account
    //will redirect them to the landing.html page
    window.location.replace("https://secure.meetup.com/oauth2/authorize?client_id=uslukvp5bbuco9nni5lgm900av&response_type=token&redirect_uri=https://meanderthal00.github.io/vetransConnect/landing.html");

  });

//variable for establishing the token key
//pulled from the tokenWebsite var
  var token = new URL(tokenWebsite).hash.split('&').filter(function (el) {
    if (el.match('access_token') !== null) return true;
  });
  console.log("token:", token);
  //spliting the access token from the property title
  var accessToken = token[0].split("=")[1];
  console.log("accessToken:", accessToken);



  //   // ajax function call for landing page ... meet-ups
  $.ajax({
    url: "https://api.meetup.com/find/upcoming_events",
    method: 'GET',
    data: {
      page: 5,
      access_token: accessToken,
      key: "5a1b20747e54172335c4d412b296823",
      sign: "true"
    }
  }).done(function (response) {
    console.log(response);

  });


  //ajax function for usajobs
  $("#addLocation").on("click", function () {
    console.log("submit pressed");
    var locale = $("#locationInput").val().trim();
    $("#locationInput").empty();
    $.ajax({
        url: `https://data.usajobs.gov/api/search?LocationName:${locale}&DatePosted:${30}`,
        method: 'GET',
        headers: {
          'Authorization-Key': "hIa5Qx84CEfa6bI3BB2IVTBA30EYEYetV78R14xSuu4="
        }
      }).done(function (response) {
        console.log(response);
        response.SearchResult.SearchResultItems.forEach(renderJobs);
      }),
      function (error, response, body) {
        var data = JSON.parse(body);
      };
  });



function renderJobs(element, index) {
  console.log("success in rendering jobs function call");
  var c = $("<div>");
  c.addClass("newJob");
  var title = element.MatchedObjectDescriptor.PositionTitle;
  console.log(title);
  var b = $(`<a>${title}</a>`);
  c.append(b);
  var link = element.MatchedObjectDescriptor.PositionURI;
  console.log(link);
  b.attr("href", link);
  b.attr("target", "_blank");
  var minPay = element.MatchedObjectDescriptor.PositionRemuneration[0].MinimumRange;
  console.log(minPay);
  c.append(`<p>Minimum Pay: ${minPay}</p>`);
  $("#jobText").append(c);

}
});