// Function to toggle the dropdown menu
function toggleDropdown() {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
}

// Optional: Close dropdown if clicked outside (for better UX)
document.addEventListener("click", function(event) {
    const dropdownContent = document.querySelector(".dropdown-content");
    const dropdownButton = document.querySelector(".dropdown-btn");

    if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
        dropdownContent.classList.remove("show");
    }
});