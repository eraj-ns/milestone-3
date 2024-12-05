// Get references to the form and display area
var Form = document.getElementById('resume-form');
var ResumeDisplay = document.getElementById('resume-display');
// Handle form submission
Form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h1><b>Resume</b></h1>\n    <h2>Personal Information</h2>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n\n    <h2>Education</h2>\n    <p>").concat(education, "</p>\n\n    <h2>Experience</h2>\n    <p>").concat(experience, "</p>\n\n    <h2>Skills</h2>\n    <p>").concat(skills, "</p>\n    ");
    // Display the generated resume
    if (ResumeDisplay) {
        ResumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
