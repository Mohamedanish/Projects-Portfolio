// Selecting profile overlay, profile modal, and the navbar profile button
var profileoverlay = document.querySelector(".profile-overlay"); // The background overlay for the profile modal
var profile = document.querySelector(".profile"); // The actual profile popup box
var navprofile = document.getElementById("prof"); // The "Profile" button in the navbar

// Adding a click event listener to the "Profile" navbar button
navprofile.addEventListener("click", function () {
    // When the "Profile" button is clicked, the profile overlay and the profile modal become visible
    profileoverlay.classList.add("active"); // Adds the "active" class to display the profile overlay with smooth transitions
    profile.classList.add("active"); // Adds the "active" class to display the profile modal with smooth transitions
});

// Selecting the close button in the profile modal
var profileclose = document.getElementById("profileclose"); // The "close" button inside the profile modal

// Adding a click event listener to the close button
profileclose.addEventListener("click", function () {
    // When the close button is clicked, the profile overlay and modal are hidden
    profileoverlay.classList.remove("active"); // Removes the "active" class to hide the profile overlay
    profile.classList.remove("active"); // Removes the "active" class to hide the profile modal
});

// Selecting resume overlay, resume modal, and the navbar resume button
var resumeoverlay = document.querySelector(".resume-overlay"); // The background overlay for the resume modal
var resume = document.querySelector(".resume"); // The actual resume popup box
var navresume = document.getElementById("res"); // The "Resume" button in the navbar

// Adding a click event listener to the "Resume" navbar button
navresume.addEventListener("click", function () {
    // When the "Resume" button is clicked, the resume overlay and the resume modal become visible
    resumeoverlay.classList.add("active"); // Adds the "active" class to display the resume overlay with smooth transitions
    resume.classList.add("active"); // Adds the "active" class to display the resume modal with smooth transitions
});

// Selecting the close button in the resume modal
var resumeclose = document.getElementById("resumeclose"); // The "close" button inside the resume modal

// Adding a click event listener to the close button
resumeclose.addEventListener("click", function () {
    // When the close button is clicked, the resume overlay and modal are hidden
    resumeoverlay.classList.remove("active"); // Removes the "active" class to hide the resume overlay
    resume.classList.remove("active"); // Removes the "active" class to hide the resume modal
});

// Selecting contact overlay, contact modal, and the navbar contact button
var contactoverlay = document.querySelector(".contact-overlay"); // The background overlay for the contact modal
var contact = document.querySelector(".contact"); // The actual contact popup box
var navcontact = document.getElementById("cont"); // The "Contact info" button in the navbar

// Adding a click event listener to the "Contact info" navbar button
navcontact.addEventListener("click", function () {
    // When the "Contact info" button is clicked, the contact overlay and the contact modal become visible
    contactoverlay.classList.add("active"); // Adds the "active" class to display the contact overlay with smooth transitions
    contact.classList.add("active"); // Adds the "active" class to display the contact modal with smooth transitions
});

// Selecting the close button in the contact modal
var contactclose = document.getElementById("contactclose"); // The "close" button inside the contact modal

// Adding a click event listener to the close button
contactclose.addEventListener("click", function () {
    // When the close button is clicked, the contact overlay and modal are hidden
    contactoverlay.classList.remove("active"); // Removes the "active" class to hide the contact overlay
    contact.classList.remove("active"); // Removes the "active" class to hide the contact modal
});
