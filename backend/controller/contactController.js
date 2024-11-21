import Contact from "../model/Contact.js";

export const handleContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Input validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Save contact data to MongoDB
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
