const express = require("express");
const cors = require("cors");
const mongoose = require("./app/config/db.config");

const app = express();

var corsOptions = {
  origin: "**",
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Verifica la conexión a MongoDB antes de iniciar el servidor
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB successfully.");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// health check route
app.get("/health", (req, res) => {
  res.json({ message: "Health Check" });
});

require("./app/routes/book.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});