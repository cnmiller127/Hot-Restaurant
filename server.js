var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
  {
    customerName: "",
    customerEmail: "",
    phoneNumber: "",
    customerId: ""
  }
];

var waitlist = [
  {
    customerName: "",
    customerEmail: "",
    phoneNumber: "",
    customerId: ""
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
// change view.html to homepage
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
//change add.html to the reservation page
app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all reservations
app.get("/api/view", function (req, res) {
  return res.sendFile(path.join(__dirname, "view.html"));
});
//console.log(reservations);

//adding new res
app.post("/api/reservations", function(req, res) {
 
  var newReservation = req.body;

if (reservations.length <= 4 ) {
  reservations.push(newReservation)
} else {waitlist.push(newReservation)};

});

////must listen!!
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});