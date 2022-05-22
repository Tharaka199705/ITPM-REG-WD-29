const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); 

const locationRoute = require("./routes/location-route"); 
const salaryRoute = require("./routes/salary-route"); 
const workingRoute = require("./routes/working-route"); 
const channelingRoute = require("./routes/channeling-route"); 

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8070;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(
  MONGODB_URI,
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  },
  (error) => {
    if (error) {
      console.log("DataBase ERROR: ", error.message);
    }
  }
);

mongoose.connection.once("open", () => {
  console.log("Database Synced");
});
  
app.use("/api/location", locationRoute); 
app.use("/api/salary", salaryRoute); 
app.use("/api/working", workingRoute); 
app.use("/api/channeling", channelingRoute); 

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
