// Redirect to the homepage when the form is submitted
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting normally
    window.location.href = '../index.html';  // Redirect to the home page (adjust URL as needed)
  });