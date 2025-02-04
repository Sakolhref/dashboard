const sidebar1 = document.querySelector('.sidebar1');
const sidebar2 = document.querySelector('.sidebar2');

// On mouse enter, show sidebar2
sidebar1.addEventListener('mouseenter', () => {
    sidebar2.style.width = '200px'; // Expand sidebar2
});

// On mouse leave, hide sidebar2
sidebar1.addEventListener('mouseleave', () => {
    sidebar2.style.width = '0'; // Collapse sidebar2
});
