// main.js - Project 3 JavaScript

// Replace with your email
const instructorEmail = "london@example.com";

document.addEventListener("DOMContentLoaded", function() {
  const qBtn = document.getElementById("questions-btn");
  if(qBtn){
    qBtn.addEventListener("click", function() {
      alert("If you have questions, contact me at:\n" + instructorEmail);
    });
  }
});
