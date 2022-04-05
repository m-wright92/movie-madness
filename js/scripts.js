

Ticket.prototype.finalPrice = function(ticket) {
  const price = 15;
  if (this.movieName === "Dune 2") {
    if(this.movieTime < "6" && this.userAge >= 65) {
      console.log(price + 2.5);
    }else {
      console.log(price + 5)
    }     
  }else if(this.movieTime < "6" && this.userAge >= 65) {
    console.log(price - 2.5);
  }else if(this.movieTime >= "6" && this.userAge >= 65) {
    console.log(price);
  }else if(this.movieTime < "6") {
    console.log(price - 1.5);
  }else {
    console.log(price + 1.5)
  }
}


function Ticket(movieName, movieTime, userAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.userAge = userAge;
}

// UI Logic ----

function displayTicketInfo(ticketToDisplay) {
  let ticketInfo = $("p#output");
  let htmlForTicketInfo = ticketToDisplay.movieName + " @ " + ticketToDisplay.movieTime + "pm";
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
    
  })
})
// function showMovie(movieName) {

// }

// function attachMovieListeners() {
//   $("ul#movies").on("click", "li", function () {
//     showMovie(this.movie);
//   })
// }