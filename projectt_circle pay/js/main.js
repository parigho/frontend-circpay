function filterProperties() {
    const searchBar = document.getElementById("searchBar");
    const filterText = searchBar.value.toLowerCase();
    const propertyCards = document.querySelectorAll(".property-card");

    propertyCards.forEach((card) => {
        const propertyName = card.querySelector("h2").textContent.toLowerCase();
        if (propertyName.includes(filterText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function showModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function showStep(step) {
    closeModal();
    const multiStepModal = document.getElementById("multiStepModal");
    multiStepModal.style.display = "block";

    // Hide all steps
    document.querySelectorAll(".step").forEach(stepDiv => stepDiv.style.display = "none");

    // Show the selected step
    document.getElementById(`step${step}`).style.display = "block";
}

function closeMultiStepModal() {
    const multiStepModal = document.getElementById("multiStepModal");
    multiStepModal.style.display = "none";
}

function showFinalDetails() {
    // Hide all steps
    document.querySelectorAll(".step").forEach(stepDiv => stepDiv.style.display = "none");

    // Show final details
    document.getElementById("finalDetails").style.display = "block";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    const multiStepModal = document.getElementById("multiStepModal");

    if (event.target === modal) {
        closeModal();
    } else if (event.target === multiStepModal) {
        closeMultiStepModal();
    }
};


function goToTransactionReview() {
    window.location.href = "transaction-review.html";
}