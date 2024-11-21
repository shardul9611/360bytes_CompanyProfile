import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import router from "./route/contact.route.js"; // Import contact route
import path from "path";
//shardul
dotenv.config();

const app = express();
const _dirname = path.resolve();
// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/api/contact", router); // Use the contact route

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
