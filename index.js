const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const categoryRouter = require("./routes/categoryRoutes");
const programRouter = require("./routes/programRoutes")

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});
app.use("/api/category", categoryRouter);
app.use("/api/program", programRouter);

mongoose
  .connect(
    // "mongodb+srv://thesamnolan1998:Sobhan33931376@clustersam.sitbfll.mongodb.net/timesync"
    "mongodb+srv://thesamnolan1998:Sobhan33931376@clustersam.stdjopl.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSam"
  )
  .then(() => {
    console.log("connected to DB");
    app.listen(port, () => {
      console.log("connected to port 3000");
    });
  })
  .catch(() => {
    console.log("Failed to connect to database");
  });
