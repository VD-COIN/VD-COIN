document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');

    // Example animation: Change color on hover
    content.addEventListener('mouseover', function() {
        content.style.color = 'lightblue';
    });

    content.addEventListener('mouseout', function() {
        content.style.color = 'white';
    });
});