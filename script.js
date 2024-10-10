const filterButtons = document.querySelectorAll('.filter-button');
const videos = document.querySelectorAll('.video');
const menuButton = document.getElementById('menuButton');
const navMenu = document.getElementById('navMenu');

menuButton.addEventListener('click', () => {
    // Toggle the visibility of the nav menu
    if (navMenu.style.display === "none" || navMenu.style.display === "") {
        navMenu.style.display = "flex";
    } else {
        navMenu.style.display = "none";
    }
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        videos.forEach(video => {
            if (category === 'all' || video.getAttribute('data-category') === category) {
                video.style.display = 'block';
                video.classList.add('fade-in');
            } else {
                video.style.display = 'none';
            }
        });
        // Hide the nav menu after a button click
        navMenu.style.display = 'none';
    });
});

// Add fade-in effect for videos
videos.forEach(video => {
    video.classList.add('fade');
});
