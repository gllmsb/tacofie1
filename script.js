// // Get the image and tooltip elements
// const sofieImage = document.querySelector(".resized-img");
// const tooltip = document.getElementById("tooltip");

// // Add click event listener to the image
// sofieImage.addEventListener("click", function() {
//     // Toggle visibility of the tooltip
//     tooltip.classList.toggle("show");
// });

// // Close the tooltip if clicked outside of it
// document.addEventListener("click", function(event) {
//     if (!tooltip.contains(event.target) && !sofieImage.contains(event.target)) {
//         tooltip.classList.remove("show");
//     }
// });

// Get the image, tooltip, and audio elements
// const sofieImage = document.querySelector(".resized-img");
// const tooltip = document.getElementById("tooltip");
// const sofieMusic = document.getElementById("sofie-music");

// // Add click event listener to the image
// sofieImage.addEventListener("click", function() {
//     // Toggle visibility of the tooltip
//     tooltip.classList.toggle("show");

//     // Play the music
//     sofieMusic.play();
// });

// // Close the tooltip if clicked outside of it
// document.addEventListener("click", function(event) {
//     if (!tooltip.contains(event.target) && !sofieImage.contains(event.target)) {
//         tooltip.classList.remove("show");
//     }
// });

const sofieImage = document.querySelector(".resized-img");
const tooltip1 = document.getElementById("tooltip1");
const tooltip2 = document.getElementById("tooltip2");
const sofieMusic = document.getElementById("sofie-music");

// Add click event listener to the image
sofieImage.addEventListener("click", function() {
    // Toggle visibility of the first tooltip
    tooltip1.classList.toggle("show");
    // Toggle visibility of the second tooltip
    tooltip2.classList.toggle("show");
    // Play the music
    sofieMusic.play();
});

// Close the tooltips if clicked outside of them
document.addEventListener("click", function(event) {
    if (!tooltip1.contains(event.target) && !sofieImage.contains(event.target)) {
        tooltip1.classList.remove("show");
    }
    if (!tooltip2.contains(event.target) && !sofieImage.contains(event.target)) {
        tooltip2.classList.remove("show");
    }
});

const footerH3 = document.querySelector(".footer-main h3");

// Get the dialog element
const dialog = document.getElementById("dialog");

// Add click event listener to the footer h3 element
footerH3.addEventListener("click", function() {
    // Show the dialog
    dialog.classList.add("show");
});

// Close the dialog if clicked outside of it
document.addEventListener("click", function(event) {
    if (!dialog.contains(event.target) && !footerH3.contains(event.target)) {
        dialog.classList.remove("show");
    }
});

