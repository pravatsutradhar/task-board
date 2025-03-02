

const completedBtns = document.getElementsByClassName("complete-btn");

for (let i = 0; i < completedBtns.length; i++) {
    const button = completedBtns[i];

    button.addEventListener("click", function (event) {

        event.preventDefault();
        // Show alert message
        alert("Board Updated Successfully");

        // Count the remaining active buttons
        const activeButtons = document.querySelectorAll(".complete-btn:not([disabled])");

        // If it's the last active button, show an extra alert
        if (activeButtons.length === 1) {
            alert("Congrats!!! You have completed all current tasks");
        }


        // Disable the button after clicking
        button.setAttribute("disabled", "");
        button.classList.add("opacity-50", "cursor-not-allowed");

        // Reduce count logic
        const reduceCount = document.getElementById("reduce-count");
        if (reduceCount) {
            let count = parseInt(reduceCount.innerText, 10) || 0;
            if (count > 0) {
                reduceCount.innerText = count - 1;
                console.log("Reduced Count:", reduceCount.innerText);
            }
        } else {
            console.warn("Element with ID 'reduce-count' not found.");
        }

        // Increase count logic
        const increaseCount = document.getElementById("increase-count");
        if (increaseCount) {
            let count = parseInt(increaseCount.innerText, 10) || 0;
            increaseCount.innerText = count + 1;
            console.log("Increased Count:", increaseCount.innerText);
        } else {
            console.warn("Element with ID 'increase-count' not found.");
        }

        // Find the closest history-title related to this button
        const parentElement = button.closest(".task-item"); // Adjust the class if needed
        const historyTitleElement = parentElement ? parentElement.querySelector(".history-title") : null;
        const historyText = historyTitleElement ? historyTitleElement.innerText : "No title found";

        // Add history entry with the specific title
        addHistoryEntry(historyText);

    });
}

function addHistoryEntry(historyText) {
    const historyContainer = document.getElementById("history-add");

    if (historyContainer) {
        // Get the current time
        const currentTime = new Date().toLocaleTimeString();

        // Create a new paragraph with the task completion message
        const historyEntry = document.createElement("p");
        historyEntry.className = "text-black-500 bg-[#F4F7FF] mb-4 p-2 rounded"; // Apply any classes you want

        // Set the text for the history entry
        historyEntry.innerText = `You have completed the task "${historyText}" at ${currentTime}`;

        // Append the new history entry to the container
        historyContainer.appendChild(historyEntry);
    } else {
        console.warn("Element with ID 'history-add' not found.");
    }
}


// Function to clear history
function clearHistory() {
    const historyContainer = document.getElementById("history-add");
    if (historyContainer) {
        historyContainer.innerHTML = ""; // Clears all history entries
        console.log("History cleared.");
    } else {
        console.warn("Element with ID 'history-add' not found.");
    }
}

// Add event listener to the "Clear History" button
const clearHistoryBtn = document.getElementById("clear-history");
if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", clearHistory);
} else {
    console.warn("Clear History button not found.");
}

// Function to update the date
function updateDate() {
    const dateElement = document.getElementById("update-date");

    if (dateElement) {
        // Get current date
        const today = new Date();

        // Format the date (e.g., "Saturday, March 2, 2025")
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        const formattedDate = today.toLocaleDateString("en-US", options);

        // Update the innerHTML of #update-date
        dateElement.innerHTML = formattedDate;
    } else {
        console.warn("Element with ID 'update-date' not found.");
    }
}

// Run the function when the page loads
window.onload = updateDate;


// Array of background colors to cycle through
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F39C12", "#8E44AD", "#2ECC71", "#E74C3C"];
let colorIndex = 0; // Track the current color index

// Function to change background color on click
function changeBackgroundColor() {
    // Get the body element
    document.body.style.backgroundColor = colors[colorIndex];

    // Move to the next color (loop back to start if at the end)
    colorIndex = (colorIndex + 1) % colors.length;
}

// Add event listener to the theme button
document.getElementById("change-bg").addEventListener("click", changeBackgroundColor);

//goto the blog.html
document.getElementById("board-btn").addEventListener("click", function () {
    console.log("omar")
    window.location.href = "./blog.html";
});
//
// document.getElementById("back-desk").addEventListener("click", function () {
//     console.log("omar");  // This will print "omar" in the console when clicked
//     window.location.href = "./index.html"; // Navigate to index.html
// });

document.addEventListener("click", function () {
    const backDeskButton = document.getElementById("back-desk");

    if (backDeskButton) {
        backDeskButton.addEventListener("click", function () {
            alert("Back to Desk button clicked!");
        });
    } else {
        console.error("Element with ID 'back-desk' not found!");
    }
});





