const express = require("express");
const myContract = require("./routes/myContract.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/mycontract", myContract);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
