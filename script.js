// Select link element
var link = document.getElementById('linkCuestionario');

// Create url array
var urls = [
    'https://www.google.com/',
    'https://www.facebook.com/'
];

// Get random url from array
var randomUrl = urls[Math.floor(Math.random() * urls.length)];

// Set link href to random url
link.href = randomUrl;

