// Function to toggle the visibility of the text
function toggleText() {
    var npcText = document.getElementById('npcText');
    // Toggle the display property between 'none' (hidden) and 'block' (visible)
    if (npcText.style.display === 'none') {
        npcText.style.display = 'block'; // Show the text
    } else {
        npcText.style.display = 'none';  // Hide the text again
    }
}
