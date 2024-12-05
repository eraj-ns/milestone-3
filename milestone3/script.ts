// Get references to the form and display area
let form = document.getElementById('resume-form') as HTMLFormElement;
let resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    let name = (document.getElementById('name') as HTMLInputElement).value
    let email = (document.getElementById('email') as HTMLInputElement).value
    let phone = (document.getElementById('phone') as HTMLInputElement).value
    let education = (document.getElementById('education') as HTMLInputElement).value
    let experience = (document.getElementById('experience') as HTMLInputElement).value
    let skills = (document.getElementById('skills') as HTMLInputElement).value

    // Generate the resume content dynamically
    let resumeHTML = `
    <h1><b>Resume</b></h1>
    <h2>Personal Information</h2>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>

    <h2>Education</h2>
    <p>${education}</p>

    <h2>Experience</h2>
    <p>${experience}</p>

    <h2>Skills</h2>
    <p>${skills}</p>
    `;

    // Display the generated resume
    if(ResumeDisplay){
        ResumeDisplay.innerHTML = resumeHTML;
    }else {
        console.error('The resume display element is missing.');
    }
});