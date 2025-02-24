// Select elements
const openModalBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".close-modal");

// Open modal when button is clicked
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close modal when close button is clicked
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside of modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
