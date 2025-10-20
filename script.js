/**
 * Switch displayed content based on the button clicked.
 * @param {string} spotId - The ID of the content div to display.
 * @param {HTMLElement} btn - The button that was clicked.
 */
function showContent(spotId, btn) {
    // 1. Hide all content divs
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active-content');
    });

    // 2. Show the selected content div
    const selectedContent = document.getElementById(spotId);
    if (selectedContent) selectedContent.classList.add('active-content');

    // 3. Update button active state
    document.querySelectorAll('.spot-button').forEach(button => {
        button.classList.remove('active');
    });

    if (btn) btn.classList.add('active');
}
