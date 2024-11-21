import express from "express";
import Contact from "../model/contact.model.js";

const router = express.Router();

// POST route to handle contact submissions
router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate the incoming request
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Create a new Contact document
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    // Send success response
    res.status(201).json({ message: "Contact data saved successfully." });
  } catch (error) {
    console.error("Error saving contact data:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

export default router;
