
const price = 15;

Ticket.prototype.mName = function(ticket) {
  if (this.movieName === "Dune 2") {
    console.log(price + 5);
  } else {
    console.log(price);
  }
}

Ticket.prototype.mTime = function(ticket) {
  if (this.movieTime === "6") {
    console.log(price + 1.5);
  } else if (this.movieTime === "3") {
    console.log(price - 1.5);
  } else {
    
  }
}

Ticket.prototype.getPrice = function(ticket) {
  if (parseInt(this.userAge) >= 65) {
    console.log(price * .7); 
  }else if(parseInt(this.userAge) <= 10) {
    console.log(price * .5);
  }else {
    console.log(price);
  };
}

function Ticket(movieName, movieTime, userAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.userAge = userAge;
  // this.customerAge = this.customerAge;
}

// UI Logic ----

function displayTicketInfo(ticketToDisplay) {
  // const tickKeys = Object.keys(ticketToDisplay);
  let ticketInfo = $("p#output");
  let htmlForTicketInfo = ticketToDisplay.movieName + " @ " + ticketToDisplay.movieTime + "pm";
  // tickKeys.forEach(function(key) {
  //   // const ticket = ticketToDisplay(key);
  //   htmlForTicketInfo += ticketToDisplay.movieName + " " + ticketToDisplay.movieTime + " ";
  
  ticketInfo.html(htmlForTicketInfo);
}

$(document).ready(function() {
  $("form#movieOptions").submit(function(event) {
    event.preventDefault();
    const movieName = $("#movie").val();
    const movieTime = parseInt($("#movieTime").val());
    const userAge = $("input#age-input").val();
    let newTick = new Ticket(movieName, movieTime, userAge);
    displayTicketInfo(newTick);
    // $("#output").text(newTick);
  })
})
// function showMovie(movieName) {

// }

// function attachMovieListeners() {
//   $("ul#movies").on("click", "li", function () {
//     showMovie(this.movie);
//   })
// }