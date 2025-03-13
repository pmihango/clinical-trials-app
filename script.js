// Login Function
function loginUser(event) {
    event.preventDefault(); // Prevent form from actually submitting
    window.location.href = "participants.html"; // Redirect to participants page
}

// Attach event listener when the page loads
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", loginUser);
});
// Function to filter participants table
function searchTable() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let table = document.getElementById("participantsTable");
    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        let cells = row.getElementsByTagName("td");
        let found = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].innerText.toLowerCase().includes(input)) {
                found = true;
                break;
            }
        }

        row.style.display = found ? "" : "none"; // Show or hide row
    }
}
