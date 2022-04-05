



function MovieList() {
  this.tickets = {}
}

MovieList.prototype.addTickets = function(ticket) {
  this.tickets[ticket.movieName] = ticket;
}

function Ticket(movieName, category, showTime) {
  this.movieName = movieName;
  this.category = category;
  this.showTime = showTime;
  // this.customerAge = this.customerAge;
}

// UI Logic ----
let movieList = new Ticket();

