// script.js

// Add event listener to button in home section
document.querySelector('#home button').addEventListener('click', () => {
    alert('Learn more about me!');
});

// Add event listener to form submission in contact section
document.querySelector('#contact form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for getting in touch!');
});
