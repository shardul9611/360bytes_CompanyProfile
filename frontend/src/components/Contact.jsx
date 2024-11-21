import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";

function Contact() {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Form submission handler
  const onSubmit = async (e) => {
    e.preventDefault();

    const contactData = { name, email, subject, message };

    try {
      const response = await axios.post("https://three60bytes-companyprofile.onrender.com/api/contact", contactData);

      if (response.data) {
        alert("Message sent successfully!");
        setName(""); // Clear the input fields
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error submitting form:", error.response?.data?.message || error.message);
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Get in <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-lg mt-4 md:text-xl">
            We'd love to hear from you! Reach out for any queries or collaborations.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <form className="space-y-4" onSubmit={onSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-bold text-gray-700">Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-gray-700">Your Message</label>
                <textarea
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Office</h2>
            <p className="text-gray-600">
              Feel free to drop by or contact us using the information below.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-3">📍</span>
                <p className="text-gray-600">
                  1st floor office E, 278 8A, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar, Punjab
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-3">📞</span>
                <p className="text-gray-600">+91 9988776655</p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-3">✉️</span>
                <p className="text-gray-600">info@digitalsauce.com</p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 text-xl mr-3">🕒</span>
                <p className="text-gray-600">Mon - Fri: 9 AM - 5 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
